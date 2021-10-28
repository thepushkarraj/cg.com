<template>
  <div class="container-fluid grey lighten-4">
    <v-container class="py-10">
      <v-row>
        <div class="col-md-7">
          <v-card class="mb-9">
            <h2 class="pt-4 pl-6">
              {{ $t('AddonsHeading') }}
            </h2>
            <v-divider class="mt-3 mb-4" />
            <v-row v-if="addons.length > 0" class="py-3 px-6 d-none d-lg-flex pt-0">
              <div class="col-lg-8 pb-0">
                <h4>
                  {{ $t('Addons') }}
                </h4>
              </div>
              <div class="col-lg-2 pb-0">
                <h4>
                  {{ $t('Price') }}
                </h4>
              </div>
              <div class="col-lg-2 pb-0">
                <h4>
                  {{ $t('Select') }}
                </h4>
              </div>
            </v-row>
            <v-row v-for="i,index in addons" :key="index" class="py-0 px-6">
              <div class="col-lg-8 pb-0 pb-lg-3">
                <v-row class="pa-0 ml-0 mt-1 mb-1">
                  <div class="col-md-3 col-sm-2 col-4 pa-0">
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
                  <div class="col-md-9 col-sm-10 col-8 pa-0">
                    <h4 class="font-weight-regular ml-3">
                      {{ $lang(i.title) }}
                    </h4>
                    <p class="p-mb-0 mb-0 ml-3 grey--text caption" v-html="$lang(i.description)" />
                  </div>
                </v-row>
              </div>
              <div class="col-lg-2 col-6">
                <p class="mb-0">
                  {{ $currency(i.price) }}
                </p>
              </div>
              <div class="col-lg-2 col-6">
                <v-checkbox v-model="addon" class="mt-0 pt-0" :value="i.id" hide-details="auto" :label="$t('Select')" />
              </div>
              <div class="col-md-12 pa-0">
                <v-divider class="mx-3 px-1" />
              </div>
            </v-row>
            <v-row v-if="addons.length == 0" class="py-3 px-6 pt-0">
              <div class="col-md-12">
                <p>
                  {{ $t('NoAddonsAdded') }}
                </p>
              </div>
            </v-row>
          </v-card>
          <v-card>
            <h2 class="pt-4 pl-6">
              {{ $t('UserDetails') }}
            </h2>
            <v-divider class="mt-3 mb-6" />
            <v-row class="py-3 px-6">
              <div class="col-md-6 py-0">
                <v-text-field
                  ref="first_name"
                  v-model="first_name"
                  :label="$t('FirstName')"
                  :rules="[rules.required]"
                  outlined
                />
              </div>
              <div class="col-md-6 py-0">
                <v-text-field
                  ref="last_name"
                  v-model="last_name"
                  :label="$t('LastName')"
                  :rules="[rules.required]"
                  outlined
                />
              </div>
              <div class="col-md-6 py-0">
                <v-text-field
                  ref="phone"
                  v-model="phone"
                  :label="$t('Phone')"
                  :rules="[rules.required]"
                  outlined
                />
              </div>
              <div class="col-md-6 py-0">
                <v-text-field
                  ref="email"
                  v-model="email"
                  :rules="[rules.required]"
                  :label="$t('Email')"
                  outlined
                />
              </div>
              <div class="col-md-6 py-0">
                <v-text-field
                  ref="address"
                  v-model="address"
                  :label="$t('Address')"
                  :rules="[rules.required]"
                  outlined
                />
              </div>
              <div class="col-md-6 py-0">
                <v-text-field
                  ref="city"
                  v-model="city"
                  :label="$t('City')"
                  :rules="[rules.required]"
                  outlined
                />
              </div>
              <div class="col-md-6 py-0">
                <v-text-field
                  ref="country"
                  v-model="country"
                  :label="$t('Country')"
                  :rules="[rules.required]"
                  outlined
                />
              </div>
              <div class="col-md-6 py-0">
                <v-text-field
                  ref="postcode"
                  v-model="postcode"
                  :label="$t('Postcode')"
                  :rules="[rules.required]"
                  outlined
                />
              </div>
              <div v-if="errorMessage" class="col-md-12 py-0">
                <v-alert
                  type="error"
                >
                  {{ error_message }}
                </v-alert>
              </div>
            </v-row>
          </v-card>
        </div>
        <div class="col-md-5">
          <v-card>
            <h2 class="pt-4 pl-6">
              {{ $t('BookingDetailsTitle') }}
            </h2>
            <v-divider class="mt-3 mb-6" />
            <v-row class="py-3 px-6">
              <div class="col-sm-5 col-md-12 py-0">
                <v-img
                  style="width:100%"
                  class="rounded"
                  :src="$mediaBase + $getBooking.camper_details.image_thumb"
                />
              </div>
              <div class="col-sm-7 col-md-12">
                <h4 class="mb-2 font-weight-regular">
                  <v-icon class="grey lighten-3 rounded-xl pa-1 mr-2">
                    mdi-rv-truck
                  </v-icon>
                  {{ $lang($getBooking.camper_details.name) }}
                </h4>
                <p class="mb-2">
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
                <p class="mb-2">
                  <v-icon class="grey lighten-3 rounded-xl pa-1 mr-2">
                    mdi-calendar
                  </v-icon>
                  {{ $t('From') }} <strong> {{ $dateFormate($getBooking.start_date) }} </strong>
                  {{ $t('To') }} <strong> {{ $dateFormate($getBooking.end_date) }} </strong>
                </p>
                <p class="mb-2">
                  <v-icon class="grey lighten-3 rounded-xl pa-1 mr-2">
                    mdi-currency-eur
                  </v-icon>
                  {{ $t('Price') }} <strong> {{ $currency($seasonPrice($getBooking.camper_details.seasonalprice)) }}</strong> {{ $t('PerDay') }}
                  <v-btn
                    v-show="$getBooking.camper_details.seasonal_price === 1"
                    class="green rounded-xl ml-0 ml-lg-3 mt-3 mt-sm-0"
                    dark
                    x-small
                    depressed
                    @click="sp = !sp"
                  >
                    {{ $t('SeasonalPrice') }}
                  </v-btn>
                </p>
                <div v-show="sp && $getBooking.camper_details.seasonal_price === 1">
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
                  <p>
                    <v-icon color="green">
                      mdi-checkbox-marked-circle
                    </v-icon>
                    {{ $t('WinterSeason') }} - {{ $currency(third) }} {{ $t('PerDay') }} <br>
                    <span class="grey--text ml-7 caption">({{ $t('NovMar') }})</span>
                  </p>
                </div>
              </div>
              <div class="col-md-12 py-0">
                <v-divider class="mb-4" />
                <v-text-field
                  v-model="coupon"
                  outlined
                  :label="$t('ApplyCouponCode')"
                  prepend-inner-icon="mdi-tag"
                  append-icon="mdi-arrow-right-box"
                  :loading="loading"
                  class="pt-3"
                  :messages="[message]"
                  @click:append="validataCoupon"
                />
                <v-simple-table style="width:100%;">
                  <template v-slot:default>
                    <tbody>
                      <tr>
                        <td> {{ $t('Subtotal') }} </td>
                        <td v-text="$currency(subtotal)" />
                      </tr>
                      <tr>
                        <td> {{ $t('Discount') }} </td>
                        <td v-text="$currency(discount_val)" />
                      </tr>
                      <tr>
                        <td> {{ $t('Addons') }} </td>
                        <td v-text="$currency(addons_val)" />
                      </tr>
                      <tr>
                        <td> {{ $t('Total') }} </td>
                        <td v-text="$currency(total)" />
                      </tr>
                      <tr class="d-none">
                        <td colspan="2">
                          <v-radio-group v-model="partial_amount">
                            <v-radio :label="$t('PayFullAmount') + ' - ' + $currency(total)" :value="'full'" />
                            <v-radio v-show="days > 30" :label="$t('PayPartialAmount') + ' - ' + $currency(total/100*30)" :value="total/100*30" />
                          </v-radio-group>
                        </td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
                <v-btn
                  color="green rounded-xl mt-5 mb-5"
                  block
                  dark
                  large
                  :loading="loading_booking"
                  @click="submitBooking()"
                >
                  {{ $t('Continue') }}
                </v-btn>
                <p v-if="booking_message" class="green--text" v-text="booking_message" />
                <p v-if="booking_error" class="red--text" v-text="booking_error" />
              </div>
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
      loaded: false,
      errorMessage: false,
      sp: false,
      first_name: this.$getUser.first_name,
      last_name: this.$getUser.last_name,
      phone: this.$getUser.mobile,
      email: this.$getUser.email,
      address: this.$getUser.address,
      city: this.$getUser.city,
      country: this.$getUser.country,
      coupon: '',
      // postcode: this.$getUser.postcode,
      postcode: this.$getUser.postcode,
      price: 0,
      error_message: '',
      subtotal_val: 0,
      discount_val: 0,
      total_val: 0,
      loading: false,
      loading_booking: false,
      message: '',
      booking_error: '',
      booking_message: '',
      partial_amount: 'full',
      addons: [],
      addon: [],
      rules: {
        required: value => !!value || this.$multiLang('Required')
      },
      days: 0
    }
  },
  computed: {
    first () {
      let r = ''
      r = ''
      if (this.$getBooking.camper_details.seasonal_price === 1) {
        const pdata = this.$getBooking.camper_details.seasonalprice
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
      if (this.$getBooking.camper_details.seasonal_price === 1) {
        const pdata = this.$getBooking.camper_details.seasonalprice
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
      if (this.$getBooking.camper_details.seasonal_price === 1) {
        const pdata = this.$getBooking.camper_details.seasonalprice
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
    },
    total () {
      return this.subtotal - this.discount_val + this.addons_val
    },
    addons_val () {
      if (this.addon.length > 0) {
        let price = 0
        price = 0
        this.addon.forEach((addon) => {
          this.addons.forEach((addons) => {
            if (addon === addons.id) {
              price = price + parseFloat(addons.price)
            }
          })
        })
        return price
      } else {
        return 0
      }
    },
    addon_details () {
      if (this.addon.length > 0) {
        const details = []
        this.addon.forEach((addon) => {
          this.addons.forEach((addons) => {
            if (addon === addons.id) {
              details.push(addons)
            }
          })
        })
        return details
      } else {
        return []
      }
    }
  },
  watch: {
    partial_amount (val) {
      this.$store.commit('setBookingData', {
        payble_amount: val
      })
    }
  },
  mounted () {
    this.loaded = true
    /** control partial payment for 30 days */
    this.PartialPaymentHide()
    /** save partial payment in state */
    this.$store.commit('setBookingData', {
      payble_amount: this.partial_amount
    })
    if (!this.$getBooking.booking_days || !this.$getBooking.camper_id) {
      this.$router.push({ path: '/camper' })
    } else {
      this.$api('addon/' + this.$getBooking.camper_id).then((res) => {
        // (res.data.data)
        this.addons = res.data.data
      })
    }
  },
  methods: {
    PartialPaymentHide () {
      if (this.$getBooking.start_date) {
        // console.log(this.$getBooking.start_date)
        const sd = new Date(this.$getBooking.start_date).getTime()
        const today = new Date().getTime()
        const days = (sd - today) / (60 * 60 * 24 * 1000)
        this.days = days
      }
    },
    validataCoupon () {
      if (this.coupon) {
        this.loading = true
        this.message = ''
        const formData = new FormData()
        formData.append('coupon_code', this.coupon)
        this.$api.post('verifycoupen', formData).then((res) => {
          // console.log(res.data)
          this.loading = false
          if (res.data.status) {
            if (res.data.data.price_type === 'Percent') {
              this.discount_val = (this.total * parseInt(res.data.data.coupon_price)) / 100
            } else {
              this.discount_val = parseInt(res.data.data.coupon_price)
            }
            this.message = this.$multiLang('CouponCodeApplied')
          } else {
            this.message = this.$multiLang('InvalidCouponCode')
          }
        })
      }
    },
    submitBooking () {
      if (!this.email || !this.address || !this.phone || !this.city || !this.country || !this.first_name || !this.last_name || !this.postcode) {
        if (!this.email) {
          setTimeout(() => {
            this.$refs.email.focus()
          }, 20)
        }
        if (!this.address) {
          setTimeout(() => {
            this.$refs.address.focus()
          }, 18)
        }
        if (!this.phone) {
          setTimeout(() => {
            this.$refs.phone.focus()
          }, 16)
        }
        if (!this.city) {
          setTimeout(() => {
            this.$refs.city.focus()
          }, 14)
        }
        if (!this.country) {
          setTimeout(() => {
            this.$refs.country.focus()
          }, 12)
        }
        if (!this.first_name) {
          setTimeout(() => {
            this.$refs.first_name.focus()
          }, 10)
        }
        if (!this.last_name) {
          setTimeout(() => {
            this.$refs.last_name.focus()
          }, 8)
        }
        if (!this.postcode) {
          setTimeout(() => {
            this.$refs.postcode.focus()
          }, 6)
        }
      } else {
        this.loading_booking = true
        this.booking_message = ''
        this.booking_error = ''
        const formData = new FormData()
        formData.append('camper_id', this.$getBooking.camper_details.id)
        formData.append('user_id', this.$getUser.id)
        formData.append('partner_id', this.$getBooking.camper_details.userdata.id)
        formData.append('start_date', this.$getBooking.start_date)
        formData.append('end_date', this.$getBooking.end_date)
        formData.append('first_name', this.first_name)
        formData.append('last_name', this.last_name)
        formData.append('email', this.email)
        formData.append('address', this.address)
        formData.append('phone', this.phone)
        formData.append('city', this.city)
        formData.append('country', this.country)
        formData.append('subtotal', this.subtotal)
        formData.append('coupon', this.coupon)
        formData.append('discount', this.discount_val)
        formData.append('postcode', this.postcode)
        formData.append('addon_details', JSON.stringify(this.addon_details))
        formData.append('addon_price', this.addons_val)
        formData.append('partial_amount', this.partial_amount)
        formData.append('total', this.total)

        this.$api.post('booking', formData).then((res) => {
          // console.log(res.data)
          this.loading_booking = false
          if (res.data.status) {
            this.$store.commit('setBookingData', {
              user_id: this.$getUser.id,
              first_name: this.first_name,
              last_name: this.last_name,
              email: this.email,
              address: this.address,
              city: this.city,
              postcode: this.postcode,
              country: this.country,
              phone: this.phone,
              subtotal: this.subtotal,
              coupon_code: this.coupon,
              discount: this.discount_val,
              addon_price: this.addons_val,
              addon_details: this.addon_details,
              total: this.total,
              partner_id: this.$getBooking.camper_details.userdata.id,
              booking_id: res.data.data
            })
            setTimeout(() => {
              this.$router.push({ path: '/booking/review/' })
            }, 200)
          } else {
            this.booking_error = this.$multiLang('PleaseFillCompleteDetails')
          }
        })
      }
    }
  },
  head () {
    return {
      title: this.$langAdmin('Checkout'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('Checkout')
        }
      ]
    }
  }
}
</script>
