<template>
  <section>
    <v-card
      class="mb-1 pa-1 rounded-xl"
      style="overflow:hidden"
      elevation="2"
    >
      <div class="row">
        <div class="col-sm-12 px-5 pt-5 pb-0">
          <v-img
            class="rounded-xl"
            height="190"
            :src="img"
            :to="localePath(link)"
          />
        </div>
        <div class="col-sm-12 px-3">
          <h3 class="mx-4 pb-0 pt-1 text-truncate" :to="localePath(link)">
            {{ name }}
          </h3>
          <v-card-text v-if="description" class="pb-0 pt-1">
            <div class="text-1-lines" v-html="description.replace(/(<([^>]+)>)/gi, '')" />
          </v-card-text><br>
          <v-card-actions class="mt-0 mb-2 mx-2 pt-0 pb-0">
            <v-btn class="rounded-xl green" block dark :to="localePath(link)">
              {{ $t('BookNow') }}
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
