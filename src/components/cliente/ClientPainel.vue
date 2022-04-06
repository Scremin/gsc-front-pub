<style scoped>
    @import url("../../styles/clienteStyle/clientPainel.scss");
</style>

<template>

    <div class="box_clientPainel">
        
        <div class="box_pedidoClientView">
            
            <div class="box_el_pedido">
                
                <div 
                class="marcador_Clientpedido" 
                :style="{'background':'rgb(204, 22, 22)'}"
                />

                <div class="painel_Clientpedido">

                    <v-chip v-for="(item,i) in pdd.pdd" :key="i"
                    class="el_painel_Clientpedido"
                    >
                        
                        
                        {{ item.tit + ' - '}}

                        {{ item.pr | dinheiro }}

                        <span :style="{'font-size':'0.6rem','margin-left':'10px'}">x</span>

                        {{ ' ' + item.qnt }}
                        
                    </v-chip>

                </div>
                
                <div class="status_Clientpedido">{{ pdd.statusPdd }}</div>
                
            </div>

            <!-- Elem info pagamento -->
            <div class="box_clientPay">   
                
                <div class="clientInfoPay">
                    
                    <span :style="{'font-size':'0.8rem'}">
                        Taxa de entrega: {{ pdd.tx_entrega | dinheiro }}
                    </span>
                    <span :style="{'font-size':'0.8rem'}">
                        Total: {{ (pdd.valorTotalCarrinho + pdd.tx_entrega) | dinheiro }}
                    </span>

                    <div>
                        Pagamento: 
                        <span :style="{'color':'rgba(121, 174, 64, 1)'}">{{ pdd.metPay }}</span>
                    </div>

                    <!-- APENAS MB WAY -->
                    <span 
                    v-if="pdd.metPay == 'MB WAY'" 
                    :style="{'font-size':'0.8rem'}"
                    >
                        <span v-if="pdd.statusPdd != 'Cancelado pelo cliente'">
                            {{ msgComprov }}
                        </span>

                        <v-icon 
                        v-if="pdd.statusPdd != 'Cancelado pelo cliente'"
                        :style="{'color':colorIconComprov}"
                        >
                            {{ iconComprov }}
                        </v-icon>
                    </span>

                    <span
                    v-if="pdd.metPay == 'Dinheiro'"
                    :style="{'font-size':'0.8rem','color':'rgb(204, 22, 22)'}"
                    >
                        Pagar ao receber em casa
                        <v-icon>mdi-home</v-icon>
                    </span>

                    <span
                    v-if="pdd.metPay == 'PayPal'"
                    :style="{'font-size':'0.8rem','color':'rgba(121, 174, 64, 1)'}"
                    >
                        PAGO com PayPal
                        <v-icon>mdi-check</v-icon>
                    </span>

                </div>

                <!-- APENAS MB WAY -->
                <div v-if="pdd.metPay == 'MB WAY'" v-show="pdd.statusPdd == 'Esperando confirmação da loja'">
                    Anexar comprovante:
                    
                    <input type="file" class="imgPay_input" name="photo" @change="onFileChange"  accept="image/*" />
                    
                    <v-btn 
                    block 
                    outlined 
                    class="green--text"
                    @click="enviarComprovante(pdd.idPdd)"
                    >
                        Enviar comprovante
                    </v-btn>

                    <span 
                    :style="{'color':corMsgCompr,'font-size':'0.8rem'}"
                    >
                        {{ msgErrorComprovante }}
                    </span>

                </div>

            </div>

            <!-- CHAT (qnd pedido aberto) -->
            <div v-if="flagChat"
            class="box_clientChat">
                
                <v-chip class="msg_chat" v-for="(msg,x) in this.pdd.liMsgsFromCms" :key="x">
                    
                    {{ msg }}
                </v-chip>
                
            </div>

        </div>

        <!-- BOTÃO DE CANCELAMENTO DO PEDIDO -->
        <v-tooltip bottom v-if="pdd.statusPdd == 'Esperando confirmação da loja'">
            <template v-slot:activator="{ on, attrs }">
                <v-chip 
                v-bind="attrs"
                v-on="on"
                @mouseover="cor = 'red'" 
                @mouseleave="cor = 'rgba(121, 174, 64, 1)'" 
                :color="cor" 
                class="btn_delete_painelClient"
                @click="cancelarPdd(pdd.idPdd,pdd.pdd)"
                >
                    x  
                </v-chip>
            </template>

            <span>Cancelar pedido</span>

        </v-tooltip>

    </div>

</template>

<script>
import axios from 'axios'

