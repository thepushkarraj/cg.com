<template>
  <!--
  <Password
    :label=""
    :name=""
    :validation="false"
    @get-password="getPassword"
  />s
  -->
  <v-text-field
    v-if="validation"
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
    :required="required"
    @change="updatePassword"
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
    :required="required"
    @change="updatePassword"
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
      default: 'password'
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
    },
    validation: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      rules: {
        required: value => !!value || this.$multiLang('Required'),
        password: (value) => {
          const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/
          return (
            pattern.test(value) || this.$multiLang('PasswordValid')
          )
        }
      },
      show1: false,
      password: ''
    }
  },
  watch: {
    passwordVal (val) {
      this.password = val
    }
  },
  methods: {
    updatePassword () {
      this.$emit('get-password', this.password)
    }
  }
}
</script>
