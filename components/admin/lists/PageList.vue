<template>
  <tr v-if="!deleted">
    <td class="pa-0">
      <v-list-item class="pa-0 my-1">
        <v-avatar class="mr-3">
          <img
            :src="
              item.image_thumb
                ? $mediaBase + item.image_thumb
                : '/img/placeholder.jpg'
            "
          >
        </v-avatar>
        <h3>
          {{ $lang(item.title) }}
        </h3>
      </v-list-item>
    </td>
    <td class="text-right" style="min-width:200px;">
      <v-row>
        <v-spacer />
        <v-btn
          icon
          fab
          x-small
          color="green"
          class="grey lighten-4 mt-4 mr-3"
          :to="localePath(baseUrl + item.id)"
        >
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
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
    },
    baseUrl: {
      type: String,
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
        this.$api.post('admin/deletecontent/' + id).then((res) => {
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
      this.$api.post('admin/content-status/' + this.item.id, formData)
    }
  }
}

</script>
