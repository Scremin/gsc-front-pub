<style scoped>
    @import url("../menu_lateral.scss");
</style>

<template>

    <v-card class="ajuste_menuLat">

        <div class="ajusteSup">

                <div class="sup_posi_1">
                    <v-list-item-avatar class="sup_posi_1_int animate__animated animate__flash">
                        <!--<img :src="require('../assets/t.png')">-->
                        <v-icon large color="rgb(168, 243, 15)">{{ 'mdi-account' }}</v-icon>
                    </v-list-item-avatar>
                </div>

                <v-list-item-content class="sup_posi_2">
                    <v-list-item-title class="sup_posi_2_int"> {{ this.$store.state.c_name }} </v-list-item-title>
                </v-list-item-content>

                <v-list-item-content class="sup_posi_2">
                    <v-list-item-subtitle class="sup_posi_2_int">Logada(o)</v-list-item-subtitle>
                </v-list-item-content>

        </div>

        <v-divider></v-divider>

        <div class="btn_logout">
            <v-btn @click="logoutFunc()" dark class="btn_logout_int">
                <span>SAIR</span>
            </v-btn>
        </div>

        <div class="logo_final">

            <div class="logo_final_int">

                <v-icon large>{{ 'mdi-cannabis' }}</v-icon>
            
            </div>

        </div>

        <v-divider></v-divider>

    </v-card>
    
</template>

<script>
export default {
    data(){
        return {

            items: [
                { 
                    title: 'Meus Pedidos', icon: 'mdi-label' 
                }
            ],

            items2: [{ title: 'Meu Cadastro', icon: 'mdi-account-arrow-left' }]
        }
    },
    computed: {
        MeusPedidos() {
            return this.$store.state.MeusPedidos
        },
        MeuCadastro() {
            return this.$store.state.MeuCadastro
        },
        login_ativo(){
            return this.$store.state.login_ativo
        },
        cadastro_ativo(){
            return this.$store.state.cadastro_ativo
        },        
        client_ativo(){
            return this.$store.state.client_ativo
        },
        snackbar(){
            return this.$store.state.snackbar
        },
        c_name(){
            return this.$store.state.c_name
        }
    },
    methods: {
        funcRota(itemSelected){

            if(itemSelected == 'Meus Pedidos'){

                this.$store.state.MeuCadastro = false
                this.$store.state.MeusPedidos = true

                this.$store.state.snackbar = false
            }
            else{
                if(itemSelected == 'Meu Cadastro'){

                    this.$store.state.MeuCadastro = true
                    this.$store.state.MeusPedidos = false

                    this.$store.state.snackbar = true // barra inferior com informações de usabilidade.
                }  
            }
        },
        logoutFunc(){

            this.$store.state.cadastro_ativo = false
            this.$store.state.login_ativo = true // HABILITAR PÁGINA INICIAL DE LOGIN CLIENT.
            this.$store.state.client_ativo = false
        },
    }
}
</script>