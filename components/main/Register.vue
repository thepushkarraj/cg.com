<template>
 <v-card class="pa-10 pt-16">
    <form-layout :error="error" :message="message" :loading="loading" :submit="$t('Submit')" @submit-form="submitForm">
      <TextInput :label="$t('FirstName')" :name="'first_name'" :icon="'mdi-account-circle'" :required="true" />
      <TextInput :label="$t('LastName')" :name="'last_name'" :icon="'mdi-account-circle'" :required="true" />
      <Email :label="$t('Email')" />
      <Mobile :label="$t('Phone')" />
      <Password :label="$t('Passowrd')" @get-password="getPassword" />
      <ConfirmPassword :password-val="password" :label="$t('ConfirmPassword')" :name="'confirm_password'" :required="true" />
      <v-list-item class="ma-0 pa-0">
        <nuxt-link
          class="mr-2 black--text text-decoration-none"
          :to="localePath('/user/forgot_password')"
        >
          {{ $t('ForgotPassword') }}
        </nuxt-link>
        <v-spacer />
        <a
          @click="$emit('checked')"
          class="mr-2 black--text text-decoration-none"
        >
          {{ $t('Login') }}
        </a>
      </v-list-item>
    </form-layout>
     </v-card>
</template>

<script>
/* eslint-disable */
export default {
  props: {
    checked: Boolean
  },
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
      password: ''
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
  mounted () {
    this.getUserData()
    this.meta_Data()
  },
  methods: {
    meta_Data(){
      this.$api('/pagecontent/68').then((res) => {
      if (res.data.status) {
        this.meta_data = this.$psJSON(res.data.data)
      } else {
        this.$router.path({ push: '/' })
      }
      })
    },
    getPassword (val) {
      this.password = val
    },
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      this.$api.post('user-register', formData).then((res) => {
        this.submitFormRes(res)
      })
    },
    submitFormRes (res) {
      console.log(res.data)
      this.loading = false
      if (res.data.status) {
        this.message = res.data.message
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
        if (this.$getLastPage) {
          window.location.href = this.$getLastPage
        } else {
          window.location.href = '/'
        }
      }
    }
  }
}
</script>
