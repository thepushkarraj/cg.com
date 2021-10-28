<template>
  <CamperThumb v-if="loading" />
  <div v-else class="container-fluid" style="background:#f5f5f5;">
    <div
      class="slider"
      style="
        background-image: linear-gradient(0deg, #33333300, #33333300), url('/img/cover1.jpg');
        background-position: top right;
        background-size: cover;
        background-attachment: fixed;
      "
    >
    </div>
    <v-container v-if="data.length > 0" class="pt-12">
      <v-row>
        <div
          v-for="(item, index) in data"
          :key="index"
          class="col-md-4 col-sm-6"
        >
          <CamperListingThumb :item="item" :wishlistdata="wishlistdata" />
        </div>
      </v-row>
    </v-container>
    <v-container v-else>
      <v-row>
        <div class="col-md-8 offset-md-2">
          <v-card class="mx-2 my-12">
            <v-row>
              <div class="col-md-12 text-center pa-10">
                <img src="/img/wishlist.jpg" style="width:100%; max-width:600px;">
              </div>
              <div class="col-md-12 text-center">
                <h2>{{ $t('YourWishListEmpty') }}</h2>
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
  data () {
    return {
      data: [],
      meta_data: [],
      loading: true,
      category: '',
      wishlistdata: []
    }
  },
  mounted () {
    this.getData()
    this.getMeta()
  },
  methods: {
    getMeta () {
      this.$api('/pagecontent/65').then((res) => {
        if (res.data.status) {
          this.meta_data = this.$psJSON(res.data.data)
        } else {
          this.$router.path({ push: '/' })
        }
      })
    },
    getData () {
      this.loading = true
      this.$api(this.$userRole() + '/wishlist-campers').then((res) => {
        // console.log(res.data.data)
        this.loading = false
        this.data = this.$psJSON(res.data.data)
      })
      if (this.$userRole()) {
        this.$api(this.$userRole() + '/wishlist').then((res) => {
          this.wishlistdata = res.data.data
        })
      }
    },
    loadResult (url) {
      // console.log(url)
      this.$router.push({ path: '/camper/' + url })
      setTimeout(() => {
        this.getData()
      }, 50)
    }
  },
  head () {
    return {
      title: this.$lang(this.meta_data.meta_title),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$lang(this.meta_data.meta_description)
        }
      ]
    }
  }
}
</script>
