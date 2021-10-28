<template>
  <CamperThumb v-if="loading" />
  <div v-else-if="data.length > 0" class="container-fluid" style="background:#f5f5f5;">
    <v-container class="">
      <h2 class="text-center mb-4">
        {{ $t('CamperGoldoffer') }}
      </h2>
      <v-row class="mb-6">
        <div
          v-for="(item, index) in data"
          :key="index"
          v-show="index < 6"
          class="col-md-4 col-sm-6"
        >
          <CamperListingThumb :item="item" :wishlistdata="wishlistdata" />
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      data: [],
      wishlistdata: []
    }
  },
  mounted () {
    this.$api('/featurecamper').then((res) => {
      this.loading = false
      this.data = this.$psJSON(res.data.data)
      console.log(this.data)
    })
    if (this.$userRole()) {
      this.$api(this.$userRole() + '/wishlist').then((res) => {
        this.wishlistdata = res.data.data
        // console.log(this.wishlistdata)
      })
    }
  }
}
</script>
