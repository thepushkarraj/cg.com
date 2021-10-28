<template>
  <tr v-if="!deleted">
    <td> {{ content.name }} </td>
    <td class="text-right">
      <v-btn
        icon
        fab
        x-small
        color="red"
        class="grey lighten-4"
        :loading="loading"
        @click="deleteItem(content.id)"
      >
        <v-icon>mdi-delete</v-icon>
      </v-btn>
      <v-btn
        icon
        fab
        x-small
        color="primary"
        class="ma-1 grey lighten-4"
        :to="localePath('/' + type + '/' + content.id)"
      >
        <v-icon>mdi-eye</v-icon>
      </v-btn>
      <v-btn
        icon
        fab
        x-small
        color="green"
        class="grey lighten-4"
        :to="localePath('/' + type + '/' + content.id)"
      >
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      default () {
        return {}
      }
    },
    type: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      deleted: false,
      loading: false
    }
  },
  methods: {
    deleteItem (id) {
      if (confirm(this.$multiLang('AreYouSure'))) {
        this.loading = true
        const formData = new FormData()
        formData.append('id', id)
        this.$axios.post(process.env.apiBase + 'delete_content/', formData).then((res) => {
          if (res.data) {
            this.deleted = true
          }
        })
      }
    }
  }
}
</script>
