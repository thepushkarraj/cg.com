<template>
  <tr v-if="!deleted">
    <td class="pl-4">
      <v-list-item class="pa-0 my-1">
        <h3>{{ item.coupon_code }}</h3>
      </v-list-item>
    </td>
    <td class="pl-4">
      <v-list-item class="pa-0 my-1">
        <h3>{{ item.coupon_price }}</h3>
      </v-list-item>
    </td>
    <td class="pl-4">
      <v-list-item class="pa-0 my-1">
        <h3>{{ item.price_type }}</h3>
      </v-list-item>
    </td>
    <td class="pl-4">
      <v-list-item class="pa-0 my-1">
        <h3>{{ item.start_time }}</h3>
      </v-list-item>
    </td>
    <td class="pl-4">
      <v-list-item class="pa-0 my-1">
        <h3>{{ item.end_time }}</h3>
      </v-list-item>
    </td>
    <td class="text-right" style="min-width:200px;">
      <v-row>
        <v-spacer />
        <v-switch v-model="status" @click="changeStatus" />
        <v-btn
          icon
          fab
          x-small
          color="red"
          class="grey lighten-4 mt-4 ml-2"
          :loading="loading"
          @click="deleteItem(item.id)"
        >
          <v-icon> {{ deleteIcon }} </v-icon>
        </v-btn>
      </v-row>
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
      deleteIcon: 'mdi-delete'
    }
  },
  methods: {
    deleteItem (id) {
      if (confirm(this.$multiLang('AreYouSure'))) {
        this.loading = true
        this.$api.get('admin/deletecoupen/' + id).then((res) => {
          this.loading = false
          if (res.data.status) {
            this.deleteIcon = 'mdi-check'
            setTimeout(() => {
              this.deleted = true
            }, 2000)
          }
        })
      }
    },
    changeStatus () {
      const formData = new FormData()
      formData.append('status', this.status ? '1' : '0')
      this.$api.post('admin/coupon-status/' + this.item.id, formData)
    }
  }
}

</script>
