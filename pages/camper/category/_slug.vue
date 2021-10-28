<template>
  <SinglePage v-if="loading" />
  <CamperFilter v-else :type="'category'" :data="data" />
</template>

<script>
import CamperFilter from '~/components/pages/content/CamperFilter.vue'
export default {
  components: {
    CamperFilter
  },
  data () {
    return {
      data: [],
      loading: true
    }
  },
  mounted () {
    this.$api('/category/camper/' + this.$route.params.slug).then((res) => {
      if (res.data.status) {
        this.loading = false
        this.data = this.$psJSON(res.data.data)
        // console.log(res.data.data)
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
