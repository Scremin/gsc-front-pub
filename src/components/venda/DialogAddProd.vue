<template>

    <v-dialog
    v-model="dialog"
    max-width="390"
    >
        <div :style="{
            'display':'flex',
            'flex-direction':'column',
            'justify-content':'center',
            'align-items':'center',
            'border-radius': '8px',
            'background':'rgba(255,255,255,0.8)',
            }"
        >

            <v-icon large :style="{
                'display':'flex',
                'justify-content':'center',
                'margin-top':'40px',
                'margin-bottom':'10px',
                'color':'rgb(168, 243, 15)',
                }"
            >
                mdi-cart-arrow-down</v-icon>

            <div :style="{
                'display':'flex',
                'justify-content':'center',
                'margin':'4px',
                'margin-top':'10px',
                'margin-bottom':'10px',
                'font-size':'1.4rem',
                }"
            >
                Produto adicionado com sucesso.</div>

            <div :style="{
                'display':'flex',
                'flex-wrap':'wrap',
                'justify-content':'center',
                'margin-bottom':'20px',
                }"
            >
            
                <span :style="{
                    'display':'flex',
                    'justify-content':'center',
                    'padding':'4px',
                    'margin':'4px',
                    'border-radius': '8px',
                    'cursor':'pointer',
                    'border':'1px solid black'
                    }"
                    class="backgroundColor"
                    @click="disparoDialogToProd(false)"
                >
                    Ok. Continuar
                    <v-icon>mdi-arrow-down-bold</v-icon>

                </span>

                <span :style="{
                    'display':'flex',
                    'justify-content':'center',
                    'padding':'4px',
                    'margin':'4px',
                    'border-radius': '8px',
                    'cursor':'pointer',
                    'border':'1px solid black'
                    }"
                    class="backgroundColor"
                    @click="disparoDialogToProd(true)"
                >
                    Ir para o carrinho
                    <v-icon>mdi-cart</v-icon>

                </span>

            </div>

        </div>

    </v-dialog>

</template>

<script>
export default {
    
    props: ['dialog'],

    methods: {

        disparoDialogToProd(flagGoToCart) {

            this.$emit('eventDialogAddProd', flagGoToCart)
        }
    }
}
</script>