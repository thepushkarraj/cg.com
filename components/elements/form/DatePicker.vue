<template>
  <!-- <DatePicker :value="'2021-05-28'" :label="$langAdmin('Enddate')" :name="'end_time'" :icon="''" /> -->
  <span>
    <v-menu
      ref="menu"
      v-model="menu"
      :close-on-content-click="false"
      :return-value.sync="date"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-if="required"
          v-model="date"
          background-color="white"
          :label="label"
          :prepend-inner-icon="icon"
          :name="name"
          :outlined="outlined"
          :hint="hint"
          :required="required"
          :rules="[rules.required]"
          :disabled="disabled"
          readonly
          v-bind="attrs"
          v-on="on"
          @blur="$emit('get-value', date)"
        />
        <v-text-field
          v-else
          v-model="date"
          background-color="white"
          :label="label"
          :prepend-inner-icon="icon"
          :name="name"
          :outlined="outlined"
          :hint="hint"
          :disabled="disabled"
          readonly
          v-bind="attrs"
          v-on="on"
          @blur="$emit('get-value', date)"
        />
      </template>
      <v-date-picker
        v-model="date"
        no-title
        scrollable
      >
        <v-spacer />
        <v-btn
          text
          color="primary"
          @click="menu = false"
        >
          Cancel
        </v-btn>
        <v-btn
          text
          color="primary"
          @click="$refs.menu.save(date)"
        >
          OK
        </v-btn>
      </v-date-picker>
    </v-menu>
  </span>
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
      date: new Date().toISOString().substr(0, 10),
      menu: false,
      rules: {
        required: value => !!value || this.$multiLang('Required')
      }
    }
  },
  watch: {
    value (val) {
      this.date = val
    }
  }
}
</script>
