<template>
  <section v-if="clickVal" class="login_popup">
    <v-icon
      v-if="wishlist"
      :ripple="false"
      color="white"
      large
      class="mr-5"
      @click="addwishlist(wcamperid)"
    >
      mdi-heart
    </v-icon>
    <v-icon
      v-else
      :ripple="false"
      color="white"
      large
      class="mr-5"
      @click="addwishlist(wcamperid)"
    >
      mdi-heart-outline
    </v-icon>
  </section>
  <v-btn
    v-else
    class="primary rounded-xl login_popup"
    block
    x-large
    dark
    elevation="0"
    :loading="loading"
    @click="addwishlist(wcamperid)"
  >
    <v-icon
      v-if="wishlist"
      :ripple="false"
      color="white"
      :loading="loading"
      class="mr-4"
    >
      mdi-heart
    </v-icon>
    <v-icon
      v-else
      :ripple="false"
      color="white"
      :loading="loading"
      class="mr-4"
    >
      mdi-heart-outline
    </v-icon>
    <span v-if="wishlist">{{ $t('Favorite') }}</span>
    <span v-else>{{ $t('AddToFavorite') }}</span>
  </v-btn>
</template>

<script>
export default {
  props: ['camperid', 'wishlistdata', 'wishClick', 'click'],
  data () {
    return {
      wcamperid: this.camperid,
      wishlist: false,
      loading: false,
      clickVal: this.click ?? false
    }
  },
  watch: {
    wishlistdata (val) {
      this.wishlistcheck()
    },
    wishClick (val) {
      if (val) {
        this.addwishlist(this.wcamperid)
      }
    }
  },
  mounted () {
    this.wishlistcheck()
  },
  methods: {
    addwishlist (id) {
      if (!this.$login) {
        // this.$router.push({ path: '/user/login/' })
      } else if (this.$userRole()) {
        this.loading = true
        this.$api(this.$userRole() + '/add-wishlist/' + id).then((res) => {
          this.wishlist = !this.wishlist
          this.loading = false
        })
      }
    },
    wishlistcheck () {
      this.wishlist = this.wishlistdata.includes(this.wcamperid)
    }
  }
}

</script>
