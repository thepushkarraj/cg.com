<template>
  <one-row class="mb-5">
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
                :required="$langRequired(item.code)"
              />
              <!-- <TextEditor :name="'description[' + item.code + ']'" /> -->
              <v-textarea
                outlined
                :label="$t('Description')"
                :name="'description[' + item.code + ']'"
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
    type: {
      type: String,
      required: true
    },
    name: {
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
      rating: 5,
      tab: this.$getLang
    }
  },
  watch: {
    review (val) {
      this.rating = parseInt(val.Rating.rating)
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
            this.$router.push({ path: '/admin/review' })
          }, 2000)
        } else {
          this.error = res.data.error
        }
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
