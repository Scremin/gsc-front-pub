<style scoped>
    @import url("../client-page-style.scss");
</style>

<template>
    <div>

        <div>

            <div class="c_m">

                <div class="elem_esq">

                    <div v-if="MeuCadastro" class="elem_lat_aux">

                        <v-icon class=tx_back large>{{ 'mdi-lead-pencil' }}</v-icon>

                    </div>

                    <div v-if="MeusPedidos" class="elem_lat_aux"></div>

                    <div class="elem_central_client">

                        <div v-if="!exibirMain" class="">
                            <v-progress-circular
                            :rotate="360"
                            :size="100"
                            :width="15"
                            :value="value"
                            color="rgb=(38, 53, 98)"
                            >
                            {{ value }}
                            </v-progress-circular>
                        </div>
                        
                        <div v-if="MeuCadastro && exibirMain" 
                            class="box_edit_cadastro">

                            <input type="text" @input="nameEditVAR = $event.target.value" 
                                name="nameEditVAR"
                                class="subheading input_elem animate__animated animate__flash"
                                v-on:keyup.enter="nameEdit(nameEditVAR, axios_teste.idClient)"
                                :placeholder="axios_teste.nameClient" />

                            <input type="text" @input="adressEditVAR = $event.target.value" 
                                name="adressEditVAR"
                                class="subheading input_elem animate__animated animate__flash"
                                v-on:keyup.enter="adressEdit(adressEditVAR, axios_teste.idClient)"
                                :placeholder="axios_teste.adressClient" />

                            <input type="text" @input="phoneEditVAR = $event.target.value" 
                                name="phoneEditVAR"
                                class="subheading input_elem animate__animated animate__flash"
                                v-on:keyup.enter="phoneEdit(phoneEditVAR, axios_teste.idClient)"
                                :placeholder="axios_teste.phoneClient" />
                        
                            <input type="password" @input="pwdEditVAR = $event.target.value" 
                                name="pwdEditVAR"
                                class="subheading input_elem animate__animated animate__flash"
                                v-on:keyup.enter="pwdEdit(pwdEditVAR, axios_teste.idClient)"
                                placeholder="******" />

                        </div>

                        <!-- condicional de exibição da lista de pedidos -->
                        <div class="box_view_pdds"
                            v-if="this.$store.state.tmpLiPddsClient == 0 && this.$store.state.MeusPedidos == true">
                            Ainda não há pedidos
                        </div>

                        <div v-else>

                            <!-- Pedidos em tamanho grande -->
                            <div :style="{
                                'display':'flex', 
                                'flex-direction':'column'}"
                                v-if="MeusPedidos && exibirMain">

                                <div class="box_view_pdds hidden-sm-and-down"
                                    v-for="pdd in liPdds" :key="pdd.index">

                                    <div class="pdds_posi">

                                        <v-chip v-for="elem in pdd.lista_pedidos" :key="elem.index"
                                        class="prods_int"
                                        color="rgb(38, 53, 98)"
                                        label
                                        text-color="white"
                                        >
                                            <v-icon left>
                                                mdi-label
                                            </v-icon>

                                            {{ elem.nomeP }}

                                            <v-divider :style="{'margin':'1%'}" vertical></v-divider>

                                            <span :style="{'color':'green'}">
                                                {{ elem.precoP | dinheiro }}
                                            </span>

                                        </v-chip>

                                    </div>

                                    <v-spacer></v-spacer>

                                    <v-divider :style="{'margin':'1%'}" vertical></v-divider>

                                    <div v-if="pdd.confirm == '0'" :style="{'font-size':'14px'}">
                                        <span :style="{'color':'red'}">Esperando Confirmação</span>
                                    </div>
                                    <div v-else-if="pdd.confirm == '1'" :style="{'width': '100%', 'font-size':'14px'}">
                                        <span :style="{'color':'green'}">Pedido Confirmado</span>
                                    </div>
                                    <div v-else-if="pdd.confirm == '2'" :style="{'width': '100%', 'font-size':'14px'}">
                                        <span :style="{'color':'blue'}">Pedido Concluído</span>
                                    </div>
                                    <div v-else-if="pdd.confirm == '3'" :style="{'width': '100%', 'font-size':'14px'}">
                                        <span :style="{'color':'red'}">Pedido Cancelado</span>
                                    </div>

                                    <v-divider :style="{'margin':'1%'}" vertical></v-divider>

                                    <div>
                                        Pedido
                                        <div :style="{'display':'flex', 'align-self':'center'}">{{ pdd.data_inicio }}</div>
                                    </div>

                                    <v-divider :style="{'margin':'1%'}" vertical></v-divider>

                                    <div>
                                        Entrega
                                        <div :style="{'display':'flex', 'align-self':'center'}">{{ pdd.data_entrega }}</div>
                                    </div>

                                </div>

                            </div>

                            <!-- Pedidos em tamanho pequeno -->
                            <div
                            v-if="MeusPedidos && exibirMain"
                            :style="{
                                'display':'flex', 
                                'flex-direction':'column',
                                'width':'100%'
                            }"
                            >

                                <div class="box_view_pdds hidden-md-and-up"
                                    v-for="pdd in liPdds" :key="pdd.index"
                                    :style="{
                                        'display':'flex', 
                                        'flex-direction':'column',
                                        'width':'200px'
                                    }">

                                    <div class="pdds_posi">

                                        <v-chip v-for="elem in pdd.lista_pedidos" :key="elem.index"
                                        class="prods_int"
                                        color="rgb(38, 53, 98)"
                                        label
                                        text-color="white"
                                        >
                                            <v-icon left>
                                                mdi-label
                                            </v-icon>

                                            {{ elem.nomeP }}

                                            <v-divider :style="{'margin':'1%'}" vertical></v-divider>
                                            
                                            <span :style="{'color':'green'}">
                                                {{ elem.precoP | dinheiro }}
                                            </span>
                                        </v-chip>

                                    </div>

                                    <v-spacer></v-spacer>

                                    <v-divider :style="{'margin':'1%'}" horizontal></v-divider>

                                    <div v-if="pdd.confirm == '0'" :style="{'width': '100%', 'font-size':'14px'}">
                                        <span :style="{'color':'red'}">Esperando Confirmação</span>
                                    </div>
                                    <div v-else-if="pdd.confirm == '1'" :style="{'width': '100%', 'font-size':'14px'}">
                                        <span :style="{'color':'green'}">Pedido Confirmado</span>
                                    </div>
                                    <div v-else-if="pdd.confirm == '2'" :style="{'width': '100%', 'font-size':'14px'}">
                                        <span :style="{'color':'blue'}">Pedido Concluído</span>
                                    </div>
                                    <div v-else-if="pdd.confirm == '3'" :style="{'width': '100%', 'font-size':'14px'}">
                                        <span :style="{'color':'red'}">Pedido Cancelado</span>
                                    </div>

                                    <v-divider :style="{'margin':'1%'}" horizontal></v-divider>

                                    <div :style="{'width': '100%', 'font-size':'14px'}">
                                        Pedido
                                        <div :style="{'display':'flex', 'align-self':'center'}">{{ pdd.data_inicio }}</div>
                                    </div>

                                    <v-divider :style="{'margin':'1%'}" horizontal></v-divider>

                                    <div :style="{'width': '100%', 'font-size':'14px'}">
                                        Entrega
                                        <div :style="{'display':'flex', 'align-self':'center'}">{{ pdd.data_entrega }}</div>
                                    </div>

                                </div>

                            </div>

                        </div>

                        <!-- INFORMAÇÃO DE COMO EDITAR -->
                        <v-snackbar
                        v-model="snackbar"
                        :multi-line="multiLine"
                        >
                        {{ text }}

                        <template v-slot:action="{ attrs }">
                            <v-btn
                            color="rgb(168, 243, 15)"
                            text
                            v-bind="attrs"
                            @click="$store.state.snackbar = false"
                            >
                            Fechar
                            </v-btn>
                        </template>
                        </v-snackbar>

                        <!-- CONFIRMAÇÃO DE EDIÇÃO -->
                        <v-snackbar
                        v-model="snackbar2"
                        :multi-line="multiLine2"
                        >
                        {{ text2 }}

                        <template v-slot:action="{ attrs }">
                            <v-btn
                            color="rgb(168, 243, 15)"
                            text
                            v-bind="attrs"
                            @click="snackbar2 = false"
                            >
                            Fechar
                            </v-btn>
                        </template>
                        </v-snackbar>

                    </div>

                    <!-- lateral auxiliar com menu, para tam pequeno -->
                    <div class="elem_lat_aux hidden-md-and-up">

                        <v-menu
                        open-on-hover
                        top
                        offset-y
                        >
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                icon
                                large
                                class="animate__animated animate__flash"
                                color="primary"
                                dark
                                v-bind="attrs"
                                v-on="on"
                                >
                                    <v-icon color="rgb(168, 243, 15)">
                                        mdi-menu
                                    </v-icon>
                                </v-btn>
                            </template>

                            <v-list>
                                <v-list-item link font-color="rgb(168, 243, 15)"
                                v-for="(item, index) in items"
                                :key="index"
                                @click="funcRotaMenuDrop(item.title)"
                                >
                                <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>

                            <div class="btn_logout">
                                <v-btn @click="logoutFunc()" 
                                    dark 
                                    class="btn_logout_int"
                                    :style="{'width':'100%'}"
                                    >
                                    <span>LOGOUT</span>
                                </v-btn>
                            </div>

                        </v-menu>
                    </div>

                    <!-- lateral auxiliar para tamanho grande -->
                    <div class="elem_lat_aux hidden-sm-and-down"></div>

                </div>

                <div class="hidden-sm-and-down">
                    <MenuLateral/>
                </div>

            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios'

