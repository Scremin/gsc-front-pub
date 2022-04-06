<style scoped>
    @import url("../../styles/carrinhoStyle/carrinhoPageD.scss");
</style>

<template>

    <!-- v-if="this.$store.state.listCar.length > 0" -->
    <div class="box_carrinhoPageD">
        
        <div class="work_carrinhoPageD">

            <v-icon 
            color="rgba(121, 174, 64)"
            :style="{'font-size':'6rem'}"
            >
                mdi-check</v-icon>

            <span
            color="rgb(17, 59, 57)"
            :style="{'font-size':'2rem'}"
            >
                Pedido enviado com sucesso</span>

            <span>Verifique sua área de cliente para obter as informações do seu pedido.</span>

            <v-btn 
            outlined
            @click="rotaToClientPage()"
            :style="{'flex-wrap':'wrap','margin-top':'40px','font-size':'0.7rem'}"
            class="btn_voltarToCateg black--text"
            >
                Ir para a área de cliente
            </v-btn>

        </div>

    </div>

</template>

<script>
export default {

    methods: {
        rotaToClientPage() {

            // preparar entrada na área do cliente.
            this.$store.state.flagShowLogin = false
            this.$store.state.flagShowCadastro = false
            this.$store.state.flagShowClientPage = true

            this.$router.push('/clienthome')
        }
    },

    created () {
        
        window.scrollTo(0,0)
    }
}
</script>