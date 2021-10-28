<template>
  <one-row v-if="!pageLoading" class="mb-5">
    <template #heading>
      {{ $t('Edit') }} {{ name }}
    </template>
    <template #actions>
      <v-btn class="success" dark :to="localePath(baseUrl + 'add')">
        <v-icon>mdi-plus</v-icon>
        <span class="d-none d-sm-block">Add {{ name }}</span>
      </v-btn>
    </template>
    <form-layout :error="error" :message="message" :loading="loading" :submit="$t('Submit')" @submit-form="submitForm">
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
          <v-row v-for="item, index in $allLanguages" :key="index">
            <div v-show="tab === item.code" class="col-md-12">
              <TextInput :value="$lang(data.name,item.code)" :label="$t('Name')" :name="'name[' + item.code +']'" :required="$langRequired(item.code)" :icon="'mdi-truck'" />
              <TextInput :value="$lang(data.meta_title,item.code)" :label="$t('MetaTitle')" :name="'meta_title[' + item.code +']'" :required="false" :icon="'mdi-pencil'" />
              <v-textarea :value="$lang(data.meta_description,item.code)" outlined :label="$t('MetaDescription')" :name="'meta_description[' + item.code +']'" :required="false" />
              <v-textarea :value="$lang(data.description,item.code)" outlined :label="$t('Description')" :name="'description[' + item.code +']'" :required="false" />
            </div>
          </v-row>
        </div>
        <div class="col-md-6">
          <TextInput :value="data.slug" :label="$t('Slug')" :name="'slug'" :required="false" :icon="'mdi-link-variant'" />
          <ImageInput
            :id="data.image"
            :image="data.image_thumb"
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
  layout: 'admin',
  data () {
    return {
      data: [],
      meta: '',
      loading: false,
      pageLoading: true,
      error: '',
      message: '',
      tab: this.$getLang
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api('admin/singlecategory/' + this.$route.params.id).then((res) => {
        // console.log(res.data.data)
        this.data = this.$psJSON(res.data.data)
        this.pageLoading = false
      })
    },
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      this.$api.post('admin/editcategory/' + this.$route.params.id, formData).then((res) => {
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
