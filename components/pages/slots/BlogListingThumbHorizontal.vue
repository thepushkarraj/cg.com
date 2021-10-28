<template>
  <section>
    <v-divider class="mb-4" />
    <v-card
      class="mb-4 rounded"
      style="overflow:hidden"
      elevation="0"
    >
      <div class="row">
        <div class="col-sm-5 px-3 py-1">
          <v-img
            height="150"
            :src="img"
            :to="localePath(link)"
          />
        </div>
        <div class="col-sm-7 px-3 px-sm-0">
          <h3 class="mx-3 pb-0 pt-1 text-truncate" :to="localePath(link)">
            {{ name }}
          </h3>
          <v-card-text class="pb-2 pt-1">
            <div class="text-1-lines" v-html="description.replace(/(<([^>]+)>)/gi, '')" />
          </v-card-text>
          <v-card-actions class="mt-0 mb-2 pt-0 pb-0">
            <v-btn class="rounded-xl green" dark :to="localePath(link)">
              {{ $t('ReadMore') }}
            </v-btn>
          </v-card-actions>
        </div>
      </div>
    </v-card>
  </section>
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
    },
    index: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style>
  .text-1-lines{
    height: 62px;
    overflow: hidden;
  }
</style>
