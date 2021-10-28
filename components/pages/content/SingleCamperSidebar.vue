<template>
  <div class="stickyprice" :class="{mobile: bookNowMobile}">
    <v-card v-if="data.data.id" class="pb-5 mt-0 mt-lg-2">
      <v-list-item class="primary header py-3" dark>
        <h2 v-if="subtotal > 0">
          {{ $currency(subtotal) }}<br>
          <div class="text-body-1">
            {{ $currency(data.data.seasonal_price ? $seasonPrice(data.data.seasonalprice) : data.data.price) }}
            / {{ $t('Day') }}
          </div>
        </h2>
        <h2 v-else class="pl-4">
          {{ $currency(data.data.seasonal_price ? $seasonPrice(data.data.seasonalprice) : data.data.price) }}
          / {{ $t('Day') }}
        </h2>
        <v-spacer />
        <v-btn
          v-show="sp"
          fab
          icon
          class="primary lighten-2 spToggle"
          dark
          depressed
          small
          @click="spToggle = !spToggle"
        >
          <v-icon v-if="spToggle">
            mdi-chevron-down
          </v-icon>
          <v-icon v-else>
            mdi-chevron-up
          </v-icon>
        </v-btn>
        <v-btn
          v-if="!bookNowMobile"
          class="green rounded-xl book_now_mobile d-md-none d-sm-block ml-3"
          dark
          depressed
          @click="bookNowMobile = !bookNowMobile"
        >
          {{ $t('BookNow') }}
        </v-btn>
        <v-btn
          v-else
          fab
          icon
          dark
          class="primary lighten-2"
          depressed
          @click="bookNowMobile = !bookNowMobile"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-list-item>
      <!-- <v-divider class="mt-3 mx-4" /> -->
      <v-row class="pt-6 px-3 mt-16 mt-md-0">
        <div v-show="spToggle && data.data.seasonal_price === 1" class="col-lg-12 pb-0 py-0">
          <v-card class="grey lighten-4 rounded-xl px-3 pt-5 pb-1" elevation="0">
            <p>
              <v-icon color="green">
                mdi-checkbox-marked-circle
              </v-icon>
              {{ $t('StandardSeason') }} - {{ $currency(first) }} {{ $t('PerDay') }} <br>
              <span class="grey--text ml-7 caption">({{ $t('AprJunSepOct') }})</span>
            </p>
            <p>
              <v-icon color="green">
                mdi-checkbox-marked-circle
              </v-icon>
              {{ $t('HighSeason') }} - {{ $currency(second) }} {{ $t('PerDay') }} <br>
              <span class="grey--text ml-7 caption">({{ $t('JulAug') }})</span>
            </p>
            <p class="pb-0">
              <v-icon color="green">
                mdi-checkbox-marked-circle
              </v-icon>
              {{ $t('WinterSeason') }} - {{ $currency(third) }} {{ $t('PerDay') }} <br>
              <span class="grey--text ml-7 caption">({{ $t('NovMar') }})</span>
            </p>
          </v-card>
        </div>
        <div class="col-lg-12 pb-0">
          <DatePickerRange
            :label="$t('SelectDate')"
            :name="'booking_date'"
            :icon="'mdi-calendar'"
            :disabled-dates="data.alreadybook"
            :state-date-set="true"
            @check-in-changed="checkDates"
            @check-out-changed="checkDates"
          />
        </div>
        <div class="col-lg-12 pb-1">
          <SingleCamperSidebarBookNow :data="data" :message-val="bookingMessage" />
        </div>
      </v-row>
      <v-row class="pt-0 px-3">
        <div class="col-12 text-left">
          <div class="wishlist">
            <WishList
              :camperid="data.data.id"
              :wishlistdata="wishlistdata"
              :wish-click="wishClick"
              :click="false"
            />
          </div>
        </div>
      </v-row>
      <v-row class="pt-0 px-3">
        <div class="col-12 text-left py-0">
          <v-list-item class="grey lighten-4 pa-0 rounded-xl">
            <v-spacer />
              <v-list-item-icon class="mr-2">
                <v-icon color="green">mdi-thumb-up</v-icon>
              </v-list-item-icon>
              <span class="mr-5">
            {{ Math.round(recommendations) }}% {{ $t('Recommend') }}
            </span>
            <div v-for="(item, index) in reviews" :key="index">
            <a href="#review" v-if="index <= 3">
            <v-avatar
              color="primary ml-n2"
              size="25"
            >
            <img alt="user" :src="$mediaBase + item.image_thumb" />
            </v-avatar>
            </a>
            </div>
             <span class="ml-2 mr-3" v-if="reviews.length > 0">+ {{ 200+reviews.length }}</span>
            <v-spacer />
          </v-list-item>
        </div>
      </v-row>
      <v-row class="pt-0 px-3">
        <div class="col-12 text-left py-0">
          <v-list dense>
            <v-list-item
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-item-icon class="mr-2">
                <v-icon color="green" v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-row>
    </v-card>
  </div>
