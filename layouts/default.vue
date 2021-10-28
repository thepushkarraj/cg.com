<template>
  <v-app dark>
    <topinfobar />
    <topbar />
    <v-main>
      <nuxt />
      <client-only>
        <div v-if="cocky == true" class="cookie-banner">
          <p>{{ $multiLang('CookieMessage') }}</p>
          <div class="text-center">
            <v-btn
              large
              dark
              class="green rounded-xl mr-2 outlined"
              @click="cockycancel"
            >
              {{ $multiLang('Cancel') }}
            </v-btn>
            <v-btn
              large
              dark
              class="green rounded-xl"
              @click="setUserCocky"
            >
              {{ $multiLang('Accept') }}
            </v-btn>
          </div>
        </div>
      </client-only>
      <Footer />
    </v-main>
  </v-app>
</template>

<script>
import Footer from '~/components/main/footer'
import Topbar from '~/components/main/topbar.vue'
import Topinfobar from '~/components/main/topinfobar.vue'
export default {
  components: {
    Footer, Topbar, Topinfobar
  },
  data () {
    return {
      cocky: this.$getCocky,
      text: 'We use cookies to offer you a better browsing experience, personalise content and ads, to provide social media features and to analyse our traffic. Read about how we use cookies and how you can control them by clicking Cookie Settings. You consent to our cookies if you continue to use this website.'
    }
  },
  computed: {
    logoWhite () {
      return process.env.logoWhite
    }
  },
  mounted () {
    const l = this.$allStateLanguages
    const lang = this.$i18n.localeProperties.code
    const show = this.$getLang
    console.log(this.$i18n)
    const index = l.findIndex(ele => ele.code === show)
    const b = l[index]
    this.$store.commit('setLangLoc', lang)
    if (lang !== b.codeLang) {
      console.log(lang)
      this.$store.commit('setLangCode', lang)
      setTimeout(() => {
        window.location.reload()
      }, 20)
    }
  },
  methods: {
    cockycancel () {
      this.cocky = false
    },
    setUserCocky () {
      this.$store.commit('setCocky', false)
      this.cocky = false
    }
  }
}

</script>
<style scoped>
.green.rounded-xl.outlined {
  background: #37517e !important;
  color: #4caf50 !important;
}
.cookie-banner {
  position: fixed;
  bottom: 40px;
  left: 10%;
  right: 10%;
  width: 80%;
  padding: 15px;
  align-items: center;
  justify-content: space-between;
  background-color: #37517e;
  color: white;
  z-index: 99999;
  border-radius: 5px;
  box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
}
</style>
