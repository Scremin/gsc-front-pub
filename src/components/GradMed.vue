<style scoped>
    @import url("../gradMed.scss");
</style>

<template>
    <div class="gradMed">
        
        <!--
        <div class="p1"></div>
        <div class="p2"></div>
        -->

        <div class="aparecerOne" v-scroll="handleScroll_watch">
          
          <span v-if="isActive1" text class="aparecerOne_int_1 animate__animated animate__slideInUp">
            {{ textoAppear1 }}
            <v-icon icon>mdi-arrow-up</v-icon>
          </span>

          <div v-if="isActive2" text class="aparecerOne_int_2 animate__animated animate__slideInUp">
            {{ textoAppear2 }}
            <v-icon icon>mdi-arrow-down</v-icon>
          </div>
          
        </div>

    </div>
</template>

<script>
export default {
  data() {
    return {
      isActive1: false,
      isActive2: false,
      textoAppear1: 'Produtos que você só encontra aqui',
      textoAppear2: 'Conheça nosso canal no YouTube',
    }
  },
  methods: {
    handleScroll_watch() {

        //console.log(window.scrollY)

        // active 1
        if(window.scrollY < 1500 || window.scrollY > 1850) {
            this.isActive1 = false
        }
        else {
            this.isActive1 = true
        }
        // active 2
        if(window.scrollY < 1850 || window.scrollY > 2350) {
            this.isActive2 = false
        }
        else {
            this.isActive2 = true
        }

    }
  }
}
</script>