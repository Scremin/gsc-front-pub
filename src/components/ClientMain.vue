<style scoped>
    @import url("../client-main-style.scss");
</style>

<template>
    <div>
        <div>

            <div v-if="client_ativo">
                <ClientPage />
            </div>

            <div v-if="!client_ativo" class="main_client">

                <div class="elem_lat"></div>

                <div class="elem_central  hidden-sm-and-down">

                    <div v-if="login_ativo" class="content_central">

                        <!--<div class="img">

                            <v-img 
                                class="int_img"
                                :style="{}"
                                :src="require('../assets/lg.jpg')" />

                        </div>-->
                        
                        <form @submit.prevent="onFormLogin" action="" method="post" class="form_posi">

                            <input type="text" v-model="preUser" name="user"
                                class="input_edit_line" placeholder="Usuario" />


                            <input type="password" v-model="prePwd" name="pwd" 
                                class="input_edit_line" placeholder="Password" />

                            <v-btn 
                                value="submit" type="submit" class="input_edit_line" 
                                :style="{'box-shadow':'1px 1px 20px rgb(1, 1, 1)', 'color': 'rgb(168, 243, 15)'}">
                                Entrar
                            </v-btn>

                            <div v-if="entry_result" class="msg_style">
                                Preencha todos os campos para conseguirmos entregar seus produtos
                            </div>
                            <div v-if="entry_error_dados" class="msg_style">
                                Insira dados válidos
                            </div>
                            <div v-if="entry_error" class="msg_style">
                                Usuário ou senha incorreto.
                            </div>
                            <div v-if="entry_wait" class="output_line" :style="{'color':'green', 'margin': '2%'}">
                                Aguarde um momento
                            </div>
                        </form>

                        <div :style="{'display':'flex','justify-content':'center'}">
                            <v-btn block @click="mudar_para_cadastro()"
                                :style="{
                                    'margin-top': '10px',
                                    'margin': '2%',
                                    'width': '50%',
                                    'color': 'rgb(168, 243, 15)'
                                    }">
                                Cadastro rápido
                            </v-btn>
                        </div>
                        <div :style="{'display':'flex','justify-content':'center'}">
                            <v-btn @click="voltarHome()"
                                :style="{
                                    'margin-top': '10px',
                                    'margin': '2%',
                                    'width': '50%',
                                    'color': 'rgb(168, 243, 15)'
                                    }">
                                Voltar
                            </v-btn>
                        </div>

                    </div>     

                    <div v-if="cadastro_ativo" class="content_central">

                        <div class="img">

                            <v-img 
                                class="int_img"
                                :style="{}"
                                :src="require('../assets/fm.png')" />

                        </div>
                        
                        <form @submit.prevent="onFormLogon" action="" method="post" class="form_posi">

                            <input type="text" v-model="preUser" name="user"
                                class="input_edit_line" placeholder="Usuario" />

                            <input type="text" v-model="preAdress" name="adress"
                                class="input_edit_line" placeholder="Endereço para entrega" />

                            <input class="input_edit_line" :style="{'width':'25%'}"
                                type="text" v-model="preAdress2" name="adress2"
                                placeholder="Número" />

                            <input class="input_edit_line"
                                type="text" v-model="preAdress3" name="adress3"
                                placeholder="Complemento do endereço" />

                            <input type="phone" v-model="prePhone" name="phone"
                                class="input_edit_line" placeholder="+351 931 883 333" />

                            <input type="password" v-model="prePwd" name="pwd" 
                                class="input_edit_line" placeholder="Password" />

                            <v-btn value="submit" type="submit" class="input_edit_line"
                            :style="{'color': 'rgb(168, 243, 15)'}">Cadastrar</v-btn>

                            <div v-if="entry_result" class="msg_style">
                                Preencha todos os campos para conseguirmos entregar seus produtos
                            </div>
                            <div v-if="entry_error_cad" class="msg_style">
                                Este nome de usuário já existe
                            </div>
                            <div v-if="entry_error_dados" class="msg_style">
                                Insira dados válidos
                            </div>
                            <div v-if="entry_error_try" class="msg_style">
                                Tente Novamente
                            </div>
                            <div v-if="entry_wait" class="output_line" :style="{'color':'green', 'margin': '2%'}">
                                Aguarde um momento
                            </div>
                        </form>

                        <div :style="{'display':'flex','justify-content':'center', 'margin-top': '15px'}">
                            <v-btn @click="voltarUm()"
                                :style="{
                                    'margin-top': '25px',
                                    'margin': '2%',
                                    'width': '50%',
                                    'color': 'rgb(168, 243, 15)'
                                    }">
                                Voltar
                            </v-btn>
                        </div>

                    </div>

                </div>

                <div class="elem_central  hidden-md-and-up" :style="{width:'100%'}">

                    <div v-if="login_ativo" class="content_central" :style="{width:'50%'}">

                        <div class="img">

                            <v-img 
                                class="int_img"
                                :style="{}"
                                :src="require('../assets/lg.jpg')" />

                        </div>
                        
                        <form @submit.prevent="onFormLogin" action="" method="post" class="form_posi">

                            <input type="text" v-model="preUser" name="user"
                                class="input_edit_line" placeholder="Usuario" />


                            <input type="password" v-model="prePwd" name="pwd" 
                                class="input_edit_line" placeholder="Password" />

                            <v-btn value="submit" type="submit" class="input_edit_line">Entrar</v-btn>

                            <div v-if="entry_result" class="msg_style">
                                Preencha todos os campos para conseguirmos entregar seus produtos
                            </div>
                            <div v-if="entry_error_dados" class="msg_style">
                                Insira dados válidos
                            </div>
                            <div v-if="entry_error" class="msg_style">
                                Usuário ou senha incorreto.
                            </div>
                            <div v-if="entry_wait" class="output_line" :style="{'color':'green', 'margin': '2%'}">
                                Aguarde um momento
                            </div>
                        </form>

                        <div :style="{'display':'flex','justify-content':'center'}">
                            <v-btn block @click="mudar_para_cadastro()"
                                :style="{
                                    'margin-top': '10px',
                                    'margin': '2%',
                                    'width': '80%',
                                    'color': 'rgb(168, 243, 15)',
                                    'font-size':'0.8rem'
                                    }">
                                <span>Cadastro rápido</span>
                            </v-btn>
                        </div>
                        <div :style="{'display':'flex','justify-content':'center'}">
                            <v-btn @click="voltarHome()"
                                :style="{
                                    'margin-top': '10px',
                                    'margin': '2%',
                                    'width': '50%',
                                    'color': 'rgb(168, 243, 15)'
                                    }">
                                Voltar
                            </v-btn>
                        </div>

                    </div>     

                    <div v-if="cadastro_ativo" class="content_central">

                        <div class="img">

                            <v-img 
                                class="int_img"
                                :style="{}"
                                :src="require('../assets/fm.png')" />

                        </div>
                        
                        <form @submit.prevent="onFormLogon" action="" method="post" class="form_posi">

                            <input type="text" v-model="preUser" name="user"
                                class="input_edit_line" placeholder="Usuario" />

                            <input type="text" v-model="preAdress" name="adress"
                                class="input_edit_line" placeholder="Endereço para entrega" />

                            <input class="input_edit_line" :style="{'width':'30%'}"
                                type="text" v-model="preAdress2" name="adress2"
                                placeholder="Número" />

                            <input class="input_edit_line"
                                type="text" v-model="preAdress3" name="adress3"
                                placeholder="Complemento do endereço" />

                            <input type="phone" v-model="prePhone" name="phone"
                                class="input_edit_line" placeholder="+351 931 883 333" />

                            <input type="password" v-model="prePwd" name="pwd" 
                                class="input_edit_line" placeholder="Password" />

                            <v-btn value="submit" type="submit" class="input_edit_line">Cadastrar</v-btn>

                            <div v-if="entry_result" class="msg_style">
                                Preencha todos os campos para conseguirmos entregar seus produtos
                            </div>
                            <div v-if="entry_error_cad" class="msg_style">
                                Este nome de usuário já existe
                            </div>
                            <div v-if="entry_error_dados" class="msg_style">
                                Insira dados válidos
                            </div>
                            <div v-if="entry_error_try" class="msg_style">
                                Tente Novamente
                            </div>
                            <div v-if="entry_wait" class="" :style="{'color':'green', 'margin': '2%'}">
                                Aguarde um momento
                            </div>
                        </form>

                        <div :style="{'display':'flex','justify-content':'center'}">
                            <v-btn @click="voltarUm()"
                                :style="{
                                    'margin-top': '26px',
                                    'margin': '2%',
                                    'width': '50%',
                                    'color': 'rgb(168, 243, 15)',
                                    }">
                                Voltar
                            </v-btn>
                        </div>

                    </div>

                </div>

                <div v-if="!client_ativo" class="elem_lat">
                    
                    <!-- tam grande
                    <div :style="{'margin-left': '-100%'}" class="tx_back hidden-sm-and-down">
                        Nossa área
                    </div>

                        tam pequeno
                    <div :style="{'margin-left': '-400%'}" class="tx_back hidden-md-and-up">
                        Nossa área
                    </div>
                    -->

                </div>

            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'

