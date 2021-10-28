<template>
  <one-row v-if="pageLoading" class="mb-5">
    <template #heading>
      {{ $t('Add') }} {{ $t('Review') }}
    </template>
    <template #actions>
      <v-btn class="success" dark :to="localePath('/admin/review')">
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
      <input type="hidden" :value="'review'" name="type">
      <input type="hidden" :value="$getLang" name="language">
      <input type="hidden" :value="data.id" name="id">
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
                :label="$t('Name')"
                :name="'title[' + item.code + ']'"
                :value="$lang(data.title, item.code)"
                :required="$langRequired(item.code)"
              />
              <!-- <TextEditor :name="'description[' + item.code + ']'" /> -->
              <v-textarea
                outlined
                :label="$t('Description')"
                :name="'description[' + item.code + ']'"
                :value="$lang(data.description, item.code)"
                :required="false"
              />
            </div>
          </v-row>
        </div>
        <div class="col-md-6">
          <input type="hidden" name="rating" :value="rating">
          <v-rating
            v-model="rating"
            background-color="orange lighten-3"
            color="orange"
            large
          />
          <ImageInput
            :id="$toString(data.image)"
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
  layout: 'admin',
  props: {
    name: {
      type: String,
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
      rating: 5,
      tab: this.$getLang,
      pageLoading: false
    }
  },
  watch: {
    review (val) {
      this.rating = parseInt(val.Rating.rating)
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api('admin/singlecontent/' + this.$route.params.id).then((res) => {
        // console.log(res.data.data)
        this.data = this.$psJSON(res.data.data)
        this.pageLoading = true
        this.rating = this.data.rating
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
  },
  head () {
    return {
      title: this.$langAdmin('Review'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('Review')
        }
      ]
    }
  }
}

</script>
