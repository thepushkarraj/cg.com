<template>
  <login-wrapper>
    <template #heading>
      {{ $multiLang("Register") }}
    </template>
    <form-layout
      :error="error"
      :message="message"
      :loading="loading"
      :submit="$multiLang('Submit')"
      @submit-form="submitForm"
    >
      <TextInput
        :label="$multiLang('FirstName')"
        :name="'first_name'"
        :icon="'mdi-account-circle'"
        :required="true"
      />
      <TextInput
        :label="$multiLang('LastName')"
        :name="'last_name'"
        :icon="'mdi-account-circle'"
        :required="true"
      />
      <Email :label="$multiLang('Email')" />
      <Mobile :label="$multiLang('Phone')" />
      <v-select
        v-model="select"
        :items="items"
        :name="'role'"
        item-text="state"
        item-value="abbr"
        :label="$multiLang('Role')"
        outlined
      />
      <Password :label="$multiLang('Passowrd')" @get-password="getPassword" />
      <Password
        :password-val="password"
        :label="$multiLang('ConfirmPassword')"
        :name="'confirm_password'"
        :required="true"
      />
      <v-list-item class="ma-0 pa-0">
        <v-spacer />
      </v-list-item>
    </form-layout>
  </login-wrapper>
</template>

<script>
/* eslint-disable */
export default {
  layout: 'admin',
  data () {
    return {
      meta: '',
      admin: '',
      error: '',
      select: { state: 'Admin', abbr: '1' },
      items: [
        { state: 'Admin', abbr: '1' },
        { state: 'Partner', abbr: '2' },
        { state: 'Customer', abbr: '3' },
      ],
      message: '',
      loading: false,
      password: ''
    }
  },
  head () {
    return {
      title: this.$langAdmin('Register'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('Register')
        }
      ]
    }
  },
  methods: {
    getPassword (val) {
      this.password = val
    },
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      this.$api.post('admin/register', formData).then((res) => {
        this.loading = false
        if (res.data.status) {
          this.message = res.data.message
          setTimeout(() => {
            this.$router.push({ path: '/admin'})
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
    }
  }
}
</script>
