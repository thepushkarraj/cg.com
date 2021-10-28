<template>
  <v-app>
    <v-container>
      <v-row>
        <div class="col-md-6 offset-md-3">
          <v-img src="/img/404.jpg" style="width:100%;" />
        </div>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Nicht gefunden',
      otherError: 'Ein Fehler ist aufgetreten'
    }
  },
  mounted () {
    // this.$router.push({ path: '/' })
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
