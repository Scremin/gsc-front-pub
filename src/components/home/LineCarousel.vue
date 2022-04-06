<style scoped>
    @import url("../../styles/homeStyle/lineCarousel.scss");
</style>

<template>

    <div class="box_lineCarousel ">
        
        <!-- LARGE -->
        <div 
        class="div_carousel hidden-sm-and-down"
        :style="{}"
        v-for="(item,i) in items"
        :key="i"
        :visibleSlide="visibleSlide"
        v-show="visibleSlide == i"
        >

            <img 
            @click="next()" 
            class="imgs_carousel animate__animated animate__flash"    
            :src="item.img"
            />

            <span class="txt_carousel animate__animated animate__flash">
                
                <span class="tit_carousel">{{ item.txt1 }}</span>
                
                <!--<span class="frase_carousel">{{ item.txt2 }}</span>-->
                
                <v-btn 
                plain
                large
                class="green--text btn_carousel" @click="saberMain(item)">Saber mais</v-btn>
            </span>

        </div>

        <!-- SMALL -->
        <div 
        class="div_carousel_s hidden-md-and-up"
        :style="{}"
        v-for="(item,i) in items"
        :key="i"
        :visibleSlide="visibleSlide"
        v-show="visibleSlide == i"
        >

            <img 
            @click="next()" 
            class="imgs_carousel_s animate__animated animate__flash"    
            :src="item.img"
            />

            <span class="txt_carousel_s animate__animated animate__flash">
                
                <span class="tit_carousel_s">{{ item.txt1 }}</span>
                
                <!--<span class="frase_carousel">{{ item.txt2 }}</span>-->
                
                <v-btn 
                plain
                large
                class="green--text btn_carousel_s" @click="saberMain(item)">Saber mais</v-btn>
            </span>

        </div>

    </div>

</template>

<script>
import axios from 'axios'

//import LineCarousel from './LineCarousel.vue'

export default {
    
    //components: { LineCarousel }

    data() {
        return {

            timer: null,
            polling: null,
            lista_carousel: null,

            pararCarousel: false, // parar carousel com scroll.
            visibleSlide: 0, // posição da lista de imagens carousel.
            item_escolhido: 0, // item da lista carousel ao chamar a aux page.
            aux_index: 0,
            items: [
                {
                    img:require('../../assets/imgs/imgBackG2.png'),
                    txt:'Frase qualquer para a imagem de divulgação',
                    tipoOp:'divulgacao',
                    txt1:'O seu clube na Covilhã',
                    txt2:'Na nossa plataforma você pode conhecer um pouco mais sobre a cannabis e tem a oportunidade de receber em casa a sua flor preferida.'
                },
                {
                    img:require('../../assets/imgs/kit1.png'),
                    txt1:'Produto promocional',
                    tipoOp:'produto',
                    idC:1,
                    idP:0
                }
            ], // Lista com o conteúdo carousel front. (large)
        }
    },

    methods: {
        saberMain(item) {

            if(item.tipoOp == 'produto') {

                // rcv dados do produto selecionado.
                this.$store.state.idC_descricao = item.idC
                this.$store.state.idP_descricao = item.idP
                this.$store.state.tit_descricao = this.$store.state.prodLiGlobal[item.idC].categ[item.idP].tit
                this.$store.state.desc_descricao = this.$store.state.prodLiGlobal[item.idC].categ[item.idP].desc
                this.$store.state.pr_descricao = this.$store.state.prodLiGlobal[item.idC].categ[item.idP].pr
                this.$store.state.img_descricao = this.$store.state.prodLiGlobal[item.idC].categ[item.idP].img
                this.$store.state.statusProd_descricao = this.$store.state.prodLiGlobal[item.idC].categ[item.idP].statusProd
                this.$router.push('/descricao')
            }

            if(item.tipoOp == 'divulgacao') {

                this.$store.state.titDivulg = item.txt1
                this.$store.state.txtDivulg = item.txt2
                this.$store.state.imgDivulg = item.img
                this.$router.push('/divulg')
            }
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

    mounted () {
        //
    },

    created(){

        this.contadorCarousel() // inicializa com a pág

        // buscar conteúdo carousel.
        var params = {

            token:'testToken',
            func:'getPromo',
            data:'' /* GET request */
        }

        const self = this
        
        axios.post(this.$store.state.pathAxios, params).then(function (res) {

            console.log(res.data.result)

            self.items[0] = res.data.result[0]
            self.items[1] = res.data.result[1]
            self.$store.state.img_parallax = res.data.result[2].img

            console.log('after rcv promo from axios')
        })
    },
}
</script>