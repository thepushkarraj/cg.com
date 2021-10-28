<template>
  <v-container v-if="!loading" fluid class="grey lighten-4">
    <v-container>
      <v-row>
        <div class="col-md-12 my-12">
          <v-card class="pa-4">
            <h3> {{ $t('Faq') }} </h3>
            <v-divider class="mt-3 mb-5" />
            <v-expansion-panels>
              <v-expansion-panel
                v-for="(item,i) in data"
                :key="i"
              >
                <v-expansion-panel-header>
                  {{ $lang(item.title) }}
                </v-expansion-panel-header>
                <v-expansion-panel-content class="px-6" v-html="$lang(item.description)" />
              </v-expansion-panel>
            </v-expansion-panels>
          </v-card>
        </div>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      data: [],
      meta_data: [],
      loading: true
    }
  },
  mounted () {
    this.getData()
    this.getMeta()
  },
  methods: {
    getData () {
      this.$api('/contentlist/faq/1').then((res) => {
        this.loading = false
        this.data = res.data.data.data
      // console.log(res.data.data)
      })
    },
    getMeta () {
      this.$api('/pagecontent/50').then((res) => {
        if (res.data.status) {
          this.meta_data = this.$psJSON(res.data.data)
        } else {
          this.$router.path({ push: '/' })
        }
      })
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
