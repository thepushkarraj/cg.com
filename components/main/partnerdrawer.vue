<template>
  <span>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class="primary"
      dark
    >
      <template v-slot:prepend>
        <v-list-item v-if="user" two-line>
          <v-list-item-avatar v-if="!miniVariant">
            <img :src="user.image_thumb ? $mediaBase + user.image_thumb : '/img/placeholder.jpg'">
          </v-list-item-avatar>
          <v-list-item-avatar v-else size="25">
            <img :src=" user.image_thumb ? $mediaBase + user.image_thumb : '/img/placeholder.jpg'">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.first_name }} {{ user.last_name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
      <v-divider />
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
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
        <v-list-item @click.stop="miniVariant = !miniVariant">
          <v-list-item-action>
            <v-icon>mdi-{{ `chevron-${miniVariant ? 'right' : 'left'}` }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title> {{ `${miniVariant ? 'Expend' : 'Collapse'}` }} </v-list-item-title>
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
    >
      <v-list-item class="px-0">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <nuxt-link to="/">
          <img src="/white-logo.png" width="140px" class="mx-5">
        </nuxt-link>
        <v-spacer />
        <LanguageSelector />
        <!-- <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn class="transparent" depressed v-bind="attrs" v-on="on">
              <v-avatar size="30" class="teal mr-2">
                $
              </v-avatar>
              <span> USD </span>
            </v-btn>
          </template>
          <v-list style="min-width:50px;">
            <v-list-item v-for="item,index in $allCurrency" :key="index" @click="setUserLang(item.code)">
              <v-avatar size="30" class="teal mr-2">
                {{ item.sign }}
              </v-avatar>
              {{ item.code }}
            </v-list-item>
          </v-list>
        </v-menu> -->
        <!-- <v-avatar class="ml-4 d-none d-sm-flex">
          <v-img
            :src="
              $getUser.image_thumb
                ? $mediaBase + $getUser.image_thumb
                : '/img/placeholder.jpg'
            "
            :alt="user.name"
          />
        </v-avatar>
        <h4 class="ml-3 d-none d-sm-flex" style="width: 100px;"> {{ user.first_name }} </h4>
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              large
              fab
              small
              icon
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>
                mdi-dots-vertical
              </v-icon>
            </v-btn>
          </template>
          <v-list style="min-width: 200px;">
            <v-list-item to="/user#edit_profile"> <v-icon color="primary" class="pr-4"> mdi-account-edit </v-icon> Edit Profile </v-list-item>
            <v-list-item to="/user/change_password"> <v-icon color="primary" class="pr-4"> mdi-account-key </v-icon> Change Password </v-list-item>
            <v-list-item @click="setUserLogout"> <v-icon color="primary" class="pr-4"> mdi-logout </v-icon> Logout </v-list-item>
          </v-list>
        </v-menu> -->
      </v-list-item>
    </v-app-bar>
  </span>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      user: [],
      items: [
        { icon: 'mdi-apps', title: this.$langAdmin('Dashboard'), to: '/partner/dashboard/' },
        { icon: 'mdi-rv-truck', title: this.$langAdmin('Campers'), to: '/partner/camper/' },
        { icon: 'mdi-bookmark-outline', title: this.$langAdmin('Booking'), to: '/partner/booking' },
        { icon: 'mdi-account-edit', title: this.$langAdmin('EditProfile'), to: '/user#edit_profile' },
        { icon: 'mdi-account-key', title: this.$langAdmin('ChangePassword'), to: '/user/change_password' },
        { icon: 'mdi-logout', title: this.$langAdmin('Logout'), to: '/user/logout' }
      ],
      miniVariant: false
    }
  },
  computed: {
    logoWhite () {
      return process.env.logoWhite
    }
  },
  mounted () {
    this.user = this.$store.getters.getUser
  },
  methods: {
    setUserLogout () {
      this.$store.commit('setUserLogout')
      this.$router.push({ path: '/' })
    },
    setUserLang (lang) {
      this.$store.commit('setLang', lang)
      this.$forceUpdate()
    }
  }
}
</script>

<style>
.v-toolbar__content {
    padding: 4px 0px !important;
}
</style>
