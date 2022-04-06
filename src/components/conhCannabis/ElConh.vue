<style scoped>
    @import url("../../styles/conhCannabisStyle/elConh.scss");
</style>

<template>

    <div class="box_elConh" v-if="elConh.flagActivaConh">

        <!-- TÍTULO CARD ELEMENTO CONHEÇA A CANNABIS -->
        <div 
        class="painel_tit_elConh shadowConhElem" 
        v-if="!elConh.flagActivaInfoConh"
        @click="callInfoConh()"
        >
            <span class="tit_elConh">{{ elConh.titElConh }}</span>
        </div>

        <!-- IMAGEM CARD ELEMENTO CONHEÇA A CANNABIS -->
        <div 
        class="painel_body_elConh shadowConhElem" 
        v-if="!elConh.flagActivaInfoConh"
        @click="callInfoConh()"
        >
            <img 
            :style="{
                'max-width':'100%',
                'border-bottom-left-radius': '8px',
                'border-bottom-right-radius': '8px'}"
            class="img_elConh"
            :src="elConh.imgElConh"
            />
        </div>

        <!-- CONTEÚDO DO ELEMENTO CONHEÇA A CANNABIS (APÓS CLICK) -->
        <ElInfoConh v-if="elConh.flagActivaInfoConh"
        :elConh="elConh"
        />

    </div>

</template>

<script>
import ElInfoConh from './ElInfoConh.vue'

export default {

    props: ['elConh','indexConh'],

    components: { ElInfoConh },

    data() {
        return {
            // geral
            //flagActiveElInfoConh:false, (store)
        }
    },

    methods: {
        callInfoConh() {

            // ativar conteúdo e desabilitar todos os 4 cards. (store).
            var c=0
            while (c<this.$store.state.elConh.length) {

                if (c == this.indexConh) {

                    this.$store.state.elConh[this.indexConh].flagActivaInfoConh = true
                    this.$store.state.elConh[this.indexConh].flagActivaConh = true

                    // trocar título principal pelo título do card. (store).
                    this.$store.state.tit_card_conh = this.$store.state.elConh[this.indexConh].titElConh

                } else {

                    // desabilitar exibição de conteúdo em todos os cards.
                    this.$store.state.elConh[c].flagActivaInfoConh = false
                    // desabilitar exibição geral dos cards.
                    this.$store.state.elConh[c].flagActivaConh = false
                }

                c++
            }
        }
    }
}
</script>