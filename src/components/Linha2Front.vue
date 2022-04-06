<style scoped>
    @import url("../Linha2Front-style.scss");
</style>

<template>

    <div class="linha2_front" v-scroll="handleScroll_main">
 
      <div class="elem1_linha2_front" :style="[{'margin-top': marginElemLeft + '%'}]">

          <div class="elem1_left">
              <span class="elem_left_int">QUEM SOMOS</span>
          </div>

          <div class="elem2_left">

            <span class="elem2_left_int">{{ textQuemSomos_a }}</span>
            
            <div class="style_btn">
                <v-btn @click="jumpQS()" 
                    outlined 
                    plain 
                    block 
                    class="elem3_left_int"
                    :style="{'color':'rgb(168, 243, 15)'}"
                    >
                    SABER MAIS
                </v-btn>
            </div>
            
            <span class="elem1Background">GREEN SOCIAL CLUBE</span>
          
          </div>

      </div>

      <div 
        class="elem2_linha2_front"
        :style="[{'margin-top': marginElemCenter + '%'},
                {'margin-left': marginElemCenterLeft + '%'},
                {'margin-right': marginElemCenterRight + '%'},
                {'width': widthElemCenter + 'px'}]"
        >
          <img class=""
            :src="require('@/assets/imgBackG2.png')"
            :style="{'width':'100%', 'height': '100%'}" 
          />
      </div>

      <div 
        @mouseover="abrirNextImg()" @mouseleave="exibirLeft = true"
        class="elem3_linha2_front" 
        :style="[{'margin-top': marginElemCenter + '%'}]"
        >
          <img v-if="exibirLeft"
            :src="require('@/assets/kit1.png')"
            :style="{'width':'100%', 'height': '60%'}"
            class="animate__animated animate__bounce"
          />
          <div class="elem1_right animate__animated animate__slideInUp" v-else>

            <span class="contentsRight animate__animated animate__zoomIn">
                <v-icon icon>mdi-cannabis</v-icon>
                <span class="endTextRight">{{ endText1 }}</span>
            </span>

            <span class="contentsRight animate__animated animate__zoomIn">
                <v-icon icon>mdi-cannabis</v-icon>
                <span class="endTextRight">{{ endText2 }}</span>
            </span>

            <span class="contentsRight animate__animated animate__zoomIn">
                <v-icon icon>mdi-cannabis</v-icon>
                <span class="endTextRight">{{ endText3 }}</span>
            </span>

          </div>
      </div>

    </div>

</template>

<script>
export default {
    data() {
        return {
            
            // - parallax externa
            marginElemLeft: 10,
            marginElemCenter: 20,
            marginElemRight: 5,

            marginElemCenterLeft: 2,
            marginElemCenterRight: 2,

            widthElemCenter: 300,

            // interno
            marginParallax_1: '2%',
            marginParallax_2: '2%',
            marginParallax_3: '2%',

            // QUEM SOMOS
            exibirLeft: true,
            endText1: 'Olá!',
            endText2: 'Queremos ser a inovação no interior e expandir as ideias da comunidade portuguesa. Apoiamos e incentivamos todos os tipos de eventos e exibições de arte e cultura, sem distinção de raça, cor, gênero ou qualquer outra forma de preconceito e discriminação.',
            endText3: 'Estamos localizados na cidade da Covilhã, na região do Pelourinho, na Rua da Oliveira nº 54, 6200-156, Portugal.',

            textQuemSomos_a: 'Somos a primeira hempshop de cannabis medicinal da cidade da Covilhã. Nascemos das dificuldades da pandemia, trazendo, com as novas mudanças, uma forma alternativa de pensamento e serviço, com produtos de base canábica e um ambiente que nos permite lembrar que...',
        }
    },
    methods: {
        jumpQS() {

            this.$router.push('/QuemSomos')

        },
        abrirNextImg() {
            this.exibirLeft = false
        },
        handleScroll_main() {

            //console.log(window.scrollY)

            // MOVIMENTAÇÃO VERTICAL. ELEMENTO CENTRAL. +--------------------------------+

            if(window.scrollY > 300 && window.scrollY < 1100) {

                if(this.marginElemCenter > -30) {

                    this.marginElemCenter = this.marginElemCenter - 1

                }
            }

            if(window.scrollY < 1550 && window.scrollY > 1000) {
                
                if(this.marginElemCenter < 10) { // antes 30 => invadia o outro component

                    this.marginElemCenter = this.marginElemCenter + 0.4

                }
            }

            // "reset"
            if(window.scrollY < 70) {

                this.marginElemCenter = 2

            }

            // MOVIMENTAÇÃO VERTICAL. ELEMENTO À DIREITA. +--------------------------------+

            if(window.scrollY > 300 && window.scrollY < 1100) {

                if(this.marginElemRight > -30) {

                    this.marginElemRight = this.marginElemRight - 0.2

                }
            }

            if(window.scrollY < 1550 && window.scrollY > 1000) {
                
                if(this.marginElemRight < 20) { // antes 30 => invadia o outro component

                    this.marginElemRight = this.marginElemRight + 0.4

                }
            }

            // "reset"
            if(window.scrollY < 70) {

                this.marginElemRight = 5

            }

            // -- MOVIMENTAÇÃO HORIZONTAL.

            // margem left em sobreposição
            /*if(window.scrollY > 430 && window.scrollY < 900) {
                
                if(this.marginElemCenterRight > -4) {

                    this.marginElemCenterRight = this.marginElemCenterRight - 0.1

                }
            }

            if(window.scrollY < 430 || window.scrollY > 900) {
                
                if(this.marginElemCenterRight < 2) {

                    this.marginElemCenterRight = this.marginElemCenterRight + 0.1

                }
            }*/

            // width
            /*if(window.scrollY > 980 && window.scrollY < 1500) {
                
                if(this.widthElemCenter < 600) {

                    this.widthElemCenter = this.widthElemCenter + 20

                }
            }

            if(window.scrollY < 980 || window.scrollY > 1500) {
                
                if(this.widthElemCenter > 300) {

                    this.widthElemCenter = this.widthElemCenter - 20

                }
            }*/
        }
    }
}
</script>