<template>
  <login-wrapper>
    <template #heading>
      {{ $t('ResetYourPassword') }}
    </template>
    <form id="forgot_password" @submit.prevent>
      <v-text-field
        v-show="!correctEmail"
        ref="email"
        v-model="email"
        name="email"
        type="email"
        :label="$t('Email')"
        :rules="[rules.required]"
        prepend-inner-icon="mdi-email"
        outlined
        required
      />
      <v-text-field
        v-show="correctEmail && !correctOtp"
        ref="otp"
        v-model="otp"
        name="otp"
        :label="$t('OTP')"
        background-color="white"
        prepend-inner-icon="mdi-lock"
        outlined
        :rules="[rules.required]"
      />

      <v-text-field
        v-show="correctOtp && !correctPass"
        ref="password"
        v-model="password"
        name="password"
        :label="$t('Password')"
        background-color="white"
        prepend-inner-icon="mdi-lock"
        outlined
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required]"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
      />

      <v-text-field
        v-show="correctOtp && !correctPass"
        ref="password2"
        v-model="password2"
        name="c_password"
        :label="$t('ConfirmPassword')"
        background-color="white"
        prepend-inner-icon="mdi-lock"
        outlined
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="[rules.required]"
        :type="show1 ? 'text' : 'password'"
        @click:append="show1 = !show1"
      />
    </form>
    <p v-if="error.length > 0" class="red--text">
      {{ error }}
    </p>
    <p v-if="message.length > 0" class="green--text">
      {{ message }}
    </p>
    <template #action>
      <v-btn color="success" :to="localePath('/user/login')">
        <span class="text-capitalize small"> {{ $t('Login') }} </span>
        <v-icon right dark>
          mdi-login
        </v-icon>
      </v-btn>
      <v-btn :loading="loading" type="submit" color="primary" @click="submitForm">
        <span class="text-capitalize small"> {{ $t('Submit') }} </span>
        <v-icon right dark>
          mdi-arrow-right-bold
        </v-icon>
      </v-btn>
    </template>
  </login-wrapper>
</template>

<script>
export default {
  // layout: 'login',
  data () {
    return {
      meta_data: [],
      user: [],
      isLogin: false,
      email: '',
      otp: '',
      error: '',
      message: '',
      loading: false,
      correctEmail: false,
      show1: false,
      password: '',
      password2: '',
      correctOtp: false,
      correctPass: false,
      rules: {
        required: value => !!value || 'Required.'
      }
    }
  },
  mounted () {
    this.getUserData()
    this.meta_Data()
  },
  methods: {
    meta_Data () {
      this.$api('/pagecontent/69').then((res) => {
        if (res.data.status) {
          this.meta_data = this.$psJSON(res.data.data)
        } else {
          this.$router.path({ push: '/' })
        }
      })
    },
    submitForm () {
      const form = document.getElementById('forgot_password')
      const formData = new FormData(form)
      this.loading = true
      this.$api.post('forgetpassword', formData).then((res) => {
        this.loading = false
        if (!this.correctEmail) {
          if (res.data.status) {
            this.correctEmail = true
            this.message = res.data.message
          } else {
            this.error = res.data.error
          }
        } else if (this.correctEmail && !this.correctOtp && !this.correctPass) {
          if (res.data.status) {
            this.correctOtp = true
            this.message = res.data.message
          } else {
            this.error = res.data.error
          }
        } else if (this.correctEmail && this.correctOtp && !this.correctPass) {
          if (res.data.status) {
            this.correctPass = true
            this.message = res.data.message
            setTimeout(() => {
              this.$router.push({ path: '/user/login' })
            }, 2000)
          } else {
            this.error = res.data.error
          }
        }
      })
    },
    getUserData () {
      this.user = this.$store.getters.getUser
      this.isLogin = this.$store.getters.isLogin
      if (this.isLogin) {
        this.$router.push({ path: '/' })
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
  }
}
</script>
