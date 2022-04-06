<style scoped>
    @import url("../../styles/vendaStyle/elemCategoria.scss");
</style>

<template>

    <div class="box_elemCategoria shadowCategElem" @click="chamarCateg(categInfo.idC, categInfo.titCateg)">
        
        <div class="tit_categ">{{ categInfo.titCateg }}</div>

        <v-img
        height="50%"
        class="img_categ animate__animated animate__flash shadowCategImg"    
        :src="categInfo.img"
        />

    </div>

</template>

<script>
export default {

    props: ['categInfo'],

    data() {
        return {
            
        }
    },

    methods: {
        chamarCateg(idC, titCateg) {

            this.$store.state.numCategSelected = idC
            //console.log('categoria selecionada:', idC)

            this.$store.state.nomeCategSelected = titCateg

            this.$router.push('/produtos')
        }
    }
}
</script>