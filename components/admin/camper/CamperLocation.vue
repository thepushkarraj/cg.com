<template>
  <span>
    <!-- <v-row v-for="item, index in $allLanguages" :key="index">
      <div v-show="tab === item.code" class="col-md-12">

      </div>
    </v-row> -->
    <v-row>
      <div class="col-md-12">
        <TextInput
          :value="data.location"
          :label="$t('Location')"
          :name="'location'"
          :required="false"
          class="mt-4"
        />
        <!-- <GoogleMapSearch /> -->
        <TextInput
          :value="data.postcode"
          :label="$t('Postcode')"
          :name="'postcode'"
          :required="false"
        />
        <SelectInput
          :value="data.place"
          :label="$t('Place')"
          :name="'place'"
          :options="citydata"
          :required="false"
          :value-type="'number'"
        />
        <SelectInput
          :value="data.country"
          :label="$t('Country')"
          :name="'country'"
          :options="$CountryList"
          :required="false"
        />
        <TextInput
          :value="data.lat"
          :label="$t('Lat')"
          :name="'lat'"
          :required="false"
        />
        <TextInput
          :value="data.long"
          :label="$t('Long')"
          :name="'long'"
          :required="false"
        />
      </div>
    </v-row>
  </span>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    tab: {
      type: String,
      default: ''
    },
    citydata: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
