<template>
  <one-row class="mb-5">
    <template #heading>
      {{ $t('AddCamper') }}
    </template>
    <template #actions>
      <v-btn class="success" dark :to="localePath('/partner/camper')">
        <span class="d-none d-sm-block">{{ $t('ViewAll') }}</span>
      </v-btn>
    </template>
    <form-layout
      :error="error"
      :message="message"
      :loading="loading"
      :submit="$t('Submit')"
      @submit-form="submitForm"
    >
      <input type="hidden" :value="$getLang" name="language">
      <input type="hidden" :value="$getCurrency" name="currency">
      <MultiLangFields @change-lang="changeLang" />
      <div class="row">
        <div class="col-md-12">
          <h4 class="text-uppercase">
            {{ tab }}
          </h4>
          <v-divider class="mb-4" />
        </div>
      </div>
      <v-row>
        <div class="col-md-6">
          <v-row v-for="item, index in $allLanguages" :key="index">
            <div v-show="tab === item.code" class="col-md-12">
              <TextInput
                :label="$t('Name')"
                :name="'name[' + item.code + ']'"
                :required="$langRequired(item.code)"
                :infotext="'Camper Name'"
              />
              <TextInput
                :label="$t('Brand')"
                :name="'brand[' + item.code + ']'"
                :required="false"
              />
              <TextInput
                :label="$t('Model')"
                :name="'model[' + item.code + ']'"
                :required="false"
              />
            </div>
          </v-row>
        </div>
        <div class="col-md-6">
          <SelectInput
            :label="$t('CamperType')"
            :name="'category_id'"
            :options="catOptions"
          />
          <TextInput
            :label="$t('Price')"
            :name="'price'"
            :required="false"
          />
        </div>
        <div class="col-md-12">
          <ImageInput
            :name-id="'image'"
            :name-image="'image_thumb'"
            :label="$t('FeaturedImage')"
          />
        </div>
      </v-row>
    </form-layout>
  </one-row>
</template>

<script>
export default {
  layout: 'partner',
  data () {
    return {
      data: [],
      meta: '',
      loading: false,
      error: '',
      message: '',
      life_on_board: [],
      catOptions: [],
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
      ],
      minimum_age: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', 'More than 30'],
      tab: this.$getLang
    }
  },
  mounted () {
    this.getCatData()
    this.getlCatData()
  },
  methods: {
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      // console.log(formData)
      this.$api.post('vendor/addcamper', formData).then((res) => {
        // console.log(res.data.data)
        this.loading = false
        if (res.data.status) {
          this.message = res.data.message
          setTimeout(() => {
            this.$router.push({ path: '/partner/camper' })
          }, 2000)
        } else {
          this.error = res.data.error
        }
      })
    },
    getCatData () {
      this.$api('categorylisting/camper').then((res) => {
        // console.log(res.data.data)
        // this.loading = false
        this.catOptions = res.data.data
      })
    },
    getlCatData () {
      this.$api('categorylisting/life_on_board').then((res) => {
        // console.log(res.data.data)
        // this.loading = false
        this.life_on_board = res.data.data
      })
    },
    submitFormInit () {
      this.error = ''
      this.message = ''
      this.loading = true
    },
    changeLang (val) {
      this.tab = val
    }
  },
  head () {
    return {
      title: this.$langAdmin('AddCamper'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('AddCamper')
        }
      ]
    }
  }
}

</script>
