<template>
  <div v-if="pageLoading">
    <PageListing />
  </div>
  <v-container v-else>
    <v-card class="pa-4">
      <v-row>
        <div class="col-lg-6">
          <div>
            <!-- <h3 class="pt-2">
              {{ $t('BookingDetails') }}
            </h3> -->
            <!-- <v-divider class="my-3" /> -->
            <v-simple-table style="width:100%;">
              <template v-slot:default>
                <tbody class="striped_table">
                  <CancelBookingBtn :data="data" @change-status="changeStatus" />
                  <CancelBooking v-if="cancel" :data="data" />
                  <tr>
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-calendar
                      </v-icon>
                      {{ $t('BookingCreated') }}
                    </td>
                    <td> {{ $getDate(data.created_at) }} </td>
                  </tr>
                  <tr>
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-calendar
                      </v-icon>
                      {{ $t('BookingDates') }}
                    </td>
                    <td> From {{ data.start_date }} to {{ data.end_date }} </td>
                  </tr>
                  <tr>
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-account-circle
                      </v-icon>
                      {{ $t('Name') }}
                    </td>
                    <td> {{ data.first_name + ' ' + data.last_name }} </td>
                  </tr>
                  <tr>
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-email-outline
                      </v-icon>
                      {{ $t('Email') }}
                    </td>
                    <td> {{ data.email }} </td>
                  </tr>
                  <tr>
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-phone
                      </v-icon>
                      {{ $t('Phone') }}
                    </td>
                    <td> {{ data.phone }} </td>
                  </tr>
                  <tr>
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-map-marker
                      </v-icon>
                      {{ $t('Address') }}
                    </td>
                    <td v-show="data.address">
                      <span v-show="data.address"> {{ data.address }} </span>
                      <span v-show="data.city">, {{ data.city }} </span>
                      <span v-show="data.country">, {{ data.country }} </span>
                      <span v-show="data.postcode">, {{ data.postcode }} </span>
                    </td>
                  </tr>
                  <tr v-if="data.coupon">
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-tag
                      </v-icon>
                      {{ $t('CoupenCode') }}
                    </td>
                    <td> {{ data.coupon }} </td>
                  </tr>
                  <tr>
                    <td style="min-width:180px;">
                      <v-icon color="primary" class="mr-2">
                        mdi-currency-eur
                      </v-icon>
                      {{ $t('Subtotal') }}
                    </td>
                    <td> {{ $currency(data.subtotal) }} </td>
                  </tr>
                  <tr>
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-currency-eur
                      </v-icon>
                      {{ $t('Discount') }}
                    </td>
                    <td> {{ $currency(data.discount) }} </td>
                  </tr>
                  <tr>
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-currency-eur
                      </v-icon>
                      {{ $t('AddonPrice') }}
                    </td>
                    <td> {{ $currency(data.addon_price) }} </td>
                  </tr>
                  <tr>
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-currency-eur
                      </v-icon>
                      {{ $t('TotalPaid') }}
                    </td>
                    <td> {{ $currency(data.total) }} </td>
                  </tr>
                  <tr>
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-checkbox-marked-circle
                      </v-icon>
                      {{ $t('TransactionId') }}
                    </td>
                    <td> {{ data.transaction_id }} </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </div>
        <div class="col-lg-6">
          <v-img :src="$mediaBase + data.camperdata.image_thumb" color="primary mx-5 rounded-xl" width="100%" height="250" />
          <v-card class="pa-4 mt-6">
            <v-list-item class="pa-0">
              <h3>
                {{ $t('CamperDetails') }}
              </h3>
              <v-spacer />
              <v-btn class="green" dark :to="localePath('/camper/' + data.camperdata.slug)">
                {{ $t('ViewAll') }}
              </v-btn>
            </v-list-item>
            <v-divider class="my-3" />
            <v-simple-table style="width:100%;">
              <template v-slot:default>
                <tbody class="striped_table">
                  <tr>
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-star-outline
                      </v-icon>
                      {{ $t('Brand') }}
                    </td>
                    <td v-text="$lang(data.camperdata.brand)" />
                  </tr>
                  <tr>
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-truck
                      </v-icon>
                      {{ $t('Model') }}
                    </td>
                    <td v-text="$lang(data.camperdata.model)" />
                  </tr>
                  <tr>
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-clipboard-text
                      </v-icon>
                      {{ $t('FirstRegistration') }}
                    </td>
                    <td v-text="data.camperdata.first_registration" />
                  </tr>
                  <tr>
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-leaf
                      </v-icon>
                      {{ $t('EnvironmentalBandge') }}
                    </td>
                    <td v-text="$lang(data.camperdata.environmental_bandge)" />
                  </tr>
                  <tr>
                    <td>
                      <v-icon color="primary" class="mr-2">
                        mdi-book-open
                      </v-icon>
                      {{ $t('Insurance') }}
                    </td>
                    <td v-text="$lang(data.camperdata.insurance)" />
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-card>
        </div>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import CancelBooking from '~/components/main/CancelBooking.vue'
import CancelBookingBtn from '~/components/main/CancelBookingBtn.vue'
export default {
  components: {
    CancelBookingBtn, CancelBooking
  },
  data () {
    return {
      data: [],
      pageLoading: true,
      cancel: true,
      error: '',
      message: '',
      loading: false
    }
  },
  mounted () {
    this.$api('/singlebooking/' + this.$route.params.id).then((res) => {
      this.pageLoading = false
      this.data = this.$psJSON(res.data.data)
      if (this.data.user_id !== this.$getUser.id && this.$getUser.role !== 1) {
        window.location.href = '/'
      }
      // console.log(this.data)
      this.$emit('get-data', this.data)
    })
  },
  methods: {
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      this.$api.post('login', formData).then((res) => {
        this.submitFormRes(res)
      })
    },
    submitFormRes (res) {
      // console.log(res.data.data.userdata)
      this.loading = false
      if (res.data.status) {
        this.message = res.data.message
        document.getElementById('new_form').reset()
      } else {
        this.error = res.data.error
      }
    },
    submitFormInit () {
      this.error = ''
      this.message = ''
      this.loading = true
    },
    changeStatus (val) {
      this.cancel = val
    }
  },
  head () {
    return {
      title: 'Bookings'
    }
  }
}
</script>

<style>
  .striped_table tr:nth-child(even) {
    background-color: #f5f5f5 !important;
  }
  .striped_table td:nth-child(even) {
    color:#777 !important;
  }
  .striped_table td {
    border-bottom:0px solid !important;
  }
</style>
