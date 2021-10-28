<template>
  <SinglePage v-if="loading" />
  <SingleContent v-else :type="'tour'" :data="data" />
</template>

<script>
import SingleContent from '~/components/pages/content/SingleContent.vue'
export default {
  components: {
    SingleContent
  },
  // async fetch () {
  //   await this.$api('/content/blog/' + this.$route.params.slug).then((res) => {
  //     if (res.data.status) {
  //       this.loading = false
  //       this.data = this.$psJSON(res.data.data)
  //     }
  //   })
  // },
  data () {
    return {
      data: [],
      loading: true
    }
  },
  mounted () {
    this.$api('/content/tour/' + this.$route.params.slug).then((res) => {
      if (res.data.status) {
        this.loading = false
        this.data = this.$psJSON(res.data.data)
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
