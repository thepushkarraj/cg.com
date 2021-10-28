<template>
  <span />
  <!--
  <div v-if="!loading" class="container-fluid" style="background:#f5f5f5;">
    <v-row class="pl-5 mt-1 pr-5 mb-5">
      <v-col
        style="background:#fff"
      >
        <div class="overflow-hidden v-sheet v-sheet--outlined">
          <v-row>
            <div class="col-md-3 col-sm-6">
              <v-text-field
                class="filterinput"
                hide-details="auto"
                solo
                flat
                outlined
                label="Location"
                prepend-inner-icon="mdi-map-marker"
              />
            </div>
            <div class="col-md-3 col-sm-6">
              <v-text-field
                hide-details="auto"
                solo
                flat
                small
                label="Interval"
                outlined
                prepend-inner-icon="mdi-calendar-month-outline"
              />
            </div>
            <div class="col-md-3 col-sm-6">
              <v-text-field
                hide-details="auto"
                solo
                flat
                small
                label="Price"
                outlined
                prepend-inner-icon="mdi-calendar-month-outline"
              />
            </div>
            <div class="col-md-3">
              <v-switch
                v-model="switch1"
                inset
                :label="'Map'"
              />
            </div>
          </v-row>
        </div>
      </v-col>
    </v-row>
    <v-container class="">
      <v-row>
        <div
          v-for="(item, index) in data"
          :key="index"
          class="col-lg-4 col-md-6 col-12"
        >
          <v-card :elevation="1" class="rounded-xl mx-auto mb-12">
            <v-carousel hide-delimiters height="300">
              <a :href="'/camper/' + item.data.slug">
                <v-carousel-item
                  v-for="(item1, i) in item.images"
                  :key="i"
                  :src="item1 ? $mediaBase + item1 : 'https://cdn.vuetifyjs.com/images/john.jpg'"
                />
              </a>
            </v-carousel>
            <div class="pa-2">
              <h4>
                {{ $lang(item.data.campertype.name) }} - {{ $lang(item.data.name) }}
              </h4>
              <v-list-item class="pa-0" style="margin: -10px 0px -5px;">
                <h5 class="grey--text font-weight-normal">
                  {{ item.data.place }}, {{ item.data.country }}
                </h5>
                <v-spacer />
                <span>
                  ab
                  <span class="font-weight-bold">
                    {{ item.data.currency }} {{ item.data.price }}
                  </span>
                  <small class="grey--text">Pro Natch</small>
                </span>
              </v-list-item>
              <v-divider />
              <v-list-item class="pa-0">
                <v-list-item-avatar color="grey darken-3">
                  <v-img
                    class="elevation-6"
                    alt=""
                    :src="
                      item.data.userdata.image_thumb
                        ? $mediaBase + item.data.userdata.image_thumb
                        : 'https://cdn.vuetifyjs.com/images/john.jpg'
                    "
                    background-size="cover"
                    height="40px"
                    min-width="40px"
                  />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>
                    {{ item.data.userdata.first_name + ' ' + item.data.userdata.last_name }}
                  </v-list-item-title>
                </v-list-item-content>
                <v-spacer />
                <v-rating
                  :value="4.5"
                  color="amber"
                  dense
                  half-increments
                  readonly
                  size="14"
                />
              </v-list-item>
            </div>
          </v-card>
        </div>
      </v-row>
    </v-container>
  </div>
  -->
</template>

<script>
/*
export default {
  data () {
    return {
      switch1: true,
      loading: true,
      data: []
    }
  },
  mounted () {
    this.$api('/allcampers/1').then((res) => {
      // console.log(res.data.data)
      this.loading = false
      this.data = res.data.data
    })
  }
}
*/
</script>
