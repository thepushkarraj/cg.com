<template>
  <ImageThumb v-if="loading" />
  <v-container v-else class="">
    <v-row>
      <v-col md-12>
        <h2 class="h3 mt-4 text-center pb-4">
          {{ $t('CamperGoldTours') }}
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <OwlSlider>
        <div v-for="(item, index) in data" :key="index" class="mx-3">
          <ItemListingThumb
            :name="$lang(item.title)"
            :link="localePath('/tour/' + item.slug)"
            :img="item.image_thumb ? $mediaBase + item.image_thumb : '/img/placeholder.jpg'"
          />
        </div>
      </OwlSlider>
    </v-row>
  </v-container>
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
    this.$api('/contentlist/tour/1').then((res) => {
      this.loading = false
      this.data = res.data.data.data
    })
  }
}
</script>
