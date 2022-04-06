<style scoped>
    @import url("../front-style.scss");
</style>

<template>

    <div class="config_main_front" v-scroll="handleScroll_main">

      <div class="elem1_front hidden-sm-and-down">

          <div class="elem1_left animate__animated animate__fade"
            :style="[{'box-shadow': shadowCarousel}]">
            
              <CarouselMain />
          
          </div>

          <div class="elem1_right animate__animated animate__bounce">
              <TextUpPosition />
          </div>

      </div>

      <!-- parte central da main page - SMALL screen -->
      <CarouselSmall class="hidden-md-and-up" />
      <TxCarouselSmall class="hidden-md-and-up" />
      <v-parallax
      :style="{
        'margin-top':'20%',
        'box-shadow':'0px 1px 10px yellow'
        }"
        class="hidden-md-and-up"
        height="200"
        :src="require('@/assets/imgBackG2.png')"
      ></v-parallax>
      <v-btn
          @click="chamarQuemSomos()"
          outlined 
          plained 
          :style="{'height': '100%', 'color':'rgb(168, 243, 15)', 'margin-bottom':'20%',}" 
          class="style_text_aux hidden-md-and-up"
          >
              Quem Somos
      </v-btn>
      <MedioSmall class="hidden-md-and-up" />

      <div class="elem2_front hidden-sm-and-down">
        <Linha2Front />
      </div>

      <div class="elem3_front hidden-sm-and-down">
        <GradMed />
      </div>

      <div class="elem4_front">
        <Linha3Front />
      </div>

      <div class="">
        <Linha5Front />
      </div>

    </div>

</template>

<script>
/*      <v-fab-transition>

        <v-btn
          color="green"
          fab
          large
          dark
          class="div_flutuante"
        >
          <v-icon>mdi-phone</v-icon>
        </v-btn>

      </v-fab-transition>*/
//      <div class="elem6_front">
//        <v-parallax
//          :style="{'height':'100%', 'width':'100%'}"
//          src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">
//        </v-parallax>
//      </div>

import axios from 'axios'

import CarouselMain from './CarouselMain'
import CarouselSmall from './CarouselSmall'
import TextUpPosition from './TextUpPosition'
import TxCarouselSmall from './TxCarouselSmall'
import MedioSmall from './MedioSmall'
import Linha2Front from './Linha2Front'
import GradMed from './GradMed'
import Linha3Front from './Linha3Front'
//import Linha4Front from './Linha4Front'
import Linha5Front from './Linha5Front'

export default {
  name: 'MainFront',

  components: {

    CarouselMain,
    CarouselSmall,
    TextUpPosition,
    TxCarouselSmall,
    MedioSmall,
    Linha2Front,
    GradMed,
    Linha3Front,
    //Linha4Front,
    Linha5Front,
  },

  data() {
    return {
      geralLi: [],

    }
  },
  methods: {
    chamarQuemSomos(){
      this.$router.push('/QuemSomos')
    },
    handleScroll_main() {

        // Shadow Carousel
        if(window.scrollY > 40) {
            this.$store.state.shadowCarousel = '0 2px 60px rgba(121, 174, 64, 1)'
        }
        else {
            this.$store.state.shadowCarousel = '0 2px 10px rgba(0, 0, 0, 0.65)'
        }

        // Carousel Control Scroll
        if(window.scrollY > 250) {
          this.$store.state.pararCarousel = true // STOP Carousel
        }
        else{
          if(window.scrollY < 250) {

            this.$store.state.pararCarousel = false // Turn on Carousel
          
          }
        }
    },
    getCategs() {

      window.scrollTo(0,0)

      this.$store.state.auth_router = true // liberar menu drop.

      const path = 'https://castarcms.club/api/get_categs_on_page'

      const self = this

      axios.post(path, {varGat: this.$store.state.gatBebidas}) // gatBebidas inicializada à 0.
          .then((res) => {

              /* lista de categorias */
              self.geralLi = res.data.result.prodGet
              /* var gat num id categoria bebidas */
              self.$store.state.numCategBebida = res.data.result.id_bebida_categ

              self.$store.state.geralLiCateg = self.geralLi

          })
          .catch((error) => {

              // eslint-disable-next-line
              console.error(error);
          });
    },
  },
  computed: {
    shadowCarousel() {
        return this.$store.state.shadowCarousel // sombra dinâmica.
    },
    pararCarousel() {
        return this.$store.state.pararCarousel // parar carousel com scroll.
    },
    geralLiCateg() {
        return this.$store.state.geralLiCateg // lista de categorias para o drop menu
    },
  },
  created() {
      this.getCategs();
  }
};
</script>