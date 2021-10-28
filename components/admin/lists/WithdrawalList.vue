<template>
  <tr v-if="!deleted">
    <td>
      <h3>{{ $currency(item.amount) }}</h3>
    </td>
    <td>
      <h3>{{ $getDate(item.created_at) }}</h3>
    </td>
    <td v-if="status == '0'" class="text-right">
      <v-btn class="success mt-4 mb-4" @click="changeStatus(item.id)">
        <span>{{ $t('Accept') }}</span>
      </v-btn>
    </td>
    <td v-if="status == '1'" class="text-right">
      <v-btn class="primary mt-4 mb-4">
        <span>{{ $t('Paid') }}</span>
      </v-btn>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      deleted: false,
      loading: false,
      status: this.item.status,
      deleteIcon: 'mdi-delete',
      message: ''
    }
  },
  methods: {
    changeStatus (id) {
      if (confirm('are you sure?')) {
        this.loading = true
        this.$api.post('admin/withdrawal-accept/' + id).then((res) => {
          this.loading = false
          if (res.data.status) {
            this.message = res.data.message
          } else {
            this.error = res.data.error
          }
        })
      }
    }
  }
}

</script>
