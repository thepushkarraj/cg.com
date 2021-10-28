<template>
  <v-card :to="localePath(link)" class="rounded-xl">
    <v-img
      :src="img"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="250"
    >
      <h4 class="text-center py-3" style="background:#37507faa">
        {{ name }}
      </h4>
    </v-img>
  </v-card>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      default: '#'
    },
    img: {
      type: String,
      default: '/img/placeholder.jpg'
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
