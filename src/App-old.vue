<template>
  <v-app>
    
    <v-overlay :value="main_overlay" :opacity="0.97" class="config_tx">

      <!-- em SMALL SCREEN ------------------------------------------------------------------>
      <div class="linha_check hidden-md-and-up" :style="{'margin-left':'5%','width':'200px'}">
        <input type="checkbox" id="checked1" v-model="checked1" class="elem_linha_check">
        <label :style="{'margin':'5px'}" for="checkbox" class="elem_linha_check">Tenho mais de 18 anos</label>
      </div>

      <div class="linha_check hidden-md-and-up" :style="{'margin-left':'5%','width':'200px'}">
        <input type="checkbox" id="checked2" v-model="checked2" class="elem_linha_check">
        <v-expansion-panels accordion class="elem_linha_check">
            <v-expansion-panel
                for="checkbox"
                :style="{
                    'color':'rgb(12, 41, 39)',
                    'background':'rgba(255, 255, 255, 0.8)'}"
            >
                <v-expansion-panel-header :style="{'font-weight':'bold'}">
                    Concordo com os termos de uso
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                  <a @click="chamadaTermos()">Termos de uso</a>
                </v-expansion-panel-content>

            </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div class="linha_check hidden-md-and-up" :style="{'margin-left':'5%','width':'200px'}">
        <input type="checkbox" id="checked3" v-model="checked3" class="elem_linha_check">
        <v-expansion-panels accordion class="elem_linha_check">
            <v-expansion-panel
                for="checkbox"
                :style="{
                    'color':'rgb(12, 41, 39)',
                    'background':'rgba(255, 255, 255, 0.8)'}"
            >
                <v-expansion-panel-header :style="{'font-weight':'bold'}">
                    Concordo com a política de privacidade
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                    <a @click="chamadaPolitica()">Política de privacidade</a>
                </v-expansion-panel-content>

            </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div class="linha2_check hidden-md-and-up">
        <v-btn class="elem_linha2_check"
          :style="{'width':'200px', height:'100px', 'margin-left':'5%'}"
          color="error"
          @click="check_in()"
        >
        Entrar 
        </v-btn>

        <label v-if="msg_error"
          class="elem_linha2_check animate__animated animate__flash hidden-md-and-up"
          :style="{'color':'red', 'font-weight':'bold', 'font-size':'2rem', 'margin-left':'5%'}">
          TODOS OS CAMPOS DEVEM SER PREENCHIDOS.
        </label>
      </div>

      <!-- em tela grande ------------------------------------------------------------------->
      <div class="linha_check hidden-sm-and-down">
        <input type="checkbox" id="checked1" v-model="checked1" class="elem_linha_check">
        <label :style="{'margin':'5px'}" for="checkbox" class="elem_linha_check">Tenho mais de 18 anos</label>
      </div>

      <div class="linha_check hidden-sm-and-down">
        <input type="checkbox" id="checked2" v-model="checked2" class="elem_linha_check">
        <v-expansion-panels accordion class="elem_linha_check">
            <v-expansion-panel
                for="checkbox"
                :style="{
                    'color':'rgb(12, 41, 39)',
                    'background':'rgba(255, 255, 255, 0.8)'}"
            >
                <v-expansion-panel-header :style="{'font-weight':'bold'}">
                    Concordo com os termos de uso
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                  <a @click="chamadaTermos()">Termos de uso</a>
                </v-expansion-panel-content>

            </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div class="linha_check hidden-sm-and-down">
        <input type="checkbox" id="checked3" v-model="checked3" class="elem_linha_check">
        <v-expansion-panels accordion class="elem_linha_check">
            <v-expansion-panel
                for="checkbox"
                :style="{
                    'color':'rgb(12, 41, 39)',
                    'background':'rgba(255, 255, 255, 0.8)'}"
            >
                <v-expansion-panel-header :style="{'font-weight':'bold'}">
                    Concordo com a política de privacidade
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                    <a @click="chamadaPolitica()">Política de privacidade</a>
                </v-expansion-panel-content>

            </v-expansion-panel>
        </v-expansion-panels>
      </div>

      <div class="linha2_check hidden-sm-and-down">
        <v-btn class="elem_linha2_check"
          :style="{'width':'400px', height:'100px'}"
          color="error"
          @click="check_in()"
        >
        Entrar 
        </v-btn>

        <label v-if="msg_error"
          class="elem_linha2_check hidden-sm-and-down animate__animated animate__flash"
          :style="{'color':'red', 'font-weight':'bold', 'font-size':'2rem'}">
          TODOS OS CAMPOS DEVEM SER PREENCHIDOS.
        </label>
      </div>

    </v-overlay>

    <div class="config_main">

      <!-- acionado quando o overlay for desativado -->
      <MainMenuAll v-if="liberar_menu" />

      <div>
        <router-view />
      </div>

      <FooterGSC/>
    </div>

  </v-app>
</template>

<script>

//      <v-app class="config_main_page">
//        <MainFront/>
//      </v-app>

import MainMenuAll from './components/MainMenuAll'
//import MainFront from './components/MainFront'
import FooterGSC from './components/FooterGSC'

//import CategoriasPage from './components/CategoriasPage'

export default {
  name: 'App',

  components: {

    MainMenuAll,
    //MainFront,
    //CategoriasPage,

    FooterGSC
  },

  data() {
    return {
      theFirst: true,
      theSecond: false,

      overlay: true,
      msg_error: false,

      checked1: null,
      checked2: null,
      checked3: null,

      //scroll termos
      gat1: false,
      //scroll politica
      gat2: false,
    }
  },
  computed: {
    main_overlay(){
      return this.$store.state.main_overlay
    },
    footer_overlay(){
      return this.$store.state.footer_overlay
    },
    liberar_menu(){
      return this.$store.state.liberar_menu
    }
  },
  methods: {
    check_in(){
      if(this.checked1 && this.checked2 && this.checked3){

        //this.overlay = false
        this.$store.state.main_overlay = false
        this.$store.state.footer_overlay = false

        this.$store.state.liberar_menu = true //
      }
      else{
        this.msg_error = true
        this.$store.state.main_overlay = true
      }
    },
    chamadaTermos(){

      //this.overlay = false // tmp unable overlay
      this.$store.state.main_overlay = false
      this.$store.state.footer_overlay = true // ainda deve está inativo.

      this.$store.state.termos_overlay = true
      
      this.$router.push('/exibtermosepoliticas')
    },
    chamadaPolitica() {

      this.$store.state.main_overlay = false
      this.$store.state.footer_overlay = true // ainda deve está inativo.

      this.$store.state.politica_overlay = true
      
      this.$router.push('/exibtermosepoliticas')
    }
  }
}
</script>

<style scoped src="@/style.scss" lang="scss" />
