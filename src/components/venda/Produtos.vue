<style scoped>
    @import url("../../styles/vendaStyle/produtos.scss");
</style>

<template>

    <div class="box_produtos">

        <h1 class="tit_categProd">{{ this.$store.state.nomeCategSelected }}</h1>
        
        <ProdutosPainel :prodLi="$store.state.prodLiDepois" />

    </div>

</template>

<script>
import ProdutosPainel from './ProdutosPainel.vue'

export default {
    
    components: { ProdutosPainel },

    data() {
        return {
            // :prodLi="this.$store.state.prodLiGlobal[this.$store.state.numCategSelected].categ
        }
    },

    created () {

        this.$store.state.prodLiDepois = this.$store.state.prodLiGlobal[this.$store.state.numCategSelected].categ

        window.scrollTo(0,0)

        this.$store.commit('updateContentApp') // without param. Initial main GET Req.
        this.$store.commit('updateStatusLoja') // without param. Initial main GET Req.
    }
}
</script>