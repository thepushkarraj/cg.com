<template>
  <tr v-if="!deleted">
    <td class="pl-5">
      <p>
        {{ item.id }}
      </p>
    </td>
    <td>
      <p>
        {{ item.first_name }} to {{ item.last_name }}
      </p>
    </td>
    <td>
      <p>
        {{ item.city + ', ' + item.country + ', ' + item.postcode }}
      </p>
    </td>
    <td>
      <p>
        {{ item.start_date }} to {{ item.end_date }}
      </p>
    </td>
    <td>
      <p>
        {{ $currency(item.total) }}
      </p>
    </td>
    <td class="text-right" style="min-width:200px;">
      <v-row>
        <v-spacer />
        <v-switch v-model="status" @click="changeStatus" />
        <v-btn
          icon
          fab
          x-small
          color="green"
          class="grey lighten-4 mt-4 mr-3"
          :to="localePath('/partner/booking/' + item.id)"
        >
          <v-icon>mdi-eye</v-icon>
        </v-btn>
        <!-- <v-switch v-model="featured" @click="changefeatureStatus" /> -->
      </v-row>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      // required: true
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      deleted: false,
      loading: false,
      status: this.item.status,
      featured: this.item.featured,
      deleteIcon: 'mdi-delete'
    }
  },
  mounted () {
    console.log(this.item)
  },
  methods: {
    deleteItem (id) {
      if (confirm('are you sure?')) {
        this.loading = true
        this.$api.get('vendor/deletecamper/' + id).then((res) => {
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
      this.$api.post('vendor/camper-status/' + this.item.id, formData)
    },
    changefeatureStatus () {
      const formData = new FormData()
      formData.append('status', this.featured ? '1' : '0')
      this.$api.post('admin/camper-featured/' + this.item.id, formData)
    }
  }
}

</script>
