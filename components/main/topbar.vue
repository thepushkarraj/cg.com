<template>
  <section>
    <v-navigation-drawer
      v-if="mobile || login"
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      class="primary"
      dark
      fixed
      app
    >
      <template v-slot:prepend>
        <v-list-item v-if="login" two-line :to="localePath('/user/')" class="link-white">
          <v-list-item-avatar v-if="!miniVariant">
            <img :src=" $getUser.image_thumb ? $mediaBase + $getUser.image_thumb : '/img/avatar_placeholder.jpg'">
          </v-list-item-avatar>
          <v-list-item-avatar v-else size="25">
            <img :src=" $getUser.image_thumb ? $mediaBase + $getUser.image_thumb : '/img/avatar_placeholder.jpg'">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.first_name }} {{ user.last_name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item v-else two-line :to="localePath('/user/login')">
          <v-list-item-avatar v-if="!miniVariant">
            <img :src="'/img/avatar_placeholder.jpg'">
          </v-list-item-avatar>
          <v-list-item-avatar v-else size="25">
            <img :src="'/img/avatar_placeholder.jpg'">
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> {{ $t('Login') }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider />
      <v-list v-if="login && user.role === 2">
        <v-list-item
          v-for="(item) in partners"
          :key="item.key"
          :to="localePath(item.to)"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list v-else-if="login">
        <v-list-item
          v-for="(item) in userLink"
          :key="item.key"
          :to="localePath(item.to)"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider v-if="login && mobile" />
      <v-list>
        <v-list-item
          v-show="login && mobile && $getUser.role === 1"
          :to="localePath('/admin/dashboard')"
          router
          exact
        >
          <v-list-item-action>
            <v-icon> mdi-view-dashboard </v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="$t('Dashboard')" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item) in links"
          v-show="mobile && !item.external"
          :key="item.key"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item) in links"
          v-show="mobile && item.external"
          :key="item.key + 100"
          :href="item.to"
          target="_blank"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="(item) in links2"
          v-show="!login && mobile"
          :key="item.key"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list>
        <v-list-item @click.stop="miniVariant = !miniVariant">
          <v-list-item-action>
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> {{ `${miniVariant ? $t('Expend') : $t('Collapse')}` }} </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="primary"
      dark
      depressed
    >
      <!-- style="background: #092143 !important;" -->
      <v-list-item class="px-0">
        <v-app-bar-nav-icon v-if="mobile || login" @click.stop="drawer = !drawer" />
        <nuxt-link :to="localePath('/')">
          <img v-show="mobile" src="/white-logo.png" width="100px" class="mx-0 pt-2">
          <img v-show="!mobile" src="/white-logo.png" width="140px" class="mx-5 pt-2">
        </nuxt-link>
        <v-spacer />
        <v-btn
          v-for="(link, index) in links"
          v-show="!mobile && !link.external"
          :key="index"
          class="transparent mr-2 top-menu-left"
          depressed
          :to="link.to"
        >
          {{ $t(link.title) }}
        </v-btn>

        <v-menu offset-y class="top-menu-dd">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              v-show="!mobile"
              color="primary"
              dark
              class="transparent mr-2 top-menu-left"
              elevation="0"
              v-bind="attrs"
              v-on="on"
            >
              {{ $t('MORE') }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item href="https://campergold.net" target="_blank" style="border-bottom:1px solid #ddd !important;">
              <v-list-item-icon class="mr-3">
                <v-icon color="green">
                  mdi-cart
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title class="primary--text font-weight-bold">
                {{ this.$t('CamperZubehor') }}
              </v-list-item-title>
            </v-list-item>
            <v-list-item href="https://campergold.de" target="_blank">
              <v-list-item-icon class="mr-3">
                <v-icon color="green">
                  mdi-chart-line
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title class="primary--text font-weight-bold">
                {{ this.$t('CamperInvestment') }}
              </v-list-item-title>
            </v-list-item>
            <!-- <v-list-item href="/page/contact">
              <v-list-item-icon class="mr-3">
                <v-icon color="green">
                  mdi-comment-account-outline
                </v-icon>
              </v-list-item-icon>
              <v-list-item-title class="primary--text font-weight-bold">
                {{ this.$t('ContactUs') }}
              </v-list-item-title>
            </v-list-item> -->
          </v-list>
        </v-menu>
        <!-- <v-btn
          v-for="(link, index) in links"
          v-show="!mobile && link.external"
          :key="index + 100"
          class="transparent mr-2 top-menu-left"
          depressed
          :href="link.to"
          target="_blank"
        >
          {{ link.title }}
        </v-btn> -->
        <!-- { key: 11, icon: 'mdi-truck', title: this.$t('Camper Zubehör'), external: true, to: 'https://campergold.net' },
        { key: 12, icon: 'mdi-comment-account-outline', title: this.$t('Camper Investment'), external: true, to: 'https://campergold.de' } -->
        <span v-if="login">
          <v-btn
            v-if="user.role === 1 && !mobile"
            :to="localePath('/admin/dashboard/')"
            class="rounded-xl green mr-2 top-menu-right"
          >
            {{ $t('Dashboard') }}
          </v-btn>
        </span>
        <!-- <span v-if="login">
          <v-btn
            v-if="user.role === 2 && !mobile"
            to="/partner/dashboard/"
            class="rounded-xl green mr-2 top-menu-right"
          >
            {{ $t('Dashboard') }}
          </v-btn>
        </span> -->
        <v-btn
          v-if="!login"
          :to="localePath('/user/login')"
          class="rounded-xl green outline mr-2 top-menu-right"
        >
          {{ $t('Login') }}
        </v-btn>
        <v-btn
          v-else
          class="rounded-xl green mr-2 top-menu-right"
          :loading="LoadingLogout"
          @click="setUserLogout"
        >
          {{ $t('Logout') }}
        </v-btn>
        <v-btn
          v-if="!login && !mobile"
          :to="localePath('/user/register')"
          class="rounded-xl green outline mr-2 top-menu-right"
        >
          {{ $t('Register') }}
        </v-btn>
        <v-btn
          v-if="!login && !mobile"
          :to="localePath('/partner')"
          class="rounded-xl green mr-2 top-menu-right"
        >
          {{ $t('BecomePartner') }}
        </v-btn>
        <LanguageSelector />
      </v-list-item>
    </v-app-bar>
  </section>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      login: false,
      mobile: true,
      user: [],
      links: [
        { key: 1, icon: 'mdi-home-outline', title: 'Home', external: false, to: this.localePath('/') },
        { key: 2, icon: 'mdi-information-outline', title: 'AboutUs', external: false, to: this.localePath('/page/about-us') },
        { key: 3, icon: 'mdi-rv-truck', title: 'HireACamper', external: false, to: this.localePath('/camper') },
        { key: 4, icon: 'mdi-comment-account-outline', title: 'ContactUs', external: false, to: this.localePath('/page/contact') },
        { key: 11, icon: 'mdi-cart', title: 'CamperZubehor', external: true, to: 'https://campergold.net' },
        { key: 12, icon: 'mdi-chart-line', title: 'CamperInvestment', external: true, to: 'https://campergold.de' }
      ],
      links2: [
        { key: 5, icon: 'mdi-check-circle-outline', title: this.$multiLang('BecomePartner'), to: this.localePath('/partner') }
      ],
      userLink: [
        { key: 6, icon: 'mdi-account-circle', title: this.$multiLang('MyProfile'), to: this.localePath('/user') },
        { key: 7, icon: 'mdi-file-document', title: this.$multiLang('Booking'), to: this.localePath('/user/booking') },
        { key: 8, icon: 'mdi-account-edit', title: this.$multiLang('EditProfile'), to: this.localePath('/user#edit_profile') },
        { key: 13, icon: 'mdi-heart-outline', title: this.$multiLang('Wishlist'), to: this.localePath('/user/wishlist') },
        { key: 9, icon: 'mdi-lock-outline', title: this.$multiLang('ChangePassword'), to: this.localePath('/user/change_password') },
        { key: 10, icon: 'mdi-logout', title: this.$multiLang('Logout'), to: this.localePath('/user/logout') }
      ],
      partners: [
        { icon: 'mdi-apps', title: this.$langAdmin('Dashboard'), to: this.localePath('/partner/dashboard/') },
        { icon: 'mdi-rv-truck', title: this.$langAdmin('Campers'), to: this.localePath('/partner/camper/') },
        { icon: 'mdi-plus', title: this.$langAdmin('AddCamper'), to: this.localePath('/partner/camper/add') },
        { icon: 'mdi-calendar-check', title: this.$langAdmin('Booking'), to: this.localePath('/partner/booking') },
        { icon: 'mdi-account-edit', title: this.$langAdmin('EditProfile'), to: this.localePath('/user#edit_profile') },
        { icon: 'mdi-account-key', title: this.$langAdmin('ChangePassword'), to: this.localePath('/user/change_password') },
        { icon: 'mdi-logout', title: this.$langAdmin('Logout'), to: this.localePath('/user/logout') }
      ],
      miniVariant: false,
      LoadingLogout: false
    }
  },
  computed: {
    logoWhite () {
      return process.env.logoWhite
    }
  },
  mounted () {
    this.checkLogin()
    if (window.innerWidth < 1280) {
      this.mobile = true
    } else {
      this.mobile = false
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1280) {
        this.mobile = true
      } else {
        this.mobile = false
      }
    })
  },
  methods: {
    routerPush (url, external) {
      if (external) {
        window.location.href = url
      } else {
        this.$router.push({ path: url })
      }
    },
    setUserLogout () {
      this.LoadingLogout = true
      this.$store.commit('setUserLogout')
      // this.checkLogin()
      // this.$router.push({ path: '/' })
      setTimeout(() => {
        window.location.href = this.localePath('/')
      }, 10)
    },
    checkLogin () {
      this.user = this.$store.getters.getUser
      this.login = this.$store.getters.isLogin
    }
  }
}

</script>
