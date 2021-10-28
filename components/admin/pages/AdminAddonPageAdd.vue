<template>
  <one-row class="mb-5">
    <template #heading>
      {{ $langAdmin('Add') }} {{ name }}
    </template>
    <template #actions>
      <v-btn class="success" dark :to="localePath(baseUrl)">
        <span class="d-none d-sm-block">{{ $langAdmin('ViewAll') }}</span>
      </v-btn>
    </template>
    <form-layout
      :error="error"
      :message="message"
      :loading="loading"
      :submit="$langAdmin('Submit')"
      @submit-form="submitForm"
    >
      <input type="hidden" :value="type" name="type">
      <input type="hidden" :value="$getLang" name="language">
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
          <v-row v-for="(item, index) in $allLanguages" :key="index">
            <div v-show="tab === item.code" class="col-md-12">
              <TextInput
                :label="$langAdmin('Name')"
                :name="'title[' + item.code + ']'"
                :required="$langRequired(item.code)"
              />
              <!-- <TextEditor :name="'description[' + item.code + ']'" /> -->
              <TextEditor
                :name="'description[' + item.code + ']'"
              />
            </div>
          </v-row>
        </div>
        <div class="col-md-6">
          <TextInput
            :label="$langAdmin('Price')"
            :name="'price'"
            :required="false"
          />
          <ImageInput
            :name-id="'image'"
            :name-image="'image_thumb'"
            :label="$langAdmin('FeaturedImage')"
          />
        </div>
      </v-row>
    </form-layout>
  </one-row>
</template>

<script>
export default {
  layout: 'admin',
  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    baseUrl: {
      type: String,
      required: true
    },
    selectoption: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      data: [],
      meta: '',
      loading: false,
      error: '',
      message: '',
      catOptions: [],
      tab: this.$getLang
    }
  },
  mounted () {
    this.getCatData()
  },
  methods: {
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      this.$api.post('admin/addcontent', formData).then((res) => {
        // console.log(res.data)
        this.loading = false
        if (res.data.status) {
          this.message = res.data.message
          setTimeout(() => {
            this.$router.push({ path: this.baseUrl })
          }, 2000)
        } else {
          this.error = res.data.error
        }
      })
    },
    getCatData () {
      this.$api('categorylisting/' + this.type).then((res) => {
        // console.log(res.data.data)
        // this.loading = false
        this.catOptions = res.data.data
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
  }
}

</script>
