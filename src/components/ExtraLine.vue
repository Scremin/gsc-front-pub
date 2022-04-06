<style scoped>
    @import url("../styles/extraLine.scss");
</style>

<template>

    <div v-if="this.$store.state.authForShow"
    class="box_extraLine"
    >

        <div class="tit_faq">FAQ</div>
        
        <v-expansion-panels accordion class="el_box_faq">
            <v-expansion-panel
                v-for="(item,i) in liFaq"
                :key="i"
                :style="{
                    'color':'rgb(12, 41, 39)',
                    'background':'rgba(255, 255, 255, 0.1)'}"
            >
                <v-expansion-panel-header :style="{'font-weight':'bold'}">
                    {{ item.pergunta }}
                </v-expansion-panel-header>

                <v-expansion-panel-content>
                    {{ item.resposta }}
                </v-expansion-panel-content>

            </v-expansion-panel>
        </v-expansion-panels>

    </div>

</template>

<script>

export default {

    data() {
        return {

            liFaq: [
                {pergunta:'Como fazer um pedido na Green Social Clube?', resposta:'É bem simples. Na opção PRODUTOS do menu você escolhe a categoria. Dentre os produtos da categoria você pode escolher os seus preferidos e ir direto para o carrinho finalizar a sua compra. Escolha entre as opções de pagamento disponíveis e a seguir confira sua área de cliente.'},
                {pergunta:'Qual é o horário de funcionameto da Green Social Clube?', resposta:'Estamos abertos das 9h às 18h. De segunda a sexta.'},
            ],
        }
    },

    methods: {

    },
}
</script>