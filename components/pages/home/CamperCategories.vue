<template>
  <ImageThumb v-if="loading" />
  <v-container v-else class="mb-6">
    <h2 class="mt-4 text-center pb-4">
      {{ $t('FindCamperType') }}
    </h2>
    <v-row>
      <OwlSlider>
        <div v-for="(item, index) in data" :key="index" class="mx-3">
          <ItemListingThumb
            :name="$lang(item.name)"
            :link="'/camper/category/' + item.slug"
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
    this.$api('/categorylist/camper/1').then((res) => {
      this.loading = false
      this.data = res.data.data
    })
  }
}
</script>
