<style scoped>
    @import url("./styles/app.scss");
</style>

<template>
  <v-app class="box_appx">

    <v-overlay
      class="box_overlay"
      :absolute="absolute"
      :value="this.$store.state.statusOverLay"
    >
      <v-btn
        class="btn_overlay"
        :style="{'height':'230px'}"
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

          <!-- DENTRO DO BTN . PARA VER OS TERMOS DEVE SER MAIOR DE IDADE -->
          <v-btn color="rgba(168,243,15,1)" @click="verTermos()">Termos de uso</v-btn>
        </div>
      </v-btn>
    
    </v-overlay>

    <MenuMain v-if="this.$store.state.statusOverLay == false" />

    <v-main>
      <router-view/>
    </v-main>

    <ExtraLine v-if="this.$store.state.statusOverLay == false" />

    <Rodape v-if="this.$store.state.statusOverLay == false" />

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
    //overlay:true, // init on overlay.
  }),
  methods: {
    verTermos() {
      this.$store.state.statusOverLay = false // desabilitar overlay e habilitar app.

      var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))
      var update_trafegoLocal = {

          storedOverLay:false, // bool <------------------------------------ update
          storedUserLogado: trafegoLocal.storedUserLogado, // bool <-- hold
          storedDateUser: trafegoLocal.storedDateUser, // {} <-------- hold
          storedPddListUser: trafegoLocal.storedPddListUser, // [] <-- hold
          storedCarrinho: trafegoLocal.storedCarrinho, // [] <-------- hold
          storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <-- hold
          storedPddListGeral: trafegoLocal.storedPddListGeral // [] <- hold
      }
      localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

      this.$router.push('/termos')
    },
    changeOverLay () {

      //this.overlay = false
      this.$store.state.statusOverLay = false // desabilitar overlay e habilitar app.

      var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))
      var update_trafegoLocal = {

          storedOverLay:false, // bool <------------------------------------ update
          storedUserLogado: trafegoLocal.storedUserLogado, // bool <-- hold
          storedDateUser: trafegoLocal.storedDateUser, // {} <-------- hold
          storedPddListUser: trafegoLocal.storedPddListUser, // [] <-- hold
          storedCarrinho: trafegoLocal.storedCarrinho, // [] <-------- hold
          storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <-- hold
          storedPddListGeral: trafegoLocal.storedPddListGeral // [] <- hold
      }
      localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

      console.log('update_trafegoLocal: ',update_trafegoLocal)

      window.location.reload() // forçar update => renderizar home após overlay.
    }
  },
  mounted () {

      this.$store.commit('updateContentApp') // without param. Initial main GET Req.
      this.$store.commit('updateStatusLoja') // without param. Initial main GET Req.
      
      // pré-preenchimento das taxas de entrega.
      this.$store.commit('updatetxEntrega') // sem param GET Req.
  },
  created () {

    //this.overlay = this.$store.state.statusOverLay

    // -- STORAGE
    var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))
    console.log(trafegoLocal)
    // ---- STORAGE INIT
    if (trafegoLocal == null) {

      var update_trafegoLocal = {

          storedUserLogado: false, // bool <--- update
          storedDateUser: {}, // {} <---------- update
          storedPddListUser: [], // [] <------- update
          storedCarrinho: [], // [] <---------- update
          storageElemsCateg: {}, // {} <------- update (init from db)
          storedPddListGeral: {}, // [] <------- update (init from db)
          storedOverLay:true,
      }

      localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

    } else {

      //console.log('else - create')
      //console.log(trafegoLocal)
      this.$store.state.statusOverLay = trafegoLocal.storedOverLay
    
    }
  },
};
</script>
