<template>
  <div class="container-fluid grey lighten-4">
    <v-container class="py-10">
      <v-row>
        <div class="col-md-8 offset-md-2">
          <v-card class="mb-9">
            <h3 class="pt-4 pl-6">
              {{ $t('ReviewBookingDetails') }}
            </h3>
            <v-divider class="mt-3 mb-4" />
            <v-row class="px-6 mb-3">
              <div class="col-lg-6">
                <h4 class="mb-3">
                  {{ $t('PersonalDetails') }}
                </h4>
                <v-row class="icon-left-fix">
                  <div class="col-md-12">
                    <v-divider class="mb-3" />
                    <p class="mb-4">
                      <v-icon class="grey lighten-3 rounded-xl pa-1 mr-2">
                        mdi-account-circle
                      </v-icon>
                      {{ $t('Name') }}: {{ $getBooking.first_name + ' ' + $getBooking.last_name }}
                    </p>
                    <p class="mb-4">
                      <v-icon class="grey lighten-3 rounded-xl pa-1 mr-2">
                        mdi-phone
                      </v-icon>
                      {{ $t('Phone') }}: {{ $getBooking.phone }}
                    </p>
                    <p class="mb-4">
                      <v-icon class="grey lighten-3 rounded-xl pa-1 mr-2">
                        mdi-email
                      </v-icon>
                      {{ $t('Email') }}: {{ $getBooking.email }}
                    </p>
                    <p class="mb-4">
                      <v-icon class="grey lighten-3 rounded-xl pa-1 mr-2">
                        mdi-map-marker
                      </v-icon>
                      <span>
                        {{ $t('Address') }}:
                        <span v-if="$getBooking.address"> {{ $getBooking.address }} </span>
                        <span v-if="$getBooking.city">, {{ $getBooking.city }} </span>
                        <span v-if="$getBooking.country">, {{ $getBooking.country }} </span>
                        <span v-if="$getBooking.postcode">, {{ $getBooking.postcode }} </span>
                      </span>
                    </p>
                  </div>
                </v-row>
                <h4 class="mb-3 mt-5">
                  {{ $t('Addons') }}
                </h4>
                <v-row v-for="i,index in $getBooking.addon_details" :key="index" class="mb-6 mb-lg-0">
                  <div class="col-md-12">
                    <v-divider />
                  </div>
                  <div class="col-md-3 col-sm-2 col-4 py-0">
                    <!-- <v-img src="/img/placeholder.jpg" width="100%" height="60px" /> -->
                    <client-only>
                      <vue-picture-swipe
                        class="img100 mh60"
                        :items="[
                          {
                            src: $mediaBase + i.imagedata.media1920_url,
                            thumbnail: $mediaBase + i.imagedata.media480_url,
                            w: i.imagedata.w1920,
                            h: i.imagedata.h1920,
                            title: $lang(i.title)
                          }
                        ]"
                      />
                    </client-only>
                  </div>
                  <div class="col-md-9 col-sm-10 col-8 py-0">
                    <h4 class="font-weight-regular">
                      {{ $lang(i.title) }}
                    </h4>
                    <p class="mb-0">
                      {{ $currency(i.price) }}
                    </p>
                  </div>
                </v-row>
                <v-row v-if="$getBooking.addon_details.length == 0" class="mb-6 mb-lg-0">
                  <div class="col-md-12">
                    <v-divider class="mb-3" />
                    <p>
                      {{ $t('NoAddonsAdded') }}
                    </p>
                  </div>
                </v-row>
              </div>
              <div class="icon-left-fix col-lg-6 pb-0">
                <h4 class="mb-3">
                  {{ $t('CamperDetails') }}
                </h4>
                <v-divider class="mb-3" />
                <v-img
                  style="max-width:100%"
                  class="rounded mb-3"
                  :src="$mediaBase + $getBooking.camper_details.image_thumb"
                />
                <p class="mb-4 font-weight-regular">
                  <v-icon class="grey lighten-3 rounded-xl pa-1 mr-2">
                    mdi-rv-truck
                  </v-icon>
                  {{ $lang($getBooking.camper_details.name) }}
                </p>
                <p class="mb-4">
                  <v-icon class="grey lighten-3 rounded-xl pa-1 mr-2">
                    mdi-map-marker
                  </v-icon>
                  <span v-if="loaded">
                    {{ this.$lang(this.$getBooking.camper_details.city.title) }}
                    <!-- {{ $lang($getBooking.camper_details.city.title) }} -->
                    ,
                    {{ $countryName($getBooking.camper_details.country) }}
                  </span>
                </p>
                <p class="mb-4">
                  <v-icon class="grey lighten-3 rounded-xl pa-1 mr-2">
                    mdi-calendar
                  </v-icon>
                  {{ $t('From') }} <strong> {{ $dateFormate($getBooking.start_date) }} </strong>
                  {{ $t('To') }} <strong> {{ $dateFormate($getBooking.end_date) }} </strong>
                </p>
                <p class="mb-4">
                  <v-icon class="grey lighten-3 rounded-xl pa-1 mr-2">
                    mdi-tag
                  </v-icon>
                  {{ $t('CouponCode') }} {{ $getBooking.coupon_code }}
                </p>
                <v-divider class="mb-2" />
                <v-list-item class="px-0 py-2 mh-auto">
                  {{ $t('Subtotal') }}:
                  <v-spacer />
                  {{ $currency($getBooking.subtotal) }}
                </v-list-item>
                <v-list-item class="px-0 py-2 mh-auto">
                  {{ $t('Discount') }}:
                  <v-spacer />
                  {{ $currency($getBooking.discount) }}
                </v-list-item>
                <v-list-item class="px-0 py-2 mh-auto">
                  {{ $t('Addons') }}:
                  <v-spacer />
                  {{ $currency($getBooking.addon_price) }}
                </v-list-item>
                <v-list-item class="px-0 py-2 mh-auto">
                  {{ $t('Total') }}:
                  <v-spacer />
                  {{ $currency($getBooking.total) }}
                </v-list-item>
                <v-list-item v-show="$getBooking.payble_amount !== 'full'" class="px-0 py-2 mh-auto">
                  <strong> {{ $t('RightNowPaying') }}: </strong>
                  <v-spacer />
                  <strong> {{ $currency($getBooking.payble_amount) }}</strong>
                </v-list-item>
              </div>
            </v-row>
            <v-divider />
            <v-row class="px-9 pt-6 pb-3">
              <v-btn
                color="primary rounded-xl pr-6"
                dark
                large
                :to="localePath('/booking/checkout')"
              >
                <v-icon class="mr-3">
                  mdi-arrow-left
                </v-icon>
                {{ $t('Back') }}
              </v-btn>
              <v-spacer />
              <v-btn
                color="green rounded-xl pl-6"
                dark
                large
                @click="submitBooking()"
              >
                {{ $t('MakePayment') }}
                <v-icon class="ml-3">
                  mdi-arrow-right
                </v-icon>
              </v-btn>
            </v-row>
          </v-card>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loaded: false
    }
  },
  mounted () {
    this.loaded = true
    if (!this.$getBooking.booking_days || !this.$getBooking.camper_id) {
      this.$router.push({ path: '/camper' })
    }
  },
  methods: {
    submitBooking () {
      window.location.href = process.env.mediaBase + '/payment/' + this.$getBooking.booking_id + '/' + this.$getLang
    },
    camperCityName () {
      return this.$lang(this.$getBooking.camper_details.city.title)
    }
  }
}
</script>

<style>
.icon-left-fix p{
  padding-left: 44px !important;
  position: relative !important;
}
.icon-left-fix p i{
  position: absolute !important;
  left: 0px !important;
  top: -5px !important;
}
</style>
