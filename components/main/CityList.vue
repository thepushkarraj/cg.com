<template>
  <!-- <v-select
    :label="'Choose City'"
    :name="'place'"
    :items="options"
    hide-details="auto"
    solo
    flat
    outlined
    class="rounded-xl"
    prepend-inner-icon="mdi-map-marker"
  /> -->
  <v-combobox
    v-model="city"
    :items="options"
    :search-input.sync="search"
    hide-selected
    :label="$t('ChooseCity')"
    persistent-hint
    hide-details="auto"
    solo
    flat
    outlined
    clearable
    class="rounded-xl"
    @change="$emit('get-val', city)"
  >
    <template v-slot:no-data>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>
            {{ $t('CityNotFound') }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-combobox>
</template>

<script>
export default {
  data () {
    return {
      citydata: [],
      options: [],
      search: null,
      city: ''
    }
  },
  watch: {
    city (val) {
      this.$store.commit('setBookingData', {
        camper_city: val
      })
    }
  },
  mounted () {
    this.$api('contentlisting/city').then((res) => {
      // console.log(res.data.data)
      this.citydata = res.data.data
      this.getLangOptions()
    })
  },
  methods: {
    getLangOptions () {
      const s = parseInt(new URLSearchParams(window.location.search).get('city'))
      const o = this.citydata
      const r = []
      o.forEach((element) => {
        if (s && s === element.value) {
          this.city = { value: element.value, text: this.$lang(element.name) }
        }
        r.push({ value: element.value, text: this.$lang(element.name) })
      })
      this.options = r
    }
  }
}
</script>
