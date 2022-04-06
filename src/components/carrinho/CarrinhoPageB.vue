<style scoped>
    @import url("../../styles/carrinhoStyle/carrinhoPageB.scss");
</style>

<template>

    <div class="box_carrinhoPageB" v-if="this.$store.state.listCar.length > 0">
        
        <div class="work_carrinhoPageB">
            
            <LinhaTempoHorizontal />

            <!-- LARGE -------------------------------->
            <ClientLoginCarrinho
            v-if="$store.state.flagShowLogin_carrinho" 
            class="hidden-sm-and-down"
            />

            <ClientCadastroCarrinho
            v-if="$store.state.flagShowCadastro_carrinho" 
            class="hidden-sm-and-down"
            />

            <!-- SMALL -------------------------------->       
            <ClientLoginCarrinho
            v-if="$store.state.flagShowLogin_carrinho" 
            class="hidden-md-and-up"
            :style="{width: '160px'}"
            />

            <ClientCadastroCarrinho
            v-if="$store.state.flagShowCadastro_carrinho" 
            class="hidden-md-and-up"
            :style="{width: '160px'}"
            />

            <v-btn v-if="$store.state.flagShowLogin_carrinho" 
            outlined
            @click="voltarToCarrinho()" 
            class="btn_voltarToCateg white--text"
            :style="{'margin-top':'10px'}"
            >
                Voltar
            </v-btn>

        </div>

    </div>

</template>

<script>
import LinhaTempoHorizontal from './LinhaTempoHorizontal.vue'
//import LoginFechamento from './LoginFechamento.vue'

import ClientLoginCarrinho from './ClientLoginCarrinho.vue'
import ClientCadastroCarrinho from './ClientCadastroCarrinho.vue'

export default {
    
    components: { LinhaTempoHorizontal, /*LoginFechamento,*/ ClientLoginCarrinho, ClientCadastroCarrinho },

    methods: {
        voltarToCarrinho() {

            this.$router.push('/carrinho')
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