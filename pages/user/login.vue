<template>
  <login-wrapper>
    <template #heading>
      {{ $t('WelcomeBack') }}
    </template>
    <form-layout :error="error" :message="message" :loading="loading" :submit="$t('Login')" @submit-form="submitForm">
      <TextInput :label="$t('Email')" :name="'email'" :required="true" :icon="'mdi-account-circle'" />
      <Password :validation="false" :label="$t('Password')" />
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
          :to="localePath('/user/register')"
        >
          {{ $t('Register') }}
        </nuxt-link>
      </v-list-item>
    </form-layout>
  </login-wrapper>
</template>

<script>
/* eslint-disable */
export default {
  // layout: 'login',
  data () {
    return {
      meta_data: [],
      admin: '',
      user: [],
      isLogin: false,
      error: '',
      message: '',
      loading: false,
      prevRoute: null
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.prevRoute = from
    })
  },
  mounted () {
    this.meta_Data()
    this.getUserData()
    const l = this.$getLastPage
    if (l.length > 0) {
      this.$store.commit('setLastPage', this.prevRoute.path)
    }
  },
  methods: {
    meta_Data(){
      this.$api('/pagecontent/67').then((res) => {
      if (res.data.status) {
        this.meta_data = this.$psJSON(res.data.data)
      } else {
        this.$router.path({ push: this.localePath('/') })
      }
      })
    },
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      this.$api.post('login', formData).then((res) => {
        this.submitFormRes(res)
      })
    },
    submitFormRes (res) {
      // console.log(res.data.data.userdata)
      this.loading = false
      if (res.data.status) {
        this.message = res.data.message
        setTimeout(() => {
          this.userLogin(this.$psJSON(res.data))
        }, 200)
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
      // console.log(data)
      // this.$store.commit('setUserLogin', data)
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
      // if (data.data.userdata.language_code) {
      //   this.$store.commit('setLang', data.data.userdata.language_code)
      // }
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
        window.location.href = this.localePath('/')
        // if (this.$getLastPage) {
        //   window.location.href = this.$getLastPage
      }
    }
  },
  head () {
    return {
      title: this.$lang(this.meta_data.meta_title),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$lang(this.meta_data.meta_description)
        }
      ]
    }
  },
}
</script>
