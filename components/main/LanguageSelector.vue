<template>
  <section v-if="mounted">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="transparent" depressed v-bind="attrs" v-on="on">
          <v-avatar size="30" class="teal mr-0">
            <v-img :src="$getLangFlag" />
          </v-avatar>
          <span class="ml-2 d-none d-sm-flex"> {{ $getLangCode }} </span>
        </v-btn>
      </template>
      <v-list style="min-width: 200px;">
        <v-list-item
          v-for="item,index in $allStateLanguages"
          :key="index"
          :to="switchLocalePath(item.codeLang)"
          @click="setUserLang(item.show)"
        >
          <!-- :to="switchLocalePath(item.code)" -->
          <v-avatar size="30" class="teal mr-2">
            <v-img :src="item.flag" />
          </v-avatar>
          {{ item.name }}
        </v-list-item>
      </v-list>
    </v-menu>
  </section>
</template>

<script>
export default {
  data () {
    return {
      mounted: false
    }
  },
  mounted () {
    this.mounted = true
    if (this.$userRole()) {
      this.$api(this.$userRole() + '/update-language/' + this.$getLang + '/' + this.$getLangCode)
    }
  },
  methods: {
    setUserLang (lang) {
      // this.$onLanguageSwitched('en', 'de')
      // this.$switchLocale(lang)
      this.$store.commit('setLang', lang)
      setTimeout(() => {
        const langc = this.$i18n.localeProperties.code
        this.$store.commit('setLangLoc', langc)
      }, 800)
      setTimeout(() => {
        window.location.reload()
      }, 1000)
    }
  }
}
</script>
