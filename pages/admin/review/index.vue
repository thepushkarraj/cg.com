<template>
  <div v-if="loading">
    <PageListing :list="20" />
  </div>
  <one-row v-else class="mb-5">
    <template #heading>
      {{ $t('Review') }}
    </template>
    <template #actions>
      <v-btn class="success" dark :to="localePath('/admin/review/add')">
        <v-icon>mdi-plus</v-icon>
        <span class="d-none d-sm-block">{{ $t('Add') }} {{ $t('Review') }}</span>
      </v-btn>
    </template>
    <template #subheader />
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <td><strong>{{ $t('ProfileImage') }}</strong></td>
            <td><strong>{{ $t('Name') }}</strong></td>
            <td><strong>{{ $t('Rating') }}</strong></td>
            <td class="text-right">
              <strong>{{ $t('Options') }}</strong>
            </td>
          </tr>
          <ReviewList v-for="(item, index) in data" v-show="!loading" :key="index" :item="item" />
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
import ReviewList from '~/components/admin/lists/ReviewList'
export default {
  layout: 'admin',
  components: {
    ReviewList
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
      this.$api('admin/contentlist/review/' + this.page).then((res) => {
        // console.log(res.data.data)
        this.loading = false
        this.data = this.$psJSON(res.data.data.data)
        this.length = Math.ceil(res.data.data.count / this.$pageLimit)
      })
    }
  },
  head () {
    return {
      title: this.$langAdmin('Review'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('Review')
        }
      ]
    }
  }
}

</script>
