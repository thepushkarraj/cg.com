<template>
  <section>
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
        <v-list-item :to="localePath('/admin/dashboard/')">
          <v-list-item-action>
            <v-icon>mdi-apps</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="this.$langAdmin('Dashboard')" />
          </v-list-item-content>
        </v-list-item>
        <AdminSidebar :title="$t('User')" :subcat="users" :icon="'mdi-account'" />
        <AdminSidebar :title="$t('Campers')" :subcat="campers" :icon="'mdi-rv-truck'" />
        <AdminSidebar :title="$t('Booking')" :subcat="bookings" :icon="'mdi-bookmark'" />
        <AdminSidebar :title="$t('Content')" :subcat="settings" :icon="'mdi-home'" />
        <AdminSidebar :title="$t('MyProfile')" :subcat="profile" :icon="'mdi-account'" />
        <v-list-item v-for="(item, i) in items" :key="i" :to="localePath(item.to)" router exact>
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
            <v-list-item-title> {{ `${miniVariant ? 'Expend' : $multiLang('Collapse')}` }} </v-list-item-title>
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
        <nuxt-link :to="localePath('/')">
          <img src="/white-logo.png" width="140px" class="mx-5">
        </nuxt-link>
        <v-spacer />
        <LanguageSelector />
      </v-list-item>
    </v-app-bar>
  </section>
</template>

<script>
import AdminSidebar from '~/components/main/AdminSidebar'
export default {
  components: {
    AdminSidebar
  },
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      user: [],
      campers: [
        { icon: 'mdi-rv-truck', title: this.$langAdmin('CamperList'), to: this.localePath('/admin/camper') },
        { icon: 'mdi-shape-circle-plus', title: this.$langAdmin('AddCamper'), to: this.localePath('/admin/camper/add') },
        { icon: 'mdi-note-outline', title: this.$langAdmin('CamperType'), to: this.localePath('/admin/camper/category') },
        { icon: 'mdi-star', title: this.$langAdmin('Review'), to: this.localePath('/admin/review') },
        { icon: 'mdi-truck-trailer', title: this.$langAdmin('Addons'), to: this.localePath('/admin/addons') }
      ],
      users: [
        { icon: 'mdi-account-key', title: this.$langAdmin('Admin'), to: this.localePath('/admin/') },
        { icon: 'mdi-account-multiple-outline', title: this.$langAdmin('Partners'), to: this.localePath('/admin/partner') },
        { icon: 'mdi-account-switch', title: this.$langAdmin('Customers'), to: this.localePath('/admin/customers') }
      ],
      bookings: [
        { icon: 'mdi-bookmark-check', title: this.$langAdmin('Booking'), to: this.localePath('/admin/booking') },
        { icon: 'mdi-cancel', title: this.$langAdmin('CancelBookingsTitle'), to: this.localePath('/admin/booking/cancelled') }
      ],
      settings: [
        { icon: 'mdi-clock-fast', title: this.$langAdmin('FaqTitle'), to: this.localePath('/admin/faq/') },
        { icon: 'mdi-note-outline', title: this.$langAdmin('Pages'), to: this.localePath('/admin/page/') },
        { icon: 'mdi-note', title: this.$langAdmin('BlogPosts'), to: this.localePath('/admin/blog') },
        { icon: 'mdi-note-text', title: this.$langAdmin('TourTitle'), to: this.localePath('/admin/tours') },
        { icon: 'mdi-city', title: this.$langAdmin('City'), to: this.localePath('/admin/cities') }
      ],
      profile: [
        { icon: 'mdi-account-edit', title: this.$langAdmin('EditProfile'), to: this.localePath('/user#edit_profile') },
        { icon: 'mdi-account-key', title: this.$langAdmin('ChangePassword'), to: this.localePath('/user/change_password') }
      ],
      items: [
        // { icon: 'mdi-star-outline', title: 'Offers', to: '/admin/offer/' },
        { icon: 'mdi-tag', title: this.$langAdmin('CouponCode'), to: '/admin/coupon/' },
        { icon: 'mdi-phone', title: this.$langAdmin('Contact'), to: '/admin/contact' },
        { icon: 'mdi-logout', title: this.$langAdmin('Logout'), to: '/user/logout' }
        // { icon: 'mdi-security', title: 'Settings', to: '/admin/settings/' }
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
    }
  }
}
</script>

<style>
.v-toolbar__content {
    padding: 4px 0px !important;
}
</style>
