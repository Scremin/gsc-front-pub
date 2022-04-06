<style scoped>
    @import url("../aux-carousel-style.scss");
</style>

<template>
  <div class="main_carousel">

    <div class="div_carousel"
      :style="{}"
      v-for="(item,i) in items"
      :key="i"
      :visibleSlide="visibleSlide"
      v-show="visibleSlide == i"
    >

      <img @click="next()" class=" animate__animated animate__flash"
        :src="item.src"
        :style="{'width':'100%', 'height': '100%'}"
      />

    </div>

  </div>
</template>

<script>
import axios from 'axios'
//  name="slide"
  export default {
    data () {
      return {
        timer: null,
        polling: null,

        lista_carousel: null,
      }
    },
    computed: {
      itemsLen() {
        return this.items.length
      },
      items() {
          return this.$store.state.items // lista de imagens carousel.
      },
      visibleSlide() {
          return this.$store.state.visibleSlide // lista de imagens carousel.
      },
      pararCarousel() {
          return this.$store.state.pararCarousel // parar carousel com scroll.
      },
      initContador() {
          return this.$store.state.initContador // inicialização carousel.
      },
    },
    methods: {
      next() {

        if(this.visibleSlide >= this.itemsLen - 1) {

          //this.visibleSlide = 0 // RESET
          this.$store.state.visibleSlide = 0 // RESET
        }
        else {
          //this.visibleSlide++
          this.$store.state.visibleSlide++
        }
      },
      contadorCarousel() {

        // fazer outra abordagem. Zerar contador em toda reentrada na pág.
        //console.log(this.initContador)

        //if (this.initContador) {

        this.polling = window.setInterval(() => {

          //console.log('dentro do interval 1')

          if(this.pararCarousel == true) {

            this.aux_index = this.$store.state.visibleSlide
            this.$store.state.visibleSlide = this.aux_index // STOP
          
          }
          else{ // Keep on

            if(this.visibleSlide >= this.itemsLen - 1) {

              this.$store.state.visibleSlide = 0 // RESET
            }
            else {
              this.$store.state.visibleSlide++
            }

          }

        }, 8000);

        const path = 'https://castarcms.club/api/get_carousel_front'

        const self = this

        axios.get(path)
          .then((res) => {

              self.lista_carousel = res.data.iCarousel; /* lista carousel formato front */

              //console.log(self.lista_carousel)

              self.$store.state.items = self.lista_carousel
              self.$store.state.items_tx_Small = self.lista_carousel
          })
          .catch((error) => {
          // eslint-disable-next-line
          console.error(error);
          });
      },
    },
    beforeDestroy () {

      clearInterval(this.polling)
    },
    created(){

      this.contadorCarousel() // inicializa com a pág
    },
  }
</script>