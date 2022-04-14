<style scoped>
    @import url("../../styles/carrinhoStyle/clientLogin_carrinho.scss");
</style>

<template>

    <div class="box_clientLoginCarrinho">
        
        <div class="box_formulario_login">

            <span class="labelNameClient">Nome</span>

            <input type="text" @input="nameClient = $event.target.value" 
                name="nameClient"
                class="subheading inputNameClient animate__animated animate__flash"
                v-on:keyup.enter="loginInput()"
                placeholder="Insira o nome de usuário" />

            <span class="labelNameClient">Senha</span>

            <input type="password" @input="passClient = $event.target.value" 
                name="passClient"
                class="subheading inputNameClient animate__animated animate__flash"
                v-on:keyup.enter="loginInput()"
                placeholder="Insira a senha do usuário" />

            <v-btn
            @click="loginInput()"
            block
            outlined
            plain
            class="black--text">
                Entrar
            </v-btn>

            <span class="cadastroNameClient" @click="chamarCadastro()">Novo Cadastro</span>

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
            msgErrorLogin: '',
        }
    },
    
    methods: {
        loginInput() {

            console.log(this.nameClient)
            console.log(this.passClient)

            // -- verificação de critérios mínimos de inserção.
            if (this.nameClient == '' ||
             this.passClient == '' ||
             this.nameClient.length < 5 ||
             this.passClient.length < 5) {
                
                this.msgErrorLogin = 'Usuário ou senha incorretos.'
                return

            } else {

                // varrer db.
                // trazer user name e pass.
                // verif. existência. SE NÃO existir ENTÃO retornar msg error.

                var params = {

                    token:'testToken', // usar env var vercel
                    func:'login',
                    data:{'nome':this.nameClient,'pwd':this.passClient}
                }

                const self = this

                axios.post(self.$store.state.pathAxiosPostLogin,params).then(function (res) {

                    if (res.data.status == 'authok') {

                        //console.log(res.data.status)

                        // -- Após busca db rcv dados cliente.
                        self.$store.state.nomeUsuario = res.data.result.dataUser.nome
                        self.$store.state.enderecoUsuario = res.data.result.dataUser.adr
                        self.$store.state.foneUsuario = res.data.result.dataUser.fone

                        // -- Sincronização com o carrinho de compras.
                        // ---- incrementar stepper
                        self.$store.state.numStepperCarrinho = 3
                        // ---- marcar como concluído a etapa de dados do usuário
                        self.$store.state.flagStepCarrinho2 = true
                        // ---- acionar flag de usuário online
                        self.$store.state.flagUserAtivo = true

                        // -- montar dados do usuário.
                        var dataUser = {

                            nome: res.data.result.dataUser.nome,
                            adr: res.data.result.dataUser.adr,
                            fone: res.data.result.dataUser.fone,
                            pass: '',
                        }

                        // -- CHAMAR DB E TRAZER LISTA DE PEDIDOS GERAL DO USER.

                        // -- STORAGE
                        var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

                        var update_trafegoLocal = {

                            storedUserLogado: self.$store.state.flagUserAtivo, // bool <------ update
                            storedDateUser: dataUser, // {} <--------------------------------- update
                            storedPddListUser: res.data.result.liPdds, // [] <---------------- update
                            storedCarrinho: trafegoLocal.storedCarrinho, // [] <--------- hold
                            storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
                            storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
                        }

                        localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

                        self.$router.push('/fechamentoC')
                        
                        return

                    } else  {

                        self.msgErrorLogin = 'Usuário ou senha incorretos.'
                        return
                    }
                })
            }
        },
        chamarCadastro() {

            this.$store.state.flagShowLogin_carrinho = false
            this.$store.state.flagShowCadastro_carrinho = true
        }
    }
}
</script>