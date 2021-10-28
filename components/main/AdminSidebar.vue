<template>
  <section>
    <v-list-group :value="false" :prepend-icon="icons" class="active_green">
      <template v-slot:activator>
        <v-list-item-title class="white--text">
          {{ Cattitle }}
        </v-list-item-title>
      </template>
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :to="localePath(item.to)"
        router
        exact
        class="pl-10 active_dark_blue"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title class="text-capitalize" v-text="item.title" />
        </v-list-item-content>
      </v-list-item>
    </v-list-group>
  </section>
</template>
<script>
export default {
  props: {
    subcat: {
      type: Array,
      default () {
        return []
      }
    },
    title: {
      type: String,
      default () {
        ''
      }
    },
    icon: {
      type: String,
      default () {
        ''
      }
    }
  },
  data () {
    return {
      items: this.subcat,
      Cattitle: this.title,
      icons: this.icon
    }
  }
}
</script>

<style>
  .active_green .v-list-item--active {
    background: #4caf50 !important;
    color: white !important;
  }
  .active_green .active_dark_blue {
    background: #00254d !important;
    color: #fff !important;
  }
</style>
