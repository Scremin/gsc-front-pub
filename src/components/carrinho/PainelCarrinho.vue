<style scoped>
    @import url("../../styles/carrinhoStyle/painelCarrinho.scss");
</style>

<template>

    <div class="box_painelCarrinho" v-if="this.$store.state.listCar.length > 0">
        
        <!-- LARGE -->
        <div class="inside_painel_carrinho hidden-sm-and-down">

            <span class="nomeProdNoCarrinho">{{ elCar.tit }}</span>

            <v-divider vertical class="hidden-sm-and-down" />

            <span class="prProdNoCarrinho">{{ elCar.setoptionsProd }}</span>

            <v-divider vertical class="hidden-sm-and-down" />

            <span class="prProdNoCarrinho">{{ elCar.pr | dinheiro }}</span>

            <v-divider vertical class="hidden-sm-and-down" />

            <span class="qntProdNoCarrinho" :style="{'color':cor}">{{ 'x' + elCar.qnt }}</span>

        </div>

        <!-- SMALL SCREEN -->
        <div 
        class="inside_painel_carrinho hidden-md-and-up"
        :style="{'flex-direction':'column'}"
        >

            <span class="nomeProdNoCarrinho">{{ elCar.tit }}</span>

            <v-divider />

            <span class="prProdNoCarrinho">{{ elCar.setoptionsProd }}</span>

            <v-divider />

            <span class="prProdNoCarrinho">{{ elCar.pr | dinheiro }}</span>

            <v-divider />

            <span class="qntProdNoCarrinho" :style="{'color':cor}">{{ 'x' + elCar.qnt }}</span>

        </div>

        <v-chip 
        @mouseover="cor = 'red'" 
        @mouseleave="cor = 'rgba(121, 174, 64, 1)'" 
        :color="cor" 
        class="btn_delete_el_carrinho"
        @click="deleteProd(elCar.idC, elCar.idP)"
        >
            x  
        </v-chip>

    </div>

</template>

<script>
export default {

    props: ['elCar'],
    
    data() {
        return {

            cor: 'rgba(121, 174, 64, 1)',
        }
    },

    methods: {
        deleteProd(idC, idP) {

            //console.log(idC)
            //console.log(idP)

            // fazer varredura
            // SE a qnt for maior do que 1, ENTAO decrementar qnt do produto
            // SE não, ENTAO tirar do carrinho
            const tamListCar = this.$store.state.listCar.length
            let listCar = this.$store.state.listCar

            let c = 0
            while (c < tamListCar) {

                // -- encontrar produto na lista carrinho.
                if ( listCar[c].idC == idC && listCar[c].idP == idP ) {

                    if ( listCar[c].qnt > 1 ) {

                        this.$store.state.listCar[c].qnt = ( this.$store.state.listCar[c].qnt - 1 )
                        //console.log('listCar dec:', this.$store.state.listCar)
                        this.verifListCar()
                        this.$store.commit('updateCartListStorage', this.$store.state.listCar)
                        return

                    } else { // retirar produto da lista carrinho

                        let q = (tamListCar - 1) // (length listCar - elem_excluído)

                        // -- recortar 1a parte da lista carrinho. (c == index percorrido da lista carrinho).
                        var nova_li = this.$store.state.listCar.slice(0, c)
                        
                        // -- concatenar 2a parte da listCar.
                        let j = c
                        while(j < q) {

                            nova_li.push(this.$store.state.listCar[j+1]) // -- pular o elemento excluído.
                            j++
                        }

                        this.$store.state.listCar = nova_li
                        //console.log('listCar:', this.$store.state.listCar)
                        this.verifListCar()
                        this.$store.commit('updateCartListStorage', this.$store.state.listCar)
                        return
                    }
                }

                c = c + 1
            }
        },
        verifListCar() {

            // verificar listCar
            const tamListCar = this.$store.state.listCar.length
            let listCar = this.$store.state.listCar
            // calcular valor da compra (válido a partir do 2o produto adicionado)
            let soma = 0
            let c = 0
            while (c < tamListCar) {

                // incrementar também o valor mult pela qnt de cada produto contido no carrinho.
                soma = soma + ( parseFloat(listCar[c].pr) * parseFloat(listCar[c].qnt) )

                c = c + 1
            }

            this.$store.state.valorTotalCarrinho = soma
            //console.log('componente painelCarrinho')
            //console.log('valorNoCarrinho:', this.$store.state.valorTotalCarrinho)
            return
        },
    }
}
</script>