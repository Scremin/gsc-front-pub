<style scoped>
    @import url("../../styles/vendaStyle/produtosPainel.scss");
</style>

<template>

    <div class="box_produtosPainel">
        
        <form 
        @submit.prevent="addProd()"
        action=""
        method="post"
        v-for="(prod,i) in prodLi" :key="i" 
        class="el_produto"
        >
            
            <div class="img_prod">

                <v-img
                class="img_categ animate__animated animate__flash shadowCategImg"    
                :src="prod.img"
                />

            </div>

            <div class="col_prod">
                
                <span class="tit_prod">{{ prod.tit }}</span>

                <v-btn 
                plain
                large
                class="green--text btn_carousel" @click="saberMain(prod.idC, prod.idP)">Saber mais</v-btn>

                <v-select
                :items="prod.optionsLi"
                v-model="prod.setoptionsProd"
                label="Opções"
                dense
                solo
                class="select_prod"
                ></v-select>

                <div class="lastLine_prod">

                    <span class="pr_prod">{{ prod.pr | dinheiro }}</span>

                    <div v-if="prod.statusProd == 'disponível' && $store.state.statusLoja == 'on'"
                    class="inc_qnt_prod">
                        <!--<div class="arrow_qnt_prod"
                        ><v-icon small
                        @click="opQntProd('down',prod.qntProd)">mdi-arrow-down</v-icon></div>-->
                        <input v-if="prod.statusProd == 'disponível' && $store.state.statusLoja == 'on'"
                            min="1" :max="prod.qntProd"
                            persistent-hint="true"
                            type="number" @input="qntProdInput = $event.target.value" 
                            name="qntProdInput"
                            class="subheading inputQntProd animate__animated animate__flash"
                            :placeholder="qntProdInput" />
                        <!--<div class="arrow_qnt_prod"
                        ><v-icon small
                        @click="opQntProd('up',prod.qntProd)">mdi-arrow-up</v-icon></div>-->
                    </div>

                    <span v-if="prod.statusProd == 'disponível' && $store.state.statusLoja == 'on'"
                    class="shadowBtnProd btn_prod">
                        
                        <span 
                        @click="addProd(prod.idC, prod.idP, prod.tit, prod.setoptionsProd, prod.pr, prod.qntProd)"
                        value="submit"
                        type="submit"
                        >
                            Adicionar
                        </span>
                        
                        <v-icon>mdi-cart</v-icon>
                    
                    </span>

                    <span v-if="prod.statusProd == 'indisponível' || $store.state.statusLoja == 'off'"
                    class="shadowBtnProd btn_prod">
                        
                        <span 
                        value="submit"
                        type="submit"
                        >
                            Indisponível
                        </span>
                        
                        <v-icon>mdi-cart-remove</v-icon>
                    
                    </span>

                </div>

                <span v-if="flagErrorInputQnt && prod.idP == idP_dinamico"
                :style="{'color':'red','font-size':'0.8rem'}"
                >
                    {{ msgErrorInputQnt }}</span>

            </div>

        </form>

        <v-btn 
        outlined 
        plain 
        @click="voltarToCateg()" 
        class="btn_voltarToCateg white--text"
        >
            Voltar
        </v-btn>

        <!-- DIALOG de sinalização de produto adicionado -->
        <DialogAddProd :dialog="dialog" @eventDialogAddProd="eventDialog($event)" />

    </div>

</template>

<script>
import DialogAddProd from './DialogAddProd.vue'

