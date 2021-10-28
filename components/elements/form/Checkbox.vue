<template>
  <!--
  <Checkbox
    :value="data.heating"
    :name="'heating'"
    :label="$langAdmin('Heating')"
  />
  -->
  <span>
    <v-list-item class="pa-0 ma-0">
      <input v-if="checkbox" type="hidden" value="1" :name="name">
      <input v-else type="hidden" value="0" :name="name">
      <v-checkbox
        v-model="checkbox"
        :label="label"
        @blur="$emit('get-value', checkbox)"
      />
      <v-tooltip v-if="tooltip" top>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            color="primary"
            dark
            v-bind="attrs"
            fab
            small
            icon
            v-on="on"
          >
            <v-icon>
              mdi-information-outline
            </v-icon>
          </v-btn>
        </template>
        <span> {{ tooltip }} </span>
      </v-tooltip>
    </v-list-item>
  </span>
</template>

<script>
export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    label: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    tooltip: {
      type: String,
      default: ''
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
  data () {
    return {
      checkbox: this.value
    }
  },
  watch: {
    value (val) {
      this.checkbox = val
    },
    checkbox (val) {
      this.$emit('get-value', this.checkbox)
    }
  }
}
</script>
