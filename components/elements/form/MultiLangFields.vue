<template>
  <span>
    <div class="mb-4">
      <v-btn
        v-for="item, index in $allLanguages"
        :key="index"
        class="ma-2 white--text"
        :class="[{primary: (tab === item.code)},{teal: (tab != item.code)}]"
        @click="tab = item.code"
      >
        {{ item.code }}
      </v-btn>
    </div>
  </span>
</template>

<script>
export default {
  data () {
    return {
      tab: this.$getLang
    }
  },
  watch: {
    tab (val) {
      this.$emit('change-lang', val)
    }
  }
}
</script>
