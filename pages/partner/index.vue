<template>
  <div
    class="bgbannerbecome"
    style="
      background: linear-gradient(0deg, rgb(0 0 0 / 50%), rgb(0 0 0 / 50%)), url(/img/register-bg.jpg);
      background-position: center ;
      background-size: cover;
      background-repeat: no-repeat;"
  >
    <v-container class="">
      <v-row class="mt-5 mb-5">
        <div class="col-lg-7 white--text my-16">
          <h1 class="white--text">
            {{ $t('Free100') }}
          </h1>
          <h1 class="white--text">
            {{ $t('Profit100') }}
          </h1>
          <h1 class="white--text">
            {{ $t('threeEasySteps') }}
          </h1>
          <p class="pt-6">
            {{ $t('threeEasyStepsSubheading') }}
          </p>
          <p class="pt-3">
            <strong>
              {{ $t('threeEasySteps1') }}
            </strong>
          </p>
          <p>
            <strong>
              {{ $t('threeEasySteps2') }}
            </strong>
          </p>
          <p>
            <strong>
              {{ $t('threeEasySteps3') }}
            </strong>
          </p>
        </div>

        <div class="col-lg-5">
          <v-card class="pa-4">
            <h2> {{ $t('PartnerRegistration') }} </h2>
            <v-divider class="mb-4 mt-2" />
            <form-layout :error="error" :message="message" :loading="loading" :submit="$t('Register')" @submit-form="submitForm">
              <TextInput :label="$t('FirstName')" :name="'first_name'" :icon="'mdi-account-circle'" :required="true" />
              <TextInput :label="$t('LastName')" :name="'last_name'" :icon="'mdi-account-circle'" :required="true" />
              <Email :label="$t('Email')" />
              <Mobile :label="$t('Phone')" />
              <Password :label="$t('Password')" @get-password="getPassword" />
              <ConfirmPassword :password-val="password" :label="$t('ConfirmPassword')" :name="'confirm_password'" :required="true" />
              <v-list-item class="ma-0 pa-0">
                <nuxt-link
                  class="mr-2 black--text text-decoration-none"
                  :to="localePath('/user/forgot_password')"
                >
                  {{ $t('ForgotPassword') }}
                </nuxt-link>
                <v-spacer />
                <nuxt-link
                  class="mr-2 black--text text-decoration-none"
                  :to="localePath('/user/login')"
                >
                  {{ $t('AlreadyRegistered') }}
                </nuxt-link>
              </v-list-item>
            </form-layout>
          </v-card>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      meta: '',
      admin: '',
      user: [],
      data: [],
      isLogin: false,
      error: '',
      message: '',
      loading: false,
      password: ''
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
  },
  mounted () {
    this.$api('/pagecontent/66').then((res) => {
      if (res.data.status) {
        this.data = this.$psJSON(res.data.data)
      } else {
        this.$router.path({ push: '/' })
      }
    })
  },
  methods: {
    getPassword (val) {
      this.password = val
    },
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      this.$api.post('vendor-register', formData).then((res) => {
        this.submitFormRes(res)
      })
    },
    submitFormRes (res) {
      console.log(res.data)
      this.loading = false
      if (res.data.status) {
        this.message = res.data.message
        // this.message = 'Partner erfolgreich registriert, Sie erhalten in Kürze eine Bestätigungs-E-Mail'
        setTimeout(() => {
          this.userLogin(res.data)
        }, 2000)
        document.getElementById('new_form').reset()
      } else {
        this.error = res.data.error
      }
    },
    submitFormInit () {
      this.error = ''
      this.message = ''
      this.loading = true
    },
    userLogin (data) {
      this.$store.commit('setUserData', {
        first_name: data.data.userdata.first_name,
        last_name: data.data.userdata.last_name,
        email: data.data.userdata.email,
        role: data.data.userdata.role,
        address: data.data.userdata.address,
        mobile: data.data.userdata.mobile,
        city: data.data.userdata.city,
        country: data.data.userdata.country,
        postcode: data.data.userdata.postcode,
        image: data.data.userdata.image,
        image_thumb: data.data.userdata.image_thumb,
        id: data.data.userdata.id,
        name: data.data.userdata.first_name + ' ' + data.data.userdata.last_name,          
        token: data.data.token
      })
      this.getUserData()
    },
    getUserData () {
      const user = { id: 3, role: 3 }
      const d = new Date()
      d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000))
      const expires = 'expires=' + d.toUTCString()
      document.cookie = 'cg=' + JSON.stringify(user) + ';' + expires + ';path=/'
      this.user = this.$store.getters.getUser
      this.isLogin = this.$store.getters.isLogin
      if (this.isLogin) {
        // this.$router.push({ path: '/partner/add-camper' })
        window.location.href = '/partner/add-camper'
      }
    }
  }
}
</script>