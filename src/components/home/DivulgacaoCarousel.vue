<style scoped>
    @import url("../../styles/homeStyle/divulgacaoCarousel.scss");
</style>

<template>

    <div class="box_divulgacaoCarousel">
        
        <div class="work_divulgacaoCarousel">

            <div class="painel_divulgacaoCarousel">
                
                <!-- SMALL -->
                <img 
                :style="{'max-width':'100%'}"
                class="img_divulgacaoCarousel hidden-md-and-up" 
                :src="this.$store.state.imgDivulg" 
                />

                <!-- LARGE -->
                <img 
                :style="{'max-width':'300px'}"
                class="img_divulgacaoCarousel hidden-sm-and-down" 
                :src="this.$store.state.imgDivulg" 
                />

                <div class="txt_divulgacaoCarousel">
                    <span class="txt_titDivulgacaoCarousel">{{ this.$store.state.titDivulg }}</span>
                    <span class="txt_contentDivulgacaoCarousel">{{ this.$store.state.txtDivulg }}</span>
                </div>

            </div>

            <div class="lineControlDivulgacaoCarousel">

                <v-btn 
                outlined 
                plain 
                @click="voltarToHome()" 
                class="btn_voltarToHome white--text"
                :style="{'margin-bottom': '20px'}"
                >
                    Voltar
                </v-btn>

            </div>

        </div>

    </div>

</template>

<script>
export default {
    
    methods: {
        voltarToHome() {

            this.$router.push('/')
        }
    }
}
</script>