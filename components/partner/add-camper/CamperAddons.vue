<template>
  <section>
    <v-row class="py-3 px-0 d-none d-md-flex pt-0">
      <div class="col-md-8 pb-0">
        <h4> {{ $t('Name') }} </h4>
      </div>
      <div class="col-md-2 pb-0">
        <h4>{{ $t('Price') }} (€)</h4>
      </div>
      <div class="col-md-2 pb-0">
        <h4> {{ $t('Select') }} </h4>
      </div>
    </v-row>
    <v-row v-for="(i, index) in addons" :key="index" class="py-0 px-0">
      <div class="col-md-12 pa-0">
        <v-divider class="mx-3 px-1" />
      </div>
      <div class="col-md-8 pb-0 pb-md-3">
        <v-row class="pa-0 ml-0 mt-1 mb-1">
          <div class="col-md-3 col-sm-2 col-4 pa-0">
            <!-- <v-img src="/img/placeholder.jpg" width="100%" height="60px" /> -->
            <client-only>
              <vue-picture-swipe
                class="img100"
                :items="[
                  {
                    src: $mediaBase + i.imagedata.media1920_url,
                    thumbnail: $mediaBase + i.imagedata.media480_url,
                    w: i.imagedata.w1920,
                    h: i.imagedata.h1920,
                    title: $lang(i.title)
                  }
                ]"
              />
            </client-only>
          </div>
          <div class="col-md-9 col-sm-10 col-8 pa-0">
            <h4 class="font-weight-regular ml-3">
              {{ $lang(i.title) }}
            </h4>
            <p
              class="mb-0 ml-3 grey--text caption"
              v-html="$lang(i.description)"
            />
          </div>
        </v-row>
      </div>
      <div class="col-md-2 col-6">
        <p class="mb-0">
          {{ $currency(i.price) }}
        </p>
      </div>
      <div class="col-md-2 col-6">
        <v-checkbox
          v-model="checked"
          class="mt-0"
          :name="'addons[]'"
          :label="$t('Select')"
          :value="i.id"
        />
      </div>
    </v-row>
  </section>
</template>

<script>
export default {
  props: ['addons'],
  data () {
    return {
      checked: []
    }
  }
}
</script>
