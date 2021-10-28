<template>
  <div class="container-fluid grey lighten-4">
    <div class="container-fluid pa-0" style="background-image:url('/contact.jpg');background-size:cover;background-position: center;margin-top:-64px;">
      <div class="container pt-10 mt-10 mb-10 pb-10">
        <v-row justify="center" class="mt-5 mb-5">
          <div class="col-12">
            <div class="row">
              <div class="col-12 col-md-6">
                <v-card
                  elevation="2"
                  class="pa-7"
                >
                  <v-icon
                    large
                    color="primary"
                  >
                    mdi-email
                  </v-icon>
                  kontakt@campergold.com
                </v-card>
                <v-card
                  elevation="2"
                  class="pa-7 mt-3"
                >
                  <v-icon
                    large
                    color="primary"
                  >
                    mdi-phone
                  </v-icon>
                  +49 40-23969530
                </v-card>
                <v-card
                  elevation="2"
                  class="pa-7 mt-3"
                >
                  <v-icon
                    large
                    color="primary"
                  >
                    mdi-map-marker
                  </v-icon>
                  CamperGold GmbH
                  Neuer Wall 50
                  20354 Hamburg
                </v-card>
              </div>
              <div class="col-12 col-md-6">
                <v-card
                  elevation="2"
                  class="pr-2 pl-2 pt-2"
                >
                  <div style="width: 100%">
                    <iframe
                      width="100%"
                      height="300"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2370.350729077199!2d9.987027915846221!3d53.55150628002256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b18f1bb3c362f3%3A0xc095668ec34078b6!2sNeuer%20Wall%2050%2C%2020354%20Hamburg%2C%20Germany!5e0!3m2!1sen!2sin!4v1627460290875!5m2!1sen!2sin"
                    />
                  </div>
                </v-card>
              </div>
            </div>
          </div>
        </v-row>
      </div>
    </div>
    <div class="container pb-10">
      <h2 class="text-center white--dark pt-10">
        {{ $t('SubmitYourInquiry') }}
      </h2>
      <v-row justify="center" class="mt-5">
        <div class="col-12">
          <v-card
            elevation="2"
            class="pa-5"
          >
            <form-layout :error="error" :message="message" :loading="loading" :submit="$t('Submit')" @submit-form="submitForm">
              <div class="row">
                <div class="col-12 col-md-6">
                  <TextInput :label="$t('FirstName')" :name="'first_name'" />
                  <TextInput :label="$t('LastName')" :name="'last_name'" />
                  <TextInput :label="$t('Phone')" :name="'phone'" />
                  <Email :label="$t('Email')" :name="'email'" :icon="''" />
                  <TextInput class="pt-2" :label="$t('Postcode')" :name="'zipcode'" />
                </div>
                <div class="col-12 col-md-6">
                  <TextInput :label="$t('Street')" :name="'street'" />
                  <TextInput :label="$t('City')" :name="'city'" />
                  <v-textarea outlined :label="$t('Additional')" :name="'additional'" rows="8" />
                </div>
              </div>
            </form-layout>
          </v-card>
        </div>
      </v-row>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: [],
      meta: '',
      loading: false,
      error: '',
      message: ''
    }
  },
  mounted () {
    this.$api('/pagecontent/48').then((res) => {
      if (res.data.status) {
        this.data = this.$psJSON(res.data.data)
      } else {
        this.$router.path({ push: '/' })
      }
    })
  },
  methods: {
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      // console.log(formData)
      this.$api.post('contactform', formData).then((res) => {
        // console.log(res.data)
        this.loading = false
        if (res.data.status) {
          this.message = 'Contact query sent successfully'
          form.reset()
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
      title: this.$lang(this.data.meta_title),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$lang(this.data.meta_description)
        }
      ]
    }
  }
}
</script>
