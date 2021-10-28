<template>
  <v-icon :small="small">
    mdi-currency-inr
  </v-icon>
</template>

<script>
export default {
  props: {
    small: {
      type: Boolean,
      default: true
    }
  }
}
</script>
