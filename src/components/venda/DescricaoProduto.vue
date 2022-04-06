<style scoped>
    @import url("../../styles/vendaStyle/descricaoProduto.scss");
</style>

<template>

    <!-- v-if="this.$store.state.listCar.length > 0" -->
    <div class="box_descricaoProduto">
        
        <div class="work_descricaoProduto">

            <div class="painel_descricaoProduto">
                
                <!-- SMALL -->
                <img 
                :style="{'max-width':'100%'}"
                class="img_descricao hidden-md-and-up" 
                :src="this.$store.state.img_descricao" 
                />

                <!-- LARGE -->
                <img 
                :style="{'max-width':'300px'}"
                class="img_descricao hidden-sm-and-down" 
                :src="this.$store.state.img_descricao" 
                />

                <div class="txt_descricao">
                    <span class="txt_titDesc">{{ this.$store.state.tit_descricao }}</span>
                    <span class="txt_contentDesc">{{ this.$store.state.desc_descricao }}</span>
                </div>

            </div>

            <div class="lineControlDescricao">

                <v-btn 
                outlined 
                plain 
                @click="voltarToProdPageByidC()" 
                class="btn_voltarToHome white--text"
                :style="{'margin-bottom': '20px'}"
                >
                    Voltar
                </v-btn>

                <span v-if="$store.state.statusProd_descricao == 'disponível' && $store.state.statusLoja == 'on'"
                class="shadowBtnDescricao btn_descricao">
                    
                    <span @click="addProd()">Adicionar</span>

                    <v-icon>mdi-cart</v-icon>
                
                </span>

                <span v-if="$store.state.statusProd_descricao == 'indisponível' || $store.state.statusLoja == 'off'"
                class="shadowBtnDescricao btn_descricao">
                    
                    <span>Indisponível</span>

                    <v-icon>mdi-cart-remove</v-icon>
                
                </span>

            </div>

        </div>

        <!-- DIALOG de sinalização de produto adicionado -->
        <DialogAddProd :dialog="dialog" @eventDialogAddProd="eventDialog($event)" />

    </div>

</template>

<script>
import DialogAddProd from './DialogAddProd.vue'

export default {

    components: { DialogAddProd },

    data() {
        return {

            conteinerProd: {},

            dialog: false,
        }
    },

    methods: {
        voltarToProdPageByidC() {

            let idC = this.$store.state.idC_descricao

            this.$store.state.numCategSelected = idC
            this.$store.state.nomeCategSelected = this.$store.state.elemsCateg[idC].titCateg

            this.$router.push('/produtos')
        },
        eventDialog(flagGoToCart) {

            this.dialog = false

            if (flagGoToCart == true) {

                // Se a flag recebida do event Dialog --> go to carrinho.
                this.$router.push('/carrinho')
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
            return
        },
        addProd() {

            // rcv form
            this.conteinerProd = {
                
                idC: this.$store.state.idC_descricao,
                idP: this.$store.state.idP_descricao,
                qnt: 1,
                tit: this.$store.state.tit_descricao,
                setoptionsProd: '',
                pr: this.$store.state.pr_descricao,

            }
            //console.log('conteinerProd: ', this.conteinerProd)

            // rcv list car
            // verif se existe o prod na lista
            // SE sim, inc qnt (deve ter todas as características idênticas)
            // SE não, add novo à list car

            let tamListCar = this.$store.state.listCar.length
            let listCar = this.$store.state.listCar

            //console.log('tamListCar: ', tamListCar)
            //console.log('listCar: ', listCar)

            // -- RCV apenas 1 vez para todas os condionamentos.
            var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))
            var update_trafegoLocal = {} // declarar a var apenas 1 vez.
            
            if (tamListCar == 0) { // 1a adição à listCar

                listCar.push(this.conteinerProd)

                this.$store.state.listCar = listCar // update listCar
                this.$store.state.valorTotalCarrinho = listCar[0].pr

                // -- STORAGE
                update_trafegoLocal = {

                    storedUserLogado: trafegoLocal.storedUserLogado, // bool <--- hold
                    storedDateUser: trafegoLocal.storedDateUser, // {} <--------- hold
                    storedPddListUser: trafegoLocal.storedPddListUser, // [] <--- hold
                    storedCarrinho: listCar, // [] <----------------------------------- update
                    storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
                    storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
                }

                localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

                this.verifListCar()

                this.dialog = true
                return
            }

            // verificação de existência do produto na listCar.
            let c = 0
            while (c < tamListCar) {

                if (
                    listCar[c].idC == this.$store.state.idC_descricao &&
                     listCar[c].idP == this.$store.state.idP_descricao &&
                      listCar[c].setoptionsProd == ''
                ) {

                    listCar[c].qnt = listCar[c].qnt + 1

                    this.$store.state.listCar = listCar // update listCar
                    //console.log('produto incrementado')

                    // -- STORAGE
                    update_trafegoLocal = {

                        storedUserLogado: trafegoLocal.storedUserLogado, // bool <--- hold
                        storedDateUser: trafegoLocal.storedDateUser, // {} <--------- hold
                        storedPddListUser: trafegoLocal.storedPddListUser, // [] <--- hold
                        storedCarrinho: listCar, // [] <----------------------------------- update
                        storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
                        storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
                    }

                    localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

                    this.verifListCar()

                    this.dialog = true
                    return

                } 
                c = c + 1
            }

            // Depois de varrer, SE NÃO encontrou, então add um novo produto na listCar.
            listCar.push(this.conteinerProd)

            this.$store.state.listCar = listCar // update listCar
            //console.log('novo produto adicionado')

            // -- STORAGE
            update_trafegoLocal = {

                storedUserLogado: trafegoLocal.storedUserLogado, // bool <--- hold
                storedDateUser: trafegoLocal.storedDateUser, // {} <--------- hold
                storedPddListUser: trafegoLocal.storedPddListUser, // [] <--- hold
                storedCarrinho: listCar, // [] <----------------------------------- update
                storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
                storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
            }

            localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

            this.dialog = true
            this.verifListCar()

            //console.log('listCar: ', listCar)
        },
    },
    
    mounted () {

        //
    }
}
</script>