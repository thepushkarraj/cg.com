<template>
  <v-app dark>
    <Topbar />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Topbar from '~/components/main/topbar.vue'
export default {
  components: { Topbar },
  data () {
    return {
      user: [],
      isLogin: false
    }
  },
  mounted () {
    if (this.$getUser.role !== 2) {
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<style>
  .fixed_footer{
    position: fixed;
    z-index: 0;
    bottom: 0;
    right: 0px;
    width: 100%;
    background: white;
  }
</style>
