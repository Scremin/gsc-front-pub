 <style scoped>
    @import url("../final-pedido-style.scss");
</style>

<template>
    <div class="main_linit">

        <div class="elem_lat"></div>

        <div v-if="entrada_final_envio" class="elem_central">

            <div 
                
                :style="{
                    'display': 'flex', 'flex-direction': 'column', 'align-items':'center',
                    'margin':'2%', 'width':'100%',
                    }"
            >

                <v-btn @click="loginEnvio()"
                    :style="{'margin-top': '1px', 'color': 'rgba(121, 174, 64, 1)', 'width':'100%'}">
                    Já tenho cadastro
                </v-btn>

                <v-btn @click="logonEnvio()"
                    :style="{'margin-top': '1px', 'color': 'rgba(121, 174, 64, 1)', 'width':'100%'}">
                    Cadastrar
                </v-btn>

                <v-btn @click="voltarCarrinho()"
                    :style="{'margin-top': '20px', 'color': 'rgb(168, 243, 15)', 'width':'30%'}"
                >
                    Voltar
                </v-btn>

            </div>

        </div>

        <div v-else-if="cadastro_finalPedido" class="elem_central">

            <div class="content_central">

                <v-img 
                    class="img_central"
                    :style="{'border-radius':'400px'}"
                    :src="require('../assets/c2.png')" />

                <form @submit.prevent="onFormLogon" action="" method="post" class="form_posi">

                    <input type="text" v-model="preUser" name="user"
                        class="input_edit_line" placeholder="Usuario" />

                    <input type="text" v-model="preAdress" name="adress"
                        class="input_edit_line" placeholder="Endereço para entrega" />

                    <input type="number" v-model="preAdress2" name="adress2"
                        class="input_edit_line" placeholder="Número" 
                        :style="{'width':'35%', 'align-self':'start'}"/>

                    <input type="text" v-model="preAdress3" name="adress3"
                        class="input_edit_line" placeholder="Complemento do endereço" />

                    <input type="phone" v-model="prePhone" name="phone"
                        class="input_edit_line" placeholder="Telemóvel" />

                    <input type="password" v-model="prePwd" name="pwd" 
                        class="input_edit_line" placeholder="Password" />

                    <v-btn value="submit" type="submit" class="btn_line">Cadastrar</v-btn>

                    <div v-if="entry_result" class="output_line">
                        Preencha todos os campos para conseguirmos entregar seus produtos
                    </div>
                    <div v-if="entry_error_dados" class="output_line">
                        Insira dados válidos
                    </div>
                    <div v-if="entry_wait" class="output_line" :style="{'color':'green'}">
                        Aguarde um momento
                    </div>
                </form>

                <v-btn @click="voltarUm()"
                    :style="{'margin-top': '10px', 'color': 'rgb(168, 243, 15)'}">
                    Voltar
                </v-btn>

            </div>     

        </div>

        <div v-else-if="login_finalPedido" class="elem_central">

            <div class="content_central">

                <v-img 
                    class="img_central"
                    :style="{'border-radius':'400px'}"
                    :src="require('../assets/c3.jpg')" />

                <form @submit.prevent="onFormLogin" action="" method="post" class="form_posi">

                    <input type="text" v-model="preUser" name="user"
                        class="input_edit_line" placeholder="usuario" />

                    <input type="password" v-model="prePwd" name="pwd" 
                        class="input_edit_line" placeholder="senha" />

                    <v-btn value="submit" type="submit" class="">Entrar</v-btn>

                    <div v-if="entry_result" class="output_line">
                        Preencha todos os campos para conseguirmos entregar seus produtos
                    </div>
                    <div v-if="entry_error_dados" class="output_line">
                        Insira dados válidos
                    </div>
                    <div v-if="entry_login" class="output_line" :style="{'color':'red'}">
                        Usuário ou senha incorretos
                    </div>
                    <div v-if="entry_wait" class="output_line" :style="{'color':'green'}">
                        Aguarde um momento
                    </div>
                </form>

                <v-btn @click="voltarUm()"
                    :style="{'margin-top': '10px', 'color': 'rgb(168, 243, 15)'}">
                    Voltar
                </v-btn>

            </div>            

        </div>

        <!-- Box final -->
        <div v-else-if="exibFinal_finalPedido" class="elem_central">

            <div class="content_central">

                <span :style="{
                    'box-shadow': '0 2px 10px rgba(0, 0, 0, 0.65)',
                    'font-size': '1.5rem', 
                    'margin': '2%',
                    'padding':'2%',
                    'border-radius': '18px'
                    }"
                >
                    Verifique se os dados estão corretos</span>

                <!-- Box final: exibição do cadastro -->
                <div class="form_posi_final">
                    <div 
                        :style="{
                            
                            'box-shadow': '0 2px 10px rgba(121, 174, 64, 1)',
                            'border-radius': '18px',
                            'padding': '2%'
                            }" 
                            
                        class="form_posi_int"
                        >

                        <span :style="{'margin': '6%', 'width': '100%'}">
                            <v-icon :style="{'color': 'rgba(121, 174, 64, 1)'}">mdi-account-circle</v-icon> {{ this.info_user_pdd.currentUser }}
                        </span>
                        <span :style="{'margin': '6%', 'width': '100%'}">
                            <v-icon :style="{'color': 'rgba(121, 174, 64, 1)'}">mdi-home</v-icon> {{ this.info_user_pdd.currentAdress }}
                        </span>
                        <span :style="{'margin': '6%', 'width': '100%'}">
                            <v-icon :style="{'color': 'rgba(121, 174, 64, 1)'}">mdi-phone</v-icon> {{ this.info_user_pdd.currentPhone }}
                        </span>

                    </div>
                </div>

                <span :style="{
                    'box-shadow': '0 2px 10px rgba(0, 0, 0, 0.65)',
                    'font-size': '1.5rem', 
                    'margin': '2%',
                    'padding':'2%',
                    'border-radius': '18px'
                    }"
                >
                    Escolha um método de pagamento</span>

                <!-- Box final: escolha de pagamento -->
                <div class="form_posi_final">
                    <div
                        :style="{
                            
                            'box-shadow': '0 2px 10px rgba(121, 174, 64, 1)',
                            'border-radius': '18px',
                            'padding': '2%'
                            }" 

                        class="form_posi_int">

                        <v-radio-group
                        v-model="radios"
                        mandatory
                        >
                        <v-radio
                            label="PayPal"
                            value="PayPal"
                        ></v-radio>
                        <v-radio
                            label="MB WAY"
                            value="MB WAY"
                        ></v-radio>
                        <v-radio v-if="entregaTipo1 == true"
                            label="Pagar ao receber a encomenda"
                            value="Dinheiro"
                        ></v-radio>
                        </v-radio-group>

                        <div v-if="radios == 'PayPal'">
                            <div class="panel_finalizar_int">
                                <!-- :amount="valorTotal" -->
                                <PayPal
                                :amount="this.$store.state.valorTotalFinal"
                                currency="EUR"
                                :client="credentials"
                                :button-style="myStyle"
                                @payment-authorized="eventoPayPal($event, 'authorized')"
                                @payment-cancelled="eventoPayPal($event, 'cancelled')"
                                @payment-completed="eventoPayPal($event, 'completed')"
                                >
                                </PayPal>
                            </div>
                        </div>

                        <span v-if="radios == 'MB WAY'">MB WAY - 928 113 960</span>
                        <span v-if="radios == 'MB WAY'">O comprovante deve ser apresentado no momento da entrega.</span>
                        <span v-if="radios == 'Dinheiro'">O pagamento deve ser feito ao receber a encomenda na sua morada.</span>

                    </div>
                </div>

                <v-btn :style="{'color': 'rgba(121, 174, 64, 1)'}" @click="enviarPedido()" class="">Enviar pedido</v-btn>

                <div v-if="entry_result" class="output_line">
                    Preencha todos os campos para conseguirmos entregar seus produtos
                </div>
                <div v-if="entry_wait" class="output_line" :style="{'color':'green'}">
                    Aguarde um momento
                </div>
                <div v-if="entry_payMet" class="output_line" :style="{'color':'red'}">
                    Escolha um método de pagamento
                </div>

                <v-btn @click="voltarUm()"
                    :style="{'margin-top': '10px', 'color': 'rgb(168, 243, 15)'}">
                    Voltar
                </v-btn>

            </div>

        </div>

        <!-- Msg após envio do pedido "panelMSG hidden-sm-and-down" -->
        <div v-if="pedidoOn" class="elem_central">
            
            <div class="content_central">


                <span :style="{
                    'box-shadow': '0 2px 10px rgba(0, 0, 0, 0.65)',
                    'font-size': '1.5rem', 
                    'margin': '2%',
                    'padding':'2%',
                    'border-radius': '18px',
                    'margin-top':'-10px'}"
                >
                    O método de pagamento será verificado e em seguida aprovado pelo vendedor.
                    Verifique a confirmação do seu pedido na sua área de cliente!
                </span>

                <v-btn 
                class="form_posi" @click="voltarTudo()"
                :style="{
                        
                    'box-shadow': '0 2px 10px rgba(121, 174, 64, 1)',
                    'border-radius': '18px',
                    'padding': '2%',
                    'width': '20%',
                    'height':'10%',
                    'color': 'rgb(168, 243, 15)'
                    }"
                >
                    Voltar
                </v-btn>

            </div>
        
        </div>

        <div class="elem_lat"></div>

    </div>
