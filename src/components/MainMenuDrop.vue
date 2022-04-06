<style scoped>
    @import url("../mainMenuDrop-style.scss");
</style>

<template>
    <div class="main_sup_menu" v-scroll="handleScroll_main">

        <v-app-bar
        color="rgba(255, 255, 255, 0.1)"
        app
        :height="heightMenu + 'px'"
        :style="{width: '100%'}"
        flat>

            <v-toolbar-items class="hidden-md-and-up animate__animated animate__flash">

                <MenuSmall />

            </v-toolbar-items>

            <v-spacer></v-spacer>

            <router-link
                to="/"
                exact
                active-class="active"
                class="black--text elem_menu routerStyle"
            >
                <span :style="{'font-size':'2rem'}" class="hidden-sm-and-down">GREEN</span>

                <!-- LOGO pequeno -->
                <span
                    class="elem_menu_int font-weight-bold hidden-md-and-up"
                    :style="{
                        'height':'100px', 'width':'100px',
                        'border-radius': '30px', 'margin-left': '-30%',
                         background:'rgba(255, 255, 255, 0.1)',
                         
                         }"
                    @click="selecZero()">
                
                    <v-img
                        :style="{
                            'border-radius':'60px',
                            background:'rgba(255, 255, 255, 0.1)',
                            }"
                        :src="require('../assets/gh.jpg')"
                    />
                
                </span>

                <!-- LOGO grande -->
                <span
                    class="elem_menu_int font-weight-bold hidden-sm-and-down"
                    :style="{
                        'height':'159px', 'width':'163px',
                        'border-radius': '30px',
                         background:'rgba(255, 255, 255, 0.1)',
                         
                         }"
                    @click="selecZero()">
                
                    <v-img
                        :style="{
                            'border-radius':'60px',
                            background:'rgba(255, 255, 255, 0.1)',
                            }"
                        :src="require('../assets/gh.jpg')"
                    />
                
                </span>

                <span :style="{'font-size':'2rem'}" class="hidden-sm-and-down">HOUSE</span>

            </router-link>

            <v-spacer></v-spacer>

            <template v-slot:extension>

                <v-tabs 
                    v-if="exibirTabs" 
                    color="rgba(121, 174, 64, 1)"
                    class="ml-10 hidden-sm-and-down"
                    v-model="active_tab"
                >

                        <v-tab
                        @click="selecZero()"
                        >

                            <span class="black--text routerStyle">INÍCIO</span>
                            <!--
                            <router-link
                                to="/"
                                exact
                                active-class="active"
                                class="black--text routerStyle"
                            >
                                
                                    Início

                            </router-link>
                            -->
                        
                        </v-tab>

                        <v-tab
                        @mouseover="DropMenu()"
                        @click="selecOne()"
                        >

                            <span class="black--text routerStyle">COMPRAS</span>
                            <!--
                            <router-link 
                                to="/MinhasCompras"
                                exact
                                active-class="active"
                                class="black--text routerStyle"
                            >
                                
                                    COMPRAS

                            </router-link>
                            -->
                        
                        </v-tab>


                        <v-tab @click="selecTwo()">

                            <span class="black--text routerStyle">SOBRE NÓS</span>
                            <!--
                            <router-link 
                                to="/QuemSomos"
                                exact
                                active-class="active"
                                class="black--text routerStyle"
                            >
                                
                                    SOBRE NÓS

                            </router-link>
                            -->

                        </v-tab>

                        <v-tab @click="selecThree()">

                            <span class="black--text routerStyle">CONHEÇA A CANNABIS</span>
                            <!--
                            <router-link 
                                to="/SaibaMais"
                                exact
                                active-class="active"
                                class="black--text routerStyle"
                            >
                                
                                CONHEÇA A CANNABIS

                            </router-link>
                            -->

                        </v-tab>

                </v-tabs>
            
            </template>

            <v-toolbar-items>

                <v-btn @click="chamarCarrinho()" text>
                    <span>{{ qntProds }}</span>
                    <v-icon icon>mdi-cart</v-icon>
                </v-btn>

                <v-btn class="hidden-sm-and-down" text @click="chamarCliente()">
                    <span class=""></span>
                    <v-icon icon>mdi-account</v-icon>
                </v-btn>

            </v-toolbar-items>

        </v-app-bar>

    </div>
</template>

<script>
import axios from 'axios'
import MenuSmall from './MenuSmall'

export default {
    data() {
        return {
            active_tab_local: null,

            heightMenu: 163,
            items: [
                { title: 'Início', icon: 'mdi-chart-bar' },
                { title: 'Adicionar Produto', icon: 'mdi-barcode' },
                { title: 'Editar Produtos', icon: 'mdi-barcode-scan' },
            ],
            hoverMenu: false,
            menuChange: true,
            admins: [
                ['Settings', 'mdi-cog-outline'],
            ],
        }
    },
    components: {
        MenuSmall,
    },
    methods: {
        DropMenu() {
            //console.log('estou no drop')

            this.menuChange = false

            this.$store.state.changeMenuDrop = true
        },
        selecZero() {

            this.$store.state.active_tab = 0

            this.RecolherMenu()

            this.$router.push('/')
        },
        selecOne() {

            this.$store.state.active_tab = 1

            this.$store.state.gatBebidas = 0 // Categoria bebidas acionadas para exibição.

            this.RecolherMenu()

            this.$router.push('/MinhasCompras')
        },
        selecTwo() {

            this.$store.state.active_tab = 2

            this.RecolherMenu()

            this.$router.push('/QuemSomos')
        },
        selecThree() {

            this.$store.state.active_tab = 3

            this.RecolherMenu()

            this.$router.push('/SaibaMais')
        },
        RecolherMenu() {
            //console.log('estou no recolhedor')

            this.menuChange = true

            this.$store.state.changeMenuDrop = false
        },
        handleScroll_main() {

            if(window.scrollY > 50) {
                this.heightMenu = 50 // menu em movimento scroll
            }
            else {
                this.heightMenu = 163 // menu inicial
            }
        },
        chamarCarrinho() {
            this.$router.push('/Carrinho')
        },
        chamarCliente(){

            //
            if(this.$store.state.client_ativo == true){

                this.uploadedContent = {

                    userE: this.$store.state.c_name
                }

                const self = this // const value to access the class axios properties.

                axios.post(`https://castarcms.club/api/sessao_xx`, this.uploadedContent).then(function (response) {
                    
                    self.auth_rcv = response.data.result.result

                    if(self.auth_rcv == 'autorizado'){

                        // tmp geral lista
                        self.$store.state.tmpLiPddsClient = response.data.result.liPdds // lista
                    }
                })
            }

            this.$router.push('/MinhaGreen')
        }
    },
    computed: {
        changeMenuDrop() {
            return this.$store.state.changeMenuDrop // exibir menu drop
        },
        exibirTabs() {
            return this.$store.state.exibirTabs // exibir tabs
        },
        qntProds() {
            return this.$store.getters.qntProds // qnt de elem no carrinho
        },
        active_tab() {
            return this.$store.state.active_tab // selecionador tab menu
        }
    },
    mounted() {
      this.active_tab_local = this.active_tab
    },
}
</script>
