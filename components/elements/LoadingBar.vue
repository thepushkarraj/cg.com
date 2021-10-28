<template>
  <div style="min-height: 6px">
    <v-progress-linear v-model="value" :indeterminate="query" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 0,
      query: true,
      show: true,
      interval: 0
    }
  }
}
</script>
