<style scoped>
    @import url("./textFront-style.scss");
</style>

<template>

    <div class="main_text_front">

        <div class="elem2_text">
            <span v-for="(item, i) in items" :key="i"
                :visibleSlide="visibleSlide"
                v-show="visibleSlide == i"
                :style="{ 'color' : item.corTx }"
            >
                {{ item.mainText }}
            </span>
        </div>

        <div class="elem3_text">

            <span v-for="(item, i) in items" :key="i"
                class="elem3_text_int animate__animated animate__bounce"
                :visibleSlide="visibleSlide"
                v-show="visibleSlide == i"
            >
                <span class="tx_peq" :style="{'color':'rgb(54, 75, 13)'}"> {{ item.secText }} </span>

                <div class="style_btn">
                    <v-btn @click="chamarAuxPage(i)"
                        outlined 
                        plain 
                        block 
                        class="elem3_left_int"
                        :style="{'color':'rgb(54, 75, 13)'}"
                        >
                        SABER MAIS
                    </v-btn>
                </div>

            </span>
        </div>

        <!--
        <div class="elem1_text">
            <v-btn @click="chamarAuxPage(i)"
                class="elem1_text_int black white--text" large block>
                ver mais
            </v-btn>
        </div>
        -->

    </div>

</template>

<script>
export default {
    data () {
      return {
        //visibleSlide: 0,
      }
    },
    methods: {
        chamarAuxPage(i){

            //console.log(i) // chamar aux page pelo índice do elem apresentado no carousel.

            this.$store.state.item_escolhido = i // tmp save index da lista carousel.

            this.$router.push('/MaisInformações')
        },
    },
    computed: {
      items() {
          return this.$store.state.items // lista de imagens carousel.
      },
      visibleSlide() {
          return this.$store.state.visibleSlide // lista de imagens carousel.
      }
    },
}
</script>