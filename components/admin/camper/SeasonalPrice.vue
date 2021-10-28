<template>
  <section>
    <v-row>
      <div class="col-md-3">
        <Checkbox
          :value="data.seasonal_price"
          :name="'seasonal_price'"
          :label="$t('EnableSeasonalPrice')"
          @get-value="seasonalPrice"
        />
      </div>
    </v-row>
    <v-row v-if="seasonal">
      <div class="col-md-3">
        <h3 class="pt-sm-16 pt-0">
          {{ $t('Price') }} {{ $t('PerDay') }}
        </h3>
      </div>
      <div class="col-md-3">
        <p>
          <v-icon color="primary" class="mr-2">
            mdi-clipboard-check
          </v-icon>
          {{ $t('StandardSeason') }} <br>
          <v-icon color="primary" class="mr-2">
            mdi-calendar
          </v-icon>
          {{ $t('AprJunSepOct') }}
        </p>
        <TextInput
          class="mt-3"
          :value="first"
          :label="$t('StandardSeasonPrice')"
          :name="'first_season'"
          :required="true"
          prepend-inner-icon="mdi-map-marker"
        />
      </div>
      <div class="col-md-3">
        <p>
          <v-icon color="primary" class="mr-2">
            mdi-clipboard-check
          </v-icon>
          {{ $t('HighSeason') }} <br>
          <v-icon color="primary" class="mr-2">
            mdi-calendar
          </v-icon>
          {{ $t('JulAug') }}
        </p>
        <TextInput
          class="mt-3"
          :value="second"
          :label="$t('HighSeasonPrice')"
          :name="'second_season'"
          :required="true"
        />
      </div>
      <div class="col-md-3">
        <p>
          <v-icon color="primary" class="mr-2">
            mdi-clipboard-check
          </v-icon>
          {{ $t('WinterSeason') }} <br>
          <v-icon color="primary" class="mr-2">
            mdi-calendar
          </v-icon>
          {{ $t('NovMar') }}
        </p>
        <TextInput
          class="mt-3"
          :value="third"
          :label="$t('WinterSeasonPrice')"
          :name="'third_season'"
          :required="true"
        />
      </div>
    </v-row>
  </section>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      seasonal: this.data.seasonal_price
    }
  },
  computed: {
    first () {
      let r = ''
      const pdata = this.data.seasonalprice
      if (pdata.length > 0) {
        // console.log(pdata)
        pdata.forEach(function (value) {
          if (value.season === 'first_season') {
            r = value.price.toString()
            // console.log(r)
          }
        })
      }
      return r
    },
    second () {
      let r = ''
      const pdata = this.data.seasonalprice
      if (pdata.length > 0) {
        // console.log(pdata)
        pdata.forEach(function (value) {
          if (value.season === 'second_season') {
            r = value.price.toString()
            // console.log(r)
          }
        })
      }
      return r
    },
    third () {
      let r = ''
      const pdata = this.data.seasonalprice
      if (pdata.length > 0) {
        // console.log(pdata)
        pdata.forEach(function (value) {
          if (value.season === 'third_season') {
            r = value.price.toString()
            // console.log(r)
          }
        })
      }
      return r
    }
  },
  watch: {
    data (val) {
      this.getData()
    }
  },
  methods: {
    seasonalPrice (val) {
      this.seasonal = val
      // console.log(val)
    }
  }
}
</script>
