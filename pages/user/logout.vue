<template>
  <span />
</template>

<script>
export default {
  asyncData ({ from }) {
    console.log(from)
  },
  mounted () {
    // console.log(this.$route)
    this.$store.commit('setUserLogout')
    window.location.href = this.localePath('/')
  }
}
</script>
