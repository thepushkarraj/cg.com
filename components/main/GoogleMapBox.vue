<template>
  <section>
    <MglMap :access-token="accesstoken" :map-style="mapStyle" :zoom="18" :center="center">
      <!-- <MglMarker :coordinates="coordinates" color="blue" /> -->
      <MyPluginComponent :id="id" :lat="lat" :long="long" />
      <MglMarker
        v-for="(l, key) in marker"
        :key="key"
        :coordinates="[l.data.long, l.data.lat]"
      >
        <div slot="marker" class="white marker_ss mapboxgl-marker mapboxgl-marker-anchor-center" :class="{ 'active_marker': l.data.id === id }">
          <div>
            <span class="font-weight-bold"> {{ l.data.seasonal_price ? $seasonPrice(l.data.seasonalprice) : l.data.price }} €</span>
            <v-icon
              large
              color="white"
              style="position: absolute;top: 12px;right: 5px;"
            >
              mdi-menu-down
            </v-icon>
          </div>
        </div>
        <MglPopup>
          <VCard>
            <nuxt-link :to="'/camper/' + l.data.slug" class="text-decoration-none">
              <v-img
                class="mx-2 mt-2"
                alt=""
                :src="
                  l.data.image_thumb
                    ? $mediaBase + l.data.image_thumb
                    : 'https://cdn.vuetifyjs.com/images/john.jpg'
                "
                background-size="cover"
                height="120px"
                width="150px"
              />
              <p class="text-center pa-0 ma-0">
                {{ $lang(l.data.name) }}
              </p>
            </nuxt-link>
          </VCard>
        </MglPopup>
      </MglMarker>
    </MglMap>
  </section>
</template>

<script>

export default {
  props: {
    marker: {
      type: Array,
      default () {
        return []
      }
    },
    id: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      mapbox: '',
      accesstoken: 'pk.eyJ1IjoiZGVlcGFrMDQ0NCIsImEiOiJja3Q5dHF4dHEwYzJ1Mm9td2ZlbTRraGVyIn0.P8hgv9dE8qfPMBN1eRWScQ',
      mapStyle: 'mapbox://styles/mapbox/streets-v11',
      lat: 0,
      long: 0,
      center: [9.993682, 53.551086]
    }
  },
  watch: {
    id (val) {
      if (val === 0) {
        this.lat = 53.551086
        this.long = 9.993682
      } else {
        this.getlatlong()
      }
    }
  },
  methods: {
    getlatlong () {
      const obj = this.marker.find(o => o.data.id === this.id)
      this.lat = obj.data.lat
      this.long = obj.data.long
    }
  }
}
</script>
<style>
.marker_ss.active_marker{background-color:#37517e!important;color:white!important;}
.marker_ss{
  padding: 3px 10px;
  border-radius: 7px;
}
</style>
