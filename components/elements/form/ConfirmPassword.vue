<template>
  <!--
  <ConfirmPassword :password-val="password" :label="" :name="" />

    :label=""  // default confirm password
    :icon=""  // default mdi-lock
    :name="" // default confirm_password
    :outlined="" // default true
    :required="" // default true
  -->
  <v-text-field
    v-if="passwordVal"
    v-model="password"
    background-color="white"
    :label="label"
    :prepend-inner-icon="icon"
    :name="name"
    :outlined="outlined"
    :hint="hint"
    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
    :rules="[rules.password]"
    :type="show1 ? 'text' : 'password'"
    required
    @click:append="show1 = !show1"
  />
  <v-text-field
    v-else
    v-model="password"
    background-color="white"
    :label="label"
    :prepend-inner-icon="icon"
    :name="name"
    :outlined="outlined"
    :hint="hint"
    :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
    :rules="[rules.required]"
    :type="show1 ? 'text' : 'password'"
    required
    @click:append="show1 = !show1"
  />
</template>

<script>
export default {
  props: {
    passwordVal: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: 'mdi-lock'
    },
    name: {
      type: String,
      default: 'confirm_password'
    },
    hint: {
      type: String,
      default: ''
    },
    outlined: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      rules: {
        required: value => !!value || this.$multiLang('Required'),
        password: (value) => {
          return (value === this.passwordVal) || this.$multiLang('ConfirmPasswordValid')
        }
      },
      show1: false,
      password: ''
    }
  }
}
</script>
