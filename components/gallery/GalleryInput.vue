<template>
  <v-row>
    <div class="col-12">
      <!-- for mulit image-->
      <v-row v-if="multi">
        <div v-for="(img, index) in imageUrlVal" :key="index" class="d-flex child-flex col-4 col-sm-4 col-md-3">
          <v-img
            :src="mediaBase + img.imgval"
            :lazy-src="mediaBase + img.imgval"
            aspect-ratio="1"
            class="grey lighten-2"
          />
        </div>
        <div class="col-8 pt-0">
          <v-text-field :value="imageId" disabled />
        </div>
        <div class="col-4">
          <v-btn class="teal" dark @click="setDialogEvent">
            <v-icon class="mr-2">
              mdi-cloud-upload
            </v-icon>
            {{ $t('Upload') }}
          </v-btn>
        </div>
      </v-row>
      <!-- for single image-->
      <v-row v-else>
        <div class="d-flex child-flex col-4 col-sm-3 mb-3">
          <v-img
            :src="mediaBase + imageUrl"
            :lazy-src="mediaBase + imageUrl"
            aspect-ratio="1"
            style="max-width:100px; max-height:100px"
            class="grey lighten-2"
          />
        </div>
        <div class=" col-8 col-sm-8 col-md-7">
          <v-text-field :value="imageId" disabled />
          <v-btn class="teal" dark @click="setDialogEvent">
            <v-icon class="mr-2">
              mdi-cloud-upload
            </v-icon>
            {{ $t('Upload') }}
          </v-btn>
        </div>
      </v-row>
      <v-divider class="my-3" />
    </div>
    <input v-if="imageId" type="hidden" :name="nameId" :value="imageId">
    <input v-if="imageUrl" type="hidden" :name="nameImage" :value="imageUrl">
  </v-row>
</template>

<script>
export default {
  props: {
    imageId: {
      type: String,
      default: ''
    },
    imageUrl: {
      type: String,
      default: ''
    },
    nameId: {
      type: String,
      default: ''
    },
    nameImage: {
      type: String,
      default: ''
    },
    inputName: {
      type: String,
      default: ''
    },
    multi: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      imageUrlVal: []
    }
  },
  computed: {
    mediaBase () {
      return process.env.mediaBase
    }
  },
  watch: {
    imageUrl (val) {
      this.setImageUrl()
    }
  },
  mounted () {
    this.setImageUrl()
  },
  methods: {
    setDialogEvent () {
      this.$emit('dialog-action', true, this.multi, this.inputName)
    },
    setImageUrl () {
      if (this.multi) {
        this.imageUrlVal = JSON.parse(this.imageUrl)
      } else {
        this.imageUrlVal = this.imageUrl
      }
      // console.log(this.imageUrlVal)
    }
  }
}
</script>
