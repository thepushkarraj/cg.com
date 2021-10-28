<template>
  <v-card :elevation="1" class="rounded-xl overflow-hidden" @mouseover="mouseOver(item.data.id)">
    <div class="wishlist">
      <WishList :camperid="item.data.id" :wishlistdata="wishlistdata" :click="true" />
    </div>
    <v-carousel
      hide-delimiters
      height="250"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <nuxt-link :to="localePath('/camper/' + item.data.slug)">
        <v-carousel-item
          :src=" item.featureimage.media768_url ? $mediaBase + item.featureimage.media768_url : 'https://cdn.vuetifyjs.com/images/john.jpg'"
        />
        <v-carousel-item
          v-for="(item1, i) in item.images"
          :key="i"
          :src=" item1 ? $mediaBase + item1 : 'https://cdn.vuetifyjs.com/images/john.jpg'"
        />
      </nuxt-link>
    </v-carousel>
    <div class="pa-2">
      <h4>
        {{ $lang(item.campertype.name) }} -
        {{ $lang(item.data.name) }}
      </h4>
      <v-list-item class="pa-0" style="margin: -10px 0px -5px;">
        <!-- <h5 class="grey--text font-weight-normal">
          {{ item.data.place }}, {{ item.data.country }}
        </h5> -->
        <h5 class="grey--text font-weight-normal">
          {{ $lang(item.data.city.title) }}, {{ $countryName(item.data.country) }}
        </h5>
        <v-spacer />
        <span v-if="item.data.available">
          {{ $t('From') }}
          <span class="font-weight-bold">
            {{ item.data.seasonal_price ? $currency($seasonPrice(item.data.seasonalprice)) : $currency(item.data.price) }}
          </span>
          <small class="grey--text"> {{ $t('PerNight') }} </small>
        </span>
        <span v-else>
          <small class="grey--text"> {{ $t('NotAvailable') }} </small>
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
            {{ item.data.userdata.first_name }}
          </v-list-item-title>
        </v-list-item-content>
        <v-spacer />
        <h4 v-show="item.data.seats" class="text-center mr-2 mt-1">
          <v-icon class="grey lighten-4 pa-1 rounded-xl primary--text">
            mdi-seat-recline-normal
          </v-icon>
          <br>
          <span class="font-weight-regular caption"> {{ $t('Seat') }} {{ item.data.seats }} </span>
        </h4>
        <h4 v-show="item.data.beds" class="text-center mr-2 mt-1">
          <v-icon class="grey lighten-4 pa-1 rounded-xl primary--text">
            mdi-bed
          </v-icon>
          <br>
          <span class="font-weight-regular caption"> {{ $t('Bed') }} {{ item.data.beds }}</span>
        </h4>
        <h4 v-show="item.data.beds" v-if="item.review" class="text-center mr-2 mt-1">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <div
                v-bind="attrs"
                v-on="on"
              >
                <v-icon
                  class="grey lighten-4 pa-1 rounded-xl green--text"
                >
                  mdi-thumb-up
                </v-icon>
                <br>
                <span class="font-weight-regular caption">{{ item.review }}%</span>
              </div>
            </template>
            <span> {{ $t('Recommend') }}</span>
          </v-tooltip>
        </h4>
      </v-list-item>
    </div>
  </v-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default () {
        return []
      }
    },
    wishlistdata: {
      type: Array,
      default () {
        return []
      }
    }
  },
  methods: {
    mouseOver (ids) {
      this.$emit('hover-id', ids)
    },
    mouseLeave () {
      this.$emit('hover-id', 0)
    }
  }
}
</script>
<style scoped>
.wishlist{
    position: absolute;
    right: 0;
    margin-top:10px;
    z-index: 1;
    text-shadow: 0px 0px 8px #333;
 }
</style>
