<style scoped>
    @import url("../../styles/carrinhoStyle/carrinhoFechamento.scss");
</style>

<template>

    <div class="box_carrinhoFechamento" v-if="this.$store.state.listCar.length > 0">
        
        <div class="fechamentos">

            <v-radio-group
            v-model="radios"
            mandatory
            >
                <v-radio
                    label="Entrega na Covilhã"
                    value="radio-1"
                    @click="mudarTaxa($store.state.tx_entrega,'covi')"
                />
                
                <v-radio
                    label="Entrega CTT"
                    value="radio-2"
                    @click="mudarTaxa($store.state.tx_entrega_fora,'foraCovi')"
                />

            </v-radio-group>

            <span v-if="radios == 'radio-1'" :style="{'font-size':'0.8rem'}">
                Taxa de entrega: {{ this.$store.state.tx_entrega | dinheiro }}
            </span>
            <span v-if="radios == 'radio-2'" :style="{'font-size':'0.8rem'}">
                Taxa de entrega: {{ this.$store.state.tx_entrega_fora | dinheiro }}
            </span>

            <span class="valorTotalCarrinho">
                Valor total: {{ this.$store.getters.valorTotalCompra | dinheiro }}
            </span>

        </div>

        <v-btn
        @click="fecharPedido()"
        outlined
        color="white"
        class="white--text"
        >
            Fechar pedido</v-btn>

        <div class="msgs_erros_fechamento">

            <span v-if="flagMsgError" :style="{'color':'red'}">{{ msgErrorFechamento }}</span>

        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {

            radios: 'radio-1',
            tx_entrega: 2,

            // fechamento pedido
            //valorTotalCompra: 0,
            flagMsgError: false,
            msgErrorFechamento: '',

            // simulação de var externa (rcv by mutation)
            //txCovi: 2,
            //txForaCovi: 5,
    }},

    methods: {
        mudarTaxa(tx, flagTx) { // local e store

            if(flagTx == 'covi') {

                this.$store.state.msgDestinoEntregaCarrinho = 'Entrega na covilhã'
                this.$store.state.flagTx = flagTx
                this.$store.state.tx_entrega_final = tx

            } else { // 'foraCovi'

                this.$store.state.msgDestinoEntregaCarrinho = 'Entrega CTT'
                this.$store.state.flagTx = flagTx
                this.$store.state.tx_entrega_final = tx
            }
            console.log(tx)
            console.log(this.$store.getters.valorTotalCompra)
            //this.$store.state.valorTotalCompra = this.$store.state.valorTotalCarrinho + this.$store.state.tx_entrega
        },
        fecharPedido() {

            // verificar listCar
            // calcular valor total da compra
            // se total < 10 não fecha
            // verificar listCar
            // SE houver bebidas, somente fecha se a entrega for na covilhã

            const tamListCar = this.$store.state.listCar.length
            let listCar = this.$store.state.listCar

            // 1a verificação.
            if ( (this.$store.getters.valorTotalCarrinho) < 10) {
                
                this.flagMsgError = true
                this.msgErrorFechamento = 'PEDIDO MÍNIMO 10€'
                return
            }

            // 2a verificação.
            let c = 0
            while (c < tamListCar) {

                // -- SE entrega fora da covilhã, verif. SE há bebibas contidas no carrinho.
                // -- indexBebida é o idC da categoria 'Bebidas'.
                if ( this.radios == 'radio-2' ) {

                    //console.log('listCar[c].idC: ',listCar[c].idC)
                    //console.log('this.$store.getters.indexCategBebida: ',this.$store.getters.indexCategBebida)

                    if ( listCar[c].idC == this.$store.getters.indexCategBebida ) {

                        this.flagMsgError = true
                        this.msgErrorFechamento = 'BEBIDAS APENAS NA COVILHÃ'
                        return
                    }
                }

                c = c + 1
            }

            //console.log('flag error apos bebida:', this.flagMsgError)

            // FECHAR PEDIDO --> elementos devem ser passados via vuex

            // -- verificar usuário logado.
            // -- STORAGE
            var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))
            // SE logado => pular direto de volta para o carrinho.
            if( trafegoLocal.storedUserLogado == true ) {

                // os dados já estão validados ENTÃO pular para stepper à 3.
                this.$store.state.numStepperCarrinho = 3
                this.$store.state.flagStepCarrinho2 = true
                this.$router.push('/fechamentoC')
                return
            }

            // reset flags
            this.msgErrorFechamento = ''

            this.$router.push('/fechamento')
        }
    },

    computed: {

        valorTotalCompra() {

            return this.$store.getters.valorTotalCompra
        }

    },

    mounted () {

        //this.$store.state.tx_entrega = this.txCovi // receber do db. (diretamente) sem storage parseFloat

        //this.mudarTaxa(this.$store.state.tx_entrega, this.$store.state.flagTx)
        //this.$store.getters.valorTotalCompra = this.$store.state.valorTotalCarrinho + this.tx_entrega
        //console.log('this.$store.state.tx_entrega:',this.$store.state.tx_entrega)
    },

    created () {

        // update
        this.$store.commit('updatetxEntrega') // sem param GET Req.

        this.$store.state.msgDestinoEntregaCarrinho = 'Entrega na covilhã'
        this.$store.state.flagTx = 'covi'

    }
}
</script>