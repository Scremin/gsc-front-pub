<template>
  <div>

    <v-stepper non-linear :value="this.$store.state.numStepperCarrinho">
      <v-stepper-header>
        <v-stepper-step
          step="1"
          :complete="this.$store.state.flagStepCarrinho1"
          color="rgba(168,243,15,1)"
        >
          Carrinho
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          step="2"
          :complete="this.$store.state.flagStepCarrinho2"
          color="rgba(168,243,15,1)"
        >
          Dados do usuário
        </v-stepper-step>

        <v-divider></v-divider>

        <v-stepper-step
          step="3"
          :complete="this.$store.state.flagStepCarrinho3"
          color="rgba(168,243,15,1)"
        >
          Pagamento
        </v-stepper-step>

        <v-divider></v-divider>

        <!-- nunca aparece no front como um sinalizador. Apenas marca o passo -->
        <v-stepper-step
          step="4"
          color="rgba(168,243,15,1)"
        >
          Concluído
        </v-stepper-step>
      </v-stepper-header>
    </v-stepper>

  </div>
</template>

<script>
export default {
    data() {
        return {

            /*complete1: true,
            complete2: true,
            complete3: false,
            numStepper: 3,*/
        }
    }
}
</script>