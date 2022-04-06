<style scoped>
    @import url("../Linha4front-style.scss");
</style>

<template>
    <div class="config_posi_linha4" v-scroll="handleScroll_main">

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
                :style="{'height': '100%', 'color':'rgb(54, 75, 13)'}" 
                class="style_text_aux"
                >
                    Nos Siga <v-icon>mdi-instagram</v-icon>
            </v-btn>

        </div>

        <div></div>

        <div class="linha3">

            <div class="col1" :style="{'margin-right': marginElemCenterRight + '%'}">
                <img class=""
                    :src="require('@/assets/b1.png')"
                    :style="{
                        'width':'100%',
                        'height': '100%'}"
                />
            </div>

            <div class="col2">
                <img class=""
                    :src="require('@/assets/b3.png')"
                    :style="{'width':'100%', 'height': '100%'}" 
                />
            </div>
        </div>

        <div 
            class="linha4" 
            :style="{
                'margin-top': marginElemCenterTop + '%',
                'height': heightElemCenter + '%',
            }"
        >

            <div @mouseover="funcExibi()" @mouseleave="exibirContent = true"
                
                class="elemLinha4" 
                :style="{
                    'width': widthElemCenter + '%', 
                    'margin-top': '-3%',
                    'height': '100%',
                    }" 
            >

                <img v-if="exibirContent" 
                    class="elemLinha4_int animate__animated animate__bounce"
                    :src="require('@/assets/b2.png')"
                    :style="{'width':'100%', 'height': '100%'}" 
                />

                <div v-else 
                    class="elemLinha4_int animate__animated animate__slideInUp"
                    :style="{'width':'100%', 'height': '100%'}"
                >

                    <span class="elemContent animate__animated animate__zoomIn">
                        <v-icon icon>mdi-cannabis</v-icon>
                        <span class="elemText">{{ endText1 }}</span>
                    </span>

                </div>

            </div>
        </div>

        <!-- Texto background -->
        <div class="linha2">
            GREEN SOCIAL CLUBE
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            exibirContent: true,
            endText1: 'Fique por dentro do stories mais divertidos da covilhã',

            widthElemCenter: 50, // %
            marginElemCenterRight: 1, // %
            heightElemCenter: 20, // %
            marginElemCenterTop: -3, // %

            exibirHastag: false,
        }
    },
    methods: {
        chamarInsta(){
            window.location = 'https://www.instagram.com/greensocialclube/'
        },
        funcExibi() {
            this.exibirContent = false
        },
        handleScroll_main() {

            //console.log(window.scrollY)

            // -- exibição hastag título
            if(window.scrollY > 2750 && window.scrollY < 3150) {

                this.exibirHastag = true
            }
            else {

                this.exibirHastag = false
            }
            // -- MOVIMENTAÇÃO HORIZONTAL.

            // col1 se afastando para esquerda.
            if(window.scrollY > 2950 && window.scrollY < 3550) {
                
                if(this.marginElemCenterRight < 40) {

                    this.marginElemCenterRight = this.marginElemCenterRight + 1

                }
            }

            if(window.scrollY < 2950 || window.scrollY > 3550) {
                
                if(this.marginElemCenterRight > 1) {

                    this.marginElemCenterRight = this.marginElemCenterRight - 0.6

                }
            }

            // width
            if(window.scrollY > 3150 && window.scrollY < 3500) {
                
                if(this.widthElemCenter < 70) { // %

                    this.widthElemCenter = this.widthElemCenter + 0.6

                }
            }

            if(window.scrollY < 3150 || window.scrollY > 3500) {
                
                if(this.widthElemCenter > 50) { // %

                    this.widthElemCenter = this.widthElemCenter - 0.6

                }
            }

            // PREENCHIMENTO VERTICAL.
            //console.log(this.heightElemCenter)

            if(window.scrollY > 3150 && window.scrollY < 3500) {

                if(this.heightElemCenter < 40) {

                    this.heightElemCenter = this.heightElemCenter + 2

                }
            }
            else{
                if(this.heightElemCenter > 19) {

                    this.heightElemCenter = this.heightElemCenter - 1

                }
            }

            // margin top
            if(window.scrollY > 2950 && window.scrollY < 3950) {

                if(this.marginElemCenterTop > -30) {

                    this.marginElemCenterTop = this.marginElemCenterTop - 0.8

                }
            }

            if(window.scrollY < 2950 && window.scrollY > 3950) {
                
                if(this.marginElemCenterTop < -2) {

                    this.marginElemCenterTop = this.marginElemCenterTop + 1

                }
            }

            // "reset"
            /*if(window.scrollY < 70) {

                this.marginElemCenter = 20

            }*/
        }
    }
}
</script>