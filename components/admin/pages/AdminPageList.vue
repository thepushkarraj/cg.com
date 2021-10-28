<template>
  <div v-if="loading">
    <PageListing />
  </div>
  <one-row v-else class="mb-5">
    <template #heading>
      {{ name }}
    </template>
    <template #actions>
      <v-btn class="success mr-3" dark :to="localePath(baseUrl + 'add')">
        <v-icon>mdi-plus</v-icon>
        <span class="d-none d-sm-block">{{ $langAdmin('Add') }} {{ name }} </span>
      </v-btn>
      <v-btn v-if="selectoption" class="teal " dark :to="baseUrl + 'category'">
        <v-icon>mdi-plus</v-icon>
        <span class="d-none d-sm-block"> {{ $langAdmin('AddCategory') }} </span>
      </v-btn>
    </template>
    <template #subheader />
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <td><strong> {{ $langAdmin('Name') }} </strong></td>
            <td class="text-right">
              <strong>{{ $langAdmin('Options') }}</strong>
            </td>
          </tr>
          <PageList
            v-for="(item, index) in data"
            v-show="!loading"
            :key="index"
            :item="item"
            :base-url="baseUrl"
          />
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
import PageList from '~/components/admin/lists/PageList'
export default {
  components: {
    PageList
  },
  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    baseUrl: {
      type: String,
      required: true
    },
    selectoption: {
      type: Boolean,
      required: false
    }
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
      this.$api('admin/contentlist/' + this.type + '/' + this.page).then((res) => {
        // console.log(res.data.data)
        this.loading = false
        this.data = this.$psJSON(res.data.data.data)
        this.length = Math.ceil(res.data.data.count / this.$pageLimit)
      })
    }
  }
}

</script>
