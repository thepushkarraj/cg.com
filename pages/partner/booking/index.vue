<template>
  <div v-if="loading">
    <PageListing :list="20" />
  </div>
  <one-row v-else class="mb-5">
    <template #heading>
      {{ $t('Booking') }}
    </template>
    <template #actions>
      <v-btn class="success" dark>
        <span class="d-none d-sm-block">€ {{ booking_amount }}</span>
      </v-btn>
      <v-btn v-if="booking_amount > 0" class="success" dark @click="Withdrawal">
        <span class="d-none d-sm-block">{{ $t('Withdrawal') }}</span>
      </v-btn>
    </template>
    <template #subheader />
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <td><strong>  {{ $t('BookingId') }} </strong></td>
            <td><strong> {{ $t('Name') }} </strong></td>
            <td><strong> {{ $t('Address') }} </strong></td>
            <td><strong> {{ $t('Date') }} </strong></td>
            <td><strong> {{ $t('Amount') }} </strong></td>
            <td class="text-right">
              <strong>{{ $t('Options') }}</strong>
            </td>
          </tr>
          <BookingList v-for="(item, index) in data" v-show="!loading" :key="index" :item="item" :base-url="'/admin/camper/'" />
          <tr v-show="data.length < 1">
            <td colspan="6">
              <v-col>
                <h3 class="text-center mt-4">
                  {{ $multiLang('NoDataFound') }}
                </h3>
              </v-col>
            </td>
          </tr>
          <tr v-for="(item, index) in $pageLimit" v-show="loading && data.length === 0" :key="index + 200">
            <td colspan="2">
              <v-skeleton-loader type="list-item-avatar" />
            </td>
          </tr>
          <tr v-for="(item, index) in data" v-show="loading" :key="index + 100">
            <td colspan="2" class="pa-0">
              <v-skeleton-loader type="list-item-avatar" />
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="text-center pt-4">
      <v-pagination
        v-model="page"
        :length="length"
      />
    </div>
  </one-row>
</template>

<script>
import BookingList from '~/components/partner/lists/Bookinglist'
export default {
  layout: 'partner',
  components: {
    BookingList
  },
  data () {
    return {
      data: [],
      loading: true,
      page: 1,
      length: 5,
      booking_amount: 0
    }
  },
  watch: {
    page (val) {
      this.getData()
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.loading = true
      this.$api('vendor/vendor-booking/' + this.page).then((res) => {
        this.loading = false
        this.data = this.$psJSON(res.data.data.data)
        this.booking_amount = this.$psJSON(res.data.data.booking_amount)
        this.length = Math.ceil(res.data.data.count / this.$pageLimit)
      })
    },
    Withdrawal () {
      const formData = new FormData()
      formData.append('amount', this.booking_amount)
      this.$api.post('vendor/partner-withdrawal', formData).then((res) => {
        // console.log(res.data)
        this.getData()
      })
    }
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
