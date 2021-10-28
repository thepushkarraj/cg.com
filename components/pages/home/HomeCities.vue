<template>
  <section>
    <v-container class="mb-4">
      <v-row>
        <div class="col-md-12 pt-10 mb-4">
          <v-card class="rounded-xl" dark style="background: #37507f !important;">
            <v-img
              class="white--text align-end"
              height="450"
              src="/img/van-beach.jpg"
            />
            <v-card-text class="px-0 py-10 px-sm-10">
              <v-card class="px-6 transparent" elevation="0">
                <h2 class="mb-3">
                  {{ $t('RentCamper') }}
                </h2>
                <v-divider class="mb-3" />
              </v-card>
              <v-row>
                <div class="col-lg-6">
                  <v-card class="px-6 transparent" elevation="0">
                    <p class="mb-3">
                      {{ $t('RentCamperContentp1') }}
                    </p>
                    <p class="mb-3">
                      {{ $t('RentCamperContentp3') }}
                    </p>
                  </v-card>
                </div>
                <div class="col-lg-6">
                  <v-card class="px-6 transparent" elevation="0">
                    <p class="mb-3">
                      {{ $t('RentCamperContentp2') }}
                    </p>
                    <v-btn :to="localePath('/page/wohnmobil')" class="rounded-xl white x-large green">
                      {{ $t('LearnMore') }}
                    </v-btn>
                  </v-card>
                </div>
              </v-row>
            </v-card-text>
          </v-card>
        </div>
      </v-row>
    </v-container>
    <ImageThumb v-if="loading" />
    <div v-else class="container-fluid" style="background: rgb(245, 245, 245);">
      <v-container>
        <h2 class="h3 mt-4 text-center">
          {{ $t('Locations') }}
        </h2>
        <p class="text-center mb-6">
          {{ $t('FindCampeInArea') }}
        </p>
        <v-row class="mb-4">
          <OwlSlider>
            <div v-for="(item, index) in data" :key="index" class="mx-3">
              <ItemListingThumb
                :name="$lang(item.title)"
                :link="'/camper/city/' + item.slug"
                :img="item.image_thumb ? $mediaBase + item.image_thumb : '/img/placeholder.jpg'"
              />
            </div>
          </OwlSlider>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <v-row class="my-4">
        <div class="col-md-6">
          <v-card class="rounded-xl">
            <v-img
              src="https://hips.hearstapps.com/amv-prod-gp.s3.amazonaws.com/gearpatrol/wp-content/uploads/2020/06/Campervan-Guide-gear-patrol-lead-full.jpg"
              class="white--text align-end"
              gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
              height="400px"
            >
              <v-card-title v-text="' '" />
            </v-img>
          </v-card>
        </div>
        <div class="col-md-6 align-self-center">
          <h2 class="mb-3">
            {{ $t('JoinTravelHeading') }}
          </h2>
          <p class="mb-3">
            {{ $t('JoinTravelp1') }}
          </p>
          <p class="mb-3">
            {{ $t('JoinTravelp2') }}
          </p>
          <v-btn large dark class="green rounded-xl" :to="localePath('/camper')">
            {{ $t('BookYourCamperNow') }}
          </v-btn>
        </div>
      </v-row>
    </v-container>
  </section>
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
    this.$api('/contentlist/city/1').then((res) => {
      this.loading = false
      this.data = res.data.data.data
    })
  }
}
</script>
