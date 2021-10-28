<template>
  <div v-if="pageLoading">
    <PageListing />
  </div>
  <one-row v-else class="mb-5">
    <template #heading>
      {{ $langAdmin('Edit') }} {{ name }}
    </template>
    <template #actions>
      <v-btn class="success" dark :to="localePath(baseUrl + 'add')">
        <v-icon>mdi-plus</v-icon>
        <span class="d-none d-sm-block"> {{ $langAdmin('Add') }} {{ name }}</span>
      </v-btn>
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
                :label="$langAdmin('Title')"
                :name="'title[' + item.code + ']'"
                :required="$langRequired(item.code)"
                :icon="'mdi-truck'"
              />
              <!-- <v-textarea
                outlined
                :label="$langAdmin('Description')"
                :value="$lang(data.description, item.code)"
                :name="'description[' + item.code + ']'"
                :required="false"
              /> -->
              <TextEditor
                :value="$lang(data.description, item.code)"
                :name="'description[' + item.code + ']'"
              />
              <TextInput
                class="mt-5"
                :value="$lang(data.meta_title, item.code)"
                :label="$langAdmin('MetaTitle')"
                :name="'meta_title[' + item.code + ']'"
                :required="false"
                :icon="'mdi-pencil'"
              />
              <v-textarea
                :value="$lang(data.meta_description, item.code)"
                outlined
                :label="$langAdmin('MetaDescription')"
                :name="'meta_description[' + item.code + ']'"
                :required="false"
              />
            </div>
          </v-row>
        </div>
        <div class="col-md-6">
          <SelectInput
            v-if="selectoption === true"
            :value="data.category + ' '"
            :label="$langAdmin('Category')"
            :name="'category'"
            :options="catOptions"
            :value-type="'number'"
          />
          <TextInput
            :value="data.slug"
            :label="$langAdmin('Slug')"
            :name="'slug'"
            :required="false"
            :icon="'mdi-link-variant'"
          />
          <TextInput
            v-if="cityorder"
            :value="data.city_order"
            :label="$langAdmin('Order')"
            :name="'city_order'"
            :required="false"
            :icon="''"
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
    },
    selectoption: {
      type: Boolean,
      required: true
    },
    order: {
      type: Boolean,
      default: false
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
      tab: this.$getLang,
      cityorder: this.order
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
        this.data = res.data.data
        this.pageLoading = false
      })
    },
    getCatData () {
      if (this.selectoption) {
        this.$api('categorylisting/' + this.type).then((res) => {
          // console.log(res.data.data)
          // this.loading = false
          this.catOptions = res.data.data
        })
      }
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