import ClientPage from './ClientPage'

export default {
    components: { ClientPage },
    data(){
        return {

            entry_result: false,
            entry_wait: false,
            entry_error: false, // msg error
            entry_error_cad: false, // msg de erro de cadastro
            entry_error_try: false, // msg de erro de requisição
            entry_error_dados: false, //msg erro dados válidos

            preUser: '',
            preAdress: '',
            preAdress2: '',
            preAdress3: '',
            endereco: '',
            prePhone: '',
            prePwd: '',

            auxSpace: '',
        }
    },
    computed: {
        MeusPedidos() {
            return this.$store.state.MeusPedidos
        },
        MeuCadastro() {
            return this.$store.state.MeuCadastro
        },
        login_ativo(){
            return this.$store.state.login_ativo
        },
        cadastro_ativo(){
            return this.$store.state.cadastro_ativo
        },        
        client_ativo(){
            return this.$store.state.client_ativo
        },
    },
    methods: {
        voltarUm() {

            this.$store.state.cadastro_ativo = false
            this.$store.state.login_ativo = true
            this.$store.state.client_ativo = false

            this.entry_result = false
            this.entry_wait = false
        },
        voltarHome() {

            // RESET gat && back home

            this.$store.state.cadastro_ativo = false
            this.$store.state.login_ativo = true
            this.$store.state.client_ativo = false

            this.entry_result = false
            this.entry_wait = false
            this.entry_error_cad = false
            this.entry_error_try = false

            this.$router.push('/')
        },
        mudar_para_cadastro() {

            this.$store.state.cadastro_ativo = true
            this.$store.state.login_ativo = false
            this.$store.state.client_ativo = false

            this.entry_result = false
            this.entry_wait = false
            this.entry_error_cad = false
            this.entry_error_try = false
            this.entry_error_dados = false
        },
        onFormLogon() {

            if(this.preUser == '' || this.preAdress == ''
                || this.prePhone == '' || this.prePwd == ''){
                
                this.entry_error_dados = false
                this.entry_result = true
                this.entry_wait = false

                return
            }
            else if(this.preUser.length < 5 || this.preAdress.length < 10 ||
                    this.prePhone.length < 9 || this.prePwd.length < 5)
                {
                
                this.entry_result = false // "preencha os campos todos"
                this.entry_error_dados = true // "insira dados válidos"
                this.entry_wait = false

                return
            }
            else{

                this.entry_error_dados = false
                this.entry_result = false
                this.entry_wait = true

                this.endereco = this.preAdress + ', ' + 'número' + ' ' + this.preAdress2 + ', ' + this.preAdress3

                const elem_send = { 

                    user: this.preUser,
                    adress: this.endereco,
                    phone: this.prePhone,
                    pass: this.prePwd
                }

                const self = this

                axios.post(`https://castarcms.club/api/post_new_user`, elem_send).then(function (response) {
                    
                    //console.log(response.data.result)

                    /* Se já existir aquele nome => nao cadastrar */
                    if(response.data.result == 'cadastro nao autorizado'){
                        
                        self.preUser = ''

                        self.entry_error_cad = true

                        return
                    }
                    else{

                        // Se for adicionado o novo cliente, então abrir página cliente.
                        if(response.data.result == 'new_user_added'){

                            self.entry_wait = true

                            // O cadastro aqui já foi feito no db.
                            // Envitando fazer requisições demais no próx component.
                            // tmp save dados recém cadastrados.
                            self.$store.state.flag_cad = 1

                            self.$store.state.tmpAdress = self.preAdress
                            self.$store.state.tmpPhone = self.prePhone
                            //self.$store.state.tmpPwd = self.prePwd

                            self.$store.state.Aucc = true, // auth for req.
                            self.$store.state.c_name = self.preUser,

                            self.$store.state.cadastro_ativo = false,
                            self.$store.state.login_ativo = false,
                            self.$store.state.client_ativo = true, // HABILITAR PÁGINA DO CLIENTE.

                            self.preUser = ''
                            self.preAdress = ''
                            self.prePhone = ''
                            self.prePwd = ''

                            self.entry_wait = false // RESET
                            self.entry_result = false // RESET
                            self.entry_error_cad = false // RESET
                            self.entry_error_try = false // RESET
                            this.entry_error_dados = false // RESET

                            return

                        }
                    }

                });
                
                // Situação após if OU else
                self.entry_error_try = true // "tente novamente"

            }

            this.entry_wait = false // RESET
            this.entry_result = false // RESET
            this.entry_error_cad = false // RESET
            this.entry_error_try = false // RESET
        },
        onFormLogin() {

            if(this.preUser == '' || this.prePwd == ''){
                
                this.entry_error_dados = false
                this.entry_result = true // "preencha os campos todos"
                this.entry_wait = false
            }
            else if(this.preUser.length < 5 || this.prePwd.length < 5)
                {
                
                this.entry_result = false // "preencha os campos todos"
                this.entry_error_dados = true // "insira dados válidos"
                this.entry_wait = false

                return
            }
            else{

                this.entry_result = false
                this.entry_error_dados = false
                this.entry_wait = true // "Aguarde um momento"

                // requisição
                this.uploadedContent = {

                    userE: this.preUser,
                    pwdE: this.prePwd,
                }

                const self = this // const value to access the class axios properties.

                axios.post(`https://castarcms.club/api/login_xx`, this.uploadedContent).then(function (response) {
                    
                    //console.log(response.data.result)
                    //console.log(response.data.result.liPdds)
                    self.auth_rcv = response.data.result.result

                    if(self.auth_rcv == 'autorizado'){

                        // tmp geral
                        self.$store.state.Aucc = true,
                        self.$store.state.c_name = self.preUser,
                        self.$store.state.tmpAdress = response.data.result.adress
                        self.$store.state.tmpPhone = response.data.result.phone
                        self.$store.state.tmpLiPddsClient = response.data.result.liPdds // lista

                        // gat
                        self.$store.state.flag_cad = 0 // gat login

                        self.$store.state.cadastro_ativo = false,
                        self.$store.state.login_ativo = false,
                        self.$store.state.client_ativo = true, // HABILITAR PÁGINA DO CLIENTE.

                        // RESET gat
                        self.entry_wait = false // retirar msg de aguarde
                        self.entry_result =  false //
                        self.entry_error =  false // msg error
                        self.entry_error_try = false // RESET
                    }
                    else{

                        self.entry_wait = false // retirar msg == "aguarde"
                        self.entry_error =  true // msg error == ~dados incorretos~
                    }

                })
            }
        },
    }
}
</script>