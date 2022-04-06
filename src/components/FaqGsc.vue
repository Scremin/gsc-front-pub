<style scoped>
    @import url("../faq-style.scss");
</style>

<template>
    <div>
        <div>

            <div :style="{margin:'1%', 'margin-bottom':'20%'}" v-if="!exibirMain" class="">
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

            <div v-if="exibirMain" class="faq-main-style">
                <div class="elem_central">

                    <div class="main_titulo">
                        FAQ
                    </div>
                    
                    <v-expansion-panels accordion>
                        <v-expansion-panel
                            v-for="(item,i) in faqDic.liFaqA"
                            :key="i"
                            :style="{
                                'color':'rgb(12, 41, 39)',
                                'background':'rgba(255, 255, 255, 0.1)'}"
                        >
                            <v-expansion-panel-header :style="{'font-weight':'bold'}">
                                {{ item.pergunta }}
                            </v-expansion-panel-header>

                            <v-expansion-panel-content>
                                {{ item.resposta }}
                            </v-expansion-panel-content>

                        </v-expansion-panel>
                    </v-expansion-panels>

                    <input v-if="gat_envio"
                        type="text" @input="req_faq = $event.target.value"
                        name="req_faq"
                        class="subheading btn-style"
                        :style="{'margin-top':'2%'}"
                        v-on:keyup.enter="req_faq_send(req_faq)"
                        :placeholder="texto_placeholder" />

                    <span v-if="!gat_envio" class="btn-style" :style="{'margin-top':'2%'}">Sua pergunta foi enviada. Aguarde a resposta para perguntar outra vez.</span>

                    <v-btn v-if="gat_envio" @click="req_faq_send(req_faq)"
                        class="btn-style" 
                        :style="{'background':'rgba(255, 255, 255, 0.4)'}">enviar</v-btn>

                </div>

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
                    Ok
                    </v-btn>
                </template>
                </v-snackbar>

            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            // inic
            // Barra de carregamento inicial.
            exibirMain: false,
            interval: {},
            value: 0,

            // Snackbars (CONFIRM)
            multiLine2: true,
            snackbar2: false, // false on int
            text2: `Sua pergunta foi enviada.`,

            gat_envio: true,
            req_faq: '',
            texto_placeholder: 'Escreva aqui a sua dúvida',       
        }
    },
    methods: {
        req_faq_send(req_faq){

            //console.log(req_faq)

            if(req_faq == ''){

                this.snackbar2 = true
                this.text2 = `Faça uma pergunta.`

                return
            }

            if(req_faq.length < 10){

                this.snackbar2 = true
                this.text2 = `Faça uma pergunta válida.`

                return
            }

            if(this.$store.state.client_ativo == true){

                const sender = {

                    ask_faq: req_faq,
                    client_name: this.$store.state.c_name
                }

                axios.post(`https://castarcms.club/api/post_add_faq`, sender).then(function () {
                    console.log('')
                })

                this.snackbar2 = true
                this.text2 = `Sua pergunta foi enviada.`

                //
                this.gat_envio = false

                // RESET
                this.req_faq = ''
                this.texto_placeholder = 'Escreva aqui a sua dúvida'
            }
            else{

                this.snackbar2 = true
                this.text2 = `Faça login antes de enviar a sua pergunta.`
            }
        },
    },
    beforeDestroy () {
        
        clearInterval(this.interval)
    },
    mounted () {

        window.scrollTo(0,0)

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