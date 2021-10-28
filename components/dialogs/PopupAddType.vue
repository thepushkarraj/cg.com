<template>
  <v-row justify="space-around">
    <v-col cols="auto">
      <v-dialog
        v-model="dialog"
        transition="dialog-bottom-transition"
        max-width="800"
      >
        <template>
          <v-card>
            <v-toolbar color="primary" dark class="pl-4">
              Add Camper Type
            </v-toolbar>
            <v-card-text>
              <div>
                <form-layout :error="error" :message="message" :loading="loading" :submit="'Submit'" @submit-form="submitForm">
                  <input type="hidden" :value="'camper'" name="type">
                  <input type="hidden" :value="$getLang" name="language">
                  <MultiLangFields @change-lang="changeLang" />
                  <span v-for="item, index in $allLanguages" :key="index">
                    <v-row v-show="tab === item.code">
                      <div class="col-md-12">
                        <h4 class="text-uppercase"> {{ tab }} </h4>
                        <v-divider class="mb-4" />
                        <TextInput :label="'Name'" :name="'name[' + item.code +']'" :required="$langRequired(item.code)" :icon="'mdi-truck'" />
                        <TextInput :label="'Meta Title'" :name="'meta_title[' + item.code +']'" :required="false" :icon="'mdi-pencil'" />
                        <v-textarea outlined :label="'Meta Description'" :name="'meta_description[' + item.code +']'" :required="false" />
                      </div>
                    </v-row>
                  </span>
                  <v-row>
                    <div class="col-md-12">
                      <TextInput :label="'Slug'" :name="'slug'" :required="false" :icon="'mdi-link-variant'" />
                      <ImageInput
                        :name-id="'image'"
                        :name-image="'image_thumb'"
                        :label="'Featured Image'"
                      />
                    </div>
                  </v-row>
                </form-layout>
              </div>
            </v-card-text>
          </v-card>
        </template>
      </v-dialog>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    data: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      dialog: this.data,
      loading: false,
      error: '',
      message: '',
      tab: this.$getLang
    }
  },
  watch: {
    data (val) {
      this.dialog = val
    },
    dialog (val) {
      this.$emit('set-dialog', val)
    }
  },
  methods: {
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      this.$api.post('admin/addcategory', formData).then((res) => {
        // console.log(res.data)
        this.loading = false
        if (res.data.status) {
          this.message = res.data.message
          setTimeout(() => {
            this.$router.push({ path: '/admin/camper/category' })
          }, 2000)
        } else {
          this.error = res.data.error
        }
      })
    },
    submitFormInit () {
      this.error = ''
      this.message = ''
      this.loading = true
    },
    changeLang (val) {
      this.tab = val
    }
  }
}
</script>
