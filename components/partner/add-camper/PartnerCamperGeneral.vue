<template>
  <v-row class="pt-0">
    <div class="col-md-6 pt-0">
      <v-row v-for="item, index in $allLanguages" :key="index">
        <div v-show="tab === item.code" class="col-md-12">
          <TextInput
            :label="$t('Name')"
            :name="'name[' + item.code + ']'"
            :tooltip="$t('NameOfCamper')"
            :required="$langRequired(item.code)"
          />
          <TextInput
            :label="$t('Brand')"
            :name="'brand[' + item.code + ']'"
            :tooltip="$t('BrandOfCamper')"
            :required="false"
          />
          <TextInput
            :label="$t('Model')"
            :name="'model[' + item.code + ']'"
            :tooltip="$t('ModelOfCamper')"
            :required="false"
          />
          <v-select
            outlined
            :name="'fuel_type[' + item.code + ']'"
            :items="items"
            :label="$t('FuelType')"
          />
          <v-select
            outlined
            :name="'environmental_bandge[' + item.code + ']'"
            :items="environmental_bandge"
            :label="$t('EnvironmentalBandge')"
          />
        </div>
      </v-row>
    </div>
    <div class="col-md-6 pt-0">
      <ImageInput
        :name-id="'image'"
        :name-image="'image_thumb'"
        :label="$t('FeaturedImage')"
      />
      <TextInput
        :label="$t('Seats')"
        :tooltip="$t('NumberofSeatsInCamper')"
        :name="'seats'"
        class="mt-2"
        :required="false"
      />
      <TextInput
        :label="$t('Beds')"
        :tooltip="$t('NumberofBedsInCamper')"
        :name="'beds'"
        :required="false"
      />
      <TextInput
        :label="$t('Price')"
        :name="'price'"
        :required="false"
      />
      <Checkbox
        :name="'available'"
        :label="$t('Available')"
        :tooltip="$t('CamperAvaiable')"
      />
      <Checkbox
        :name="'heating'"
        :label="$t('Heating')"
        :tooltip="$t('HeatingInCamper')"
      />
    </div>
  </v-row>
</template>

<script>
export default {
  props: {
    catOptions: {
      type: Array,
      default () {
        return []
      }
    },
    tab: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      environmental_bandge: [
        this.$multiLang('None'),
        this.$multiLang('Green'),
        this.$multiLang('Red'),
        this.$multiLang('Yellow')
      ],
      yes_no: [
        this.$multiLang('Yes'),
        this.$multiLang('No')
      ],
      items: [
        this.$multiLang('Diesel'),
        this.$multiLang('Petrol'),
        this.$multiLang('LiquifiedPetroleumGas'),
        this.$multiLang('NaturalGas')
      ]
    }
  }
}
</script>
