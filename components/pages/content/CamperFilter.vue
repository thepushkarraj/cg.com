<template>
  <div class="container-fluid grey lighten-4">
    <div class="container">
      <div class="row justify-center">
        <div class="col-lg-8 col-md-7 px-5">
          <v-card class="pa-4 rounded-lg stickyprice">
            <v-img
              v-if="data.id && data.imagedata"
              class="white--text rounded-lg align-end mb-4"
              :src="$mediaBase + data.imagedata.media1920_url"
              style="height:400px; width:100%;ocject-fit:cover"
            />
            <div class="mb-5">
              <div class="row">
                <div class="col-12">
                  <v-card-text class="pa-0">
                    <h3 v-if="ptype == 'category'" class="mb-3">
                      {{ $t('Campers') }} > {{ $lang(data.name) }}
                    </h3>
                    <h3 v-if="ptype == 'city'" class="mb-3">
                      {{ $t('Campers') }} > {{ $lang(data.title) }}
                    </h3>
                    <v-divider class="mb-3" />
                    <div v-html="$lang(data.description)" />
                  </v-card-text>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div v-if="loading" class="col-lg-4 col-md-5 pa-0">
          <span v-if="dataBlog.length > 0">
            <div v-for="(item, index) in dataBlog" :key="index" class="mx-3 pa-3">
              <CamperListingThumbHorizontal
                :name="$lang(item.name)"
                :index="index"
                :description="$lang(item.description) ? $lang(item.description) : ''"
                :img="item.image_thumb ? $mediaBase + item.image_thumb : '/img/placeholder.jpg'"
                :link="'/camper/' + item.slug"
              />
            </div>
          </span>
          <v-card v-else class="mx-5 rounded-lg pa-2 mb-5 mt-3">
            <h4 class="mb-2 pa-3 mx-3">
              {{ $t('NoCamperAvailable') }}
            </h4>
          </v-card>
        </div>
        <div v-else class="col-lg-4" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      ptype: this.type,
      dataBlog: [],
      loading: false,
      breadcrumbs: [
        {
          text: this.$multiLang('Home'),
          disabled: false,
          href: '/'
        },
        {
          text: this.$multiLang(this.type + 's'),
          disabled: false,
          href: '/'
        }
      ]
    }
  },
  mounted () {
    this.$api('/camperlist-filter/' + this.type + '/' + this.data.id).then((res) => {
      this.loading = true
      this.dataBlog = res.data.data.data
      console.log(this.dataBlog)
    })
  }
}
</script>

<style>
  .text-2-lines {
    height: 70px;
    overflow: hidden;
  }
.stickyprice {
 position: sticky;
 top:70px;
}
</style>
