<style scoped>
    @import url("../rcv-carousel-style.scss");
</style>

<template>
    <div>
        <div class="main_rcv_carousel">

            <div class="lado_direito">
                <div class="ft_ext animate__animated animate__flash">

                    <v-img
                        :style="{'border-radius':'200px'}"
                        :src="items[item_escolhido].src"
                    />

                </div>
            </div>
            
            <div class="lado_esquerdo">

                <div class=sup>

                    <span> {{items[item_escolhido].tit}} </span>

                    <v-btn @click="voltarHomePage()" class=""
                    :style="{
                            
                        'box-shadow': '0 2px 10px rgba(121, 174, 64, 1)',
                        'border-radius': '18px',
                        'padding': '2%',
                        'width': '10%',
                        'height':'50px',
                        'font-size':'1.5rem',
                        'margin-left':'6%',
                        'margin-top':'-30%',
                        'color': 'rgb(168, 243, 15)'
                        }"
                    >
                        >
                    </v-btn>

                </div>

                <div class="inf">

                    <span class="p_tx txHover"> {{ items[item_escolhido].tx_1_aux }} </span>

                    <span class="p_tx txHover"> {{ items[item_escolhido].tx_2_aux }} </span>
                    
                </div>
            </div>

        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            texto_rcv: 'Texto de descrição teste para a promoção do elemento 1 do carousel. Quando precisarmos podemos escrever ainda mais um pouco para descrver aquilo que se passa no evento ou mesmo as especificações do lugar e da hora de chegada, assim como todas as regras de utilização vigintes.',
        }
    },
    methods: {
        voltarHomePage(){
            this.$router.push('/')
        },
        verif() {
            window.scrollTo(0,100)
        },
    },
    computed: {
      items() {

          return this.$store.state.items // lista de imagens carousel.
      },
      item_escolhido() {

          return this.$store.state.item_escolhido // item da lista carousel.
      }
    },
    created() {
        this.verif();
    }
}
</script>