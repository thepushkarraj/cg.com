<template>
  <section>
    <button class="blue" @click="fly">Fly!</button>
  </section>
</template>
<script>
export default {
  name: 'MyPluginComponent',
  inject: ['mapbox', 'map', 'actions'],
  props: {
    id: {
      type: Number,
      default: 0
    },
    lat: {
      type: Number,
      default: 0
    },
    long: {
      type: Number,
      default: 0
    }
  },
  watch: {
    id () {
      this.fly()
    }
  },
  methods: {
    async fly () {
      const flyResult = await this.actions.flyTo({ center: [this.long, this.lat] })
      this.center = flyResult.center
    }
  }
}
</script>
