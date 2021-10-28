<template>
  <div class="container-fluid grey lighten-4">
    <v-container>
      <v-row>
        <div class="col-md-8 offset-md-2">
          <v-card class="mx-2 my-12">
            <v-row>
              <div class="col-md-12">
                <img src="/img/success_banner.jpg" style="width:100%">
              </div>
              <div class="col-md-12 text-center">
                <h2> {{ $t('YourBookingIsSuccessful') }} </h2>
              </div>
            </v-row>
          </v-card>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  mounted () {
    this.$store.commit('setBookingData', {
      user_id: '',
      first_name: '',
      last_name: '',
      email: '',
      address: '',
      phone: '',
      subtotal: '',
      coupon_code: '',
      discount: '',
      total: '',
      partner_id: ''
    })
    setTimeout(() => {
      if (this.$getUser.role === 3) {
        this.$router.push({ path: '/user/booking/' + this.$route.params.id })
      } else if (this.$getUser.role === 2) {
        this.$router.push({ path: '/partner/booking/' + this.$route.params.id })
      } else if (this.$getUser.role === 1) {
        this.$router.push({ path: '/admin/booking/' + this.$route.params.id })
      }
    }, 2000)
  }
}
</script>
