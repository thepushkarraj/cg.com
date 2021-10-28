<template>
  <v-img
    ref="galleryImage"
    :src="mediaPath"
    :lazy-src="mediaPath"
    aspect-ratio="1"
    :data-img="data.media480_url"
    :data-id="data.id"
    @click="addSelectedClass"
  />
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default () {
        return {}
      }
    },
    multi: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      class: false
    }
  },
  computed: {
    mediaPath () {
      return (this.data.media480_url) ? process.env.mediaBase + this.data.media480_url : 'https://filestore.community.support.microsoft.com/api/images/72e3f188-79a1-465f-90ca-27262d769841'
    }
  },
  watch: {
    multi (val) {
      this.removeSelectedClass()
    }
  },
  methods: {
    addSelectedClass () {
      if (this.multi) {
        if (this.class) {
          this.$refs.galleryImage.$el.classList.remove('gallery-item-selected')
          this.class = false
        } else {
          this.$refs.galleryImage.$el.classList.add('gallery-item-selected')
          this.class = true
        }
      } else {
        this.removeSelectedClass()
        this.$refs.galleryImage.$el.classList.add('gallery-item-selected1')
      }
    },
    removeSelectedClass () {
      if (this.multi) {
        const els = document.getElementsByClassName('gallery-item-selected')
        for (let i = 0; i < els.length; i++) {
          els[i].classList.remove('gallery-item-selected')
        }
      } else {
        const els = document.getElementsByClassName('gallery-item-selected1')
        for (let i = 0; i < els.length; i++) {
          els[i].classList.remove('gallery-item-selected1')
        }
      }
    }
  }
}
</script>

<style>
  .gallery-item-selected{
    border: 6px solid green;
  }
  .gallery-item-selected1{
    border: 6px solid green;
  }
</style>