import MenuLateral from './MenuLateral'
//import EditCadastro from './EditCadastro'

export default {
    components: { MenuLateral },
    data(){
        return {

            // Barra de carregamento inicial.
            exibirMain: false,
            interval: {},
            value: 0,

            items: [
            { title: 'Meus Pedidos', icon: 'mdi-label' },
            { title: 'Meu Cadastro', icon: 'mdi-account-arrow-left' },
            ],

            nameEditVAR: '',
            adressEditVAR: '',
            phoneEditVAR: '',
            pwdEditVAR: '',

            axios_teste: {
                
                idClient: 0,
                nameClient: 'Carlos Eduardo',
                adressClient: 'Av. um com a outra nº32',
                phoneClient: '987123321',
                pwdClient: '123456',               
                },
            
            liPdds: [],
            confirmClient: '', // confirmação de aceitação do pedido.

            showNotPdds: false,

            // Snackbars (INFO)
            multiLine: true,
            //snackbar: false, // false on int ---> state
            text: `Sobreponha o texto para editá-lo.`,

            // Snackbars (CONFIRM)
            multiLine2: true,
            snackbar2: false, // false on int
            text2: `Edição realizada com sucesso.`,
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
        snackbar(){
            return this.$store.state.snackbar
        },
        Aucc(){
            return this.$store.state.Aucc
        },
        c_name(){
            return this.$store.state.c_name
        },
        flag_cad(){
            return this.$store.state.flag_cad
        },
        tmpAdress(){
            return this.$store.state.tmpAdress
        },
        tmpPhone(){
            return this.$store.state.tmpPhone
        },
        tmpPwd(){
            return this.$store.state.tmpPwd
        },
        tmpLiPddsClient(){
            return this.$store.state.tmpLiPddsClient
        }
    },
    methods: {
        nameEdit(name){
            
            console.log(name)

            const self = this

            axios.post(`https://castarcms.club/api/post_edit_name_client`, {

                name_rcv: name,
                old_name: self.$store.state.c_name

            }).then(function (response) {

                //console.log(response.data.result)

                if(response.data.result == 'nome_existente'){

                    //console.log('nome já existente. Escolha outro.')
                    self.text2 = 'Nome já existente. Escolha outro.'
                    self.snackbar2 = true

                    return
                }
                else{

                    // Já alterado no db.
                    // alterar nome.
                    self.$store.state.c_name = name // geral
                    self.axios_teste.nameClient = name //  local
                    
                    self.text2 = `Edição realizada com sucesso.`
                    self.snackbar2 = true
                }

            })

            //this.snackbar2 = true
        },
        adressEdit(adress){

            this.snackbar2 = false
            
            console.log(adress)

            const self = this

            axios.post(`https://castarcms.club/api/post_edit_adress_client`, {

                adress_rcv: adress,
                old_name: self.$store.state.c_name

            }).then(function (res) {

                console.log(res.data.result) // test visual

                // Já alterado no db.
                self.axios_teste.adressClient = adress //  local
                
                self.text2 = `Edição realizada com sucesso.`
                self.snackbar2 = true

            })
        },
        phoneEdit(phone){
            
            console.log(phone)

            this.snackbar2 = false

            const self = this

            axios.post(`https://castarcms.club/api/post_edit_phone_client`, {

                phone_rcv: phone,
                old_name: self.$store.state.c_name

            }).then(function (res) {

                console.log(res.data.result) // test visual

                // Já alterado no db.
                self.axios_teste.phoneClient = phone //  local
                
                self.text2 = `Edição realizada com sucesso.`
                self.snackbar2 = true

            })
        },
        pwdEdit(pwd){
            
            this.snackbar2 = false

            const self = this

            axios.post(`https://castarcms.club/api/post_edit_pwdx_client`, {

                pwd_rcv: pwd,
                old_name: self.$store.state.c_name

            }).then(function (res) {

                console.log(res.data.result) // test visual

                // Já alterado no db.
                // no ambiente local não é necessário
                
                self.text2 = `Edição realizada com sucesso.`
                self.snackbar2 = true

            })
        },
        funcRotaMenuDrop(itemSelected){

            if(itemSelected == 'Meus Pedidos'){

                this.$store.state.MeuCadastro = false
                this.$store.state.MeusPedidos = true

                this.$store.state.snackbar = false // desabilitar para manter a sinc.

                if(this.$store.state.tmpLiPddsClient.lenght == 0){

                    this.$store.state.showNotPdds = true
                }
                else{

                    this.$store.state.showNotPdds = false
                }
            }
            else{
                if(itemSelected == 'Meu Cadastro'){

                    this.$store.state.MeuCadastro = true
                    this.$store.state.MeusPedidos = false

                    this.$store.state.snackbar = true // box inf com info de usabilidade no cadastro.

                    this.$store.state.showNotPdds = false // Não há pdds na page cadastro
                }  
            }
        },
        logoutFunc(){
            
            this.$store.state.cadastro_ativo = false
            this.$store.state.login_ativo = true // HABILITAR PÁGINA INICIAL DE LOGIN CLIENT.
            this.$store.state.client_ativo = false
        },
    },
    beforeDestroy () {
        
        clearInterval(this.interval)
    },
    mounted () {
        
        this.interval = setInterval(() => {

            if (this.value === 100) {
                
                this.exibirMain = true // exibir lista de pedidos.
                
                // Caso inicie no bool de cadastro, abrir snackbar.
                if(this.$store.state.MeuCadastro == true){

                    this.$store.state.snackbar = true // barra inferior com informações de usabilidade.
                }

                // auth c.
                if(this.$store.state.Aucc == true){

                    // Se for pós cadastro, == 1, não é necessário fazer requisição.
                    if(this.$store.state.flag_cad == 1){
                        
                        this.axios_teste = {
                            
                            idClient: 0, // não necessário.
                            nameClient: this.$store.state.c_name,
                            adressClient: this.$store.state.tmpAdress,
                            phoneClient: this.$store.state.tmpPhone,
                            pwdClient: '123456',
                        }

                        // Habilitar msg "Sem pedidos para apresentar"
                        this.$store.state.showNotPdds = true
                    }
                    else{

                        this.axios_teste = {
                            
                            idClient: 0, // não necessário.
                            nameClient: this.$store.state.c_name,
                            adressClient: this.$store.state.tmpAdress,
                            phoneClient: this.$store.state.tmpPhone,
                            pwdClient: '123456',
                        }

                        this.liPdds = this.$store.state.tmpLiPddsClient
                        this.$store.state.showNotPdds = false // habilitar pedidos.
                    }

                    //console.log('fazer POST do c_name em busca do cliente')
                }

                //this.getProductsByIdCateg();
                //console.log('chamar rotina get pedidos pelo idClient')
            }
            this.value += 50
        }, 1000)

    },
}
</script>