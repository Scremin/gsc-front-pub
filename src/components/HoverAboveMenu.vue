<style scoped>
    @import url("../hoverMenu-style.scss");
</style>

<template>
    <div class="mainHoverMenu">

        <div v-if="!changeMenuDrop" class="elemSemHover">
            <v-icon block @click="DropMenu()" class="">mdi-menu</v-icon>
        </div>
        
        <transition name="fade">

            <div v-if="changeMenuDrop" class="elemComHover">
                <v-icon block @click="RecolherMenu()" class="">mdi-close</v-icon>
            </div>

        </transition>
    
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuChange: true
        }
    },
    methods: {
        DropMenu() {
            console.log('estou no drop')

            this.menuChange = false

            this.$store.state.changeMenuDrop = true
        },
        RecolherMenu() {
            console.log('estou no recolhedor')

            this.menuChange = true

            this.$store.state.changeMenuDrop = false
        }
    },
    computed: {
        changeMenuDrop() {
            return this.$store.state.changeMenuDrop // exibir menu drop
        }
    },
}
</script>