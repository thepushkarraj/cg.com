<template>
  <!--
  <SelectInput :value="username" :label="" :username="" @get-value="getUsernmae" />
  -->
  <span>
    <input v-if="selectedValue" type="hidden" :name="name" :value="selectedValue">
    <v-select
      v-if="required"
      v-model="select"
      :items="langOptions"
      :label="label"
      :outlined="outlined"
      multiple
      :disabled="disabled"
      :rules="[v => !!v || 'required']"
      @change="setSelectedValue(), $emit('get-value', select)"
    />
    <v-select
      v-else
      v-model="select"
      :items="langOptions"
      :label="label"
      multiple
      :outlined="outlined"
      :disabled="disabled"
      @change="setSelectedValue(), $emit('get-value', select)"
    />
  </span>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    valueType: {
      type: String,
      default: 'string'
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
    },
    options: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      select: '',
      selectedValue: '',
      rules: {
        required: value => !!value || this.$multiLang('Required')
      },
      langOptions: []
    }
  },
  watch: {
    value (val) {
      this.setSelected()
    },
    options (val) {
      this.getLangOptions()
    },
    select (val) {
      if (val && val.length > 0) {
        let v = ''
        val.forEach((element) => {
          v = v + ',' + element
        })
        this.selectedValue = v.replace(/(^,)|(,$)/g, '')
      }
    }
  },
  mounted () {
    this.setSelected()
    this.setSelectedValue()
    this.getLangOptions()
  },
  methods: {
    getLangOptions () {
      const o = this.options
      const r = []
      o.forEach((element) => {
        r.push({ value: element.value, text: this.$lang(element.name) })
      })
      // console.log(r)
      this.langOptions = r
    },
    setSelectedValue () {
      if (typeof this.select === 'object' && this.select !== null) {
        this.selectedValue = this.select.value
      } else {
        this.selectedValue = this.select
      }
    },
    setSelected () {
      if (this.value && this.valueType === 'number') {
        this.select = this.getObjectFromValue(this.options, parseInt(this.value))
      } else {
        this.select = this.value
      }
    },
    getObjectFromValue (arr, val) {
      if (arr) {
        let data
        arr.forEach((ele) => {
          if (ele.value === parseInt(val)) {
            data = ele
          }
        })
        return data
      }
    }
  }
}
</script>
