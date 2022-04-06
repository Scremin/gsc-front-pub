<style scoped>
    @import url("../../styles/clienteStyle/clientPage.scss");
</style>

<template>

    <div class="box_clientPage">

        <!-- CLIENT PAINEL LARGE -->
        <div class="box_painelClient hidden-sm-and-down" v-if="$store.state.flagClientPddShow">

            <ClientPainel
            @eventCancelPdd="eventCancelPdd($event)"
            @updateComprovPdd="updateComprovPdd($event)"
            v-for="(pdd,i) in this.lista_geral_pdds" :key="i"
            :pdd="pdd" :indexPdd="i"
            />

            <span v-if="this.lista_geral_pdds.length == 0" class="msg_noPddsPainelClient">
                Nenhum pedido ainda.
            </span>
        
        </div>

        <!-- -->
        <div class="box_painelClient hidden-md-and-up" v-if="$store.state.flagClientPddShow">

            <ClientPainelSmall 
            @eventCancelPdd="eventCancelPdd($event)"
            @updateComprovPdd="updateComprovPdd($event)"
            v-for="(pdd,i) in this.lista_geral_pdds" :key="i"
            :pdd="pdd" :indexPdd="i"
            />

            <span v-if="this.lista_geral_pdds.length == 0" class="msg_noPddsPainelClient">
                Nenhum pedido ainda.
            </span>
        
        </div>

        <!-- EDIT CLIENT (client conta) -->
        <div class="box_painelClient" v-if="$store.state.flagClientContaShow">

            <ClientConta />
        
        </div>

        <!-- CLIENT MENU LARGE -->
        <ClientMenuLarge class="box_menuClientPage hidden-sm-and-down" />
        
        <!-- CLIENT MENU SMALL -->
        <ClientMenuSmall class="box_menuClientPage hidden-md-and-up" />

    </div>

</template>

<script>
import ClientPainel from './ClientPainel.vue'
import ClientPainelSmall from './ClientPainelSmall.vue'
import ClientConta from './ClientConta.vue'
import ClientMenuLarge from './ClientMenuLarge.vue'
import ClientMenuSmall from './ClientMenuSmall.vue'

export default {

    components: { ClientPainel, ClientPainelSmall, ClientConta, ClientMenuLarge, ClientMenuSmall },

    methods: {

        // -- rcv event from filho.
        eventCancelPdd(update_trafegoLocal) {

            //console.log('event rcved')

            // -- atualizar lista de pedidos após um pedido cancelado pelos filhos ClientPainel large e small.
            this.lista_geral_pdds = update_trafegoLocal.storedPddListUser

            //console.log(update_trafegoLocal.storedPddListUser[1].statusPdd)
            //console.log('lista_geral_pdds:',this.lista_geral_pdds[1].statusPdd)

            window.location.reload() // forçar update
        },
        updateComprovPdd(update_trafegoLocal) {

            this.lista_geral_pdds = update_trafegoLocal.storedPddListUser
            window.location.reload() // forçar update
        }
    },

    mounted () {

        // -- STORAGE
        var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

        this.lista_geral_pdds = trafegoLocal.storedPddListUser
        //console.log('lista_geral_pdds:',this.lista_geral_pdds)
    },

    created () {

        window.scrollTo(0,0)

        // -- STORAGE
        var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

        this.lista_geral_pdds = trafegoLocal.storedPddListUser

        // buscar update dos pedidos no db.
        this.$store.commit('updateClient', trafegoLocal.storedDateUser.nome) // obter lista de pedidos atualizada.

        setTimeout(() => {

            // -- STORAGE
            var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

            this.lista_geral_pdds = trafegoLocal.storedPddListUser
            //console.log('update lista de produtos')
        }, 1500)
    }
}
</script>