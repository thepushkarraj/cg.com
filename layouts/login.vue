<template>
  <v-app dark>
    <topbar />
    <v-main>
      <nuxt />
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from '~/components/main/footer'
import Topbar from '~/components/main/topbar.vue'
export default {
  components: {
    Footer, Topbar
  },
  data () {
    return {}
  },
  mounted () {
    if (!this.$getUser.role) {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
