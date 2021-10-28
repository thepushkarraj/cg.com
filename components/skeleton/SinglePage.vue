<template>
  <v-container fluid>
    <v-skeleton-loader type="image, article" class="mb-4" />
  </v-container>
</template>

<script>
export default {
  props: {
    list: {
      type: Number,
      default: 10
    }
  }
}
</script>
