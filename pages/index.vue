<template>
  <section>
    <home-cover />
    <camper-categories />
    <featured-campers />
    <home-tours />
    <home-cities />
    <home-reviews />
    <home-blogs />
  </section>
</template>

<script>
import CamperCategories from '~/components/pages/home/CamperCategories.vue'
import FeaturedCampers from '~/components/pages/home/FeaturedCampers.vue'
import HomeCover from '~/components/pages/home/HomeCover.vue'
import HomeTours from '~/components/pages/home/HomeTours.vue'
import HomeCities from '~/components/pages/home/HomeCities.vue'
import HomeReviews from '~/components/pages/home/HomeReviews.vue'
import HomeBlogs from '~/components/pages/home/HomeBlogs.vue'
export default {
  components: {
    HomeCover, CamperCategories, FeaturedCampers, HomeTours, HomeCities, HomeReviews, HomeBlogs
  },
  data () {
    return {
      data: [],
      value: 'recent',
      loading: false
    }
  },
  mounted () {
    this.$api('/pagecontent/47').then((res) => {
      if (res.data.status) {
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
