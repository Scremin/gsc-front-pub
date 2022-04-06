<style scoped>
    @import url("../saiba-peq.scss");
</style>

<template>
    <div>
        <div>
            <div class="main-saiba-peq">
                <div class="box-to-for-elems">

                    <div class="elem-circle">

                        <v-img @click="escolherTroca('1')"
                            class="txHover"
                            :style="{'border-radius':'200px', 'width': '100%','height':'100%'}"
                            :src="require('../assets/histcan.jpg')"
                        />

                        <span class="txt-inside">História da Cannabis</span>

                    </div>
                    
                    <div class="elem-circle">

                        <v-img @click="escolherTroca('2')"
                            class="txHover"
                            :style="{'border-radius':'200px', 'width': '100%', 'height': '100%'}"
                            :src="require('../assets/medcan.jpeg')"
                        />

                        <span class="txt-inside">Uso Medicinal</span>

                    </div>

                    <div class="elem-circle">

                        <v-img @click="escolherTroca('3')"
                            class="txHover"
                            :style="{'border-radius':'200px', 'width': '100%', 'height': '100%'}"
                            :src="require('../assets/induscan.jpg')"
                        />

                        <span class="txt-inside">Uso Industrial</span>

                    </div>

                    <div class="elem-circle">

                        <v-img @click="escolherTroca('4')"
                            class="txHover"
                            :style="{'border-radius':'200px', 'width': '100%', 'height': '100%'}"
                            :src="require('../assets/recrecan.jpg')"
                        />

                        <span class="txt-inside">Uso Recreativo</span>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        escolherTroca(numStr) {

            this.$emit('funcCall', numStr) // emitir evento para o compon pai.
        }
    }
}
</script>