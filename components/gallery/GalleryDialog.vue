<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" scrollable style="width: calc(100% - 60px)">
      <v-card>
        <v-card-title>
          <v-btn :class="{ primary: uploadFile }" @click="setUploadFile()">
            {{ $t('UploadFile') }}
          </v-btn>
          <v-btn
            :class="{ primary: gallery }"
            class="ml-4"
            @click="setGallery()"
          >
            {{ $t('Gallery') }}
          </v-btn>
        </v-card-title>
        <v-divider />
        <div class="clearfix" />
        <v-card-text id="gallery_holder" style="height: calc(100vh - 60px)">
          <v-row>
            <div v-show="gallery" class="col-12">
              <v-row class="py-5">
                <div
                  v-for="(i, index) in GalleryImages"
                  :key="index"
                  class="col-3 col-sm-3 col-md-2"
                >
                  <gallery-image-grid :multi="multi" :data="i" />
                </div>
                <div class="col-12">
                  <p class="text-center">
                    <v-btn
                      class="primary"
                      dark
                      :loading="loadMoreLoading"
                      @click="loadMoreApi"
                    >
                      {{ $t('LoadMore') }}
                    </v-btn>
                  </p>
                </div>
              </v-row>
            </div>
            <div v-show="uploadFile" class="col-12">
              <div>
                <div
                  style="
                    height: 50vh;
                    background: #eee;
                    border: 2px solid #ddd;
                    margin-top: 20px;
                  "
                  justify="center"
                  class="text-center align-center p-12 gray border border-gray-300"
                  @dragover="dragover"
                  @dragleave="dragleave"
                  @drop="drop"
                >
                  <form id="file_upload_">
                    <input
                      id="assetsFieldHandle"
                      ref="file"
                      type="file"
                      multiple
                      name="filename[]"
                      class="mb-5 overflow-hidden absolute"
                      accept=".pdf,.jpg,.jpeg,.png"
                      style="margin-top: 100px"
                      @change="onChange"
                    >
                    <LoadingBar v-if="fileUploading" />
                  </form>
                </div>
              </div>
            </div>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <p class="text-right" style="width: 100%">
            <v-btn
              class="primary"
              dark
              @click="$emit('dialog-action', false, false)"
            >
              {{ $t('Cancel') }}
            </v-btn>
            <v-btn class="green" dark @click="updateSelectedImage">
              {{ $t('Submit') }}
            </v-btn>
          </p>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import GalleryImageGrid from '../gallery/GalleryImageGrid.vue'
export default {
  components: {
    GalleryImageGrid
  },
  props: {
    dialog: {
      type: Boolean,
      default: false
    },
    multi: {
      type: Boolean,
      default: false
    },
    inputName: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      uploadFile: false,
      filelist: [],
      gallery: true,
      imageUrl: '',
      imageId: '',
      GalleryImages: [],
      loadMore: 1,
      loadMoreLoading: false,
      fileUploading: false
    }
  },
  mounted () {
    this.getGalleryImgaes(1)
  },
  methods: {
    loadMoreApi () {
      this.loadMore = this.loadMore + 1
      this.getGalleryImgaes(this.loadMore)
    },
    getGalleryImgaes (val) {
      this.loadMoreLoading = true
      this.$api(this.$userRole() + '/allmedia/' + val).then((res) => {
        // console.log(res.data)
        if (val === 1) {
          this.GalleryImages = res.data.data
        } else {
          const oldpics = this.GalleryImages
          this.GalleryImages = oldpics.concat(res.data.data)
        }
        this.loadMoreLoading = false
      })
    },
    setUploadFile () {
      this.uploadFile = true
      this.gallery = false
    },
    setGallery () {
      this.uploadFile = false
      this.gallery = true
    },
    updateSelectedImage () {
      let image = ''
      if (this.multi) {
        image = document.getElementsByClassName('gallery-item-selected')
      } else {
        image = document.getElementsByClassName('gallery-item-selected1')
      }
      const images = []
      let id = ''
      image.forEach((element) => {
        const imgval = element.getAttribute('data-img')
        images.push({ imgval })
        id = id + ', ' + element.getAttribute('data-id')
      })
      // console.log(id)
      // console.log(images)
      this.$emit('set-image-value', {
        imageUrl: images,
        imageId: id
      })
    },
    onChange () {
      this.fileUploading = true
      this.filelist = [...this.$refs.file.files]
      const form = document.getElementById('file_upload_')
      const formData = new FormData(form)
      this.$api.post(this.$userRole() + '/mediauploade', formData).then((res) => {
        this.setGallery()
        this.getGalleryImgaes(1)
        this.fileUploading = false
      })
    },
    remove (i) {
      this.filelist.splice(i, 1)
    },
    dragover (event) {
      event.preventDefault()
      if (!event.currentTarget.classList.contains('green')) {
        event.currentTarget.classList.remove('gray')
        event.currentTarget.classList.add('green')
      }
    },
    dragleave (event) {
      event.currentTarget.classList.add('gray')
      event.currentTarget.classList.remove('green')
    },
    drop (event) {
      event.preventDefault()
      this.$refs.file.files = event.dataTransfer.files
      this.onChange()
      event.currentTarget.classList.add('gray')
      event.currentTarget.classList.remove('green')
    }
  }
}
</script>
