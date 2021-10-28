<template>
  <div class="col-12 py-0">
    <v-divider v-if="divider" />
    <h4 class="mt-3" style="margin-bottom: -10px !important">
      <slot />
    </h4>
  </div>
</template>

<script>
export default {
  props: {
    divider: {
      default: true,
      type: Boolean
    }
  }
}
</script>
