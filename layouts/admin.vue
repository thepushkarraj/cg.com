<template>
  <v-app dark>
    <Drawer />
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Drawer from '~/components/main/drawer.vue'
export default {
  components: { Drawer },
  data () {
    return {
      user: [],
      isLogin: false
    }
  },
  mounted () {
    if (this.$getUser.role !== 1) {
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
