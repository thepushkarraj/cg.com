<template>
  <tr v-if="!deleted">
    <td class="pl-4">
      <v-list-item class="pa-0 my-1">
        <h3>{{ item.first_name }} {{ item.last_name }}</h3>
      </v-list-item>
    </td>
    <td class="pl-4">
      <v-list-item class="pa-0 my-1">
        <h3>{{ item.email }}</h3>
      </v-list-item>
    </td>
    <td class="pl-1">
      <h3>{{ item.city }}</h3>
    </td>
    <td class="pl-1">
      <h3>{{ item.phone }}</h3>
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
          :to="localePath('/admin/contact/' + item.id)"
        >
          <v-icon>mdi-eye</v-icon>
        </v-btn>
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
      deleteIcon: 'mdi-delete'
    }
  },
  methods: {
    deleteItem (id) {
      if (confirm(this.$multiLang('AreYouSure'))) {
        this.loading = true
        this.$api.get('admin/deletecontact/' + id).then((res) => {
          this.loading = false
          if (res.data.status) {
            this.deleteIcon = 'mdi-check'
            setTimeout(() => {
              this.deleted = true
            }, 2000)
          }
        })
      }
    }
  }
}

</script>
