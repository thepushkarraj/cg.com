<!--
  <form-layout :error="error" :message="message" :loading="loading" :submit="'Submit" @submit-form="addNewUser">
    <template #actions></template>
  </form-layout>

  submitForm () {
    this.submitFormInit()
    const form = document.getElementById('new_form')
    const formData = new FormData(form)
    this.$axios.post(process.env.apiBase + 'add_new_user', formData).then((res) => {
      this.submitFormRes(res)
    })
  },
  submitFormRes () {
    this.loading = false
    if (res.data.success) {
      this.message = res.data.message
      form.reset()
    } else {
      this.error = res.data.error
    }
  },
  submitFormInit () {
    this.error = ''
    this.message = ''
    this.loading = true
  }
-->
<template>
  <v-form
    id="new_form"
    ref="form"
    v-model="isFormValid"
    @submit.prevent="submitForm"
  >
    <div class="pa-1">
      <slot />
    </div>
    <v-divider v-show="showSubmit" class="mb-4" />
    <p v-show="showSubmit" class="text-right">
      <slot name="actions" />
      <v-btn
        v-if="isFormValid"
        class="green rounded-xl"
        type="submit"
        dark
        large
        :loading="loading"
      >
        <v-icon>mdi-save</v-icon>
        {{ submit }}
      </v-btn>
      <v-btn
        v-else
        class="green rounded-xl"
        dark
        large
        @click="validate"
      >
        <v-icon>mdi-save</v-icon>
        {{ submit }}
      </v-btn>
    </p>
    <Snackbar :text="message" :color="'green'" />
    <Snackbar :text="error" :color="'red'" />
  </v-form>
</template>

<script>
export default {
  props: {
    error: {
      type: String,
      default: ''
    },
    submit: {
      type: String,
      default: ''
    },
    message: {
      type: String,
      default: ''
    },
    loading: {
      type: Boolean,
      default: false
    },
    showSubmit: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      isFormValid: false,
      snackbarMessage: false,
      snackbarError: false
    }
  },
  methods: {
    snackFalse () {
      this.snackbarMessage = false
      this.snackbarError = false
    },
    validate () {
      this.$refs.form.validate()
    },
    submitForm () {
      this.$emit('submit-form')
    }
  }
}
</script>
