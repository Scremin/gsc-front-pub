<style scoped>
    @import url("../gradienteManual-style.scss");
</style>

<template>
    <div class="pagGrad" v-scroll="handleScroll_watch">

      <v-img
        :style="{'width':'100%', 'height':'100px', 'margin-left':'-3px'}"
        gradient="to right bottom, white, rgba(200, 200, 200, 0.7)">
      </v-img>
      <v-img class="" 
        :style="{'width':'100%', 'height':'100px', 'margin-left':'-3px'}"
        gradient="to right bottom, rgba(100, 100, 100, 0.7), rgba(200, 200, 200, 0.7)">
      </v-img>
      <v-img class="" 
        :style="{'width':'100%', 'height':'100px', 'margin-left':'-3px'}"
        gradient="to right bottom, rgba(100, 100, 100, 0.7), rgba(50, 50, 50, 0.7)">
      </v-img>


      <v-img class="main_gradiente_pag"
        :style="{'width':'100%', 'height':'100px', 'margin-left':'-3px'}"
        gradient="to right bottom, rgba(5, 5, 5, 0.7), rgba(3, 3, 3, 0.7)">

        <div v-if="isActive" class="aparecerOne animate__animated animate__slideInUp" >
          <span text class="aparecerOne_int">
            {{ textoAppear }}
            <v-icon icon>mdi-arrow-down</v-icon>
          </span>
        </div>

      </v-img>


      <v-img class="" 
        :style="{'width':'100%', 'height':'100px', 'margin-left':'-3px'}"
        gradient="to right bottom, rgba(2, 2, 2, 0.7), rgba(1, 1, 1, 0.7)">
      </v-img>
      <v-img class="" 
        :style="{'width':'100%', 'height':'100px', 'margin-left':'-3px'}"
        gradient="to right bottom, rgba(1, 1, 1, 0.7), rgba(1, 1, 1, 0.9)">
      </v-img>
      <v-img class="" 
        :style="{'width':'100%', 'height':'100px', 
        'margin-bottom':'-4px', 
        'margin-left':'-3px',
        }"
        gradient="to right bottom, rgba(1, 1, 1, 0.9), black">
      </v-img>
    </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      textoAppear: 'Conheça nosso canal no YouTube',
    }
  },
  methods: {
    handleScroll_watch() {

      if(window.scrollY < 1650 || window.scrollY > 2130) {
          this.isActive = false
      }
      else {
          this.isActive = true
      }

    }
  }
}
</script>