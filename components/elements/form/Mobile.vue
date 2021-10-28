<template>
  <!--
  <Mobile @get-value="getMobile" />

    :label=""  // default Mobile
    :icon=""  // default mdi-phone
    :name="" // default password
    :outlined="" // default true
    :required="" // default true
  -->
  <v-text-field
    v-model="mobile"
    background-color="white"
    :label="label"
    :prepend-inner-icon="icon"
    :name="name"
    :outlined="outlined"
    :hint="hint"
    :rules="[rules.email]"
    :required="required"
    maxlength="15"
    minlength="10"
    @blur="$emit('get-value', mobile)"
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
      default: ''
    },
    icon: {
      type: String,
      default: 'mdi-phone'
    },
    name: {
      type: String,
      default: 'mobile'
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
          const pattern = /^[0-9]{10,15}$/
          return (
            pattern.test(value) || this.$multiLang('InvalidPhoneNumber')
          )
        }
      },
      show1: false,
      mobile: ''
    }
  },
  watch: {
    value (val) {
      this.mobile = val
    }
  }
}
</script>
