<template>
  <div v-if="pageLoading">
    <PageListing />
  </div>
  <one-row v-else class="mb-5">
    <template #heading>
      {{ $langAdmin('Edit') }} {{ name }}
    </template>
    <form-layout
      :error="error"
      :message="message"
      :loading="loading"
      :submit="$langAdmin('Submit')"
      @submit-form="submitForm"
    >
      <input type="hidden" :value="data.id" name="id">
      <input type="hidden" :value="data.type" name="type">
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
                :value="$lang(data.title, item.code)"
                :label="$langAdmin('Name')"
                :name="'title[' + item.code + ']'"
                :required="$langRequired(item.code)"
              />
              <!-- <TextEditor :name="'description[' + item.code + ']'" /> -->
              <TextEditor
                :value="$lang(data.description, item.code)"
                :name="'description[' + item.code + ']'"
              />
            </div>
          </v-row>
        </div>
        <div class="col-md-6">
          <TextInput
            :value="data.price"
            :label="$langAdmin('Price')"
            :name="'price'"
            :required="false"
          />
          <ImageInput
            :id="data.image"
            :image="data.image_thumb"
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
    }
  },
  data () {
    return {
      data: [],
      meta: '',
      loading: false,
      pageLoading: true,
      error: '',
      message: '',
      catOptions: [],
      tab: this.$getLang
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.getCatData()
      this.$api('admin/singlecontent/' + this.$route.params.id).then((res) => {
        // console.log(res.data.data)
        this.data = this.$psJSON(res.data.data)
        this.pageLoading = false
      })
    },
    getCatData () {
      this.$api('categorylisting/' + this.type).then((res) => {
        // console.log(res.data.data)
        // this.loading = false
        this.catOptions = res.data.data
      })
    },
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      this.$api.post('admin/editcontent/' + this.$route.params.id, formData).then((res) => {
        // console.log(res.data)
        this.loading = false
        if (res.data.status) {
          this.message = res.data.message
        } else {
          this.error = res.data.error
        }
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
