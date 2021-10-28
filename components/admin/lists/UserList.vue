<template>
  <v-list-item v-if="user && !deleted" ref="single_user" class="border-bottom px-0 mx-2">
    <v-list-item-avatar>
      <v-img
        v-if="user.User.image_thumb_url"
        :src="$mediaBase + user.User.image_thumb_url"
      />
      <v-img
        v-else
        src="/img/avatar_placeholder.jpg"
      />
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title v-text="user.User.first_name + ' ' + user.User.last_name" />

      <v-list-item-subtitle
        v-text="user.User.role + ' | ' + user.User.email"
      />
    </v-list-item-content>
    <v-btn
      icon
      fab
      x-small
      color="red"
      class="grey
      lighten-4"
      @click="deleteUser(user.User.id)"
    >
      <v-icon>mdi-delete</v-icon>
    </v-btn>
    <v-btn
      icon
      fab
      x-small
      color="primary"
      class="ma-1 grey lighten-4"
      :href="'/admin/' + user.User.id"
    >
      <v-icon>mdi-eye</v-icon>
    </v-btn>
    <v-btn
      icon
      fab
      x-small
      color="green"
      class="grey lighten-4"
      :to="localePath('/admin/' + user.User.id)"
    >
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
  </v-list-item>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      deleted: false
    }
  },
  methods: {
    deleteUser (id) {
      if (confirm(this.$multiLang('AreYouSure'))) {
        this.$refs.single_user.$el.classList.add('red')
        const formData = new FormData()
        formData.append('id', id)
        this.$axios.post(process.env.apiBase + 'delete_User/', formData).then((res) => {
          // console.log(res.data)
          if (res.data) {
            this.deleted = true
          }
        })
      }
    }
  }
}
</script>
