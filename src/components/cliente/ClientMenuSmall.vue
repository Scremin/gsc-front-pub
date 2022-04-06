<template>

    <div class="box_clientMenuSmall" :style="{'display':'flex','ailgn-self':'start'}">

        <v-menu
        open-on-click
        top
        offset-y
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                icon
                large
                class="animate__animated animate__flash"
                color="primary"
                dark
                v-bind="attrs"
                v-on="on"
                >
                    <v-icon color="rgba(168,243,15,1)">mdi-account-details</v-icon>

                </v-btn>
            </template>

            <v-list>

                <v-list-item link font-color="rgb(168, 243, 15)"
                v-for="(item, index) in itemsSmall"
                :key="index"
                @click="funcRotaMenuSmall(item.title)"
                >

                    <v-list-item-title class="luzHover">
                        <v-icon>{{ item.icone }}</v-icon>
                        {{ item.title }}
                    </v-list-item-title>

                </v-list-item>

                <v-btn @click="funcRotaMenuSmall('Sair')"
                outlined
                plain
                block
                class="white--text black btnSairMenuClient"
                >
                    Sair
                </v-btn>

            </v-list>

        </v-menu>

    </div>

</template>

<script>
//import axios from 'axios'

export default {
    data(){
        return {
            itemsSmall: [
                {title:'Meus pedidos',icone:'mdi-account-arrow-left'}, 
                {title:'Minha conta',icone:'mdi-account-cog'}
            ],
        }
    },
    methods: {
        funcRotaMenuSmall(rotaMenu){

            switch (rotaMenu) {

                case 'Meus pedidos':

                    this.$store.state.flagClientPddShow = true
                    this.$store.state.flagClientContaShow = false

                    break;

                case 'Minha conta':

                    this.$store.state.flagClientPddShow = false
                    this.$store.state.flagClientContaShow = true
                    
                    break;

                case 'Sair':

                    // -- tráfego entre páginas do cliente.
                    this.$store.state.flagShowLogin = true
                    this.$store.state.flagShowCadastro = false
                    this.$store.state.flagShowClientPage = false

                    // -- decrementar stepper
                    this.$store.state.numStepperCarrinho = 2
                    // -- marcar como NÃO concluída a etapa de dados do usuário
                    this.$store.state.flagStepCarrinho2 = false
                    // -- desabilitar flag de usuário online
                    this.$store.state.flagUserAtivo = false

                    // -- STORAGE
                    var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

                    // save user data on db.

                    var update_trafegoLocal = {

                        storedUserLogado: this.$store.state.flagUserAtivo, // bool <------ update
                        storedDateUser: trafegoLocal.storedDateUser, // {} <--------- hold (resetar)
                        storedPddListUser: trafegoLocal.storedPddListUser, // [] <--- hold (resetar)
                        storedCarrinho: trafegoLocal.storedCarrinho, // [] <--------- hold
                        storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
                        storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
                    }

                    localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

                    break;
            }
        }
    }
}
</script>