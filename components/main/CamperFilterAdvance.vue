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
    <v-col
      order="1"
      lg="4"
      md="6"
      sm="12"
      class="col-12"
      style="max-height:80px; min-width:300px;"
    >
      <CityList />
    </v-col>
    <v-col
      order="2"
      lg="4"
      md="6"
      sm="12"
      class="col-12"
      style="max-height:80px;"
    >
      <DatePickerRange
        :label="$t('SelectDate')"
        :name="'booking_date'"
        :icon="'mdi-calendar'"
      />
    </v-col>
    <v-col
      order="3"
      lg="2"
      md="6"
      sm="12"
      class="col-12"
      style="max-height:80px;"
    >
      <v-btn
        block
        height="56"
        class="rounded-xl mr-4"
        large
        dark
        depressed
        color="green"
        @click="af= !af"
      >
        {{ af ? $t('ClearFilter') : $t('AdvanceFilter') }}
      </v-btn>
    </v-col>
    <v-col
      :order="orderSubmit"
      lg="2"
      md="6"
      sm="12"
      class="col-12"
      style="max-height:80px;"
    >
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
    </v-col>
    <v-col v-if="af" order="5" lg="12" sm="12" class="col-12">
      <v-row class="white mx-0 my-0 rounded-xl pa-2 pt-4">
        <div class="col-lg-5 col-md-12 pb-4 py-lg-0">
          <label class="pb-4"> {{ $t('PriceRange') }} </label>
          <v-range-slider
            v-model="range"
            hide-details
            max="500"
            min="50"
            thumb-label="always"
            :thumb-size="26"
          >
            <template v-slot:prepend>
              {{ $currency(range[0]) }}
              <!-- <v-text-field
                :value="range[0]"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(range, 0, $event)"
              ></v-text-field> -->
            </template>
            <template v-slot:append>
              {{ $currency(range[1]) }}
              <!-- <v-text-field
                :value="range[1]"
                class="mt-0 pt-0"
                hide-details
                single-line
                type="number"
                style="width: 60px"
                @change="$set(range, 1, $event)"
              ></v-text-field> -->
            </template>
          </v-range-slider>
        </div>
        <div class="col-lg-3 col-md-12 py-0">
          <SelectInput
            :label="$t('CamperType')"
            :name="'category_id'"
            :options="catOptions"
            :value="category_id"
            :value-type="'number'"
            :icon="'mdi-truck'"
            :required="false"
            :outlined="false"
            :clearable="true"
            @get-value="getCategoryId"
          />
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6 py-0">
          <!-- <NumberInput
            :label="$t('Beds')"
            :password-val="beds.toString()"
            :name="'beds'"
            :validation="false"
            :icon="'mdi-sofa'"
            @get-value="getBeds"
          /> -->
          <v-slider
            v-model="beds"
            class="mt-8"
            :label="$t('Beds')"
            thumb-color="primary"
            thumb-label="always"
            max="5"
            min="1"
            :thumb-size="26"
          />
        </div>
        <div class="col-lg-2 col-md-6 col-sm-6 py-0">
          <!-- <NumberInput
            :label="$t('Seats')"
            :name="'seats'"
            :password-val="seats.toString()"
            :validation="false"
            :icon="'mdi-seat-recline-normal'"
            @get-value="getSeats"
          /> -->
          <v-slider
            v-model="seats"
            class="mt-8"
            :label="$t('Seats')"
            thumb-color="primary"
            thumb-label="always"
            max="5"
            min="2"
            :thumb-size="26"
          />
        </div>
        <div class="col-lg-12 py-0" style="margin-top: -20px;">
          <div class="row">
            <div class="col-lg-2 col-md-4 col-6 py-0">
              <Checkbox
                :name="'air_conditioning'"
                :value="air_conditioning ? 1 : 0"
                :label="$t('AirConditioning')"
                @get-value="getAirConditioning"
              />
            </div>
            <div class="col-lg-2 col-md-4 col-6 py-0">
              <Checkbox
                :name="'heating'"
                :value="heating ? 1 : 0"
                :label="$t('Heating')"
                @get-value="getHeating"
              />
            </div>
            <div class="col-lg-2 col-md-4 col-6 py-0">
              <Checkbox
                :name="'driving_license'"
                :value="driving_license ? 1 : 0"
                :label="$t('DrivingLicense')"
                @get-value="getDrivingLicense"
              />
            </div>
            <div class="col-lg-2 col-md-4 col-6 py-0">
              <Checkbox
                :name="'smoking'"
                :value="smoking ? 1 : 0"
                :label="$t('SmokingAllowed')"
                @get-value="getSmokingAllowed"
              />
            </div>
            <div class="col-lg-2 col-md-4 col-6 py-0">
              <Checkbox
                :name="'animals_allowed'"
                :value="animals_allowed ? 1 : 0"
                :label="$t('AnimalsAllowed')"
                @get-value="getAnimalsAllowed"
              />
            </div>
            <div class="col-lg-2 col-md-4 col-6 py-0">
              <Checkbox
                :name="'insurance'"
                :value="insurance ? 1 : 0"
                :label="$t('Insurance')"
                @get-value="getInsurance"
              />
            </div>
          </div>
        </div>
      </v-row>
    </v-col>
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
      loading: true,
      af: false,
      catOptions: [],
      range: [100, 300],
      orderSubmit: 4,
      insurance: 0,
      animals_allowed: 0,
      smoking: 0,
      driving_license: 0,
      heating: 0,
      air_conditioning: 0,
      seats: '',
      beds: '',
      category_id: ''
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
      if (this.$getBooking.camper_city && typeof this.$getBooking.camper_city === 'object') {
        parms = 'city=' + this.$getBooking.camper_city.value + '&'
      }
      if (this.$getBooking.start_date) {
        parms = parms + 'startdate=' + this.$getBooking.start_date + '&'
      }
      if (this.$getBooking.end_date) {
        parms = parms + 'enddate=' + this.$getBooking.end_date + '&'
      }
      /** fetching advance filter options */
      if (this.af) {
        parms = parms + 'af=1&'
        if (this.range) {
          parms = parms + 'start_price=' + this.range[0] + '&'
          parms = parms + 'end_price=' + this.range[1] + '&'
        }
        if (this.insurance) {
          parms = parms + 'insurance=1' + '&'
        }
        if (this.animals_allowed) {
          parms = parms + 'animals_allowed=1' + '&'
        }
        if (this.smoking) {
          parms = parms + 'smoking=1' + '&'
        }
        if (this.driving_license) {
          parms = parms + 'driving_license=1' + '&'
        }
        if (this.heating) {
          parms = parms + 'heating=1' + '&'
        }
        if (this.air_conditioning) {
          parms = parms + 'air_conditioning=1' + '&'
        }
        if (this.seats) {
          parms = parms + 'seats=' + this.seats + '&'
        }
        if (this.beds) {
          parms = parms + 'beds=' + this.beds + '&'
        }
        if (this.category_id) {
          parms = parms + 'category_id=' + this.category_id + '&'
        }
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
    this.setParamsData()
    setTimeout(() => {
      this.loading = false
    }, 200)
    this.$api('categorylisting/camper').then((res) => {
      this.catOptions = this.$psJSON(res.data.data)
      const p = new URLSearchParams(window.location.search)
      /** get category_id */
      const categoryId = parseInt(p.get('category_id'))
      if (!isNaN(categoryId)) {
        this.category_id = categoryId.toString()
      }
      /** get end_price */
      const beds = parseInt(p.get('beds'))
      if (!isNaN(beds)) {
        this.beds = beds
      }
      /** get end_price */
      const seats = parseInt(p.get('seats'))
      if (!isNaN(seats)) {
        // console.log(seats)
        this.seats = seats
      }
    })
    /** set order for submit button */
    if (window.innerWidth < 960) {
      this.orderSubmit = 6
    } else {
      this.orderSubmit = 4
    }
  },
  methods: {
    setParamsData () {
      const p = new URLSearchParams(window.location.search)
      /** get start_price */
      const startPrice = parseInt(p.get('start_price'))
      const endPrice = parseInt(p.get('end_price'))
      if (!isNaN(startPrice)) {
        this.range = [startPrice, endPrice]
      }
      /** get end_price */
      const insurance = parseInt(p.get('insurance'))
      if (!isNaN(insurance)) {
        this.insurance = insurance
      }
      /** get end_price */
      const af = parseInt(p.get('af'))
      if (!isNaN(af)) {
        this.af = true
      }
      /** get end_price */
      const animalsAllowed = parseInt(p.get('animals_allowed'))
      if (!isNaN(animalsAllowed)) {
        this.animals_allowed = animalsAllowed
      }
      /** get end_price */
      const smoking = parseInt(p.get('smoking'))
      if (!isNaN(smoking)) {
        this.smoking = smoking
      }
      /** get end_price */
      const drivingLicense = parseInt(p.get('driving_license'))
      if (!isNaN(drivingLicense)) {
        this.driving_license = drivingLicense
      }
      /** get end_price */
      const heating = parseInt(p.get('heating'))
      if (!isNaN(heating)) {
        this.heating = heating
      }
      /** get end_price */
      const airConditioning = parseInt(p.get('air_conditioning'))
      if (!isNaN(airConditioning)) {
        // console.log(airConditioning)
        this.air_conditioning = airConditioning
      }
    },
    getCategoryId (val) {
      if (val) {
        this.category_id = val.toString()
      } else {
        this.category_id = val
      }
    },
    getBeds (val) {
      this.beds = val
    },
    getSeats (val) {
      this.seats = val
    },
    getAirConditioning (val) {
      this.air_conditioning = val
    },
    getHeating (val) {
      this.heating = val
    },
    getDrivingLicense (val) {
      this.driving_license = val
    },
    getSmokingAllowed (val) {
      this.smoking = val
    },
    getAnimalsAllowed (val) {
      this.animals_allowed = val
    },
    getInsurance (val) {
      this.insurance = val
    }
  }
}
</script>
