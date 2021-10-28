<template>
  <!--
  <Email :value="email" :label="" :name="" @get-value="getEmail" />

    :label=""  // default Email
    :icon=""  // default mdi-lock
    :name="" // default password
    :outlined="" // default true
    :required="" // default true
  -->
  <v-text-field
    v-model="email"
    background-color="white"
    :label="label"
    :prepend-inner-icon="icon"
    :name="name"
    :outlined="outlined"
    :hint="hint"
    :rules="[rules.email]"
    :required="required"
    @blur="$emit('get-value', email)"
    @click:append="show1 = !show1"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: 'email'
    },
    icon: {
      type: String,
      default: 'mdi-email'
    },
    name: {
      type: String,
      default: 'email'
    },
    hint: {
      type: String,
      default: ''
    },
    outlined: {
      type: Boolean,
      default: true
    },
    required: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      rules: {
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return (
            pattern.test(value) || this.$multiLang('InvalidEmail')
          )
        }
      },
      show1: false,
      email: ''
    }
  },
  watch: {
    value (val) {
      this.email = val
    }
  }
}
</script>
