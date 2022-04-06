<style scoped>
    @import url("../footer-style.scss");
</style>

<template>
    <div class="backFooter" v-if="!footer_overlay">
        <v-footer color="rgba(1, 1, 1, 0.8)" class="footer hidden-sm-and-down">

            <v-spacer></v-spacer>

            <div class="col1">

                <div class="p1">

                    <div class="elemFooter"><strong>Colaboradores e Parcerias</strong></div>

                    <span class="elemFooterInt" target="_blank" text >
                        <span class="textEnd mr-2">
                            <v-icon>mdi-open-in-new</v-icon>
                        </span>
                    </span>

                </div>

                <div class="p1">

                    <!--<div class="elemFooter"><strong>Mapa do Site</strong></div>-->

                    <span class="elemFooterInt">

                        <router-link 
                            to="/"
                            exact
                            active-class="active"
                            class="black--text routerStyle textEnd mr-2"
                        >

                            <span
                            @mouseover="hoverI = true"
                            @mouseleave="hoverI = false"
                            :class="{ active: hoverI }"
                            >

                                <span class="elem_menu_int">
                                    
                                    Início <!--<v-icon>mdi-open-in-new</v-icon>-->
                                    
                                </span>
                            </span>
                        
                        </router-link>
                    
                    </span>

                    <span class="elemFooterInt">
                        <router-link 
                            to="/SaibaMais"
                            exact
                            active-class="active"
                            class="black--text routerStyle textEnd mr-2"
                        >
                            <span
                            @mouseover="hoverA = true"
                            @mouseleave="hoverA = false"
                            :class="{ active: hoverA }"
                            class="textEnd mr-2">
                                Conheça a Cannabis <!--<v-icon>mdi-open-in-new</v-icon>-->
                            </span>
                        </router-link>
                    </span>
                    
                    <span class="elemFooterInt" target="_blank" text >
                        <router-link 
                            to="/QuemSomos"
                            exact
                            active-class="active"
                            class="black--text routerStyle textEnd mr-2"
                        >
                            <span 
                            @mouseover="hoverB = true"
                            @mouseleave="hoverB = false"
                            :class="{ active: hoverB }"
                            class="textEnd mr-2">
                                Quem Somos <!--<v-icon>mdi-open-in-new</v-icon>-->
                            </span>
                        </router-link>
                    </span>

                    <span class="elemFooterInt" target="_blank" text >
                        <router-link 
                            to="/MinhasCompras"
                            exact
                            active-class="active"
                            class="black--text routerStyle textEnd mr-2"
                        >
                            <span 
                            @mouseover="hoverC = true"
                            @mouseleave="hoverC = false"
                            :class="{ active: hoverC }"
                            class="textEnd mr-2">
                                Compras <!--<v-icon>mdi-open-in-new</v-icon>-->
                            </span>
                        </router-link>
                    </span>

                </div>

            </div>

            <v-spacer></v-spacer>

            <div class="col2 hidden-sm-and-down">

                <div class="elemFooter mt-2">
                    
                    <span class="">
                        Portugal, Covilhã 6200-156
                    </span>
                </div>

                <div class="elemFooter mt-2">
                    
                    <span class="">
                        Rua da Olivença 54
                    </span>
                </div>

                <div class="elemFooter mt-2">
                    
                    <span class="">
                        +351928113960
                    </span>
                </div>

                <div class="elemFooter mt-2">
                    
                    <span class="footers">
                        Green Social Clube &copy; {{ new Date().getFullYear() }}
                    </span>
                </div>

                <div class="elemFooter">
                    
                    <v-btn icon>
                        <v-icon @click="chamarInsta()" class="iconOne">mdi-instagram</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon @click="chamarYT()" class="iconOne">mdi-youtube</v-icon>
                    </v-btn>

                </div>

            </div>

        </v-footer>

        <!-- TAMANHO SMALL -->
        <v-footer color="rgba(1, 1, 1, 0.8)" class="footer-small hidden-md-and-up">

            <v-spacer></v-spacer>

            <div class="col1-small">

                <div class="p1-small">

                    <!--<div class="elemFooter-small"><strong>Mapa do Site</strong></div>-->

                    <span class="elemFooterInt-small">

                        <router-link 
                            to="/"
                            exact
                            active-class="active"
                            class="black--text routerStyle textEnd-small mr-2"
                        >

                            <span
                            @mouseover="hoverI = true"
                            @mouseleave="hoverI = false"
                            :class="{ active: hoverI }"
                            >

                                <span class="elem_menu_int-small">
                                    
                                    Início <!--<v-icon>mdi-open-in-new</v-icon>-->
                                    
                                </span>
                            </span>
                        
                        </router-link>
                    
                    </span>

                    <span class="elemFooterInt-small">
                        <router-link 
                            to="/SaibaMais"
                            exact
                            active-class="active"
                            class="black--text routerStyle textEnd-small mr-2"
                        >
                            <span
                            @mouseover="hoverA = true"
                            @mouseleave="hoverA = false"
                            :class="{ active: hoverA }"
                            class="elem_menu_int-small mr-2">
                                Conheça a Cannabis <!--<v-icon>mdi-open-in-new</v-icon>-->
                            </span>
                        </router-link>
                    </span>
                    
                    <span class="elemFooterInt-small" target="_blank" text >
                        <router-link 
                            to="/QuemSomos"
                            exact
                            active-class="active"
                            class="black--text routerStyle textEnd-small mr-2"
                        >
                            <span 
                            @mouseover="hoverB = true"
                            @mouseleave="hoverB = false"
                            :class="{ active: hoverB }"
                            class="elem_menu_int-small mr-2">
                                Quem Somos <!--<v-icon>mdi-open-in-new</v-icon>-->
                            </span>
                        </router-link>
                    </span>

                    <span class="elemFooterInt-small" target="_blank" text >
                        <router-link 
                            to="/MinhasCompras"
                            exact
                            active-class="active"
                            class="black--text routerStyle textEnd-small mr-2"
                        >
                            <span 
                            @mouseover="hoverC = true"
                            @mouseleave="hoverC = false"
                            :class="{ active: hoverC }"
                            class="elem_menu_int-small mr-2">
                                Compras <!--<v-icon>mdi-open-in-new</v-icon>-->
                            </span>
                        </router-link>
                    </span>

                </div>

                <div class="p1-small">

                    <div class="elemFooter-small"><strong>Colaboradores e Parcerias</strong></div>

                    <span class="elemFooterInt-small" target="_blank" text >
                        <span class="textEnd-small mr-2">
                            <v-icon>mdi-open-in-new</v-icon>
                        </span>
                    </span>

                </div>

            </div>

            <v-spacer></v-spacer>

            <div class="col2-small">

                <div class="elemFooter-small mt-2">
                    
                    <span class="">
                        Portugal, Covilhã 6200-156
                    </span>
                </div>

                <div class="elemFooter-small mt-2">
                    
                    <span class="">
                        Rua da Olivença 54
                    </span>
                </div>

                <div class="elemFooter-small mt-2">
                    
                    <span class="">
                        +351928113960
                    </span>
                </div>

                <div class="elemFooter-small mt-2">
                    
                    <span class="footers-small">
                        Green Social Clube &copy; {{ new Date().getFullYear() }}
                    </span>
                </div>

                <div class="elemFooter-small">
                    
                    <v-btn icon>
                        <v-icon @click="chamarInsta()" class="iconOne-small">mdi-instagram</v-icon>
                    </v-btn>

                    <v-btn icon>
                        <v-icon @click="chamarYT()" class="iconOne-small">mdi-youtube</v-icon>
                    </v-btn>

                </div>

            </div>

        </v-footer>
    </div>
</template>

<script>
//        <v-img class="mt-4" :src="require('@/assets/Asset5.png')"
//        width="100"
//       height="100"></v-img>
export default {

    data() {
        return {
            hoverI: false,
            hoverA: false,
            hoverB: false,
            hoverC: false,

            hoverInstagram: false,
            hoverYoutube: false,
        }
    },
    computed: {
        footer_overlay(){
            return this.$store.state.footer_overlay
        }
    },
    methods: {
        chamarInsta(){
            window.location = 'https://www.instagram.com/greensocialclube/'
        },
        chamarYT(){
            window.location = 'https://www.youtube.com/channel/UC8bTk8B3JzopXtycUhgHURg'
        }
    }
    
}
</script>