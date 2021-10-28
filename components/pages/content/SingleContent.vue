<template>
  <div class="container-fluid grey lighten-4">
    <div class="container">
      <div class="row justify-center">
        <div class="col-lg-8">
          <v-card class="pa-4">
            <v-img
              v-if="data.id && data.imagedata"
              class="white--text align-end mb-4"
              :src="$mediaBase + data.imagedata.media1920_url"
              style="height:400px; width:100%;ocject-fit:cover"
            />
            <div>
              <v-row>
                <div class="col-md-12">
                  <v-breadcrumbs :items="breadcrumbs" class="pa-0 text-capitalize ">
                    <template v-slot:divider>
                      <v-icon>mdi-chevron-right</v-icon>
                    </template>
                  </v-breadcrumbs>
                </div>
              </v-row>
            </div>
            <div class="mb-5">
              <div class="row">
                <div class="col-12">
                  <v-card-text class="pa-0">
                    <h2 class="mb-3">
                      {{ $lang(data.title) }}
                    </h2>
                    <v-divider class="mb-3" />
                    <div v-html="$lang(data.description)" />
                  </v-card-text>
                </div>
              </div>
            </div>
          </v-card>
        </div>
        <div v-if="loading" class="col-lg-4">
          <v-card class="pt-4 px-1 pb-1">
            <h4 class="mb-2 px-3">
              {{ $t('FeaturedBlogPosts') }}
            </h4>
            <div v-for="(item, index) in dataBlog" :key="index" class="mx-3">
              <BlogListingThumbHorizontal
                :name="$lang(item.title)"
                :index="index"
                :description="$lang(item.description)"
                :img="item.image_thumb ? $mediaBase + item.image_thumb : '/img/placeholder.jpg'"
                :link="'/blog/' + item.slug"
              />
            </div>
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
    this.$api('/contentlist/blog/1').then((res) => {
      this.loading = true
      this.dataBlog = res.data.data.data
    })
  }
}
</script>

<style>
  .text-2-lines {
    height: 70px;
    overflow: hidden;
  }
</style>
