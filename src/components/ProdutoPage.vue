<style scoped>
    /*@import url("../categ-style.scss");*/
    @import url("../cardForm.scss");
</style>

<template>
    <div>
        <div class="categExib">

                <div v-if="!exibirMain" class="text-center">
                    <v-progress-circular
                    :rotate="360"
                    :size="100"
                    :width="15"
                    :value="value"
                    color="rgb=(38, 53, 98)"
                    >
                    {{ value }}
                    </v-progress-circular>
                </div>

                <template v-else>

                    <div class="panelAcimaProds">
                        <span class="panelAcimaProds_int">
                            {{ categName }}
                        </span>
                    </div>

                    <div class="panelProducts">

                        <div v-for="produto in prodLi" :key="produto.index" class="task-grid">

                            <img :src="produto.content.img" style="width:50%" class="task-in" />

                            <div class="task-in">

                                <div class="into-task">
                                    <p class="primeiro-i-t">{{ produto.content.título }}</p>
                                </div>

                                <div class="into-task">

                                    <span class="segundo-i-t"
                                        @click="chamarDescric(produto._id, 
                                        produto.idC, 
                                        produto.content.Descrição,
                                        produto.content.título,
                                        produto.content.Preço,
                                        produto.content.img)"
                                    >
                                        <a :style="{'color':'rgb(23, 188, 140)'}">
                                            Saber mais
                                        </a>
                                        <v-icon color="">
                                            mdi-information
                                        </v-icon>
                                    </span>
                                </div>

                                <div class="into-task">

                                    <span class="terceiro-i-t">
                                        <span class="preco">{{ produto.content.Preço | dinheiro }}</span>
                                    </span>

                                    <v-btn 
                                    @click="addProd(produto.idC, 
                                    produto._id, 
                                    produto.content.título,
                                    produto.content.Preço)" 
                                    class="green white--text terceiro-i-t">
                                        <span class="">ADD</span>
                                    </v-btn>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="space_aux">
                    </div>

                    <div class="btn_panelProducts">
                        <v-btn @click="voltarPageProd()" 
                            class="white green--text btn_posi"
                            :style="{'margin-bottom':'2%'}">
                            <span class="">voltar</span>
                        </v-btn>
                    </div>

                </template>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            // teste de recebimento da cor da fonte emcima da img catge.
            setCor: 'red', // haverá um setCor para cada img. rcv get axios.
            // 
            geralLi: [],
            prodLi: [],
            categName: '',
            //categ_flag: true,
            categ_id_num: 0,
            // Client interaction on sell
            idsChosen: {},
            itemsChosen: [],
            contador: 1, // 1º index da lista carrinho.

            hoverState: false, // activate class on hover
            exibirImgCateg: true, // activate div img on hover
            //shadowCateg: '',
            //shadowCategA: '0 20px 30px rgba(121, 174, 64, 1)',
            //shadowCategB: '0 2px 10px rgba(0, 0, 0, 0.65)',

            exibirMain: false,

            interval: {},
            value: 0,

        }
    },
    computed: {
        qntProds() {
            return this.$store.getters.qntProds
        },
        exibirTabs() {
            return this.$store.state.exibirTabs // exibir tabs menu
        },
        categ_flag() {
            return this.$store.state.categ_flag // exibir categorias ou listProd específica.
        },
        categ_index() {
            return this.$store.state.categ_index// id categorias específica.
        },
        AlreadyOnPage() {
            return this.$store.state.AlreadyOnPage // flag de contra duplicação de chamada.
        },
        categSelected() {
            return this.$store.state.categSelected // inteiro.
        },
    },
    methods: {
        chamarDescric(idp, idc, desc, nomeProd, precoProd, img){
            console.log(idp)
            console.log(idc)
            console.log(desc)
            console.log(nomeProd)
            console.log(precoProd)

            this.$store.state.tmpIDP = idp
            this.$store.state.tmpIDC = idc

            if(desc == null){
                this.$store.state.prodDesc = ''
            }
            else{
                this.$store.state.prodDesc = desc
            }
            
            this.$store.state.tmpNomeProd = nomeProd
            this.$store.state.tmpPrecoProd = precoProd
            this.$store.state.tmpImgProd = img

            window.scroll(0, 0) // (x, y)

            this.$router.push('/DescricaoDoProduto')
        },
        funcHoverCateg() {

            this.exibirImgCateg = false
        },
        funcDesHoverCateg() {

            this.exibirImgCateg = true
        },
        voltarPageProd() {

            this.$router.push('/MinhasCompras')
        },
        addProd(idCateg, idProd, nomeProd, precoProd) {
            this.$store.state.pedidoOn = false // bool de controle para o carrinho de compras.
            const idsChosen = {
                idM: this.qntProds,
                idP: idProd,
                idC: idCateg,
                nomeP:  nomeProd,
                precoP: precoProd
            }
            //const cont = this.contador
            //console.log(idsChosen)
            this.$store.state.listCar.push(idsChosen)
            //this.$store.state.qntProds.push(cont)
            this.contador++
            //var list = this.itemsChosen
            //list.push(this.idsChosen)
            //console.log(this.itemsChosen)
        },
        getProductsByIdCateg() {

            // puxar scroll
            window.scroll(0, 0) // (x, y)
            this.$store.state.exibirTabs = true // ativar tabs

            const self = this

            // Compartilhar id da categ selecionada.
            axios.post('https://castarcms.club/api/get_products_on_page', {

                idC: self.$store.state.categSelected
            
            }).then((res) => {

                console.log(res)

                self.prodLi = res.data.prodGet; /* lista de produtos */
                self.categName = res.data.nomeCateg; /* nome da categoria da lista de produtos */
                //
            });

            // fazer tratamento de erro, caso proLi não esteja vazia.
            /*if ( !Array.isArray(this.prodLi) || !this.prodLi.length ) {

                console.log('estou no tratamento de array indefinida..')
                this.getProductsByIdCateg() // nova tentativa de busca.
            }*/
            return

        },
    },
    beforeDestroy () {
        
        clearInterval(this.interval)
    },
    mounted () {

        window.scrollTo(0,0)

        this.getProductsByIdCateg();
        
        this.interval = setInterval(() => {
            if (this.value === 100) {
            //return (this.value = 0)
            //console.log('rotina mounted')
            this.exibirMain = true // exibir lista de produtos.
            //this.getProductsByIdCateg();
            //console.log('FIM rotina mounted')
            }
            this.value += 50
        }, 1000)

    },
    created() {
        //this.getProductsByIdCateg();
    }
}
</script>