export default {

    props: ['pdd', 'indexPdd'],

    data() {
        return {
            flagChat: false,

            //lista_geral_pdds: [],

            cor: 'rgba(121, 174, 64, 1)',

            msgComprov: 'Comprovante ainda não enviado',
            iconComprov: 'mdi-alert-octagon',
            colorIconComprov: 'rgb(204, 22, 22)',
            uploadedImage: '',
            msgErrorComprovante: '',
            corMsgCompr: 'rgba(121, 174, 64, 1)',

            // subrotina incremento (devolver) qnt prod após cancelar pdd.
            liCategProd: [],
            liProd: [],
        }
    },

    methods: {

        cancelarPdd(idPdd,liCart) {

            //console.log('idPdd:', idPdd)
            //console.log('liCart:', liCart)

            // ---- varrer lista de pedidos e aninhar lista de produtos.
            // ---- buscar pedido by idPdd. Obter idC e idP a ser editados.
            var k=0
            while (k<liCart.length) {
                //console.log('while k: ',k)

                this.liCategProd = this.$store.state.prodLiGlobal
                //console.log('this.liCategProd: ',this.liCategProd)
                var i=0
                while (i < this.liCategProd.length) {
                    //console.log('while i: ',i)

                    this.liProd = this.$store.state.prodLiGlobal[i].categ

                    var h=0
                    while (h<this.liProd.length) {
                        //console.log('while h: ',h)

                        // ---- SE o idP da categoria i ENTÃO receber qnt do prod contida no db.
                        if(this.liProd[h].idP == liCart[k].idP) {

                            var newQnt = parseInt(this.liProd[h].qntProd) + parseInt(liCart[k].qnt)
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
            //console.log('depois 3 whiles')

            // -- STORAGE
            var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

            var lista_de_pedidos_geral = trafegoLocal.storedPddListUser
            var user_name = trafegoLocal.storedDateUser.nome

            var infoInsert = {
                nome:user_name,
                idPddEdit:idPdd,
                newStatus:'Cancelado pelo cliente'
            }

            var params = {

                token:'testToken',
                func:'statuspdd',
                data:infoInsert /* POST request */
            }

            const self = this

            axios.post(self.$store.state.pathAxios, params).then(function (res) {
                
                console.log(res.data.result)

                // update status pdd by idPdd
                lista_de_pedidos_geral[idPdd].statusPdd = 'Cancelado pelo cliente'

                var update_trafegoLocal = {

                    storedUserLogado: trafegoLocal.storedUserLogado, // bool <--- hold
                    storedDateUser: trafegoLocal.storedDateUser, // {} <--------- hold
                    storedPddListUser: lista_de_pedidos_geral, // [] <---------------- update
                    storedCarrinho: trafegoLocal.storedCarrinho, // [] <--------- hold
                    storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
                    storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
                }

                localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

                self.$emit('eventCancelPdd', update_trafegoLocal)

                return
            })
        },

        /* ANEXAR COMPROVANTE MB WAY */
        onFileChange (e) {

            let files = e.target.files || e.dataTransfer.files
            
            this.createImage(files[0])
        },
        //View uploaded image
        createImage (file) {

            let reader = new FileReader()

            reader.onload = (e) => {

                this.uploadedImage = e.target.result
            }

            reader.readAsDataURL(file)
        },
        enviarComprovante(idPdd) {

            if( this.uploadedImage != '' ) {

                // update flag comprovante de pagamento --> STORAGE
                // -- STORAGE
                var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

                var lista_de_pedidos_geral = trafegoLocal.storedPddListUser
                var user_name = trafegoLocal.storedDateUser.nome

                var infoInsert = {
                    nome:user_name,
                    idPddEdit:idPdd,
                    img_comprov:this.uploadedImage
                }

                var params = {

                    token:'testToken',
                    func:'addcomprovpdd',
                    data:infoInsert /* POST request */
                }
                
                const self = this

                axios.post(self.$store.state.pathAxios, params).then(function (res) {
                    
                    console.log(res.data.result)
                
                    self.corMsgCompr = 'rgba(121, 174, 64, 1)'
                    self.msgErrorComprovante = 'Comprovante enviado'
                    self.msgComprov = 'Comprovante enviado' // msg inserida hardcode no db.
                    self.iconComprov = 'mdi-check'
                    self.colorIconComprov = 'rgba(121, 174, 64, 1)'


                    // update status comprovante do pdd by idPdd + emit event
                    lista_de_pedidos_geral[idPdd].flagComprov = self.msgComprov

                    var update_trafegoLocal = {

                        storedUserLogado: trafegoLocal.storedUserLogado, // bool <--- hold
                        storedDateUser: trafegoLocal.storedDateUser, // {} <--------- hold
                        storedPddListUser: lista_de_pedidos_geral, // [] <---------------- update
                        storedCarrinho: trafegoLocal.storedCarrinho, // [] <--------- hold
                        storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
                        storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
                    }

                    localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

                    self.$emit('updateComprovPdd', update_trafegoLocal)

                    //console.log('evento comprov emitido')
                    //console.log('flagComprov: ', lista_de_pedidos_geral[idPdd].flagComprov)

                    return
                })

            } else {

                this.corMsgCompr = 'rgb(204, 22, 22)'
                this.msgErrorComprovante = 'Nenhum comprovante foi selecionado'
                this.msgComprov = 'Comprovante ainda não enviado'
                this.iconComprov = 'mdi-alert-octagon'
                this.colorIconComprov = 'rgb(204, 22, 22)'
                return
            }
        }
    },

    mounted () {
        // Se nenhum comprovante estiver siso enviado.
        if ( this.pdd.statusPdd == 'Esperando confirmação da loja' ) {

            this.flagChat = true

        } else {

            this.flagChat = false
        }
    },

    created () {

        window.scrollTo(0,0)

        this.$store.commit('updateContentApp') // without param. Initial main GET Req.

        //console.log('this.pdd.liMsgsFromCms: ',this.pdd.liMsgsFromCms)
        //var = liForGetChat = [this.pdd.idPdd, this.pdd.liMsgsFromCms]
        //this.$store.commit('updateChat') // without param. Initial main GET Req.

        // Se nenhum comprovante estiver siso enviado.
        if ( this.pdd.flagComprov == 'Comprovante ainda não enviado' ) {

            this.corMsgCompr = 'rgb(204, 22, 22)'
            this.msgComprov = 'Comprovante ainda não enviado'
            this.iconComprov = 'mdi-alert-octagon'
            this.colorIconComprov = 'rgb(204, 22, 22)'

        } else {

            this.corMsgCompr = 'rgba(121, 174, 64, 1)'
            this.msgComprov = 'Comprovante enviado'
            this.iconComprov = 'mdi-check'
            this.colorIconComprov = 'rgba(121, 174, 64, 1)'
        }
    }
}
</script>