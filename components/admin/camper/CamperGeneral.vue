<template>
  <span>
    <v-row>
      <div class="col-md-6">
        <v-row v-for="item, index in $allLanguages" :key="index">
          <div v-show="tab === item.code" class="col-md-12">
            <TextInput
              :value="$lang(data.name,item.code)"
              :label="$t('Name')"
              :tooltip="$t('NameOfCamper')"
              :name="'name[' + item.code + ']'"
              :required="$langRequired(item.code)"
            />
            <TextInput
              :value="$lang(data.brand,item.code)"
              :label="$t('Brand')"
              :name="'brand[' + item.code + ']'"
              :tooltip="$t('BrandOfCamper')"
              :required="false"
            />
            <TextInput
              :value="$lang(data.model,item.code)"
              :label="$t('Model')"
              :tooltip="$t('ModelOfCamper')"
              :name="'model[' + item.code + ']'"
              :required="false"
            />
            <v-select
              :value="$lang(data.fuel_type,item.code)"
              outlined
              :name="'fuel_type[' + item.code + ']'"
              :items="items"
              :label="$t('FuelType')"
            />
            <v-select
              :value="$lang(data.environmental_bandge,item.code)"
              outlined
              :name="'environmental_bandge[' + item.code + ']'"
              :items="environmental_bandge"
              :label="$t('EnvironmentalBandge')"
            />
            <!-- <v-select
              :value="$lang(data.air_conditioning,item.code)"
              outlined
              :name="'air_conditioning[' + item.code + ']'"
              :items="yes_no"
              :label="$t('AirConditioning')"
            />
            <v-select
              :value="$lang(data.heating,item.code)"
              outlined
              :name="'heating[' + item.code + ']'"
              :items="yes_no"
              :label="$t('Heating')"
            />-->
          </div>
        </v-row>
      </div>
      <div class="col-md-6">
        <Checkbox
          :value="data.available"
          :name="'available'"
          :tooltip="$t('CamperAvaiable')"
          :label="$t('Available')"
        />
        <Checkbox
          :value="data.air_conditioning"
          :name="'air_conditioning'"
          :label="$t('AirConditioning')"
          :tooltip="$t('AirConditioningInCamper')"
        />
        <Checkbox
          :value="data.heating"
          :name="'heating'"
          :label="$t('Heating')"
          :tooltip="$t('HeatingInCamper')"
        />
        <SelectInput
          :value="data.category_id.toString()"
          :label="$t('CamperType')"
          :name="'category_id'"
          :options="catOptions"
          :value-type="'number'"
        />
        <NumberInput
          :password-val="data.price.toString()"
          :label="$t('Price')"
          :name="'price'"
          :icon="'mdi-link-variant'"
          :required="false"
        />
        <TextInput
          :value="data.slug"
          :label="$t('Slug')"
          :name="'slug'"
          :tooltip="$t('TooltipSlug')"
          :required="false"
          :icon="'mdi-link-variant'"
        />
        <ImageInput
          :id="$toString(data.image)"
          :image="data.image_thumb"
          :name-id="'image'"
          :name-image="'image_thumb'"
          :label="$t('FeaturedImage')"
        />
        <ImageGalleryInput
          :id="data.images"
          :image="JSON.stringify(images)"
          :name-id="'images'"
          :label="$t('ImageGallery')"
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
    images: {
      type: Array,
      default () {
        return []
      }
    },
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
  // watch: {
  //   data (val) {
  //     console.log(val)
  //   }
  // },
  // mounted () {
  //   console.log(this.data)
  // }
}
</script>
