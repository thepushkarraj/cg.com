<template>
  <v-container fluid class="pa-0">
    <v-img src="/img/new_uu.jpg" />
    <v-container fluid class="grey lighten-2">
      <v-container>
        <v-row>
          <div class="col-md-8 offset-md-2">
            <h4 class="text-center py-4">
              {{ $t('WohnmobilHeading') }}
            </h4>
          </div>
        </v-row>
      </v-container>
    </v-container>
    <div class="container mb-3 mt-5">
      <v-row justify="center" class="mt-5">
        <div class="col-md-4">
          <div class="row pb-4">
            <div class="col-2">
              <img src="/icons/website.svg" width="50">
            </div>

            <div class="col-10">
              <h3>{{ $t('WohnmobilHeading1') }}</h3>
                {{ $t('WohnmobilHeading1Text') }}
            </div>
          </div>

          <div class="row pb-4">
            <div class="col-2">
              <img src="/icons/user.svg" width="50">
            </div>

            <div class="col-10">
              <h3>{{ $t('WohnmobilHeading2') }}</h3>
                {{ $t('WohnmobilHeading2Text') }}
            </div>
          </div>

          <div class="row pb-4">
            <div class="col-2">
              <img src="/icons/exchange.svg" width="50">
            </div>

            <div class="col-10">
              <h3>{{ $t('WohnmobilHeading3') }}</h3>
                {{ $t('WohnmobilHeading3Text') }}
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="row pb-4">
            <div class="col-2">
              <img src="/icons/review.svg" width="50">
            </div>

            <div class="col-10">
              <h3>{{ $t('WohnmobilHeading4') }}</h3>
              {{ $t('WohnmobilHeading4Text') }}
            </div>
          </div>

          <div class="row pb-4">
            <div class="col-2">
              <img src="/icons/payment.svg" width="50">
            </div>

            <div class="col-10">
              <h3>{{ $t('WohnmobilHeading5') }}</h3>
              {{ $t('WohnmobilHeading5Text') }}
            </div>
          </div>

          <div class="row pb-4">
            <div class="col-2">
              <img src="/icons/shield.svg" width="50">
            </div>

            <div class="col-10">
              <h3>{{ $t('WohnmobilHeading6') }}</h3>
                {{ $t('WohnmobilHeading6Text') }}
            </div>
          </div>
        </div>
      </v-row>
      <div class="row pa-5" green>
        <div class="col-md-8 offset-md-2 text-center">
          <h3>
            {{ $t('WohnmobilContact') }}
          </h3>
          <div class="my-2">
            <v-btn
              color="green rounded-xl"
              dark
              large
              to="/page/contact/"
            >
              {{ $t('WohnmobilContact1') }}
            </v-btn>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>
<script>
export default {
  data () {
    return {
      data: [],
      meta: ''
    }
  },
  mounted () {
    this.$api('/pagecontent/51').then((res) => {
      if (res.data.status) {
        this.data = this.$psJSON(res.data.data)
      } else {
        this.$router.path({ push: '/' })
      }
    })
  },
  head () {
    return {
      title: this.$lang(this.data.meta_title),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$lang(this.data.meta_description)
        }
      ]
    }
  }
}
</script>
