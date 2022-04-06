<template>

    <div class="" :style="{'display':'flex','ailgn-self':'start'}">

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
                    <v-icon color="rgba(168,243,15,1)">mdi-menu</v-icon>

                </v-btn>
            </template>

            <v-list>

                <v-list-item link font-color="rgb(168, 243, 15)"
                v-for="(item, index) in itemsSmall"
                :key="index"
                @click="funcRotaMainMenuSmall(item.rota)"
                >

                    <v-list-item-title class="luzHover">
                        <v-icon>{{ item.icone }}</v-icon>
                        {{ item.title }}
                    </v-list-item-title>

                </v-list-item>

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
                {title:'Início',icone:'mdi-home',rota:'/'}, 
                {title:'Produtos',icone:'mdi-store',rota:'/categorias'},
                {title:'Quem somos',icone:'mdi-account-group',rota:'/quemSomos'},
                {title:'Conheça a cannabis',icone:'mdi-cannabis',rota:'/conhCannabis'},
                {title:'Minha conta',icone:'mdi-account',rota:'/clienthome'},
                {title:'Carrinho',icone:'mdi-cart',rota:'/carrinho'}
            ],
        }
    },
    methods: {
        funcRotaMainMenuSmall(rota) {

            this.$router.push(rota)
        }
    }
}
</script>