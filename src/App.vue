<style scoped>
    @import url("./styles/appGsc.scss");
</style>

<template>
  <v-app class="geral_appGsc">

    <v-img
        :style="{
            'max-height':'200px', 'max-width':'200px',
            background:'rgba(255, 255, 255, 0.1)',
            }"
        :src="require('./assets/logo_branca_gsc.jpg')"
    />

    E-commerce Green House em manutenção. Estaremos de volta em breve.
  
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
