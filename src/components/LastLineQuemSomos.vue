<style scoped>
    @import url("../LastLineQuemSomos.scss");
</style>

<template>
    <div 
        class="config_posi_linha4_quemSomos" 
        v-scroll="horizMov"
    >

        <div class="linha1">

            <span v-if="exibirHastag" class="elemLinha1 animate__animated animate__heartBeat">
                #GREENSOCIALCLUBE
            </span>
            <span v-else class="elemLinha1">
                #GREENSOCIALCLUBE
            </span>

            <v-btn
                @click="chamarInsta()"
                outlined 
                plained 
                :style="{'height': '50px', 'color':'rgb(54, 75, 13)'}" 
                class="style_text_aux"
                >
                    Nos Siga <v-icon>mdi-instagram</v-icon>
            </v-btn>

        </div>

        <div></div>

        <div class="linha3_quemSomos">

            <div 
                class="col1" 
                :style="{
                    'margin-right': marginRightMovelCol1 + '%',
                    'margin-left': marginLeftMovelCol1 + '%',
                    'height': '80%'
                }"
            >

                <img class=""
                    :src="require('@/assets/lumZ.png')"
                    :style="{
                        'width':'100%',
                        'height': '100%',
                        'border-radius': '98px'}"
                />
            </div>

            <div 
                class="col2"
                :style="{
                    'margin-right': marginRightMovelCol2 + '%',
                    'margin-left': marginLeftMovelCol2 + '%',
                    'height': '80%'
                }"
            >

                <img class=""
                    :src="require('@/assets/lumZ.png')"
                    :style="{'width':'100%', 'height': '100%', 'border-radius': '98px'}" 
                />
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            exibirContent: false,
            exibirHastag: true,

            marginLeftMovelCol1: 1, // De 1 até 40 [%]
            marginRightMovelCol1: 1, // De 0 até -40 [%]

            marginLeftMovelCol2: 1, // De 0 até -40 [%] 
            marginRightMovelCol2: 1, // De 1 até 40 [%]
        }
    },
    methods: {
        chamarInsta(){
            window.location = 'https://www.instagram.com/greensocialclube/'
        },
        horizMov() {

            console.log(window.scrollY)

            // Cruzamento.
            if (window.scrollY > 1300 && window.scrollY < 2150) {

                if (this.marginLeftMovelCol1 < 40) { // Qnt Igual (40) para os dois elem abaixo.

                    this.marginLeftMovelCol1 = this.marginLeftMovelCol1 + 0.8
                    this.marginRightMovelCol1 = this.marginRightMovelCol1 - 0.8

                    this.marginLeftMovelCol2 = this.marginLeftMovelCol2 - 0.8
                    this.marginRightMovelCol2 = this.marginRightMovelCol2 + 0.8
                }
            }

            // "Descruzamento"
            if (window.scrollY > 2150 && window.scrollY < 2400) {

                if (this.marginLeftMovelCol2 < 20) { // Qnt Igual (40) para os dois elem abaixo.

                    this.marginLeftMovelCol1 = this.marginLeftMovelCol1 - 0.8
                    this.marginRightMovelCol1 = this.marginRightMovelCol1 + 0.8

                    this.marginLeftMovelCol2 = this.marginLeftMovelCol2 + 0.8
                    this.marginRightMovelCol2 = this.marginRightMovelCol2 - 0.8
                }
            }

            // RESET (Qnd fora do intervalo scroll)
            if (window.scrollY > 2400 || window.scrollY < 1250) {

                this.marginLeftMovelCol1 = 1
                this.marginRightMovelCol1 = 1

                this.marginLeftMovelCol2 = 1
                this.marginRightMovelCol2 = 1

            }
        }
    }
}
</script>