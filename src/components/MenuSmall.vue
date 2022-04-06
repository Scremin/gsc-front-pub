<style scoped>
    @import url("../menu-small-style.scss");
</style>

<template>
    <div>
        <div>
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
                        <v-icon color="rgb(168, 243, 15)">
                            mdi-menu
                        </v-icon>
                    </v-btn>
                </template>

                <v-list>

                    <v-list-item link font-color="rgb(168, 243, 15)"
                    v-for="(item, index) in itemsSmall"
                    :key="index"
                    @click="funcRotaMenuSmall(item.title)"
                    >
                    <v-list-item-title class="luzHover">{{ item.title }}</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-btn block text @click="chamarCliente()">
                            <span class="">Área do Cliente</span>
                            <v-icon icon>mdi-account</v-icon>
                        </v-btn>
                    </v-list-item>

                </v-list>

            </v-menu>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return {
            itemsSmall: [
                {title:'Início'}, 
                {title:'Compras'}, 
                {title:'Quem Somos'}, 
                {title:'Conheça a Cannabis'}
            ],
        }
    },
    methods: {
        funcRotaMenuSmall(rotaMenu){

            switch (rotaMenu) {

                case 'Início':

                    this.$router.push('/')
                    break;

                case 'Compras':

                    this.$router.push('/MinhasCompras')
                    break;

                case 'Quem Somos':

                    this.$router.push('/QuemSomos')
                    break;

                case 'Conheça a Cannabis':

                    this.$router.push('/SaibaMais')
                    break;
            }
        },
        chamarCliente(){

            //
            if(this.$store.state.client_ativo == true){

                this.uploadedContent = {

                    userE: this.$store.state.c_name
                }

                const self = this // const value to access the class axios properties.

                axios.post(`https://castarcms.club/api/sessao_xx`, this.uploadedContent).then(function (response) {
                    
                    self.auth_rcv = response.data.result.result

                    if(self.auth_rcv == 'autorizado'){

                        // tmp geral lista
                        self.$store.state.tmpLiPddsClient = response.data.result.liPdds // lista
                    }
                })
            }

            this.$router.push('/MinhaGreen')
        }
    }
}
</script>