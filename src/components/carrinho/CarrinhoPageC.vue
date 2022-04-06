<style scoped>
    @import url("../../styles/carrinhoStyle/carrinhoPageC.scss");
</style>

<template>

    <!-- v-if="this.$store.state.listCar.length > 0" -->
    <div class="box_carrinhoPageC">
        
        <div class="work_carrinhoPageC">
            
            <LinhaTempoHorizontal />

            <PayAndClientCarrinho />

            <v-btn 
            outlined
            @click="voltarToCarrinhoPageB()" 
            class="btn_voltarToCateg white--text"
            >
                Voltar
            </v-btn>

        </div>

    </div>

</template>

<script>
import LinhaTempoHorizontal from './LinhaTempoHorizontal.vue'
import PayAndClientCarrinho from './PayAndClientCarrinho.vue'

export default {
    
    components: { LinhaTempoHorizontal, PayAndClientCarrinho },

    methods: {
        voltarToCarrinhoPageB() {

            // -- verificar usuário logado.
            // -- STORAGE
            var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))
            // SE logado => pular direto de volta para o carrinho.
            if( trafegoLocal.storedUserLogado == true ) {

                // os dados já estão validados ENTÃO pular para stepper à 3.
                this.$store.state.numStepperCarrinho = 3
                this.$store.state.flagStepCarrinho2 = true
                this.$router.push('/carrinho')
                return
            }

            // -- decrementar stepper
            this.$store.state.numStepperCarrinho = 2

            this.$router.push('/fechamento')
        }
    },

    created () {
        
        window.scrollTo(0,0)

        // -- verif se store está preenchido. Se não, houve refresh na pág.
        // ---- ENTÃO voltar p/ carrinho.
        if (this.$store.state.tx_entrega == 'not_rcved') {
            
            this.$router.push('/carrinho')
        }
    }
}
</script>