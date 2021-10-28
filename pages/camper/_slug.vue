<template>
  <SinglePage v-if="loading" />
  <div v-else class="container-fluid pt-3 grey lighten-4">
    <client-only>
      <Auth />
    </client-only>
    <v-container class="mb-5 white">
      <v-row>
        <div class="col-lg-9">
          <client-only>
            <vue-picture-swipe
              id="f_img"
              class="img100"
              :items="$getFeaturedImage(data.images,data.data.image)"
            />
          </client-only>
        </div>
        <div class="col-lg-3">
          <client-only>
            <vue-picture-swipe id="g_img" class="imgcolgallery" :items="data.images" />
          </client-only>
        </div>
      </v-row>
      <v-row>
        <div class="col-md-12 px-5 py-0">
          <v-row class="mt-4 mt-sm-0">
            <v-col
              order-lg="1"
              order="2"
              lg="8"
              md="12"
              sm="12"
              class="col-12 pb-10 mb-3"
            >
              <v-row>
                <div class="col-lg-12">
                  <h2 class="mb-3">
                    {{ $lang(data.data.name) }}
                  </h2>
                  <p>
                    <v-icon>mdi-map-marker</v-icon>
                    {{ $lang(data.data.city.title) }}
                    <span
                      v-if="data.data.country"
                    >, {{ $countryName(data.data.country) }}</span>
                    - {{ $lang(data.data.campertype.name) }}
                    <v-icon>mdi-account-circle</v-icon>
                    {{ data.data.userdata.first_name + ' ' + data.data.userdata.last_name }}
                  </p>
                  <v-divider class="" />
                </div>
                <div v-show="$lang(data.data.model)" class="col-md-3 col-sm-3 col-6 pa-0 px-4 text-center">
                  <v-icon color="primary" class=" font_60">
                    mdi-fuel
                  </v-icon><br><span class="caption font-weight-bold">{{ $t('FuelType') }}</span>
                  <p class="caption">
                    {{ $lang(data.data.fuel_type) }} </p>
                </div>
                <div v-show="$lang(data.data.model)" class="col-md-3 col-sm-3 col-6 pa-0 px-4 text-center">
                  <v-icon x-large color="primary" class=" font_60">
                    mdi-smoking
                  </v-icon><br><span class="caption font-weight-bold">{{ $t('Smoking') }}</span>
                  <p class="caption"> {{ $t($Yesno(data.data.smoking)) }} </p>
                </div>
                <div v-show="$lang(data.data.model)" class="col-md-3 col-sm-3 col-6 pa-0 px-4 text-center">
                  <v-icon x-large color="primary" class="font_60">
                    mdi-cat
                  </v-icon><br> <span class="caption font-weight-bold"> {{ $t('AnimalsAllowed') }} </span>
                  <p class="caption"> {{ $t($Yesno(data.data.animals_allowed)) }} </p>
                </div>
                <div v-show="$lang(data.data.model)" class="col-md-3 col-sm-3 col-6 pa-0 px-4 text-center">
                  <v-icon x-large color="primary" class=" font_60">
                    mdi-account-check
                  </v-icon><br><span class="caption font-weight-bold"> {{ $t('MinimumAge') }} </span>
                  <p class="caption"> {{ data.data.minimum_age + ' ' + $t('Years') }} </p>
                </div>
              </v-row>
              <v-divider class="" />
              <div class="grey lighten-5 pa-3">
                <h3 class="mb-0">
                  {{ $t('AboutCamper') }}
                </h3>
                <div
                  v-if="$lang(data.data.description)"
                  :class="{show: !myFilter}"
                  class="pt-5 pb-5 readmore"
                  v-html="$lang(data.data.description)"
                />
              </div>
              <div v-if="$lang(data.data.description)" class="py-3 ml-3" >
                <v-btn
                  v-if="myFilter"
                  large
                  dark
                  depressed
                  class="pa-2 green rounded-xl"
                  @click="myFilter = !myFilter"
                >
                  {{ this.$t('ReadMore') }}
                </v-btn>
                <v-btn
                  v-else
                  large
                  dark
                  depressed
                  class="pa-2 green rounded-xl"
                  @click="myFilter = !myFilter"
                >
                  {{ this.$t('ReadLess') }}
                </v-btn>
              </div>
              <v-divider />
              <v-row>
                <div class="col-lg-12 px-3 mt-5">
                  <h3>{{ $t('CamperDetails') }}</h3>
                </div>
                <div v-show="$lang(data.data.brand)" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-star-outline
                      </v-icon>
                      {{ $t('Brand') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="$lang(data.data.brand)" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-show="$lang(data.data.model)" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-rv-truck
                      </v-icon>
                      {{ $t('Model') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="$lang(data.data.model)" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-show="$lang(data.data.first_registration)" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-clipboard-text
                      </v-icon>
                      {{ $t('FirstRegistration') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="$lang(data.data.first_registration)" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-show="$lang(data.data.environmental_bandge)" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-leaf
                      </v-icon>
                      {{ $t('EnvironmentalBandge') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="$lang(data.data.environmental_bandge)" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-show="$lang(data.data.insurance)" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-book-open
                      </v-icon>
                      {{ $t('Insurance') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="$lang(data.data.insurance)" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div class="col-lg-12 px-3 mt-5 ">
                  <h3>{{ $t('CamperSpecifications') }}</h3>
                </div>
                <div v-if="$lang(data.data.air_conditioning)" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-air-conditioner
                      </v-icon>
                      {{ $t('AirConditioning') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="$t($Yesno(data.data.air_conditioning))" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-thermometer-lines
                      </v-icon>
                      {{ $t('Heating') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="$t($Yesno(data.data.heating))" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-if="data.data.transmission" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-camera-timer
                      </v-icon>
                      {{ $t('Transmission') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="data.data.transmission" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-if="data.data.no_of_gears" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-checkbox-marked
                      </v-icon>
                      {{ $t('Gears') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="data.data.no_of_gears" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-show="data.data.fuel_type" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-fuel
                      </v-icon>
                      {{ $t('FuelType') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="$lang(data.data.fuel_type)" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-show="data.data.mileage" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-speedometer
                      </v-icon>
                      {{ $t('Mileage') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="data.data.mileage" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-show="data.data.fuel_tank_capacity" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-checkbox-marked-outline
                      </v-icon>
                      {{ $t('FuelTankCapacity') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="data.data.fuel_tank_capacity" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-show="data.data.seats" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-seat-recline-normal
                      </v-icon>
                      {{ $t('Seat') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="data.data.seats" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-show="data.data.beds" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-bed
                      </v-icon>
                      {{ $t('Bed') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="data.data.beds" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-show="data.data.displacement" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-engine-outline
                      </v-icon>
                      {{ $t('Displacement') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="data.data.displacement" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-show="data.data.power" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-file-powerpoint-box
                      </v-icon>
                      {{ $t('Power') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="data.data.power + 'Ah'" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-show="data.data.length" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-arrow-expand-up
                      </v-icon>
                      {{ $t('Length') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="data.data.length" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-show="data.data.width" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-arrow-expand-right
                      </v-icon>
                      {{ $t('Width') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="data.data.width" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-show="data.data.height" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-arrow-expand-down
                      </v-icon>
                      {{ $t('Height') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="data.data.height" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
                <div v-show="data.data.weight" class="col-lg-6 pa-0 px-4">
                  <v-list-item class="px-0">
                    <v-list-item-icon>
                      <v-icon color="primary" class="mr-2">
                        mdi-arrow-expand-down
                      </v-icon>
                      {{ $t('Weight') }}
                    </v-list-item-icon>
                    <v-list-item-content class="text-right">
                      <v-list-item-title v-text="data.data.weight" />
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider />
                </div>
              </v-row>
            </v-col>
            <v-col
              order-lg="2"
              order="1"
              lg="4"
              md="12"
              sm="12"
              class="col-12 mb-4"
            >
              <SingleCamperSidebar :data="data" :wishlistdata="wishlistdata" :recommendations="recommendations" :reviews="reviews" />
            </v-col>
          </v-row>
        </div>
      </v-row>
    </v-container>
    <v-container class="pa-0 mb-5">
      <v-card v-if="data.data.lat && data.data.long" class="pa-2 mt-6">
        <GMap
          ref="gMap"
          language="en"
          :center="{lat: lat, lng: lng}"
          :options="{fullscreenControl: false}"
          :zoom="13"
        >
          <GMapMarker :position="{lat: lat, lng: lng}">
            <GMapInfoWindow :options="{maxWidth: 200,height:200}">
              <code>
                {{ $lang(data.data.name) }} ,
                {{ $lang(data.data.city.title) }}
                <span
                  v-if="data.data.country"
                >, {{ $countryName(data.data.country) }}</span>
              </code>
            </GMapInfoWindow>
          </GMapMarker>
          <GMapCircle />
        </GMap>
      </v-card>
    </v-container>
    <span id="review"></span>
    <v-container class="pa-0 mb-5" v-if="reviews.length > 0">
      <v-card class="pa-4">
        <v-row class="">
          <div v-for="(item, index) in reviews" :key="index" class="mx-3">
            <v-divider v-if="index != 0" />
            <v-card elevation="0">
              <v-card-text class="pb-0">
                <v-list-item class="pa-0">
                  <v-avatar size="56" class="mb-5">
                    <img alt="user" :src="$mediaBase + item.image_thumb" />
                  </v-avatar>
                  <div class="pl-2" style="margin-top:-15px;">
                    <p class="mb-0">
                      <strong>{{ $lang(item.title) }}</strong>
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
                  <i>
                    <small>{{ $getDate(item.created_at) }}</small>
                  </i>
                </p>
              </v-card-text>
            </v-card>
          </div>
        </v-row>
      </v-card>
    </v-container>
    <featured-campers />
    <!-- 2nd Page End-->
  </div>
</template>

<script>
import FeaturedCampers from '../../components/pages/home/FeaturedCampers.vue'
import SingleCamperSidebar from '~/components/pages/content/SingleCamperSidebar.vue'
export default {
  components: { SingleCamperSidebar, FeaturedCampers },
  data: () => ({
    isActive: false,
    myFilter: true,
    wishlistdata: [],
    currentLocation: {},
    lat: 0,
    lng: 0,
    pins: {
      selected: 'data:image/png;base64,iVBORw0KGgo...',
      notSelected: 'data:image/png;base64,iVBORw0KGgo...'
    },
    data: [],
    value: 'recent',
    time: null,
    menu2: false,
    modal2: false,
    date: false,
    loading: true,
    alreadybook: [],
    reviews: []
  }),
  computed: {
    recommendations () {
      if (this.reviews.length > 0) {
        let r = 0
        r = 0
        this.reviews.forEach(function (e) {
          r = r + parseInt(e.rating)
        })
        return r / this.reviews.length
      } else {
        return 100
      }
    }
  },
  watch: {
    data (val) {
      this.$store.commit('setBookingData', {
        camper_id: val.data.id,
        camper_details: val.data
      })
      // this.lat = val.data.lat
      // this.lng = val.data.long
    }
  },
  mounted () {
    this.$store.commit('setLastPage', '')
    this.$api('/singlecamper/' + this.$route.params.slug).then((res) => {
      this.data = this.$psJSON(res.data.data)
      this.loading = false
      this.alreadybook = res.data.data.alreadybook
      this.review(this.data.data.id)
      this.lat = parseFloat(this.data.data.lat)
      this.lng = parseFloat(this.data.data.long)
    })
    if (this.$userRole()) {
      this.$api(this.$userRole() + '/wishlist').then((res) => {
        this.wishlistdata = res.data.data
      })
    }
  },
  methods: {
    review (id) {
      this.$api('/camper-review/review/' + id).then((res) => {
        this.loading = false
        this.reviews = res.data.data.data
        console.log(this.reviews)
      })
    },
    loginRedirect () {
      // console.log(encodeURI(window.location.href))
      this.$store.commit('setLastPage', window.location.href)
      this.$router.push({ path: '/user/login/' })
    }
  },
  head () {
    return {
      title: this.data.slug,
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
<style>
.font_60{
  font-size:45px!important;
}
.readmore{
  height: 200px;
  overflow: hidden;
}
.readmore.show{
  height: auto;
  overflow: none;
}
</style>
