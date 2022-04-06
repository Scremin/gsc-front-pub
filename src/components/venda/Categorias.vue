<style scoped>
    @import url("../../styles/vendaStyle/categorias.scss");
</style>

<template>

    <div class="box_categorias">
        
        <!-- SMALL SCREEN -->
        <div 
        class="painel_nameCateg hidden-md-and-up"
        :style="{'font-size':'1.2rem'}"
        >
            Todas as categorias
        </div>

        <!-- LARGE SCREEN -->
        <div class="painel_nameCateg hidden-sm-and-down">Todas as categorias</div>

        <div class="painel_categorias">

            <div v-if="this.$store.state.elemsCateg == 0">Nenhuma categoria disponível</div>
            
            <div v-for="(el,i) in this.$store.state.elemsCateg" :key="i">

                <ElemCategoria :categInfo="el" />

            </div>

        </div>

    </div>

</template>

<script>
import ElemCategoria from './ElemCategoria.vue'

export default {
    
    components: { ElemCategoria },

    data() {
        return {
            //
        }
    },

    mounted () {

        // SE coninuar vazio, chamar db.
        if (this.$store.state.elemsCateg.length == 0) {

            this.$store.commit('updateContentApp') // sem param GET Req.

            var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

            this.$store.state.elemsCateg = trafegoLocal.storageElemsCateg
            this.$store.state.prodLiGlobal = trafegoLocal.storedPddListGeral
            
        }
    },

    created () {
        
        window.scrollTo(0,0)

        this.$store.commit('updateContentApp') // without param. Initial main GET Req.
        this.$store.commit('updateStatusLoja') // without param. Initial main GET Req.

        // verif store
        // SE não existir, chamar storage

        if (this.$store.state.elemsCateg.length == 0) {

            var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

            this.$store.state.elemsCateg = trafegoLocal.storageElemsCateg
            this.$store.state.prodLiGlobal = trafegoLocal.storedPddListGeral

            // verif Storage
            // Se vazio, chamar db no mounted()
        }
    }
}
</script>