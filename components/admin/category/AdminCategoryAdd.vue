<template>
  <one-row class="mb-5">
    <template #heading>
      {{ $t('Add') }} {{ name }}
    </template>
    <template #actions>
      <v-btn class="success" dark :to="localePath(baseUrl)">
        <span>{{ $t('ViewAll') }}</span>
      </v-btn>
    </template>
    <form-layout :error="error" :message="message" :loading="loading" :submit="$t('Submit')" @submit-form="submitForm">
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
          <v-row v-for="item, index in $allLanguages" :key="index">
            <div v-show="tab === item.code" class="col-md-12">
              <TextInput :label="$t('Name')" :name="'name[' + item.code +']'" :required="$langRequired(item.code)" :icon="'mdi-truck'" />
              <TextInput :label="$t('MetaTitle')" :name="'meta_title[' + item.code +']'" :required="false" :icon="'mdi-pencil'" />
              <v-textarea outlined :label="$t('MetaDescription')" :name="'meta_description[' + item.code +']'" :required="false" />
              <v-textarea outlined :label="$t('Description')" :name="'description[' + item.code +']'" :required="false" />
            </div>
          </v-row>
        </div>
        <div class="col-md-6">
          <TextInput :label="$t('Slug')" :name="'slug'" :required="false" :icon="'mdi-link-variant'" />
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
      error: '',
      message: '',
      tab: this.$getLang
    }
  },
  methods: {
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      this.$api.post('admin/addcategory', formData).then((res) => {
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
