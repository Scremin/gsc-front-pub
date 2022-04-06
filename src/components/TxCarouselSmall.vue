<style scoped>
    @import url("../tx-carousel-small.scss");
</style>

<template>
    <div>
        <div>
            <div class="tx-carousel-main">

                <div class="tx-ext">

                    <span v-for="(item, j) in items_tx_Small" :key="j"
                        :visibleSlide="visibleSlide"
                        v-show="visibleSlide == j"
                        :style="{ 'color' : item.corTx }"
                    >
                        <span class="tx_int animate__animated animate__bounceInDown">{{ item.mainText }}</span>
                        <span class="tx_peq animate__animated animate__bounce">{{ item.secText }}</span>
                    </span>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            tx_1: 'teste testeteste teste testestets teste teste tt tetstet ststegwg gsgsgsgsgs gsgsg',
        }
    },
    computed: {
      items_tx_Small() {
          return this.$store.state.items_tx_Small // lista de imagens carousel. (small)
      },
      visibleSlide() {
          return this.$store.state.visibleSlide // lista de imagens carousel.
      }
    },
}
</script>