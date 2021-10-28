<template>
  <div v-if="loading">
    <PageListing :list="20" />
  </div>
  <one-row v-else class="mb-5">
    <template #heading>
      {{ $t('Newsletter') }}
    </template>
    <template #subheader />
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <td><strong>{{ $t('Email') }}</strong></td>
          </tr>
          <NewsletterList v-for="(item, index) in data" v-show="!loading" :key="index" :item="item" />
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
import NewsletterList from '~/components/admin/lists/NewsletterList'
export default {
  layout: 'admin',
  components: {
    NewsletterList
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
      this.$api('admin/newsletterlist/' + this.page).then((res) => {
        this.loading = false
        this.data = this.$psJSON(res.data.data.data)
        this.length = Math.ceil(res.data.data.count / this.$pageLimit)
      })
    }
  },
  head () {
    return {
      title: this.$langAdmin('ContactsTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('ContactsDes')
        }
      ]
    }
  }
}

</script>
