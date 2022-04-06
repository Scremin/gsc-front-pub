<style scoped>
    @import url("../../styles/carrinhoStyle/carrinho.scss");
</style>

<template>

    <div class="box_carrinho">
        
        <div class="mainLineCarrinho">
            
            <div class="carrinho">

                <!-- MSG carrinho empty -->
                <span v-if="this.$store.state.listCar.length == 0" 
                class="meuCarrinho"
                :style="{'font-size':'2rem'}"
                >
                    O carrinho ainda está vazio.
                </span>

                <span v-if="this.$store.state.listCar.length > 0" class="meuCarrinho">Meu carrinho</span>

                <div v-for="(elCar,i) in this.$store.state.listCar" :key="i"
                class="painelCarrinho"
                >

                    <PainelCarrinho :elCar="elCar" />
                </div>


            </div>

            <div class="propaganda_carrinho hidden-sm-and-down">
                
                <img
                class="img_propaganda animate__animated animate__flash shadowCategImg"    
                :src="require('../../assets/imgs/ambG2.png')"
                />

                <span class="tx_propaganda">Aproveite e aprecie mas não deixe de conhecer nossa loja presencialmente também.</span>
                
            </div>

        </div>

        <div class="lineFechamentoCarrinho">
            
            <CarrinhoFechamento />

        </div>

    </div>

</template>

<script>
import PainelCarrinho from './PainelCarrinho.vue'
import CarrinhoFechamento from './CarrinhoFechamento.vue'

export default {

    components: { PainelCarrinho, CarrinhoFechamento },

    data() {
        return {
            //
        }
    },

    methods: {
        //
    },

    created () {
        
        window.scrollTo(0,0)

        this.$store.commit('updateContentApp') // sem param GET Req.
        this.$store.commit('updateCartList') // sem param (update valor carrinho)

        // pré-preenchimento das taxas de entrega.
        this.$store.commit('updatetxEntrega') // sem param GET Req.
    }
}
</script>