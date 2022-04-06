<style scoped>
    @import url("../carrinho-style.scss");
</style>

<template>
    <div>
        <div class="geral_carrinho_page">
            <v-container>
                <div class="car_main_col">

                    <div class="car_ladoA hidden-md-and-up">

                        <div class="panelExibLabel">

                            <div class="label-categ">
                                <p class="label-in">Meus Produtos</p>
                            </div>

                        </div>

                        <template v-if="listCar.length">
                            <div v-for="produto in listCar" :key="produto.index" class="panelExib">
                                
                                <div class="task-prod-exib">

                                    <v-toolbar
                                        color="green"
                                        dark
                                        class="rounded-pill"
                                        height='100%'
                                    >
                                        <v-toolbar-items class="elemDireita">

                                            <span class="elemInterno">{{ produto.precoP | dinheiro }}</span>

                                        </v-toolbar-items>

                                        <v-divider
                                            class="mx-4"
                                            vertical
                                        ></v-divider>

                                        <v-toolbar-items class="nomeExib">

                                            <span class="nomeExibInterno">{{ produto.nomeP }}</span>

                                        </v-toolbar-items>

                                    </v-toolbar>

                                    <v-btn @click="excluirElem(produto.idM)"
                                        class="yellow black--text">
                                        <span class="">X</span>
                                    </v-btn>

                                </div>
                            </div>

                            <div class="panel_finalizar_ext" 
                                :style="{
                                    'display':'flex','justify-content':'center','align-items':'center',
                                    'flex-direction':'column'}">

                                <v-radio-group
                                v-model="radios"
                                mandatory
                                >
                                <v-radio
                                    label="Entrega na Covilhã"
                                    value="radio-1"
                                    @click="trocarParaTipo1()"
                                ></v-radio>
                                <v-radio
                                    label="Entrega fora da Covilhã"
                                    value="radio-2"
                                    @click="trocarParaTipo2()"
                                ></v-radio>
                                </v-radio-group>

                                <span v-if="radios == 'radio-1'" class="panel_finalizar_int" :style="{'color':'rgb(150, 42, 42)'}">Taxa de entrega: {{ tx_entrega | dinheiro }}</span>
                                <span v-if="radios == 'radio-2'" class="panel_finalizar_int" :style="{'color':'rgb(150, 42, 42)'}">Taxa de entrega: {{ tx_entrega2 | dinheiro }}</span>

                                <span class="panel_finalizar_int">Valor total: {{ valorTotal | dinheiro }}</span>
                            </div>

                            <div class="btn_finalizar_ext">
                                <div class="">

                                    <v-btn v-if="((valorTotal-tx_entrega) < 10) && radios == 'radio-1'"
                                    class="green red--text">
                                        <span class="">PEDIDO MÍNIMO 10€</span>
                                    </v-btn>
                                    <v-btn v-else-if="((valorTotal-tx_entrega2) < 10) && radios == 'radio-2'"
                                    class="green red--text">
                                        <span class="">PEDIDO MÍNIMO 10€</span>
                                    </v-btn>
                                    <v-btn v-else-if="alertaBebida == 1 && radios == 'radio-2'"
                                    class="green red--text">
                                        <span class="">BEBIDAS APENAS NA COVILHÃ</span>
                                    </v-btn>
                                    <v-btn v-else @click="finalizarPedido()"
                                    class="green black--text">
                                        <span class="">FINALIZAR PEDIDO</span>
                                    </v-btn>

                                </div>
                            </div>
                        </template>
                        <div v-else-if="pedidoOn" class="panelExib hidden-md-and-up">
                            <span>Seu pedido foi enviado com sucesso</span>
                        </div>

                        <div v-else class="panelExib hidden-md-and-up">
                            <span>Seu carrinho ainda está vazio</span>
                        </div>
                    </div>

                    <div class="car_ladoAg hidden-sm-and-down">

                        <div class="panelExibLabel">

                            <div class="label-categ">
                                <p class="label-in">Meus Produtos</p>
                            </div>

                        </div>

                        <template v-if="listCar.length">
                            <div v-for="produto in listCar" :key="produto.index" class="panelExib">
                                
                                <div class="task-prod-exib">

                                    <v-toolbar
                                        color="green"
                                        dark
                                        class="rounded-pill"
                                    >
                                        <v-toolbar-items class="elemDireita">

                                            <span class="elemInterno">{{ produto.precoP | dinheiro }}</span>

                                        </v-toolbar-items>

                                        <v-divider
                                            class="mx-4"
                                            vertical
                                        ></v-divider>

                                        <v-toolbar-items class="nomeExib">

                                            <span class="nomeExibInterno">{{ produto.nomeP }}</span>

                                        </v-toolbar-items>

                                        <v-divider
                                            class="mx-4"
                                            vertical
                                        ></v-divider>

                                        <v-spacer></v-spacer>

                                        <v-btn @click="excluirElem(produto.idM)"
                                        class="yellow black--text">
                                            <span class="">X</span>
                                        </v-btn>

                                    </v-toolbar>
                                </div>
                            </div>

                            <div class="panel_finalizar_ext">

                                <v-radio-group
                                v-model="radios"
                                mandatory
                                >
                                <v-radio
                                    label="Entrega na Covilhã"
                                    value="radio-1"
                                    @click="trocarParaTipo1()"
                                ></v-radio>
                                <v-radio
                                    label="Entrega fora da Covilhã"
                                    value="radio-2"
                                    @click="trocarParaTipo2()"
                                ></v-radio>
                                </v-radio-group>

                                <span v-if="radios == 'radio-1'" class="panel_finalizar_int" :style="{'color':'rgb(150, 42, 42)'}">Taxa de entrega: {{ tx_entrega | dinheiro }}</span>
                                <span v-if="radios == 'radio-2'" class="panel_finalizar_int" :style="{'color':'rgb(150, 42, 42)'}">Taxa de entrega: {{ tx_entrega2 | dinheiro }}</span>
                                
                                <span class="panel_finalizar_int">Valor total: {{ valorTotal | dinheiro }}</span>
                            </div>

                            <div class="btn_finalizar_ext">

                                <v-btn v-if="((valorTotal-tx_entrega) < 10) && radios == 'radio-1'"
                                class="green red--text">
                                    <span class="">PEDIDO MÍNIMO 10€</span>
                                </v-btn>
                                <v-btn v-else-if="((valorTotal-tx_entrega2) < 10) && radios == 'radio-2'"
                                class="green red--text">
                                    <span class="">PEDIDO MÍNIMO 10€</span>
                                </v-btn>
                                <v-btn v-else-if="alertaBebida == 1 && radios == 'radio-2'"
                                class="green red--text">
                                    <span class="">BEBIDAS APENAS NA COVILHÃ</span>
                                </v-btn>
                                <v-btn v-else @click="finalizarPedido()"
                                class="green black--text">
                                    <span class="">FINALIZAR PEDIDO</span>
                                </v-btn>

                            </div>

                        </template>

                        <div v-else class="panelMSG hidden-sm-and-down">
                            <span>Seu carrinho ainda está vazio</span>
                        </div>
                    </div>

                <div class="car_ladoB hidden-sm-and-down">
                    
                    <div>
                        Aproveite e aprecie mas não deixe de conhecer nossa loja presencialmente também!
                    </div>

                    <img class=""
                        :src="require('@/assets/ambG2.png')"
                        :style="{
                            'width':'100%',
                            'border-radius':'8px',
                            'height': '100%',}" 
                    />


                </div>

                </div>
            </v-container>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {

            radios: 'radio-1',

            tx_rcv: '',
            tx2_rcv: '',

            alertaBebida: 0, // gat bebida no carrinho
        }
    },
    methods: {
        finalizarPedido() {
            // atribuir autenticação --> a lista está vazia? => não fazer requisição.
            // preencher outras infos do pedido com a info do user em compra.

            //console.log(this.listCar)
            //console.log(this.valorTotal)

            // Taxa de entrega escolhida pelo cliente.
            if(this.radios == 'radio-1') {

                this.$store.state.tx_entrega_final = this.tx_entrega

                //console.log('Tx entrega final: ')
                //console.log(this.$store.state.tx_entrega_final)
            }
            else {

                this.$store.state.tx_entrega_final = this.tx_entrega2

                //console.log('Tx entrega final: ')
                //console.log(this.$store.state.tx_entrega_final)
            }

            this.$store.state.valorTotalFinal = this.valorTotal.toString()

            // -- chamar página de informações da entrega.
            this.$router.push('/FinalPedido')

        },
        trocarParaTipo1(){

            this.$store.state.entregaTipo1 = true
            this.$store.state.entregaTipo2 = false

            //console.log(this.$store.state.entregaTipo1)
            //console.log(this.$store.state.entregaTipo2)
        },
        trocarParaTipo2(){
            
            this.$store.state.entregaTipo1 = false
            this.$store.state.entregaTipo2 = true

            //console.log(this.$store.state.entregaTipo1)
            //console.log(this.$store.state.entregaTipo2)
        },
        excluirElem(id_ElemOnListCar) {
            //console.log('idM (excluir): ' + id_ElemOnListCar)
            const q = (this.listCar.length - 1); // (length listCar - elem_excluído)
            // -- Recortar primeira parte da lista.
            var nova_li_1 = this.$store.state.listCar.slice(0, id_ElemOnListCar)
            //console.log('nova_li_1: ' + nova_li_1)
            // -- Concatenar a 2ª parte da lista, após exclusão de 1 elem.
            let c = id_ElemOnListCar;
            //console.log('q: ' + q)
            while(c < q) {
                nova_li_1.push({
                    idM: c,
                    idP: this.$store.state.listCar[c+1].idP,
                    idC: this.$store.state.listCar[c+1].idC,
                    nomeP:  this.$store.state.listCar[c+1].nomeP,
                    precoP: this.$store.state.listCar[c+1].precoP
                })
                //console.log('c: ' + c)
                c++
            }
            //console.log('nova_li_1: ' + nova_li_1)
            this.$store.state.listCar = nova_li_1; // trocar lista carrinho no state.
            // eslint-disable-next-line
            //console.log(this.$store.state.listCar)

            //console.log(this.$store.state.listCar)
            //console.log(this.$store.state.listCar.length)
            
            /* Condicionamento de id categoria de bebidas */
            let k = 0
            while(k < this.$store.state.listCar.length) {

                if(this.$store.state.listCar[k].idC == this.$store.state.numCategBebida){
                    //console.log('categoria bebida encontrada')
                    this.alertaBebida = 1
                    return
                }
                else{

                    this.alertaBebida = 0
                    //console.log('nenhuma bebida encontrada')

                }
                
                k++
            } 

        },
        verifMenuDrop() {
            this.$store.state.auth_router = true // liberar menu drop.
        }
    },
    computed: {
        listCar() {
            return this.$store.state.listCar
        },
        valorTotal() {
            //return this.listCar.map(p => p.precoP * 1).reduce((total, atual) => total + atual, 0)
            return this.$store.getters.valorTotal
        },
        tx_entrega(){
            return this.$store.state.tx_entrega
        },
        tx_entrega2(){
            return this.$store.state.tx_entrega2
        },
        qntProds() {
            return this.$store.state.qntProds // length listCar
        },
        pedidoOn() {
            return this.$store.state.pedidoOn // bool
        },
        entregaTipo1(){
            return this.$store.state.entregaTipo1
        },
        entregaTipo2(){
            return this.$store.state.entregaTipo2
        },
    },
    beforeDestroy () {
        
        clearInterval(this.interval)
    },
    mounted () {

        this.$store.state.auth_router = true // liberar menu drop.

        const path = 'https://castarcms.club/api/get_tx_entrega'

        const self = this

        axios.get(path)
            .then((res) => {

                self.tx_rcv = res.data.result.tx; /* tx dentro */
                self.tx2_rcv = res.data.result.tx2; /* tx para fora */
                
                //console.log(self.tx_rcv);
                //console.log(self.tx2_rcv);

                self.$store.state.tx_entrega = self.tx_rcv
                self.$store.state.tx_entrega2 = self.tx2_rcv

                //console.log(self.$store.state.tx_entrega)

                self.trocarParaTipo1() // ajustar inicialização preço de entrega.
            })
            .catch((error) => {
            // eslint-disable-next-line
            console.error(error);
            });

        /* Condicionamento de id categoria de bebidas */
        let c = 0
        while(c < this.$store.state.listCar.length) {

            /* Se houver na lista carrinho o id da categoria bebida */
            if(this.$store.state.listCar[c].idC == this.$store.state.numCategBebida){
                //console.log('categoria bebida encontrada')
                // Então acionar gatilho local => há bebida no carrinho!!
                this.alertaBebida = 1
                return // 1 encontro é suficiente.
            }
            else{

                this.alertaBebida = 0
                //console.log('nenhuma bebida encontrada')
            }
            
            c++
        }
    },
}
</script>