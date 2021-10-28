<template>
  <div v-if="loading">
    <PageListing :list="20" />
  </div>
  <one-row v-else class="mb-5">
    <template #heading>
      {{ $t('Campers') }}
    </template>
    <template #actions>
      <v-btn class="success mr-3" dark :to="localePath('/partner/camper/add')">
        <v-icon>mdi-plus</v-icon>
        <span class="d-none d-sm-block">{{ $t('AddCamper') }} </span>
      </v-btn>
    </template>
    <template #subheader />
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <td><strong> {{ $t('Name') }} </strong></td>
            <!-- <td><strong> {{ $t('Type') }} </strong></td>
            <td><strong> {{ $t('Insurance') }} </strong></td> -->
            <td class="text-right">
              <strong>{{ $t('Options') }}</strong>
            </td>
          </tr>
          <CamperList v-for="(item, index) in data" v-show="!loading" :key="index" :item="item" :base-url="'/admin/camper/'" />
          <tr v-show="data.length < 1">
            <td colspan="4">
              <v-col>
                <h3 class="text-center mt-4">
                  {{ $multiLang('NoDataFound') }}
                </h3>
              </v-col>
            </td>
          </tr>
          <tr v-for="(item, index) in $pageLimit" v-show="loading && data.length === 0" :key="index + 200">
            <td colspan="2">
              <v-skeleton-loader type="list-item-avatar" />
            </td>
          </tr>
          <tr v-for="(item, index) in data" v-show="loading" :key="index + 100">
            <td colspan="2" class="pa-0">
              <v-skeleton-loader type="list-item-avatar" />
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <div class="text-center pt-4">
      <v-pagination
        v-model="page"
        :length="length"
      />
    </div>
  </one-row>
</template>

<script>
import CamperList from '~/components/partner/lists/CamperList'
export default {
  layout: 'partner',
  components: {
    CamperList
  },
  data () {
    return {
      data: [],
      loading: true,
      page: 1,
      length: 5
    }
  },
  watch: {
    page (val) {
      this.getData()
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.loading = true
      this.$api('vendor/camperlist/' + this.page).then((res) => {
        this.loading = false
        this.data = this.$psJSON(res.data.data.data)
        this.length = Math.ceil(res.data.data.count / this.$pageLimit)
      })
    }
  },
  head () {
    return {
      title: this.$langAdmin('Camper'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('Camper')
        }
      ]
    }
  }
}

</script>
