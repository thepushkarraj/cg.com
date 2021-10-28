<template>
  <client-only>
    <div class="container-fluid grey lighten-2">
      <v-container>
        <v-card class="pa-4">
          <v-row>
            <div class="col-lg-2 col-md-3 col-sm-4 text-center text-sm-right">
              <v-avatar color="primary mx-5" size="150">
                <v-img
                  :src="
                    $getUser.image_thumb
                      ? $mediaBase + $getUser.image_thumb
                      : '/img/avatar_placeholder.jpg'
                  "
                />
              </v-avatar>
            </div>
            <div class="col-lg-10 col-md-9 col-sm-8">
              <div>
                <h3 class="mb-4 pt-2">
                  <v-icon class="mr-3">
                    mdi-account-circle
                  </v-icon>
                  {{ $getUser.name }}
                </h3>
                <p>
                  <strong> <v-icon class="mr-3"> mdi-phone </v-icon> {{ $t('Phone') }} </strong>
                  {{ $getUser.mobile }}
                </p>
                <p>
                  <strong> <v-icon class="mr-3"> mdi-email </v-icon> {{ $t('Email') }} </strong>
                  {{ $getUser.email }}
                </p>
                <p>
                  <strong> <v-icon class="mr-3"> mdi-map-marker </v-icon> {{ $t('Address') }} </strong>
                  {{ $getUser.address }}
                  <span v-if="$getUser.city">, {{ $getUser.city }}</span>
                  <span v-if="$getUser.country">, {{ $getUser.country }}</span>
                  <span v-if="$getUser.postcode">, {{ $getUser.postcode }}</span>
                </p>
              </div>
            </div>
          </v-row>
        </v-card>
      </v-container>
      <v-container id="edit_profile">
        <v-card class="pa-4">
          <v-row>
            <div class="col-lg-12">
              <form-layout :error="error" :message="message" :loading="loading" :submit="$t('EditProfile')" @submit-form="submitForm">
                <v-row>
                  <div class="col-md-12">
                    <h3> {{ $t('EditProfile') }} </h3>
                    <v-divider class="my-3" />
                  </div>
                  <div class="col-md-6">
                    <input type="hidden" :value="$getUser.id" name="id">
                    <TextInput
                      :label="$t('FirstName')"
                      :name="'first_name'"
                      :icon="''"
                      :required="true"
                      :value="$getUser.first_name"
                      @get-value="getFirstName"
                    />
                    <TextInput
                      v-model="last_name"
                      :label="$t('LastName')"
                      :name="'last_name'"
                      :icon="''"
                      :required="true"
                      :value="$getUser.last_name"
                      @get-value="getLastName"
                    />
                    <TextInput
                      :icon="''"
                      :name="'email'"
                      :label="$t('Email')"
                      :value="$getUser.email"
                      @get-value="getEmail"
                    />
                    <TextInput
                      :icon="''"
                      :name="'mobile'"
                      :label="$t('Phone')"
                      :value="$getUser.mobile"
                      @get-value="getMobile"
                    />
                    <TextInput
                      :label="$t('Address')"
                      :name="'address'"
                      :icon="''"
                      :required="true"
                      :value="$getUser.address"
                      @get-value="getAddress"
                    />
                  </div>
                  <div class="col-md-6">
                    <ImageInput
                      :id="id"
                      :image="image_thumb"
                      :name-id="'image'"
                      :name-image="'image_thumb'"
                      :label="$t('ProfileImage')"
                      @get-id="getImageId"
                      @get-image="getImageUrl"
                    />
                    <TextInput
                      class="pt-1"
                      :label="$t('City')"
                      :name="'city'"
                      :value="$getUser.city"
                      :icon="''"
                      :required="true"
                      @get-value="getCity"
                    />
                    <TextInput
                      v-model="country"
                      :name="'country'"
                      :label="$t('Country')"
                      :icon="''"
                      :required="true"
                      :value="$getUser.country"
                      @get-value="getCountry"
                    />
                    <TextInput
                      v-model="postcode"
                      :label="$t('Postcode')"
                      :name="'postcode'"
                      :icon="''"
                      :required="true"
                      :value="$getUser.postcode"
                      @get-value="getPostcode"
                    />
                  </div>
                </v-row>
              </form-layout>
            </div>
          </v-row>
        </v-card>
      </v-container>
    </div>
  </client-only>
</template>

<script>
/* eslint-disable */
export default {
  layout: 'login',
  data () {
    return {
      error: '',
      message: '',
      loading: false,
      first_name: this.$getUser.first_name,
      last_name: this.$getUser.last_name,
      email: this.$getUser.email,
      mobile: this.$getUser.mobile,
      address: this.$getUser.address,
      city: this.$getUser.city,
      country: this.$getUser.country,
      postcode: this.$getUser.postcode,
      id: this.$getUser.image,
      image_thumb: this.$getUser.image_thumb,
    }
  },
  head () {
    return {
      title: this.$langAdmin('MyProfile'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('MyProfile')
        }
      ]
    }
  },
  methods: {
    getImageId (val) {
      this.id = val
    },
    getImageUrl (val) {
      this.image_thumb = val
    },
    getCity (val) {
      this.city = val
    },
    getFirstName (val) {
      this.first_name = val
    },
    getLastName (val) {
      this.last_name = val
    },
    getEmail (val) {
      this.email = val
    },
    getMobile (val) {
      this.mobile = val
    },
    getAddress(val) {
      this.address = val
    },
    getPostcode (val) {
      this.postcode = val
    },
    getCountry (val) {
      this.country = val
    },
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      this.$api.post(this.$userRole() + '/update-profile', formData).then((res) => {
        this.submitFormRes(res)
      })
    },
    submitFormRes (res) {
      console.log({
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        address: this.address,
        mobile: this.mobile,
        city: this.city,
        country: this.country,
        postcode: this.postcode,
        image: this.id,
        image_thumb: this.image_thumb,
      })
      this.loading = false
      if (res.data.status) {
        this.message = res.data.message
        this.$store.commit('setUserData', {
          first_name: this.first_name,
          last_name: this.last_name,
          email: this.email,
          address: this.address,
          mobile: this.mobile,
          city: this.city,
          country: this.country,
          postcode: this.postcode,
          image: this.id,
          image_thumb: this.image_thumb,
        })
      } else {
        this.error = res.data.error
      }
    },
    submitFormInit () {
      this.error = ''
      this.message = ''
      this.loading = true
    }
  }
}
</script>
