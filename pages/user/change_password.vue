<template>
  <div class="container-fluid grey lighten-4">
    <v-container>
      <v-row>
        <div class="col-md-6 offset-md-3">
          <v-card class="pa-4">
            <h3> {{ $t('ChangePassword') }} </h3>
            <v-divider class="mt-4 mb-2" />
            <form-layout :error="error" :message="message" :submit="$t('Submit')" :loading="loading" @submit-form="changePassword">
              <v-row class="pt-5">
                <div class="col-md-12 py-0">
                  <Password
                    :label="$t('CurrentPassword')"
                    :name="'old_password'"
                    :validation="false"
                  />
                </div>
              </v-row>
              <v-row>
                <div class="col-md-12 py-0">
                  <Password
                    :label="$t('NewPassword')"
                    @get-password="getPassword"
                  />
                </div>
                <div class="col-md-12 py-0">
                  <ConfirmPassword
                    :password-val="password"
                    :label="$t('ConfirmPassword')"
                  />
                </div>
              </v-row>
            </form-layout>
          </v-card>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  layout: 'login',
  data () {
    return {
      loading: false,
      password: '',
      error: '',
      message: ''
    }
  },
  methods: {
    getPassword (val) {
      this.password = val
    },
    changePassword () {
      this.error = ''
      this.message = ''
      this.loading = true
      const user = this.$store.getters.getUser
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      formData.append('id', user.id)
      this.$api.post(this.$userRole() + '/changepassword', formData).then((res) => {
      // this.$axios.post(process.env.apiBase + 'change_password', formData).then((res) => {
        this.loading = false
        // console.log(res.data)
        if (res.data.status) {
          this.message = res.data.message
          form.reset()
        } else {
          this.error = res.data.error
        }
      })
    }
  },
  head () {
    return {
      title: this.$langAdmin('ChangePassword'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('ChangePassword')
        }
      ]
    }
  }
}
</script>

<style>
  .border-bottom{
    border-bottom: 1px solid #ccc;
  }
</style>
