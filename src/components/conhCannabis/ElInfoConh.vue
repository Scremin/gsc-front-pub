<style scoped>
    @import url("../../styles/conhCannabisStyle/elInfoConh.scss");
</style>

<template>

    <div class="box_elInfoConh">

        <!-- linha wrapada img+tit -->
        <div class="painel_img_tit_elInfoConh">

            <div class="img_elInfoConh">
                <img 
                :style="{'max-width':'100%','border-radius':'40px'}"
                class="img_elConh"
                :src="elConh.imgElConh"
                />
            </div>

            <!-- (store) => alterar dinamicamente o título superior -->
            <!--<span class="tit_elInfoConh">{{ elConh.titElConh }}</span>-->

        </div>

        <!-- texto info cannabis SMALL -->
        <div v-for="(elTxt_s,j) in elConh.li_txt" :key="j"
        class="painel_txt_elInfoConh_s hidden-md-and-up"
        >
            
            {{ elTxt_s }}
        </div>

        <!-- texto info cannabis LARGE -->
        <div v-for="(elTxt,i) in elConh.li_txt" :key="i"
        class="painel_txt_elInfoConh hidden-sm-and-down"
        >
            
            {{ elTxt }}
        </div>

        <v-btn 
        :style="{'margin-top':'20px'}"
        class="green--text" 
        @click="callResetConh()"
        >
            voltar</v-btn>

    </div>

</template>

<script>
export default {

    props: ['elConh'],

    data() {
        return {
            //
        }
    },

    methods: {
        callResetConh() {
            //console.log('call reset conh')
            var c=0
            while (c<this.$store.state.elConh.length) {

                // reset título.
                this.$store.state.tit_card_conh = 'Conheça um pouco mais sobre a cannabis'

                // habilitar exibição de conteúdo em todos os cards.
                this.$store.state.elConh[c].flagActivaInfoConh = false
                // habilitar exibição geral dos cards.
                this.$store.state.elConh[c].flagActivaConh = true

                c++
            }
            window.scrollTo(0,0)
        }
    }
}
</script>