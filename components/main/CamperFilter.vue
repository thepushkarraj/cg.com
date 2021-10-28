<template>
  <h1 v-if="loading" class="text-center">
    <v-btn
      large
      loading
      dark
      class="transparent"
    >
      mdi-domain
    </v-btn>
  </h1>
  <div v-else class="row">
    <div class="col-lg-4 col-md-6" style="max-height:80px;">
      <CityList />
    </div>
    <div class="col-lg-4 col-md-6" style="max-height:80px;">
      <DatePickerRange
        :label="$t('SelectDate')"
        :name="'booking_date'"
        :icon="'mdi-calendar'"
      />
    </div>
    <div class="col-lg-4" style="max-height:80px;">
      <v-btn
        block
        height="56"
        class="rounded-xl"
        large
        dark
        depressed
        color="green"
        :to="camperUrl"
        @click="$emit('filter',filterUrl)"
      >
        {{ $t('SearchNow') }}
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    loadingbtn: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      loading: true
    }
  },
  computed: {
    camperUrl () {
      if (this.$route.path === this.localePath('/')) {
        return this.localePath('/camper/' + this.filterUrl)
      } else {
        return ''
      }
    },
    filterUrl () {
      let parms = ''
      // console.log(typeof this.$getBooking.camper_city === 'object')
      if (this.$getBooking.camper_city && typeof this.$getBooking.camper_city === 'object') {
        parms = 'city=' + this.$getBooking.camper_city.value + '&'
      }
      if (this.$getBooking.start_date) {
        parms = parms + 'startdate=' + this.$getBooking.start_date + '&'
      }
      if (this.$getBooking.end_date) {
        parms = parms + 'enddate=' + this.$getBooking.end_date
      }
      // console.log(parms)
      if (parms.length > 0) {
        return '?' + parms
      } else {
        return ''
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.loading = false
    }, 200)
  }
}
</script>
