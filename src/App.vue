<style scoped>
    @import url("./styles/app.scss");
</style>

<template>
  <v-app class="box_appx">

    <v-overlay
      class="box_overlay"
      :absolute="absolute"
      :value="overlay"
    >
      <v-btn
        class="btn_overlay"
        :style="{'height':'200px'}"
        color="success"
        @click="changeOverLay()"
      >
        <div class="box_img_overlay">

          <img 
          :style="{'max-width':'160px','border-radius': '90px'}"
          class="el_img_overlay" 
          :src="require('./assets/imgs/gh-transp.png')"
          />

          <span class="box_txt_overlay">Tenho mais de 18 anos</span>
        </div>
      </v-btn>
    </v-overlay>

    <MenuMain v-if="overlay == false" />

    <v-main v-if="overlay == false">
      <router-view/>
    </v-main>

    <ExtraLine v-if="overlay == false" />

    <Rodape v-if="overlay == false" />

  </v-app>
</template>

<script>
import MenuMain from './components/MenuMain.vue'
import ExtraLine from './components/ExtraLine.vue'
import Rodape from './components/Rodape.vue'

export default {

  name: 'App',

  components: { MenuMain, ExtraLine, Rodape },

  data: () => ({
    absolute:true,
    overlay:true, // init on overlay.
  }),
  methods: {
    changeOverLay () {

      this.overlay = false
      this.$store.state.statusOverLay = this.overlay // desabilitar overlay e habilitar app.

      var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))
      var update_trafegoLocal = {

          storedOverLay:this.$store.state.statusOverLay, // bool <--------- update
          storedUserLogado: trafegoLocal.storedUserLogado, // bool <-- hold
          storedDateUser: trafegoLocal.storedDateUser, // {} <-------- hold
          storedPddListUser: trafegoLocal.storedPddListUser, // [] <-- hold
          storedCarrinho: trafegoLocal.storedCarrinho, // [] <-------- hold
          storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <-- hold
          storedPddListGeral: trafegoLocal.storedPddListGeral // [] <- hold
      }
      localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))
    }
  },
  mounted () {

      this.$store.commit('updateContentApp') // without param. Initial main GET Req.
      this.$store.commit('updateStatusLoja') // without param. Initial main GET Req.
      
      // pré-preenchimento das taxas de entrega.
      this.$store.commit('updatetxEntrega') // sem param GET Req.
  },
  created () {

    this.overlay = this.$store.state.statusOverLay

    // -- STORAGE
    var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))
    //console.log(trafegoLocal)
    // ---- STORAGE INIT
    if (trafegoLocal == null) {

        var update_trafegoLocal = {

            storedOverLay:this.$store.state.statusOverLay,
            storedUserLogado: false, // bool <--- update
            storedDateUser: {}, // {} <---------- update
            storedPddListUser: [], // [] <------- update
            storedCarrinho: [], // [] <---------- update
            storageElemsCateg: {}, // {} <------- update (init from db)
            storedPddListGeral: {} // [] <------- update (init from db)
        }

        localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

    } else {

      this.overlay = trafegoLocal.storedOverLay
    
    }
  },
};
</script>
