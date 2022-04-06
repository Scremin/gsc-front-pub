<style scoped>
    @import url("../carousel-small.scss");
</style>

<template>
    <div>
        <div>
            <div class="main_small_carousel">

                <div class=""
                    :style="{}"
                    v-for="(item,i) in items"
                    :key="i"
                    :visibleSlide="visibleSlide"
                    v-show="visibleSlide == i"
                >

                    <img @click="next()" class="animate__animated animate__flash"
                    :src="item.src"
                    :style="{'width':'100%', 'height': '100%'}"
                    />

                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            lista_carousel: null,
        }
    },
    methods:{
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
    }
}
</script>