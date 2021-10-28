<!-- <NumberInput
  :value="$toString(data.price)"
  :label="$langAdmin('Price')"
  :name="'price'"
  :required="false"
/> -->
<template>
  <v-text-field
    v-if="validation"
    v-model="password"
    background-color="white"
    :label="label"
    :name="name"
    :outlined="outlined"
    :hint="hint"
    :rules="[rules.password]"
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
      default: ''
    },
    name: {
      type: String,
      default: ''
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
          const pattern = /^\d+$/
          return (
            pattern.test(value) || this.$multiLang('InvaildPrice')
          )
        }
      },
      show1: false,
      password: this.passwordVal
    }
  },
  watch: {
    passwordVal (val) {
      this.password = val
      // console.log(val)
    }
  },
  methods: {
    updatePassword () {
      this.$emit('get-value', this.password)
    }
  }
}
</script>