</template>

<script>
import DatePickerRange from '~/components/elements/form/DatePickerRange.vue'
import SingleCamperSidebarBookNow from '~/components/pages/content/SingleCamperSidebarBookNow.vue'
export default {
  components: {
    DatePickerRange, SingleCamperSidebarBookNow
  },
  props: {
    data: {
      type: Object,
      default () {
        return []
      }
    },
    wishlistdata: {
      type: Array,
      default () {
        return []
      }
    },
    reviews: {
      type: Array,
      default () {
        return []
      }
    },
    recommendations: {
      type: Number,
      default: 100
    }
  },
  data () {
    return {
      wishClick: false,
      bookingMessage: '',
      spToggle: false,
      bookNowMobile: false,
      items: [
        { text: this.$multiLang('TrustedLenders'), icon: 'mdi-check' },
        { text: this.$multiLang('NoAdditionalCosts'), icon: 'mdi-check' },
        { text: this.$multiLang('ExtraEquipmentAvailableToBuy'), icon: 'mdi-check' },
        { text: this.$multiLang('NoWorriesNoObligations'), icon: 'mdi-check' }
      ]
    }
  },
  computed: {
    sp () {
      if (this.data.data.seasonal_price === 1) {
        return true
      }
      return false
    },
    first () {
      let r = ''
      r = ''
      if (this.data && this.data.data.seasonal_price === 1) {
        const pdata = this.data.data.seasonalprice
        if (pdata.length > 0) {
          pdata.forEach(function (value) {
            if (value.season === 'first_season') {
              r = value.price.toString()
            }
          })
        }
      }
      return r
    },
    second () {
      let r = ''
      r = ''
      if (this.data && this.data.data.seasonal_price === 1) {
        const pdata = this.data.data.seasonalprice
        if (pdata.length > 0) {
          // console.log(pdata)
          pdata.forEach(function (value) {
            if (value.season === 'second_season') {
              r = value.price.toString()
              // console.log(r)
            }
          })
        }
      }
      return r
    },
    third () {
      let r = ''
      r = ''
      if (this.data && this.data.data.seasonal_price === 1) {
        const pdata = this.data.data.seasonalprice
        if (pdata.length > 0) {
          // console.log(pdata)
          pdata.forEach(function (value) {
            if (value.season === 'third_season') {
              r = value.price.toString()
              // console.log(r)
            }
          })
        }
      }
      return r
    },
    subtotal () {
      return this.$getCheckoutPrice()
    }
  },
  watch: {
    wishClick (val) {
      setTimeout(() => {
        this.wishClick = false
      }, 100)
    }
  },
  mounted () {
    this.checkDates()
    console.log(this.data)
  },
  methods: {
    checkDates () {
      let sd = null
      let ed = null
      let ic = false
      if (this.$getBooking.start_date) {
        sd = new Date(this.$getBooking.start_date)
      }

      if (this.$getBooking.end_date) {
        ed = new Date(this.$getBooking.end_date)
      }

      if (sd && ed) {
        this.data.alreadybook.forEach((element) => {
          const date = new Date(element)
          const d = sd <= date && ed >= date
          if (d) {
            ic = true
          }
        })
      }
      if (ic) {
        this.bookingMessage = this.$multiLang('CamperIsNotAvailableForSelectedDates')
        this.$store.commit('setBookingData', {
          end_date: '',
          start_date: ''
        })
      } else {
        this.bookingMessage = ''
      }
    }
  }
}
</script>

<style scoped>
.stickyprice {
  position: sticky;
  top: 90px;
}
@media only screen and (max-width:959px) {
  .stickyprice{
    position: fixed !important;
    bottom: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 84px !important;
    z-index:99 !important;
    top:unset !important;
  }
  .stickyprice .v-card{
    border-radius: 0px !important;
  }
  .stickyprice.mobile{
    height: 100vh !important;
    background: white !important;
    width: 100vh;
    top: 0 !important;
  }
  .stickyprice .spToggle{
    display: none;
  }
  .stickyprice.mobile > .v-card{
    height: calc(100vh - 80px) !important;
    overflow-y: auto;
    overflow-x: hidden;
  }
  .stickyprice.mobile > .v-card .header{
    position: fixed;
    width: 100%;
    z-index: 99;
    bottom: 0;
    left: 0;
  }
  .stickyprice > .v-card .header{
    position: fixed;
    width: 100%;
    z-index: 99;
    bottom: 0;
    left: 0;
  }
}
</style>

<style>
  .myBtn{
    display: none;
  }
</style>
