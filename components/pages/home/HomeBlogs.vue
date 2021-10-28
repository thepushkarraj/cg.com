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
        <OwlSlider>
          <div v-for="(item, index) in data" :key="index" class="mx-3">
            <BlogListingThumb
              :name="$lang(item.title)"
              :description="$lang(item.description)"
              :img="item.image_thumb ? $mediaBase + item.image_thumb : '/img/placeholder.jpg'"
              :link="'/blog/' + item.slug"
            />
          </div>
        </OwlSlider>
      </v-row>
      <v-row>
        <div class="col-md-12 pt-0 pb-6 text-center">
          <v-btn :to="localePath('/blog')" class="green rounded-xl" large dark depressed>
            {{ $t('ViewAllPost') }}
          </v-btn>
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
      loading: true
    }
  },
  mounted () {
    this.$api('/contentlist/blog/1').then((res) => {
      this.loading = false
      this.data = res.data.data.data
    })
  }
}
</script>

<style>
  .text-2-lines {
    height: 70px;
    overflow: hidden;
  }
</style>
