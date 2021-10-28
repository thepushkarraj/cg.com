<template>
  <v-container class="mb-5">
    <h3 class="pt-5 pl-5">
      {{ $t('BookingDetails') }}
      <v-btn
        v-if="data.booking_status === 6"
        depressed
        class="ml-10"
        color="green rounded-xl v-btn v-btn--is-elevated v-btn--has-bg theme--dark v-size--large"
        @click="changereview()"
      >
        {{ $t('Review') }}
      </v-btn>
    </h3>
    <v-card class="ma-3" color="grey lighten-5">
      <form-layout
        v-if="reviewshow"
        class="pa-5"
        :error="error"
        :message="message"
        :loading="loading"
        :submit="$t('Submit')"
        @submit-form="submitForm"
      >
        <input type="hidden" :value="'review'" name="type">
        <input type="hidden" :value="data.id" name="camper_id">
        <input type="hidden" :value="$getUser.id" name="user_id">
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
            <label>{{ $t('RecommendationText') }}</label>
            <v-slider
              v-model="rating"
              class="mt-8"
              thumb-color="primary"
              thumb-label="always"
              max="100"
              min="1"
              :thumb-size="26"
          />
            <ImageInput
              :name-id="'image'"
              :name-image="'image_thumb'"
              :label="$t('ProfileImage')"
            />
          </div>
        </v-row>
      </form-layout>
    </v-card>
    <SingleBookingView @get-data="getData" />
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      reviewshow: false,
      data: [],
      meta: '',
      loading: false,
      error: '',
      message: '',
      rating: 100,
      tab: this.$getLang
    }
  },
  watch: {
    review (val) {
      this.rating = val
    }
  },
  methods: {
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      this.$api.post('user/addcontent', formData).then((res) => {
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
    },
    getData (data) {
      this.data = data
      // console.log(data)
    },
    changereview () {
      this.reviewshow = !this.reviewshow
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
