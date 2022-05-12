<style scoped>
    @import url("../../styles/carrinhoStyle/payAndClientCarrinho.scss");
</style>

<template>

    <!-- v-if="this.$store.state.listCar.length > 0" -->
    <div class="box_payAndClientCarrinho">
        
        <!-- PAINEL DE DADOS DO CLIENTE E VALOR DO PEDIDO -->
        <div class="painel_resumoPagamento">

            <div class="painel_clientCarrinho">

                <span class="tit_painelCarrinhoC">Dados do usuário</span>

                <span class="tx_user_adress_fone">
                    <v-icon :style="{'margin-right':'4px'}">mdi-account</v-icon>
                    {{ this.$store.state.nomeUsuario }}
                </span>

                <span class="tx_user_adress_fone">
                    <v-icon :style="{'margin-right':'4px'}">mdi-home</v-icon>
                    {{ this.$store.state.enderecoUsuario }}
                </span>

                <span class="tx_user_adress_fone">
                    <v-icon :style="{'margin-right':'4px'}">mdi-phone</v-icon>
                    {{ this.$store.state.foneUsuario }}
                </span>

            </div>

            <div class="resumoPedidoCarrinho">

                <span class="tit_painelCarrinhoC">Resumo do pedido</span>

                <div class="tx_resumoPedidoLineA">
                    <span>Produtos:</span>
                    <span>{{ this.$store.getters.valorTotalCarrinho | dinheiro}}</span>
                </div>

                <div class="tx_resumoPedidoLineA">
                    <span>Taxa de entrega:</span>
                    <span>{{ this.$store.state.tx_entrega_final | dinheiro}}</span>
                </div>

                <span :style="{'font-size':'0.7rem','color':'red'}">
                    {{ this.$store.state.msgDestinoEntregaCarrinho }}
                </span>

                <div class="tx_resumoPedidoLineB">
                    <span>Total:</span>
                    <span>{{ this.$store.getters.valorTotalCompra | dinheiro}}</span>
                </div>

            </div>
        </div>

        <!-- PAINEL DE PAGAMENTO -->
        <div class="painel_payCarrinho">

            <div class="divTitCarrinhoC">
                <span class="tit_painelCarrinhoC">Forma de pagamento</span>
                <span :style="{'font-size':'0.7rem','color':'red'}">
                    Selecione uma forma de pagamento para prosseguir.
                </span>
            </div>


            <v-radio-group
            v-model="radios"
            mandatory
            >
                <v-radio
                    color="rgba(121, 174, 64)"
                    label="PayPal"
                    value="PayPal"
                ></v-radio>
                <v-radio
                    color="rgba(121, 174, 64)"
                    label="MB WAY"
                    value="MB WAY"
                ></v-radio>
                <!-- v-if="entregaNaCovi == true" -->
                <!--<v-radio v-if="this.$store.state.flagTx == 'covi'"
                    color="rgba(121, 174, 64)"
                    label="Pagar ao receber a encomenda"
                    value="Dinheiro"
                ></v-radio>-->
            </v-radio-group>

            <span 
            :style="{'font-size':'0.7rem','color':'red'}"
            v-if="radios == 'PayPal'"
            >
                As taxas de pagamento serão subtraídas do valor caso haja solicitação de cancelamento do pedido pago com PayPal
            </span>

            <div :style="{'display':'flex','align-self':'center','max-width':'200px'}"
            v-if="radios == 'PayPal'"
            >
                <div>
                    <!-- :amount="valorTotal" -->
                    <PayPal
                    amount="0.1"
                    currency="EUR"
                    :client="credentials"
                    :button-style="myStyle"
                    @payment-authorized="eventoPayPal($event, 'authorized')"
                    @payment-cancelled="eventoPayPal($event, 'cancelled')"
                    @payment-completed="eventoPayPal($event, 'completed')"
                    >
                    </PayPal>
                </div>
            </div>

            <span v-if="radios == 'MB WAY'">
                MB WAY - 928 113 960
            </span>
            <span v-if="radios == 'MB WAY'" :style="{'font-size':'0.8rem'}">
                Transfira o valor exacto.
            </span>
            <span v-if="radios == 'MB WAY'" :style="{'color':'rgba(121, 174, 64)'}">
                Após finalizar o comprovante deve ser anexado junto a sua área de cliente para confirmação.
            </span>

            <span v-if="radios == 'Dinheiro'">O pagamento deve ser feito ao receber a encomenda na sua morada.</span>

            <v-btn v-if="radios == 'MB WAY'"
            outlined 
            plain 
            @click="chamarPageFinalCarrinho('MB WAY', '')"
            class="btn_voltarToCateg black--text"
            >
                Ok. Continuar
            </v-btn>

            <v-btn v-if="radios == 'Dinheiro'"
            outlined 
            plain 
            @click="chamarPageFinalCarrinho('Dinheiro', '')"
            class="btn_voltarToCateg black--text"
            >
                Ok. Continuar
            </v-btn>

        </div>

    </div>

