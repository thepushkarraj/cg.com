<template>
  <!--
  <ImageInput
    :id="data.image"
    :image="data.image_thumb"
    :name-id="'image'"
    :name-image="'image_thumb'"
    :label="'Featured Image'"
    @get-id="getImageId"
    @get-image="getImageUrl"
  />

  getImageId (val) {
    this.id = val
  },
  getImageUrl (val) {
    this.image = val
  }
  -->
  <span>
    <h4> {{ label }} </h4>
    <v-row>
      <div class="col-md-12 pt-5">
        <gallery-input
          :multi="false"
          :image-id="imageId"
          :image-url="imageUrl"
          :name-id="nameId"
          :name-image="nameImage"
          @dialog-action="setDialogValue"
        />
        <!-- <input type="hidden" :name="nameId" :value="imageId">
        <input type="hidden" :name="nameImage" :value="imageUrl"> -->
      </div>
    </v-row>
    <!-- model start -->
    <gallery-dialog
      :dialog="dialog"
      :multi="false"
      @set-image-value="setImageValue"
      @dialog-action="setDialogValue"
    />
  </span>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
    nameId: {
      type: String,
      default: 'image'
    },
    nameImage: {
      type: String,
      default: 'image_thumb_url'
    },
    label: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      dialog: false,
      imageId: this.id,
      imageUrl: this.image
    }
  },
  watch: {
    id (val) {
      this.imageId = val
    },
    image (val) {
      this.imageUrl = val
    }
  },
  mounted () {
    this.setImageValues()
  },
  methods: {
    setImageValues () {
      this.imageId = this.id
      this.imageUrl = this.image
    },
    setDialogValue (status, multi, inputName) {
      this.dialog = status
    },
    setImageValue (images) {
      this.dialog = false
      // keep only numbers in id
      this.imageId = images.imageId.replace(/\D/g, '')
      this.imageUrl = images.imageUrl[0].imgval
      this.$emit('get-id', this.imageId)
      this.$emit('get-image', this.imageUrl)
    }
  }
}
</script>
