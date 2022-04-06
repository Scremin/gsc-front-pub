<style scoped>
    @import url("../descricProd-style.scss");
</style>

<template>
    <div>

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

        <!-- TELA PEQUENA -->
        <div v-if="exibirMain" class="descric-main-small hidden-md-and-up">

            <div class="super-card-small">

                <div class="lado-a-small">

                    <img :src="tmpImgProd" :style="{width:'100%'}" class="task-in" />

                    <v-btn @click="chamarCateg(tmpIDC)" class="btn-posi-small"
                    :style="{
                            
                        'box-shadow': '0 2px 10px rgba(121, 174, 64, 1)',
                        'border-radius': '18px',
                        'padding': '2%',
                        'width': '10%',
                        'height':'50px',
                        'font-size':'1.5rem',
                        'margin-left': '140%',
                        'margin-top':'30%',
                        'color': 'rgb(168, 243, 15)'
                        }"
                    >
                        >
                    </v-btn>

                </div>

                <div class="lado-b-small">

                    <div v-if="prodDesc == ''" class="dec-tx-small">
                        Não há descrição adicional.
                    </div>
                    <div v-else class="dec-tx-small">{{ prodDesc }}</div>
                    
                    <div class="btns-small">

                        <v-btn 
                        :style="{
                                
                            'margin-bottom': '30%',
                            'margin-right': '1%',

                            }"

                        @click="addProd(tmpIDC, 
                        tmpIDP,
                        tmpNomeProd,
                        tmpPrecoProd)"
                        class="green white--text">
                            <span class="">ADD</span>
                        </v-btn>
                    </div>
                
                </div>

                <v-btn 


                @click="addProd(tmpIDC, 
                tmpIDP,
                tmpNomeProd,
                tmpPrecoProd)"
                class="green white--text">
                    <span class="">ADD</span>
                </v-btn>

            </div>
        </div>

        <!-- TELA GRANDE hidden-sm-and-down -->
        <div v-if="exibirMain" class="descric-main hidden-sm-and-down">

            <div class="super-card">

                <div class="lado-a">

                    <img :src="tmpImgProd" :style="{width:'100%'}" class="task-in" />

                </div>

                <div class="lado-b">

                    <div v-if="prodDesc == ''" class="dec-tx">
                        Não há descrição adicional.
                    </div>
                    <div v-else class="dec-tx">{{ prodDesc }}</div>
                    
                    <div class="btns">

                        <v-btn @click="chamarCateg(tmpIDC)" class="btn-posi"
                        :style="{
                                
                            'box-shadow': '0 2px 10px rgba(121, 174, 64, 1)',
                            'border-radius': '18px',
                            'padding': '2%',
                            'width': '10%',
                            'height':'50px',
                            'font-size':'1.5rem',
                            'margin-left': '30%',
                            'margin-top':'30%',
                            'color': 'rgb(168, 243, 15)'
                            }"
                        >
                            >
                        </v-btn>

                        <v-btn 
                        :style="{
                                
                            'margin-bottom': '30%',
                            'margin-left': '30%',

                            }"

                        @click="addProd(tmpIDC, 
                        tmpIDP,
                        tmpNomeProd,
                        tmpPrecoProd)"
                        class="green white--text">
                            <span class="">ADD</span>
                        </v-btn>
                    </div>
                
                </div>

            </div>

        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){ 
        return {
            exibirMain: false, // acionar após circular de loading..
            interval: {},
            value: 0,
            varWrapSmall: {'flex-wrap': 'wrap'},
        } 
    },
    methods: {
        addProd(idc, idp, nomeProd, precoProd) {

            console.log(idp)
            console.log(idc)
            console.log(nomeProd)
            console.log(precoProd)

            this.$store.state.pedidoOn = false // bool de controle para o carrinho de compras.

            const idsChosen = {

                idM: this.qntProds,
                idP: idp,
                idC: idc,
                nomeP:  nomeProd,
                precoP: precoProd
            }

            this.$store.state.listCar.push(idsChosen)

            this.contador++
        },
        chamarCateg(idCateg) {

            console.log(idCateg)

            // puxar scroll
            window.scroll(0, 0) // (x, y)
            this.$store.state.exibirTabs = true // ativar tabs

            this.$store.state.categSelected = idCateg

            // Compartilhar id da categ selecionada.
            axios.post(`https://castarcms.club/api/post_call_categ_by_id`, {

                idC: idCateg
            
            }).then((res) => {

                console.log(res);
                //
            });
            
            this.$router.push('/ProdutoPage')
            //this.$store.state.categSelected = idCateg
        },
    },
    computed: {
        qntProds() {
            return this.$store.getters.qntProds
        },
        prodDesc() {
            return this.$store.state.prodDesc
        },
        tmpIDP() {
            return this.$store.state.tmpIDP
        },
        tmpIDC() {
            return this.$store.state.tmpIDC
        },
        tmpNomeProd(){
            return this.$store.state.tmpNomeProd
        },
        tmpPrecoProd(){
            return this.$store.state.tmpPrecoProd
        },
        tmpImgProd() {
            return this.$store.state.tmpImgProd
        }
    },
    beforeDestroy () {
        
        clearInterval(this.interval)
    },
    mounted () {
        
        this.interval = setInterval(() => {
            if (this.value === 100) {
                
                window.scroll(0, 0) // (x, y)
                this.exibirMain = true // exibir lista de produtos.

            }
            this.value += 50
        }, 1000)

    },
}
</script>
