<style scoped>
    @import url("../styles/rodape.scss");
</style>

<template>

    <div class="box_rodape">

        <div class="lA">

            <v-btn icon>
                <v-icon 
                @click="chamarInsta()" 
                :style="{'color': hoverInsta}"
                @mouseover="hoverInsta = 'rgba(255,255,255, 0.1)'"
                @mouseleave="hoverInsta = 'rgba(121, 174, 64, 1)'"
                :class="{ active: hoverInsta }"
                >
                    mdi-instagram
                </v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon 
                @click="chamarYT()"
                :style="{'color': hoverYT}"
                @mouseover="hoverYT = 'rgba(255,255,255, 0.1)'"
                @mouseleave="hoverYT = 'rgba(121, 174, 64, 1)'"
                :class="{ active: hoverYT }"
                class="active"
                >
                    mdi-youtube
                </v-icon>
            </v-btn>

        </div>

        <div class="lB">

            <span :style="{'font-size':'1.3rem','margin-bottom':'10px'}">Green Social Clube</span>

            <span>Portugal, Covilhã 6200-156</span>

            <span>Rua da Olivença 54</span>

            <span>+351 928 113 960</span>

            <span :style="{'margin-top':'20px'}">&copy; {{ new Date().getFullYear() }} Desenvolvimento UPinC</span>
        </div>

    </div>

</template>

<script>

export default {

    data() {
        return {

            // cores dinâmicas on hover
            hoverYT: 'rgba(121, 174, 64, 1)',
            hoverInsta: 'rgba(121, 174, 64, 1)',
        }
    },

    methods: {
        chamarInsta() {
            window.location = 'https://www.instagram.com/greensocialclube/'
        },
        chamarYT() {
            window.location = 'https://www.youtube.com/channel/UC8bTk8B3JzopXtycUhgHURg'
        },
    }
}
</script>