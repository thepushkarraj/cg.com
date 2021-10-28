<template>
  <ImageThumb v-if="loading" />
  <div
    v-else
    class="py-16"
    style="
      background-image: linear-gradient(0deg, #33333388, #33333388), url(/img/review-bg.jpg);
      background-position: center center;
      background-attachment:fixed;
      background-size: cover;
    "
  >
    <v-container>
      <h2 class="my-4 pb-4 text-center white--text">
        {{ $t('Testimonials') }}
      </h2>
      <v-row class="pb-6">
        <OwlSlider>
          <div v-for="(item, index) in data" :key="index" class="mx-3 mb-4">
            <v-card class="mx-auto rounded-xl">
              <v-card-text class="pb-0">
                <v-list-item class="pa-0">
                  <v-avatar size="56" class="mb-5">
                    <img
                      alt="user"
                      :src="$mediaBase + item.image_thumb"
                    >
                  </v-avatar>
                  <div class="pl-2" style="margin-top:-15px;">
                    <p class="mb-0">
                      <strong> {{ $lang(item.title) }} </strong>
                    </p>
                    <v-rating
                      :value="parseFloat(item.rating)"
                      color="amber"
                      dense
                      half-increments
                      readonly
                      size="14"
                    />
                  </div>
                </v-list-item>
                <div class="text--primary" v-html="$lang(item.description)" />
              </v-card-text>
              <v-card-text class="pt-0">
                <p class="text-right mb-0">
                  <i><small> {{ $getDate(item.created_at) }} </small></i>
                </p>
              </v-card-text>
            </v-card>
          </div>
        </OwlSlider>
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
    this.$api('/contentlist/review/1').then((res) => {
      this.loading = false
      this.data = res.data.data.data
      // console.log(res.data.data)
    })
  }
}
</script>
