<style scoped>
    @import url("../linha5_front-style.scss");
</style>

<template>
    <div>
        
        <div class="linha1" v-scroll="handleScroll_main">

            <!-- tam peq -->
            <div class="elemLinha1 hidden-md-and-up">
                <span 
                    v-if="exibirHastag"
                    :style="{'font-size':'1.5rem'}"
                    class="animate__animated animate__heartBeat">
                    #GREENSOCIALCLUBE
                </span>
                <span v-else class="" :style="{'font-size':'1.2rem'}">
                    #GREENSOCIALCLUBE
                </span>
            </div>

            <!-- tam grande -->
            <div class="elemLinha1 hidden-sm-and-down">
                <span v-if="exibirHastag" class="animate__animated animate__heartBeat">
                    #GREENSOCIALCLUBE
                </span>
                <span v-else class="">
                    #GREENSOCIALCLUBE
                </span>
            </div>

            <v-btn
                @click="chamarInsta()"
                outlined 
                plained 
                :style="{'height': '50px', 'color':'rgb(54, 75, 13)'}" 
                class="style_text_aux"
                >
                    Nos Siga <v-icon>mdi-instagram</v-icon>
            </v-btn>

        </div>

        <div class="main_linha5">

            <div class="main_titulo">
                FAQ
            </div>

            <div v-if="exibirMain" class="expansion_panel-style">

                <v-expansion-panels accordion>

                    <!-- elemento FAQ 0 -->
                    <v-expansion-panel
                        :style="{
                            'color':'rgb(12, 41, 39)',
                            'background':'rgba(255, 255, 255, 0.1)'}"
                    >
                        <v-expansion-panel-header :style="{'font-weight':'bold'}">
                            {{ faqDic.liFaqA[0].pergunta }}
                        </v-expansion-panel-header>

                        <v-expansion-panel-content>
                            {{ faqDic.liFaqA[0].resposta }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                    <!-- elemento FAQ 1 -->
                    <v-expansion-panel
                        :style="{
                            'color':'rgb(12, 41, 39)',
                            'background':'rgba(255, 255, 255, 0.1)'}"
                    >
                        <v-expansion-panel-header :style="{'font-weight':'bold'}">
                            {{ faqDic.liFaqA[1].pergunta }}
                        </v-expansion-panel-header>

                        <v-expansion-panel-content>
                            {{ faqDic.liFaqA[1].resposta }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                    <!-- elemento FAQ 2 -->
                    <v-expansion-panel
                        :style="{
                            'color':'rgb(12, 41, 39)',
                            'background':'rgba(255, 255, 255, 0.1)'}"
                    >
                        <v-expansion-panel-header :style="{'font-weight':'bold'}">
                            {{ faqDic.liFaqA[2].pergunta }}
                        </v-expansion-panel-header>

                        <v-expansion-panel-content>
                            {{ faqDic.liFaqA[2].resposta }}
                        </v-expansion-panel-content>
                    </v-expansion-panel>

                </v-expansion-panels>
                
            </div>

            <v-btn
                @click="chamarFaq()"
                outlined 
                plained 
                :style="{'height': '30px', 'color':'rgb(168, 243, 15)'}" 
                class=""
                >
                    Ver Mais
            </v-btn>

        </div>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            // inic
            // Barra de carregamento inicial.
            exibirMain: false,
            interval: {},
            value: 0,

            exibirHastag: false,
        }
    },
    methods: {
        chamarFaq(){
            //console.log('chamar faq')
            this.$router.push('/faq')
        },
        chamarInsta(){
            window.location = 'https://www.instagram.com/greensocialclube/'
        },
        handleScroll_main() {

            // -- exibição hastag título
            if(window.scrollY > 2800 && window.scrollY < 3150) {

                this.exibirHastag = true
            }
            else {

                this.exibirHastag = false
            }
        }
    },
    beforeDestroy () {
        
        clearInterval(this.interval)
    },
    mounted () {

        const path = 'https://castarcms.club/api/get_faq_content'

        const self = this

        axios.get(path)
            .then((res) => {

                self.faqDic = res.data.iFaq; /* lista */
                //console.log(this.faqDic.result); /* test rcv */

            })
            .catch((error) => {
            // eslint-disable-next-line
            console.error(error);
            });

        self.interval = setInterval(() => {

            if (self.value === 100) {
                
                self.exibirMain = true // exibir lista de faq, por status.
            }
            self.value += 50
        }, 1000)

    },
}
</script>