</template>

<script>
import axios from 'axios'
import PayPal from 'vue-paypal-checkout'

export default {
    data(){
        return {

            radios: 'Método de pagamento não escolhido', // payMet (mudança no radios) => rcv nele mesmo.
            payMet: 'Método de pagamento não escolhido',

            entrada_final_envio: true,
            login_finalPedido: false,
            cadastro_finalPedido: false,
            exibFinal_finalPedido: false,

            entry_result: false,
            entry_wait: false,
            entry_error_dados: false, //msg erro dados válidos
            entry_login: false, // login error
            entry_payMet: false, // login error

            preUser: '',
            preAdress: '',
            preAdress2: '',
            preAdress3: '',
            prePhone: '',
            prePwd: '',

            endereco: '',

            // PayPal
            credentials: {
                // <sandbox client id>
                sandbox: 'AXRen_Z2hpmf6Y3uyCvzdJeP9NZOq8ZVFXVARc9tWpXODK3MGeeNwIys1pfWPMPCoUeNCI2QLtlq7TTH',
                // <production client id>
                production: 'AX7Wj4nUAOgn916pImH9HLIBPuDFZ49deH2PIhThFBjKK9Oq6bagAVggd1l2Iy29heGK8iwrGAGBGmZD'
            },
            myStyle: {
                label: 'checkout',
                size:  'medium',
            },

        }
    },
    components: {
        PayPal
    },
    computed: {
        listCar() {
            return this.$store.state.listCar
        },
        info_user_pdd() {
            return this.$store.state.info_user_pdd
        },
        pedidoOn() {
            return this.$store.state.pedidoOn // bool
        },
        entregaTipo1(){
            return this.$store.state.entregaTipo1
        },
        entregaTipo2(){
            return this.$store.state.entregaTipo2
        },
        valorTotal() {
            return this.$store.getters.valorTotal
        },
    },
    methods: {
        eventoPayPal(param, confirmation) {
            console.log(param)
            console.log(confirmation)
        },
        loginEnvio() { // home page -> client login page

            // Desabilitar página atual.
            this.entrada_final_envio = false
            // Chamar página de login para receber os dados para o pedido.
            this.login_finalPedido = true
        },
        logonEnvio() { // home page -> cadastro client login page

            //
            this.entrada_final_envio = false
            //
            this.cadastro_finalPedido = true
        },
        enviarPedido(){

            window.scrollTo(0,0)

            //console.log(this.radios)

            //console.log('teste de envio com cadastro')

            if( this.info_user_pdd.currentUser != null &&
                this.info_user_pdd.currentAdress != null &&
                this.info_user_pdd.currentPhone  != null
            ){

                //this.entry_wait = true // "aguarde um momento"
                //console.log(this.info_user_pdd.currentUser)
                //console.log(this.info_user_pdd.currentAdress)
                //console.log(this.info_user_pdd.currentPhone)

                //return // teste acima
                if(this.radios == 'Método de pagamento não escolhido'){
                    this.entry_payMet = true
                    return
                }

                const elem_send = { 

                    listPedido: this.listCar,
                    payMet: this.radios,
                    num_tx_entrega: this.$store.state.tx_entrega_final,
                    user: this.info_user_pdd.currentUser,
                    adress: this.info_user_pdd.currentAdress,
                    phone: this.info_user_pdd.currentPhone,
                    //pass: this.info_user_pdd.currentPass,
                    status: this.info_user_pdd.status,
                    confirm: '0' // status de espera de confirmação pelo vendedor.
                }

                //console.log(elem_send.num_tx_entrega)

                //const self = this

                axios.post(`https://castarcms.club/api/post_call_pedido`, elem_send).then(function (res) {
                    
                    console.log(res)

                    // habilitar resposta final após pedido enviado.

                });

                // Limpar o carrinho de compras.
                this.$store.state.listCar = [] // limpar carrinho de compras no central state.

                this.exibFinal_finalPedido = false // sair da página de exibição final de envio.

                this.$store.state.pedidoOn = true // exibir msg de confirmação.

                this.entry_result = false // RESET
                this.entry_wait = false // "aguarde um momento"
                this.entry_payMet = false // RESET

            }
            else{

                this.entry_result = true // Os dados precisam está preenchidos.
            }

        },
        voltarTudo(){
             this.$router.push('/')
        },
        voltarCarrinho() {

            //console.log('teste de volta ao carrinho')

            // chamar router
            this.$router.push('/Carrinho')
        },
        voltarUm() {

            window.scrollTo(0,0)

            //console.log('teste de volta uma etapa')

            this.login_finalPedido = false
            this.cadastro_finalPedido = false
            this.exibFinal_finalPedido = false

            this.entrada_final_envio = true // voltar ao início da final page pedido

            this.entry_wait = false // "aguarde um momento"
            this.entry_result = false // RESET
        },
        onFormLogin() {

            window.scrollTo(0,0)

            if(this.preUser == '' && this.prePwd == ''){

                this.entry_result = true
            }
            else if(this.preUser.length < 5 || this.prePwd.length < 5)
                {
                
                this.entry_error_dados = true
                this.entry_wait = false
                this.entry_result = false

                return
            }
            else{

                this.entry_wait = true // "aguarde um momento"
                this.entry_error_dados = false // "dados inválidos"
                this.entry_result = false // "preenchimento de campo"

                // Buscar dados para o pedido. axios.
                const elem_login = { 

                    user: this.preUser,
                    pass: this.prePwd,
                }

                const self = this

                axios.post(`https://castarcms.club/api/post_call_login`, elem_login).then(function (response) {
                    
                    //console.log(response.data.result)

                    //console.log(response.data.result.adress)
                    //console.log(response.data.result.phone)

                    if(response.data.result == 'não encontrado'){

                        self.entry_login = true // login error
                        self.entry_wait = false

                        return
                    }
                    else{

                        // tmp save conteúdo acima para upload junto com o pedido.
                        // completando o conteúdo do dic.
                        self.$store.state.info_user_pdd = {

                            currentUser: self.preUser,
                            currentAdress: response.data.result.adress,
                            currentPhone: response.data.result.phone,
                            currentPass: '',
                            status: 0 // 0 => indica que é um cadastro já existente no db.
                        }

                        //console.log(self.$store.state.info_user_pdd)

                        // Chamar página de exibição final para a última confirmação.
                        self.login_finalPedido = false
                        self.exibFinal_finalPedido = true

                        self.entry_result = false // RESET
                        self.entry_login = false // desativar login error 
                        self.entry_wait = false // "aguarde um momento"
                    }

                    //console.log('nao fui. pq? nao sei')

                });
            }

        },
        onFormLogon() {

            window.scrollTo(0,0)

            //console.log('teste form log on')

            // autenticação de preenchimento.
            if( this.preUser == '' && this.preAdress == '' && this.prePhone == '' && this.prePwd == ''){

                this.entry_result = true

                return
            }
            else if(this.preUser.length < 5 || this.preAdress.length < 10 || 
                this.prePhone.length < 9 || this.prePwd.length < 5)
                {
                
                this.entry_error_dados = true
                this.entry_wait = false

                return
            }
            else{

                this.entry_result = false
                this.entry_wait = true // "aguarde um momento"

                this.endereco = this.preAdress + ', número ' + this.preAdress2 + ', ' + this.preAdress3

                // Buscar dados para o pedido. store.state
                // tmp save conteúdo acima para upload junto com o pedido.
                this.$store.state.info_user_pdd = {

                    currentUser: this.preUser,
                    currentAdress: this.endereco,
                    currentPhone: this.prePhone,
                    currentPass: this.prePwd,
                    status: 1 // 1 => indica que é um novo cadastro.
                }

                //console.log(this.info_user_pdd)

                // Chamar página de exibição final para a última confirmação.
                this.cadastro_finalPedido = false
                this.exibFinal_finalPedido = true
            }

        },
        verif() {
            
            window.scrollTo(0,0)

            this.entry_wait = false // "aguarde um momento"
            this.entry_result = false // RESET

            //console.log('client ativo: ')
            //console.log(this.$store.state.client_ativo)

            // Verif se há client logado
            if(this.$store.state.client_ativo == true){

                // chamar parte final.
                this.$store.state.info_user_pdd = {

                    currentUser: this.$store.state.c_name,
                    currentAdress: this.$store.state.tmpAdress,
                    currentPhone: this.$store.state.tmpPhone,
                    currentPass: '',
                    status: 0 // 0 => indica que é um cadastro já existente no db.
                }

                this.entrada_final_envio = false
                this.cadastro_finalPedido = false
                this.login_finalPedido = false

                this.exibFinal_finalPedido = true
            }
        }
    },

    created() {

        //console.log('entrada final')
        //console.log(this.$store.state.valorTotalFinal)

        this.verif();
    }
}
</script>