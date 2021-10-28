<template>
  <div v-if="!loading" class="container-fluid grey lighten-2" style="min-height: 70vh">
    <v-container>
      <v-row>
        <div v-for="item, index in data" :key="index" class="col-lg-6">
          <v-card class="pa-4">
            <v-row>
              <div class="col-lg-5 col-md-3 col-sm-4 text-center text-sm-right">
                <v-img
                  :src="$mediaBase + item.data.camperdata.image_thumb"
                  color="primary mx-5 rounded-xl"
                  width="100%"
                  height="200"
                />
              </div>
              <div class="col-lg-7 col-md-9 col-sm-8">
                <div>
                  <h3 class="mb-4 pt-2">
                    <v-icon class="mr-3">
                      mdi-truck
                    </v-icon>
                    {{ $lang(item.data.camperdata.name) }}
                  </h3>
                  <p>
                    <strong>
                      <v-icon class="mr-3">
                        mdi-calendar
                      </v-icon>
                    </strong>
                    {{ $t('From') + ' ' + item.data.start_date + ' ' + $t('To') + item.data.end_date }}
                  </p>
                  <p>
                    <strong> <v-icon class="mr-3"> mdi-currency-eur </v-icon> </strong>
                    {{ $t('Total') }} {{ $currency(item.data.total) }}
                  </p>
                  <p>
                    <v-btn :to="localePath('/user/booking/' + item.data.id)" class="green" dark depressed block>
                      {{ $t('ViewBookingDetails') }}
                    </v-btn>
                  </p>
                  <p v-if="item.data.booking_status == 1 || item.data.booking_status == 3">
                    <v-btn
                      :to="localePath('/web/generate-pdf/' + item.data.id + '/' + $getLang)"
                      class="primary"
                      target="_blank"
                      dark
                      depressed
                      block
                    >
                      {{ $t('Invoice') }}
                    </v-btn>
                  </p>
                </div>
              </div>
            </v-row>
          </v-card>
        </div>
        <div v-if="data.length === 0" class="container">
          <h3 class="text-center pt-8 pb-5"> No Bookings found </h3>
        </div>
      </v-row>
    </v-container>
    <div class="text-center pt-10 pb-5">
      <v-pagination
        v-model="page"
        :length="length"
      />
    </div>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data () {
    return {
      data: [],
      loading: true,
      page: 1,
      length: 5
    }
  },
  watch: {
    page (val) {
      this.getData()
    }
  },
  mounted () {
    if (this.$getUser.role === 1) {
      this.$router.push({ path: '/admin/booking' })
    } else if (this.$getUser.role === 2) {
      this.$router.push({ path: '/partner/booking' })
    }
    this.$api('user/ownbooking/' + this.page).then((res) => {
      this.loading = false
      this.data = this.$psJSON(res.data.data.data)
      this.length = Math.ceil(res.data.data.count / this.$pageLimit)
    })
  },
  head () {
    return {
      title: this.$langAdmin('BookingsTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('BookingsDes')
        }
      ]
    }
  }
}
</script>
