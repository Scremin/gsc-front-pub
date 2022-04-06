<style scoped>
    @import url("../../styles/clienteStyle/clientHome.scss");
</style>

<template>

    <div class="box_clientHome">

        <!-- LARGE --------------------------------->
        <ClientLogin :dim_Width_Height="{'width':'400','height':'250'}"
        v-if="$store.state.flagShowLogin" 
        class="hidden-sm-and-down"
        />

        <ClientCadastro 
        v-if="$store.state.flagShowCadastro" 
        class="hidden-sm-and-down"
        />

        <!-- SMALL --------------------------------->        
        <ClientLogin :dim_Width_Height="{'width':'150','height':'250'}"
        v-if="$store.state.flagShowLogin" 
        class="hidden-md-and-up"
        :style="{width: '160px'}"
        />

        <ClientCadastro 
        v-if="$store.state.flagShowCadastro" 
        class="hidden-md-and-up"
        :style="{width: '160px'}"
        />

        <!-- MESMO TAMANHO EM QLQR DIM -->
        <ClientPage v-if="$store.state.flagShowClientPage" />

    </div>

</template>

<script>
import ClientLogin from './ClientLogin.vue'
import ClientCadastro from './ClientCadastro.vue'
import ClientPage from './ClientPage.vue'

export default {

    data() {
        return {
            
            UserLogado: false,
        }
    },
    
    components: { ClientLogin, ClientCadastro, ClientPage },

    created () {

        window.scrollTo(0,0)

        // -- STORAGE
        var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

        this.UserLogado = trafegoLocal.storedUserLogado
        //console.log('UserLogado:',this.UserLogado)

        this.$store.state.nomeUsuario = trafegoLocal.storedDateUser.nome

        if (this.UserLogado == true) {

            // -- tráfego entre páginas.
            // ---- habiltar clientPage
            this.$store.state.flagShowLogin = false
            this.$store.state.flagShowCadastro = false
            this.$store.state.flagShowClientPage = true
        }
    }
}
</script>