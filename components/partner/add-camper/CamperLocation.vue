<template>
  <span>
    <v-row>
      <div class="col-md-12">
        <TextInput
          :label="$t('Location')"
          :name="'location'"
          :required="false"
        />
        <TextInput
          :label="$t('Postcode')"
          :name="'postcode'"
          :required="false"
        />
        <SelectInput
          :label="$t('Place')"
          :name="'place'"
          :options="citydata"
          :required="false"
          :value-type="'number'"
        />
        <SelectInput
          :label="$t('Country')"
          :name="'country'"
          :options="$CountryList"
          :required="false"
        />
      </div>
    </v-row>
  </span>
</template>

<script>
export default {
  props: {
    citydata: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>
