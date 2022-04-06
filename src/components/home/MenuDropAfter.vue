<style scoped>
    @import url("~@/styles/homeStyle/menuDropAfter.scss");
</style>

<template>

    <div v-if="this.$store.state.flagDrop"
    :class="this.$store.state.dinamicClassDrop"
    @mouseleave="esconderMenuDrop()"
    >
        
        <div class="colunaDropada">
            
            <span v-for="(categ,i) in $store.state.elemsCateg" :key="i"
            class="elColunaDropada shadowElTxtMenuDrop"
            @click="chamarCategByidC(categ.idC)"
            >
                {{ categ.titCateg }}
            </span>

        </div>

    </div>

</template>

<script>
export default {

    /*data() {
        return {
            dinamicDrop: 'box_menuDropAfter animate__animated animate__fadeIn',
        }
    },*/

    computed: {
        dinamicClassDrop() {
            return this.$store.state.dinamicClassDrop // class contendo junto o fade in ou fade out.
        },
    },
    
    methods: {
        esconderMenuDrop() {

            //this.dinamicDrop = 'box_menuDropAfter animate__animated animate__fadeOut'
            // o fadeOut é atribuído logo após o fadeIn, no component MenuMain
            
            this.$store.state.dinamicClassDrop = 'box_menuDropAfter animate__animated animate__fadeOut'

            setTimeout( () => {

                this.$store.state.flagDrop = false
                //console.log('drop:',this.$store.state.flagDrop)

            }, 1000);
        },
        chamarCategByidC(idC) {

            //console.log(idC)
            this.$store.state.numCategSelected = idC

            const nomeCateg = this.$store.state.elemsCateg[idC].titCateg
            this.$store.state.nomeCategSelected = nomeCateg

            this.$router.push('/produtos')
            
            this.esconderMenuDrop()
        }
    }
}
</script>