export default {

    components: { DialogAddProd },

    props: ['prodLi'],
    
    data() {
        return {
            //
            flagVenda: false,

            //
            conteinerProd: {},
            
            //
            dialog: false,

            //
            qntProdInput:1,
            msgErrorInputQnt:'',
            flagErrorInputQnt: false,
            idP_dinamico:null,
        }
    },

    methods: {
        chamarPage(rota) {

            this.dialog = false
            this.$router.push(rota)
        },
        voltarToCateg() {
            
            this.$router.push('/categorias')
        },
        eventDialog(flagGoToCart) {

            this.dialog = false

            if (flagGoToCart == true) {

                // Se a flag recebida do event Dialog --> go to carrinho.
                this.$router.push('/carrinho')
            }
        },
        /*opQntProd(flagOp, qntProd) {

            console.log('init func')

            if (flagOp == 'up') {
                
                console.log('dentro do up')

                // verif se ainda há a qnt sufuciente para adicionar.
                if ( qntProd >= (this.qntProdInput + 1) ) {

                    console.log('dentro qnt ok')

                    this.qntProdInput = this.qntProdInput + 1
                    return
                }

            } else { // flag == 'down'

                if (this.qntProdInput == 1) {
                    
                    return // valor mínimo é 1 produto.

                } else {

                    this.qntProdInput = this.qntProdInput - 1
                    return
                }
            }
        },*/
        saberMain(idC, idP) {

            // rcv dados do produto selecionado.
            this.$store.state.idC_descricao = idC
            this.$store.state.idP_descricao = idP
            this.$store.state.tit_descricao = this.$store.state.prodLiGlobal[idC].categ[idP].tit
            this.$store.state.desc_descricao = this.$store.state.prodLiGlobal[idC].categ[idP].desc
            this.$store.state.pr_descricao = this.$store.state.prodLiGlobal[idC].categ[idP].pr
            this.$store.state.img_descricao = this.$store.state.prodLiGlobal[idC].categ[idP].img
            this.$store.state.statusProd_descricao = this.$store.state.prodLiGlobal[idC].categ[idP].statusProd

            this.$router.push('/descricao')
        },
        verifListCar() {

            // RECALCULAR VALOR TOTAL NO CARRINHO.

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
        addProd(idC, idP, tit, setoptionsProd, pr, qntProd) {

            this.msgErrorInputQnt = '' // init (Reset).

            //console.log('id categ:',idC)
            //console.log('id prod:',idP)

            // SE qnt selecionada > qnt disponível ENTÃO não fecha.
            if (parseInt(this.qntProdInput) > qntProd) {

                this.msgErrorInputQnt = 'Apenas restam ' + qntProd + ' unidades.'
                this.flagErrorInputQnt = true // ativar exibição de msg error.
                this.idP_dinamico = idP // permitir exibir apenas para o produto específico.
                //console.log('Apenas restam 10 unidades')
                return
            }

            if (qntProd < 0) {

                this.msgErrorInputQnt = 'Produto esgotado.'
                this.flagErrorInputQnt = true // ativar exibição de msg error.
                this.idP_dinamico = idP // permitir exibir apenas para o produto específico.
                //console.log('Apenas restam 10 unidades')
                return
            }

            // rcv form (produto a ser inserido no carrinho).
            this.conteinerProd = {
                
                idC: idC,
                idP: idP,
                qnt: parseInt(this.qntProdInput), // editável também fora do formulário.
                tit: tit,
                setoptionsProd: setoptionsProd,
                pr: pr,
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
                    listCar[c].idC == idC &&
                     listCar[c].idP == idP &&
                      listCar[c].setoptionsProd == setoptionsProd
                ) {

                    listCar[c].qnt = parseInt(listCar[c].qnt) + parseInt(this.qntProdInput)

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

            this.msgErrorInputQnt = '' // RESET msg error input.
            this.flagErrorInputQnt = false

            //console.log('listCar: ', listCar)
        },
    },

    mounted () {

        // pré-preenchimento das taxas de entrega.
        this.$store.commit('updatetxEntrega') // sem param GET Req.

        //console.log('this.$store.state.statusLoja: ',this.$store.state.statusLoja)
    },

    created () {

        //console.log('this.prodLi: ',this.prodLi)

        this.$store.commit('updateStatusLoja') // without param. Initial main GET Req.
    }
}
</script>