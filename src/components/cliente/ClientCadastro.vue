<style scoped>
    @import url("../../styles/clienteStyle/clientCadastro.scss");
</style>

<template>

    <div class="box_clientCadastro">

        <img
        class="img_cadastro animate__animated animate__flash"    
        :src="require('../../assets/imgs/lg.jpg')"
        />
        
        <div class="box_formulario_cadastro">

            <!-- NOME DE USUÁRIO -->
            <span class="labelNameClient">Nome</span>
            <input type="text" @input="nameClient = $event.target.value" 
                name="nameClient"
                class="subheading inputNameClient animate__animated animate__flash"
                v-on:keyup.enter="chamarClientPage()"
                placeholder="Insira o nome do novo usuário" />

            <!-- ENDEREÇO DO USUÁRIO -->
            <span class="labelNameClient">Endereço completo</span>
            <input type="text" @input="enderecoClient = $event.target.value" 
                name="enderecoClient"
                class="subheading inputNameClient animate__animated animate__flash"
                v-on:keyup.enter="chamarClientPage()"
                placeholder="Insira o endereço completo: .. porta, andar.." />

            <!-- TELEMÓVEL DO USUÁRIO -->
            <span class="labelNameClient">Telemóvel</span>
            <input type="number" @input="foneClient = $event.target.value" 
                name="foneClient"
                class="subheading inputNameClient animate__animated animate__flash"
                v-on:keyup.enter="chamarClientPage()"
                placeholder="922 922 922" />

            <!-- PASS -->
            <span class="labelNameClient">Senha</span>
            <input type="password" @input="passClient = $event.target.value" 
                name="passClient"
                class="subheading inputNameClient animate__animated animate__flash"
                v-on:keyup.enter="chamarClientPage()"
                placeholder="Insira a senha do novo usuário" />

            <v-btn
            @click="chamarClientPage()"
            :style="{'margin-top':'10px'}"
            block
            outlined
            plain
            class="black--text">
                Entrar
            </v-btn>

            <v-btn
            @click="chamarClientLogin()"
            :style="{'margin-top':'10px'}"
            block
            outlined
            plain
            class="blue--text">
                Voltar
            </v-btn>

            <span :style="{'margin-top':'10px','color':'red','font-size':'0.8rem'}">
                {{ msgErrorLogin }}
            </span>

        </div>
        
    </div>

</template>

<script>
import axios from 'axios'

export default {

    data() {
        return {
            nameClient: '',
            passClient: '',
            enderecoClient: '',
            foneClient: '',

            msgErrorLogin: '',
        }
    },

    methods: {
        nameInput(nameClient) { // excluível

            console.log(nameClient)
        },
        chamarClientPage() { // passar o formulario, verificando validade dos dados inseridos.

            // -- verificação de critérios mínimos de inserção.
            if (this.nameClient == '' ||
             this.passClient == '' ||
             this.nameClient.length < 5 ||
             this.passClient.length < 5) {
                
                this.msgErrorLogin = 'Usuário ou senha inválidos.'
                return
            }

            // -- verificação de critérios mínimos de inserção.
            if (this.enderecoClient.length < 10) {
                
                this.msgErrorLogin = 'Endereço inválido.'
                return

            }

            // -- verificação de critérios mínimos de inserção.
            if (this.foneClient.length != 9) {
                
                this.msgErrorLogin = 'Número de telemóvel inválido.'
                return

            } else {

                // VARRER DB EM BUSCA DE CLIENTE JÁ PROPRIETÁRIO DESSE LOGIN.
                // (ou fazer busca antecipada e deixar save no store)
                var params = {

                    token:'testToken', // usar env var vercel
                    func:'cadastro',
                    data:{
                        'nome':this.nameClient,
                        'adr':this.enderecoClient,
                        'fone':this.foneClient,
                        'pwd':this.passClient
                    }
                }

                const self = this

                axios.post(self.$store.state.pathAxiosPostCadastro,params).then(function (res) {

                    if (res.data.status == 'cadastroauth') {

                        // -- Após confirm novo cadastro inserido.
                        self.$store.state.nomeUsuario = self.nameClient
                        self.$store.state.enderecoUsuario = self.enderecoClient
                        self.$store.state.foneUsuario = self.foneClient

                        // -- Sincronização com o carrinho de compras.
                        // ---- incrementar stepper
                        self.$store.state.numStepperCarrinho = 3
                        // ---- marcar como concluído a etapa de dados do usuário
                        self.$store.state.flagStepCarrinho2 = true
                        // ---- acionar flag de usuário online
                        self.$store.state.flagUserAtivo = true

                        // -- montar dados do usuário.
                        var dataUser = {

                            nome: self.nameClient,
                            adr: self.enderecoClient,
                            fone: self.foneClient,
                            pass: '',
                        }

                        // -- STORAGE
                        var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

                        var update_trafegoLocal = {

                            storedUserLogado: self.$store.state.flagUserAtivo, // bool <------ update
                            storedDateUser: dataUser, // {} <--------------------------------- update
                            storedPddListUser: trafegoLocal.storedPddListUser, // [] <--- hold
                            storedCarrinho: trafegoLocal.storedCarrinho, // [] <--------- hold
                            storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
                            storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
                        }

                        localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))
                        
                        // -- tráfego entre páginas.
                        // ---- habiltar clientPage
                        self.$store.state.flagShowLogin = false
                        self.$store.state.flagShowCadastro = false
                        self.$store.state.flagShowClientPage = true
                        
                        return

                    } else {
                        // user name already used
                        self.msgErrorLogin = 'Este nome de usuário já está a ser utilizado. Escolha outro nome.'
                        return
                    }
                })
            }
        },
        chamarClientLogin() { // voltar ao início login

            this.$store.state.flagShowLogin = true
            this.$store.state.flagShowCadastro = false
            this.$store.state.flagShowClientPage = false
        },
    },

    created () {
        
        window.scrollTo(0,0)
    }
}
</script>