<style scoped>
    @import url("../../styles/carrinhoStyle/clientCadastro_carrinho.scss");
</style>

<template>

    <div class="box_clientCadastroCarrinho">
        
        <div class="box_formulario_cadastro">

            <!-- NOME DE USUÁRIO -->
            <span class="labelNameClient">Nome</span>
            <input type="text" @input="nameClient = $event.target.value" 
                name="nameClient"
                class="subheading inputNameClient animate__animated animate__flash"
                v-on:keyup.enter="cadastroInput()"
                placeholder="Insira o nome do novo usuário" />

            <!-- ENDEREÇO DO USUÁRIO -->
            <span class="labelNameClient">Endereço completo</span>
            <input type="text" @input="enderecoClient = $event.target.value" 
                name="enderecoClient"
                class="subheading inputNameClient animate__animated animate__flash"
                v-on:keyup.enter="cadastroInput()"
                placeholder="Morada completa: ..rua, porta, andar, lado.." />

            <!-- TELEMÓVEL DO USUÁRIO -->
            <span class="labelNameClient">Telemóvel</span>
            <input type="number" @input="foneClient = $event.target.value" 
                name="foneClient"
                class="subheading inputNameClient animate__animated animate__flash"
                v-on:keyup.enter="cadastroInput()"
                placeholder="922 922 922" />

            <!-- PASS -->
            <span class="labelNameClient">Senha</span>
            <input type="password" @input="passClient = $event.target.value" 
                name="passClient"
                class="subheading inputNameClient animate__animated animate__flash"
                v-on:keyup.enter="cadastroInput()"
                placeholder="Mínimo 5 caracteres" />

            <v-btn
            v-if="!flagBuscandoCadastro"
            @click="cadastroInput()"
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

            flagBuscandoCadastro:false,
        }
    },
    
    methods: {
        cadastroInput() {

            this.flagBuscandoCadastro = true // desabilitar btn "entrar"

            /*console.log(this.nameClient)
            console.log(this.enderecoClient)
            console.log(this.foneClient)
            console.log(this.passClient)*/

            // -- verificação de critérios mínimos de inserção.
            if (this.nameClient == '' ||
             this.passClient == '' ||
             this.nameClient.length < 2 ||
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

                    console.log(res.data.result)

                    if (res.data.result == 'cadastroauth') {

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

                            storedOverLay: trafegoLocal.storedOverLay, // bool <--------- hold
                            storedUserLogado: self.$store.state.flagUserAtivo, // bool <------ update
                            storedDateUser: dataUser, // {} <--------------------------------- update
                            storedPddListUser: trafegoLocal.storedPddListUser, // [] <--- hold
                            storedCarrinho: trafegoLocal.storedCarrinho, // [] <--------- hold
                            storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
                            storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
                        }

                        localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

                        self.$router.push('/fechamentoC')
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

            this.$store.state.flagShowLogin_carrinho = true
            this.$store.state.flagShowCadastro_carrinho = false
        },
    }
}
</script>