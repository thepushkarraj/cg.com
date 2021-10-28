<template>
  <CamperThumb v-if="loading" />
  <div v-else class="container-fluid maobox" style="background:#f5f5f5;">
    <div
      class="slider"
      style="
        background-image: linear-gradient(0deg, #33333300, #33333300), url('/img/cover1.jpg');
        background-position: top right;
        background-size: cover;
        background-attachment: fixed;
      "
    >
      <v-container>
        <v-row>
          <v-col
            md="12"
            class="pa-5 pb-md-4 pb-sm-10 my-16 mx-4 rounded-xl"
            style="background:#00000088"
          >
            <div class="v-sheet v-sheet--outlined">
              <CamperFilterAdvance @filter="loadResult" />
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <section v-if="data.length > 0">
      <div class="px-5 container py-0">
        <div class="col-md-12 col-sm-12 d-flex justify-end ma-0 pa-0">
          <v-switch
            v-model="map"
            inset
            :label="`Map`"
          />
        </div>
      </div>
    </section>
    <section v-else>
      <div class="py-16 container py-0 text-center">
        <div class="col-md-12 col-sm-12">
         <div> <h2>{{ $t('NoCamperAvailable') }}</h2></div>
        </div>
      </div>
    </section>
    <section>
      <div v-if="map" class="pa-5 container">
        <v-row>
          <div class="col-md-12 col-sm-12">
            <v-row>
              <div class="col-md-6 col-sm-6 order-sm-1 order-2">
                <v-row>
                  <div
                    v-for="(item, index) in data"
                    :key="index"
                    class="col-md-6 col-sm-6"
                  >
                    <CamperListingThumb :id="'camper' + item.data.id" :item="item" :wishlistdata="wishlistdata" @hover-id="setHover" />
                  </div>
                </v-row>
              </div>
              <div class="col-md-6 col-sm-6 order-sm-2 order-1">
                <v-card class="rounded-xl map_sticky">
                  <GoogleMapBox :id="id" :marker="data" class="overflow-hidden" style="height:800px;width:100%;" />
                </v-card>
              </div>
            </v-row>
          </div>
        </v-row>
      </div>
      <div v-else class="pa-5 container">
        <v-row>
          <div
            v-for="(item, index) in data"
            :key="index"
            class="col-md-3 col-sm-6"
          >
            <CamperListingThumb :id="'camper' + item.data.id" :item="item" :wishlistdata="wishlistdata" @hover-id="setHover" />
          </div>
        </v-row>
      </div>
    </section>
  </div>
</template>

<script>
import CamperFilterAdvance from '~/components/main/CamperFilterAdvance.vue'
import GoogleMapBox from '~/components/main/GoogleMapBox.vue'
export default {
  components: {
    CamperFilterAdvance, GoogleMapBox
  },
  data () {
    return {
      map: false,
      data: [],
      meta_data: [],
      loading: true,
      category: '',
      wishlistdata: [],
      id: 0
    }
  },
  mounted () {
    this.getData()
    this.getMeta()
  },
  methods: {
    setHover (id) {
      this.id = id
    },
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
      this.$api('/allcampers/1' + window.location.search).then((res) => {
        console.log(res.data.data)
        this.loading = false
        this.data = this.$psJSON(res.data.data)
      })
      if (this.$userRole()) {
        this.$api(this.$userRole() + '/wishlist').then((res) => {
          this.wishlistdata = res.data.data
          // console.log(this.wishlistdata)
        })
      }
    },
    loadResult (url) {
      // console.log(url)
      this.$router.push({ path: this.localePath('/camper/' + url) })
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
<style>
.maobox .container{max-width:1500px!important;}
.map_sticky{position: sticky;top:100px;}
</style>
