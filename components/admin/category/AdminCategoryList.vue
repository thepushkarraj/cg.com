<template>
  <div v-if="loading">
    <!-- <PageListing :list="20" /> -->
  </div>
  <one-row v-else class="mb-5">
    <template #heading>
      {{ name }}
    </template>
    <template #actions>
      <v-btn class="success" dark :to="localePath(baseUrl + 'add')">
        <v-icon>mdi-plus</v-icon>
        <span class="d-none d-sm-block">{{ $t('Add') }} {{ name }} </span>
      </v-btn>
    </template>
    <template #subheader />
    <v-simple-table>
      <template v-slot:default>
        <tbody>
          <tr>
            <td><strong>{{ $t('Name') }}</strong></td>
            <td class="text-right">
              <strong>{{ $t('Options') }}</strong>
            </td>
          </tr>
          <CategoryList v-for="(item,index) in data" :key="index" :item="item" :base-url="baseUrl" />
        </tbody>
      </template>
    </v-simple-table>
  </one-row>
</template>

<script>
import CategoryList from '~/components/admin/lists/CategoryList'
export default {
  components: {
    CategoryList
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
    }
  },
  data () {
    return {
      data: [],
      loading: true
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api('admin/categorylist/' + this.type + '/1').then((res) => {
        // console.log(res.data.data)
        this.loading = false
        this.data = res.data.data
      })
    }
  }
}
</script>
