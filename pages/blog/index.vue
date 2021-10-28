<template>
  <ImageThumb v-if="loading" />
  <div v-else class="">
    <v-container>
      <h2 class="h3 mt-4 text-center">
        {{ $t('Blog') }}
      </h2>
      <p class="text-center mb-6">
        {{ $t('BlogSub') }}
      </p>
      <v-row>
        <div v-for="(item, index) in data" :key="index" class="col-sm-6 col-md-6 col-lg-4">
          <BlogListingThumb
            :name="$lang(item.title)"
            :description="$lang(item.description)"
            :img="item.image_thumb ? $mediaBase + item.image_thumb : '/img/placeholder.jpg'"
            :link="localePath('/blog/' + item.slug)"
          />
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      loading: true,
      meta_data: []
    }
  },
  mounted () {
    this.getData()
    this.getMeta()
  },
  methods: {
    getData () {
      this.$api('/contentlist/blog/1').then((res) => {
        this.loading = false
        this.data = res.data.data.data
      })
    },
    getMeta () {
      this.$api('/pagecontent/49').then((res) => {
        if (res.data.status) {
          this.meta_data = this.$psJSON(res.data.data)
        } else {
          this.$router.path({ push: '/' })
        }
      })
    }
  },
  head () {
    return {
      title: this.$lang(this.meta_data.meta_title),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$lang(this.meta_data.meta_description)
        }
      ]
    }
  }
}
</script>

<style>
  .text-2-lines {
    height: 70px;
    overflow: hidden;
  }
</style>
