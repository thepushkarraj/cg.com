<template>
  <span>
    <v-snackbar
      v-model="snackbar"
      :timeout="10000"
      :color="color"
      transition="scroll-y-reverse-transition"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="white" text v-bind="attrs" @click="snackbar = false">
          {{ $multiLang('Close') }}
        </v-btn>
      </template>
    </v-snackbar>
  </span>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: 'blue'
    }
  },
  data () {
    return {
      snackbar: false
    }
  },
  watch: {
    text (val) {
      this.snackbar = false
      if (val && val.length > 0) {
        this.snackbar = true
        setTimeout(() => {
          this.snackbar = false
        }, 10000)
      }
    }
  }
}
</script>
