<template>
  <!--
  <TextInput :label="'Username'" :name="'username'" :required="true" :icon="'mdi-account-circle'" />

    :label=""  // default Email
    :icon=""  // default mdi-lock
    :name="" // default password
    :outlined="" // default true
    :required="" // default true
  -->
  <section>
    <v-text-field
      v-if="required"
      v-model="text"
      background-color="white"
      :label="label"
      :prepend-inner-icon="icon"
      :name="name"
      :outlined="outlined"
      :hint="hint"
      :required="required"
      :rules="[rules.required]"
      :append-icon="tooltipText"
      :disabled="disabled"
      @blur="$emit('get-value', text)"
      @click:append="show = !show"
    />
    <v-text-field
      v-else
      v-model="text"
      background-color="white"
      :label="label"
      :prepend-inner-icon="icon"
      :name="name"
      :outlined="outlined"
      :hint="hint"
      :append-icon="tooltipText"
      :disabled="disabled"
      @blur="$emit('get-value', text)"
      @click:append="show = !show"
    />
    <p v-show="show" class="grey--text text-right px-3" style="margin-top: -28px; font-size:14px; margin-bottom:7px;">
      {{ tooltip }}
    </p>
  </section>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    tooltip: {
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
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      text: this.value,
      show: false,
      rules: {
        required: value => !!value || this.$multiLang('Required')
      }
    }
  },
  computed: {
    tooltipText () {
      if (this.tooltip.length > 0) {
        return 'mdi-information-outline'
      } else {
        return ''
      }
    }
  },
  watch: {
    value (val) {
      this.text = val
    }
  },
  methods: {
    Hello () {
      alert('whllo')
    }
  }
}
</script>