</template>

<script>
import PayPal from 'vue-paypal-checkout'

export default {

    components: { PayPal },

    data() {
        return {

            radios: 'Método de pagamento não escolhido',

            // PayPal
            credentials: {
                // <sandbox client id>
                sandbox: 'AXRen_Z2hpmf6Y3uyCvzdJeP9NZOq8ZVFXVARc9tWpXODK3MGeeNwIys1pfWPMPCoUeNCI2QLtlq7TTH',
                // <production client id>
                production: 'AX7Wj4nUAOgn916pImH9HLIBPuDFZ49deH2PIhThFBjKK9Oq6bagAVggd1l2Iy29heGK8iwrGAGBGmZD'
            },
            myStyle: {
                //size: 'large',
                size: 'small',
                //size: 'responsive',
                label: 'checkout'
            },

            // subrotina de decremento dos produtos contidos no pedido.
            liCategProd: [], // lista de categorias.
            liProd: [], // lista de produtos em cada categoria.
        }
    },

    methods: {
        obterDate() {

            // get time
            var dataAtual = new Date();
            var dia = dataAtual.getDate();
            var mes = (dataAtual.getMonth() + 1);
            var ano = dataAtual.getFullYear();
            var horas = dataAtual.getHours();
            var minutos = dataAtual.getMinutes();

            if(String(minutos).length == 1) {

                minutos = ("0" + minutos)
            }
            if(String(horas).length == 1) {

                horas = ("0" + horas)
            }
            if(String(dia).length == 1) {

                dia = ("0" + dia)
            }
            if(String(mes).length == 1) {
                
                mes = ("0" + mes)
            }

            let day = (dia + "/" + mes + "/" + ano)
            let hr = (horas + ":" + minutos) 

            var date = {
                day: day,
                hr: hr
            }
            
            return date
        },
        eventoPayPal(param, confirmation) {

            console.log(param)
            console.log(confirmation)

            if (confirmation == 'completed') {

                let statusPayPal = {

                    allDataSale: param,
                    nomeCliente: param["payer"]["payer_info"]["first_name"],
                    sobrenomeCliente: param["payer"]["payer_info"]["last_name"]
                }

                console.log(statusPayPal, statusPayPal)

                this.chamarPageFinalCarrinho('PayPal')
            }

            // retornar msg de error paypal
        },
        chamarPageFinalCarrinho(metPay, statusPay) {

            //console.log(metPay)

            // Inserir dados no store e em seguida deletar.
            // após o fechamento do pedido o sistema deve está apto a uma nova compra.
            // -- colocar pedidos do carrinho e dados da compra no ambiente global do cliente logado.
            // ----- posteriormente todas as compras podem ser visualizadas na área do cliente.
            // -- reset carrinho
            // -- reset variáveis de pagamento

            // -- subrotina de decremento da qnt de produtos contidos no pedido todo.
            // ---- varrer lista de pedidos e aninhar lista de produtos.
            // ---- buscar pedido by idPdd. Obter idC e idP a ser editados.
            var liCart = this.$store.state.listCar
            var k=0
            while (k<liCart.length) {

                this.liCategProd = this.$store.state.prodLiGlobal
                var i=0
                while (i < this.liCategProd.length) {

                    this.liProd = this.$store.state.prodLiGlobal[i].categ

                    var h=0
                    while (h<this.liProd.length) {

                        // ---- SE o idP da categoria i ENTÃO receber qnt do prod contida no db.
                        if(this.liProd[h].idP == liCart[k].idP) {

                            var newQnt = parseInt(this.liProd[h].qntProd) - parseInt(liCart[k].qnt)
                            //console.log('qntProd atual: ',this.liProd[h].qntProd)
                            //console.log('qnt prod cart atual: ',liCart[k].qnt)
                            //console.log('newQnt: ',newQnt)
                            
                            var el_editQntProd = {

                                idC:i,
                                idP:liCart[k].idP,
                                qntProd:newQnt
                            }
                            //console.log('el_editQntProd: ',el_editQntProd)
                            this.$store.commit('change_qnt_prod', el_editQntProd)
                        }

                        h++ // varrer toda a lista de produtos.
                    }

                    i++ // varrer todas as categorias.
                }

                k++ // varrer todos os produtos da lista carrinho do pedido.
            }

            // -- STORAGE
            var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

            var lista_de_pedidos_geral = trafegoLocal.storedPddListUser

            var pdd = {

                idPdd: trafegoLocal.storedPddListUser.length,
                statusPdd: 'Esperando confirmação da loja',
                metPay: metPay,
                flagComprov: 'Comprovante ainda não enviado',
                comprov:'', // img
                statusPay: statusPay,
                datePay: this.obterDate(),
                dateFim: {}, // atualizado após conclusão do pedido, pela loja.
                valorTotalCarrinho: parseFloat(this.$store.getters.valorTotalCarrinho),
                tx_entrega: parseFloat(this.$store.state.tx_entrega_final),
                pdd: this.$store.state.listCar,
                liMsgsFromCms:[]
            }

            lista_de_pedidos_geral.push(pdd) // add novo pdd (STORAGE)

            var postPdd = {

                nome:trafegoLocal.storedDateUser.nome,
                pdd:pdd
            }

            // -- montagem do pedido destinado ao histórico geral de entrada.
            // ---- receber id do último pdd_his no db.
            // ---- pré-montar string pdd.
            var li_Cart = this.$store.state.listCar

            /*console.log('liCart.length: ',li_Cart.length)
            console.log('liCart: ',li_Cart)
            console.log('liCart[w]: ',li_Cart[0])
            console.log('liCart[w].tit: ',li_Cart[0].tit)
            console.log('liCart[w].tit: ',li_Cart[0].qnt)
            console.log('liCart[w].tit: ',li_Cart[0].pr)
            var x = String(li_Cart[0].qnt)
            console.log('qnt em str: ',x)*/

            var str_pdd = ' '
            var w=0
            while (w < li_Cart.length) { // varrer lista de pedidos e montar string de exibição do hitórico.

                var a = li_Cart[w].tit
                var b = String(li_Cart[w].qnt)
                var c = String(li_Cart[w].pr)

                str_pdd = str_pdd + ' || ' + a + ' ' + 'x' + b + ' ' + c
                console.log(str_pdd)
                w++
            }
            
            var pdd_for_his = {

                _id: this.$store.state.li_pdds_his.length, // novo id de posicionamento no db.
                idPdd: trafegoLocal.storedPddListUser.length, // id do pedido.
                nome: trafegoLocal.storedDateUser.nome,
                adr: trafegoLocal.storedDateUser.adr,
                fone: trafegoLocal.storedDateUser.fone,
                statusPdd: pdd.statusPdd,
                in: pdd.datePay.day + ' ' + pdd.datePay.hr,
                out: '',
                pag: pdd.metPay,
                total: pdd.valorTotalCarrinho,
                tx: parseFloat(this.$store.state.tx_entrega_final),
                loc: this.$store.state.msgDestinoEntregaCarrinho,
                pdd: str_pdd,
            }

            //console.log('pdd_for_his: ',pdd_for_his)
            this.$store.commit('postElHis', pdd_for_his) // POST Req.

            // commit --> update pdd list user in db
            this.$store.commit('updatePddsUserDB', postPdd) // POST Req.

            var update_trafegoLocal = {

                storedUserLogado: trafegoLocal.storedUserLogado, // bool <--- hold
                storedDateUser: trafegoLocal.storedDateUser, // {} <--------- hold
                storedPddListUser: lista_de_pedidos_geral, // [] <---------------- update
                storedCarrinho: [], // [] <--------------------------------------- update
                storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
                storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
            }

            localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

            // RESET
            this.$store.state.listCar = []
            this.$store.state.valorTotalCarrinho = 0

            this.$router.push('/fechamentoD')
        },
    },

    created () {

        window.scrollTo(0,0)

        this.$store.commit('getHisCms') // GET Req histórico.

        // -- STORAGE
        var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

        // ---- nova checkagem de dados do usuário.
        this.$store.state.nomeUsuario = trafegoLocal.storedDateUser.nome
        this.$store.state.enderecoUsuario = trafegoLocal.storedDateUser.adr
        this.$store.state.foneUsuario = trafegoLocal.storedDateUser.fone
        // ---- nova checkagem da lista carrinho.
        this.$store.state.listCar = trafegoLocal.storedCarrinho

        console.log('li pdd tam: ',trafegoLocal.storedPddListUser.length)
    }
}
</script>