<template>
  <section>
    <!-- <div class="container-fluid pt-2 grey lighten-4">
      <v-container>
        <v-row>
          <v-col md="6">
            <a href="https://www.conda.de/startup/campergold/" target="_blank">
              <img
                src="https://campergold.net/wp-content/uploads/2018/08/landing-page-01-2048x634.png"
                width="100%"
              >
            </a>
          </v-col>
          <v-col md="6">
            <a href="javascript:;">
              <img
                src="https://campergold.net/wp-content/uploads/2018/08/landing-page-02-2048x634.png"
                width="100%"
              >
            </a>
          </v-col>
        </v-row>
      </v-container>
    </div> -->
    <div
      class="container-fluid footer"
      style="background: linear-gradient( 0deg , #092143aa, #092143aa),url(https://www.outlookindia.com/outlooktraveller/public/uploads/articles/explore/shutterstock_1202980387.jpg);
        background-position: center right;
        background-size: cover;
        background-repeat: no-repeat;
        background-attachment: fixed;
      "
    >
      <v-container class="pt-16 pb-16">
        <v-row>
          <div class="col-md-5">
            <div class="text-center text-md-left">
              <img src="/white-cg-logo-large.png" width="200px" class="mb-6">
            </div>
            <form id="newsletterForm" @submit.prevent="getFormValues">
              <v-row>
                <v-col class="col-12 col-sm-8 pr-sm-0">
                  <v-text-field
                    v-model="email"
                    type="email"
                    outlined
                    dark
                    :label="$t('SubscribeToOurNewsletter')"
                    name="email"
                    hide-details="auto"
                  />
                </v-col>
                <v-col class="col-12 col-sm-4 pl-sm-0">
                  <v-btn
                    type="submit"
                    block
                    depressed
                    x-large
                    class="pt-7 pb-7 green"
                  >
                    {{ $t('Submit') }}
                  </v-btn>
                </v-col>
              </v-row>
            </form>
            <p class="green--text">
              {{ newsletterres }}
            </p>
            <p class="red--text">
              {{ newsletterreserror }}
            </p>
            <p class="pb-3 white--text">
              {{ $t('FooterText') }}
            </p>
            <!-- <p style="color: #eeeeee85; font-size: 12px;">
              <span v-html="$t('FooterVAIGtext')" />
              <br>
              <a
                href="https://campergold.net/wp-content/uploads/2021/08/VermAnlG_Campergold_VIB_210806.pdf"
                target="_blank"
                class="grey--text"
                rel="noopener"
              >
                {{ $t('FooterVAIGtextLink') }}
              </a>
            </p> -->
          </div>
          <div class="col-md-1" />
          <div v-for="footer, i2 in footerLinks" :key="i2" class="col-md-2 col-sm-4 col-6">
            <h4 class="pb-2 white--text">
              {{ footer.title }}
            </h4>
            <v-divider />
            <v-list class="transparent">
              <v-list-item v-for="item, index in footer.links" :key="index" :to="localePath(item.link)" dark class="pa-0">
                <v-icon>mdi-chevron-right</v-icon> {{ item.text }}
              </v-list-item>
            </v-list>
          </div>
        </v-row>
      </v-container>
      <div class="container-fluid" style="background:#00000055">
        <v-container>
          <v-row class="footer-bootom mb-0 pb-0">
            <div class="col-lg-4 text-center text-lg-left pt-5">
              <p class="mb-0 text-center text-lg-left pl-3">
                <a href="https://campergold.net" target="_blank" class="text-decoration-none white--text px-1"> {{ $t('CamperAccessories') }} </a>
                <a href="https://campergold.de" target="_blank" class="text-decoration-none white--text px-1"> {{ $t('CamperInvestment') }}</a>
              </p>
            </div>
            <div class="col-lg-4 text-center">
              <v-btn
                fab
                small
                target="_blank"
                href="https://www.facebook.com/www.campergold.de/"
              >
                <v-icon color="blue darken-4">
                  mdi-facebook
                </v-icon>
              </v-btn>
              <v-btn
                fab
                small
                class="mx-2"
                target="_blank"
                href="https://www.youtube.com/channel/UCp3FkbCxkNFHhPszXfR4wug"
              >
                <v-icon color="red">
                  mdi-youtube
                </v-icon>
              </v-btn>
              <v-btn
                fab
                small
                class="mx-2"
                target="_blank"
                href="https://www.instagram.com/campergold.de/"
              >
                <v-icon color="pink">
                  mdi-instagram
                </v-icon>
              </v-btn>
              <v-btn fab small target="_blank" class="mx-2" href="https://twitter.com/campergold">
                <v-icon color="blue">
                  mdi-twitter
                </v-icon>
              </v-btn>
              <v-btn fab small target="_blank" href="https://www.linkedin.com/company/campergold/">
                <v-icon color="blue darken-4">
                  mdi-linkedin
                </v-icon>
              </v-btn>
            </div>
            <div class="col-lg-4 text-center text-lg-right pt-5">
              <p class="white--text">
                {{ $t('Copyright') }} © 2021 | Camper Gold
              </p>
            </div>
          </v-row>
        </v-container>
      </div>
      <a class="myBtn" title="Go to top" @click="scrollToTop">
        <v-icon color="white">
            mdi-arrow-up-drop-circle-outline
        </v-icon>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      footerLinks: [
        {
          title: 'Camper Gold',
          links: [
            { text: this.$multiLang('Home'), link: '/' },
            { text: this.$multiLang('HireACamper'), link: '/camper' },
            { text: this.$multiLang('RentACamper'), link: '/partner' },
            { text: this.$multiLang('AboutUs'), link: '/page/about-us' },
            { text: this.$multiLang('Blog'), link: '/blog' }
          ]
        },
        {
          title: this.$multiLang('TopCities'),
          links: [
            { text: this.$multiLang('Hamburg'), link: '/camper/city/hamburg' },
            { text: this.$multiLang('Berlin'), link: '/camper/city/berlin' },
            { text: this.$multiLang('Munchen'), link: '/camper/city/mnchen' },
            { text: this.$multiLang('Frankfurt'), link: '/camper/city/frankfurt' }
          ]
        },
        {
          title: this.$multiLang('QuickLinks'),
          links: [
            { text: this.$multiLang('AGB'), link: '/page/agb' },
            { text: this.$multiLang('DataProtection'), link: '/page/datenschutzerklrung' },
            { text: this.$multiLang('ImpressumHeading'), link: '/page/impressum' },
            { text: this.$multiLang('FaqTitle'), link: '/page/faq' }
          ]
        }
      ],
      email: '',
      newsletterres: '',
      newsletterreserror: ''
    }
  },
  computed: {
    logoWhite () {
      return process.env.logoWhite
    }
  },
  methods: {
    getFormValues () {
      // const newsletterForm = document.getElementById('newsletterForm')
      const formData = new FormData()
      formData.append('email', this.email)
      this.$api.post('newsletter', formData).then((res) => {
        if (res.data.status) {
          this.newsletterres = res.data.message
          this.newsletterreserror = ''
        } else {
          this.newsletterreserror = res.data.error
          this.newsletterres = ''
        }
      })
    },
    scrollToTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style>
  .footer-bootom ul li{list-style:none; float: left; }
  .footer .v-list .v-list-item--active {
      color: inherit;
      color: white !important;
  }
  .myBtn {
  position: fixed;
  border-radius:100px;
  text-decoration: none;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border: none;
  outline: none;
  background-color:  #4caf50 ;
  color: white;
  cursor: pointer;
  padding: 20px;
}
 </style>
