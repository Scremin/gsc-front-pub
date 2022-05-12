<style scoped>
    @import url("../../styles/clienteStyle/clientMenuLarge.scss");
</style>

<template>

    <div class="box_clientMenuLarge">
        
        <div class="colunaMenuClient">
            
            <div class="tit_menuClient">

                <v-icon large color="rgba(121, 174, 64, 1)">mdi-account-circle</v-icon>
                
                <span>{{ $store.state.nomeUsuario }}</span>
            
            </div>

            <v-divider></v-divider>

            <div class="box_item_menuClient">
                
                <span @click="funcRotaMenuLarge('Meus pedidos')"
                class="item_menuClient backgroundColor"
                >
                    
                    <v-icon>mdi-account-arrow-left</v-icon>

                    <span
                    :style="{'margin-left': '4px'}"
                    >
                        Meus pedidos
                    </span>

                </span>

                <span @click="funcRotaMenuLarge('Minha conta')"
                class="item_menuClient backgroundColor"
                >
                    
                    <v-icon>mdi-account-cog</v-icon>

                    <span
                    :style="{'margin-left': '4px'}"
                    >
                        Minha conta
                    </span>

                </span>

                <v-divider></v-divider>

                <v-btn @click="funcRotaMenuLarge('Sair')"
                outlined
                class="white--text btnSairMenuClient"
                >
                    Sair
                </v-btn>

            </div>

        </div>
    </div>

</template>

<script>
  export default {
    data () {
      return {
        items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
      }
    },

    methods: {
        funcRotaMenuLarge(rotaMenu){

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

                        storedOverLay: trafegoLocal.storedOverLay, // bool <--------- hold
                        storedUserLogado: this.$store.state.flagUserAtivo, // bool <------ update
                        storedDateUser: {}, // {} <--------------------------------------- reset
                        storedPddListUser: [], // [] <------------------------------------ reset
                        storedCarrinho: trafegoLocal.storedCarrinho, // [] <--------- hold
                        storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
                        storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
                    }

                    localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

                    window.location.reload()

                    break;
            }
        }
    }
  }
</script>