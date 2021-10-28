<template>
  <div class="container-fluid grey lighten-4 py-16">
    <v-row justify="center" class="align-center" style="max-height: 100vh;">
      <v-col sm="10" md="6" lg="5">
        <v-card class="pa-10 rounded mx-8">
          <h3 class="text-center mb-10">
            <slot name="heading" />
          </h3>
          <slot />
          <v-row>
            <v-col class="col-sm-12 col-12 text-right">
              <slot name="action" />
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    logoDark () {
      return process.env.logoDark
    }
  }
}
</script>
