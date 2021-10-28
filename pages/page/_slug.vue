<template>
  <SinglePage v-if="loading" />
  <SingleContent v-else :type="'page'" :data="data" />
</template>

<script>
import SingleContent from '~/components/pages/content/SingleContent.vue'
export default {
  components: {
    SingleContent
  },
  data () {
    return {
      data: [],
      loading: true
    }
  },
  mounted () {
    this.$api('/content/page/' + this.$route.params.slug).then((res) => {
      if (res.data.status) {
        this.loading = false
        this.data = this.$psJSON(res.data.data)
      } else {
        this.$router.path({ push: '/' })
      }
    })
  },
  head () {
    return {
      title: this.$lang(this.data.meta_title),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$lang(this.data.meta_description)
        }
      ]
    }
  }
}
</script>
