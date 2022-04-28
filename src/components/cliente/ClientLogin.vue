<style scoped>
    @import url("../../styles/clienteStyle/clientLogin.scss");
</style>

<template>

    <div class="box_clientLogin">

        <div 
        class="img_login_div"
        :style="{}"
        v-for="(item,i) in items"
        :key="i"
        :visibleSlide="visibleSlide"
        v-show="visibleSlide == i"
        >
            <v-img 
            :width="dim_Width_Height.width"
            :height="dim_Width_Height.height"
            @click="next()"
            class="img_login animate__animated animate__flash"    
            :src="item.src"
            />

        </div>
        
        <div class="box_formulario_login">

            <span class="labelNameClient">Nome</span>

            <input type="text" @input="nameClient = $event.target.value" 
                name="nameClient"
                class="subheading inputNameClient animate__animated animate__flash"
                v-on:keyup.enter="chamarClientPage()"
                placeholder="Insira o nome de usuário" />

            <span class="labelNameClient">Senha</span>

            <input type="password" @input="passClient = $event.target.value" 
                name="passClient"
                class="subheading inputNameClient animate__animated animate__flash"
                v-on:keyup.enter="chamarClientPage()"
                placeholder="Insira a senha do usuário" />

            <v-btn
            @click="chamarClientPage()"
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

    props: ['dim_Width_Height'],
    
    data() {
        return {
            nameClient: '',
            passClient: '',
            msgErrorLogin: '',

            // variáveis do carousel.
            timer: null,
            polling: null,
            lista_carousel: null,
            //
            pararCarousel: false, // parar carousel com scroll.
            visibleSlide: 0, // posição da lista de imagens carousel.
            item_escolhido: 0, // item da lista carousel ao chamar a aux page.
            aux_index: 0,

            // lista carousel login page
            items: [
                {src:require('../../assets/imgs/balcaoG2.png'),txt:'Frase qualquer para a imagem de divulgação'},
                {src:require('../../assets/imgs/kit1.png'),txt:'Frase outra para a propaganda de um produto'}
                ],
        }
    },

    methods: {
        chamarClientPage() { // passar o formulario, verificando validade dos dados inseridos.

            // -- verificação de critérios mínimos de inserção.
            if (this.nameClient == '' ||
             this.passClient == '' ||
             this.nameClient.length < 5 ||
             this.passClient.length < 5) {
                
                this.msgErrorLogin = 'Usuário ou senha incorretos.'
                return

            } else {
                
                // BUSCAR DB (ou fazer busca antecipada e deixar save no store) (depois)
                var params = {

                    token:'testToken', // usar env var vercel
                    func:'login',
                    data:{'nome':this.nameClient,'pwd':this.passClient}
                }

                const self = this

                axios.post(self.$store.state.pathAxiosPostLogin,params).then(function (res) {

                    //console.log(res)

                    if (res.data.result != 'nenhum user encontrado') {

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

                            storedOverLay: trafegoLocal.storedOverLay, // bool <--------- hold
                            storedUserLogado: self.$store.state.flagUserAtivo, // bool <------ update
                            storedDateUser: dataUser, // {} <--------------------------------- update
                            storedPddListUser: res.data.result.liPdds, // [] <---------------- update
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

                        // -- RESET input
                        self.nameClient = ''
                        self.passClient = ''
                        self.msgErrorLogin = ''
                        return

                    } else {
                        
                        self.msgErrorLogin = 'Usuário ou senha incorretos.'
                        return
                    }
                })

            }
        },
        chamarCadastro() {

            this.$store.state.flagShowLogin = false
            this.$store.state.flagShowCadastro = true
            this.$store.state.flagShowClientPage = false
        },
        next() {
            if(this.visibleSlide >= this.items.length - 1) {
                //this.visibleSlide = 0 // RESET
                this.visibleSlide = 0 // RESET
            }
            else {
                //this.visibleSlide++
                this.visibleSlide++
            }
        },
        contadorCarousel() {
            
            this.polling = window.setInterval(() => {

                if (this.pararCarousel == true) {

                    this.aux_index = this.visibleSlide
                    this.visibleSlide = this.aux_index // STOP
                }

                else { // Keep on

                    if(this.visibleSlide >= this.items.length - 1) {
                    
                        this.visibleSlide = 0 // RESET
                    }
                    else {
                    
                        this.visibleSlide++
                    }
                }

            }, 8000);
        }
    },

    beforeDestroy () {

        clearInterval(this.polling)
    },
    created(){

        window.scrollTo(0,0)

        this.contadorCarousel() // inicializa com a pág
    }
}
</script>