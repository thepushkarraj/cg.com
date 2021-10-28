<!--
  <SnackbarTool :loading="loading" :error="error" :message="message" />
-->
<template>
  <span>
    <Snackbar :text="message" :color="'green'" :snackbar-val="snackbarMessage" />
    <Snackbar :text="error" :color="'red'" :snackbar-val="snackbarError" />
  </span>
</template>

<script>
export default {
  props: {
    error: {
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
    }
  },
  data () {
    return {
      snackbarMessage: false,
      snackbarError: false
    }
  },
  watch: {
    error (val) {
      if (val.length > 0) {
        this.snackbarError = true
        setTimeout(() => {
          this.snackbarError = false
        }, 10000)
      }
    },
    loading (val) {
      if (val) {
        this.snackbarError = false
        this.snackbarMessage = false
      }
    },
    message (val) {
      if (val.length > 0) {
        this.snackbarMessage = true
        setTimeout(() => {
          this.snackbarMessage = false
        }, 10000)
      }
    }
  }
}
</script>
