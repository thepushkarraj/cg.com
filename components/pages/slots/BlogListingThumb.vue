<template>
  <v-card
    class="mb-6 rounded-xl"
  >
    <v-img
      height="250"
      :src="img"
      :to="localePath(link)"
    />
    <h3 class="text-center mx-3 pb-0 pt-1 text-truncate" :to="localePath(link)">
      {{ name }}
    </h3>
    <v-card-text class="pb-2 pt-1">
      <div class="text-2-lines" v-html="description.replace(/(<([^>]+)>)/gi, '')" />
    </v-card-text>
    <v-card-actions class="mt-0 pt-0 pb-4">
      <v-btn class="rounded-xl green mx-auto" dark :to="localePath(link)">
        {{ $t('ReadMore') }}
      </v-btn>
    </v-card-actions>
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
    },
    description: {
      type: String,
      default: ''
    }
  }
}
</script>
