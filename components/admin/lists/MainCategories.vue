<template>
  <div v-if="$fetchState.pending">
    <LoadingBar />
  </div>
  <p v-else-if="$fetchState.error">
    An error occurred :(
  </p>
  <span v-else>
    <span v-for="(category,index) in categories" :key="index">
      <v-btn
        v-if="category.value != $route.params.id"
        class="teal mr-2 mb-2"
        dark
        :to="localePath('/products/category/' + category.value)"
      >
        {{ category.text }}
      </v-btn>
    </span>
  </span>
</template>

<script>
export default {
  async fetch () {
    this.categories = await fetch(
      process.env.apiBase + 'get_category/'
    ).then(res => res.json())
  },
  data () {
    return {
      categories: []
    }
  }
}
</script>
