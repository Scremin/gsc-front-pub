<style scoped>
    @import url("../categ-style.scss");
    /*@import url("../cardForm.scss");*/
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
                color="rgb(121, 174, 64)"
                >
                {{ value }}
                </v-progress-circular>
            </div>

            <template v-else>

                <div class="panelCategs">

                    <div v-for="categ in geralLi" :key="categ.index"

                        @mouseover="hoverState= true" 
                        @mouseout="hoverState = false"

                        class='label-categ animate__animated animate__flash'

                    >
                        <v-img v-if="exibirImgCateg" class="shadowHover"

                            :src="categ.categImg"

                            :style="[{ 'border-radius': '8px', 'height': '100%', 'width': '100%'}]"

                            @click="chamarCateg(categ.id_categ)"
                        >
                        
                            <p 
                                :style="{'color': categ.categCor}" 
                                class="label-in">

                                    <span :style="{'display':'flex'}">{{ categ.nome_categ }}</span>
                            </p>
                        
                        </v-img>

                    </div>

                </div>
            </template>

        </div>
    </div>
</template>

<script>
//                            @mouseover="funcHoverCateg(categ)"
//                            @mouseleave="funcDesHoverCateg(categ)"
//:style="[{'box-shadow': shadowCateg}]"
//<div v-for="categ in geralLi" :key="categ.index">
//</div> categ.content_categ
import axios from 'axios'
export default {
    data() {
        return {
            // gat de verif origin rcv menu drop
            gatB: 0,
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
        categSelected() {
            return this.$store.state.categSelected // inteiro.
        },
    },
    methods: {
        funcHoverCateg() {

            this.exibirImgCateg = false
        },
        funcDesHoverCateg() {

            this.exibirImgCateg = true
        },
        chamarCateg(idCateg) {

            //console.log(idCateg)

            // puxar scroll
            window.scroll(0, 0) // (x, y)
            this.$store.state.exibirTabs = true // ativar tabs

            this.$store.state.categSelected = idCateg

            // Compartilhar id da categ selecionada.
            axios.post(`https://castarcms.club/api/post_call_categ_by_id`, {

                idC: idCateg
            
            }).then(() => {

                //console.log(res);
                //
            });
            
            this.$router.push('/ProdutoPage')
            //this.$store.state.categSelected = idCateg
        },
        getCategs() {

            //console.log('bin_gat', this.$store.state.gatBebidas)

            const path = 'https://castarcms.club/api/get_categs_on_page'

            const self = this

            axios.post(path, {varGat: this.$store.state.gatBebidas})
                .then((res) => {

                    /* lista de categorias */
                    self.geralLi = res.data.result.prodGet
                    /* var gat num id categoria bebidas */
                    self.$store.state.numCategBebida = res.data.result.id_bebida_categ
                    //console.log(self.geralLi)
                    //console.log(self.$store.state.numCategBebida)

                })
                .catch((error) => {

                    // eslint-disable-next-line
                    console.error(error);
                });

            // fazer tratamento de erro, caso proLi não esteja vazia.
            /*if ( !Array.isArray(this.geralLi) ) {

                this.getCategs() // nova tentativa de busca.
            }*/

            return

        }
    },
    beforeDestroy () {
        
        clearInterval(this.interval)
    },
    mounted () {

        window.scrollTo(0,0)

        this.getCategs();
    
        this.interval = setInterval(() => {
        if (this.value === 100) {
            //return (this.value = 0)
            this.exibirMain = true // exibir lista de produtos.
        }
        this.value += 25
        }, 2000)
    }
}
</script>