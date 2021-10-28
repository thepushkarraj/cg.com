<template>
  <div class="container-fluid grey lighten-4">
    <v-container class="py-10">
      <v-row>
        <div class="col-lg-8 offset-lg-2">
          <v-card class="mb-9">
            <h3 class="pt-4 pl-6">
              {{ pageHeading }}
            </h3>
            <v-divider class="mt-3 mb-4" />
            <v-row class="px-6 pt-2 pb-4">
              <div class="col-lg-12">
                <client-only>
                  <form-layout
                    :error="error"
                    :message="message"
                    :loading="loading"
                    :submit="$t('Submit')"
                    :show-submit="show_submit"
                    @submit-form="submitForm"
                  >
                    <input type="hidden" :value="data.id" name="id">
                    <input type="hidden" :value="$getLang" name="language">
                    <input type="hidden" :value="$getCurrency" name="currency">
                    <v-row>
                      <div class="col-md-12">
                        <CamperCategory v-show="ctab == 'category'" :tab="tab" />
                        <PartnerCamperGeneral v-show="ctab == 'general'" :tab="tab" />
                        <CamperVehicleData v-show="ctab == 'vehicle'" :life-on-board="life_on_board" />
                        <CamperConditions v-show="ctab == 'conditions'" :tab="tab" />
                        <CamperDescription v-show="ctab == 'description'" :tab="tab" />
                        <CamperLocation v-show="ctab == 'location'" :tab="tab" :citydata="citydata" />
                        <CamperAddons v-show="ctab == 'addons'" :tab="tab" :addons="addons" />
                      </div>
                    </v-row>
                  </form-layout>
                </client-only>
              </div>
            </v-row>
            <v-divider class="mt-3 mb-4" />
            <!-- category -->
            <v-row v-show="ctab == 'category'" class="px-6 pt-1 pb-2">
              <v-spacer />
              <v-btn class="teal mr-3 mb-3 mt-5" dark @click="ctab = 'general'">
                {{ $t('Next') }}
              </v-btn>
            </v-row>

            <!-- general -->
            <v-row v-show="ctab == 'general'" class="px-6 pt-1 pb-2">
              <v-btn class="teal ml-3 mb-3" dark @click="ctab = 'category'">
                {{ $t('Back') }}
              </v-btn>
              <v-spacer />
              <v-btn class="teal mr-3 mb-3" dark @click="ctab = 'vehicle'">
                {{ $t('Next') }}
              </v-btn>
            </v-row>

            <!-- vehicle -->
            <v-row v-show="ctab == 'vehicle'" class="px-6 pt-1 pb-2">
              <v-btn class="teal ml-3 mb-3" dark @click="ctab = 'general'">
                {{ $t('Back') }}
              </v-btn>
              <v-spacer />
              <v-btn class="teal mr-3 mb-3" dark @click="ctab = 'conditions'">
                {{ $t('Next') }}
              </v-btn>
            </v-row>

            <!-- conditions -->
            <v-row v-show="ctab == 'conditions'" class="px-6 pt-1 pb-2">
              <v-btn class="teal ml-3 mb-3" dark @click="ctab = 'vehicle'">
                {{ $t('Back') }}
              </v-btn>
              <v-spacer />
              <v-btn class="teal mr-3 mb-3" dark @click="ctab = 'description'">
                {{ $t('Next') }}
              </v-btn>
            </v-row>

            <!-- description -->
            <v-row v-show="ctab == 'description'" class="px-6 pt-1 pb-2">
              <v-btn class="teal ml-3 mb-3" dark @click="ctab = 'conditions'">
                {{ $t('Back') }}
              </v-btn>
              <v-spacer />
              <v-btn class="teal mr-3 mb-3" dark @click="ctab = 'location'">
                {{ $t('Next') }}
              </v-btn>
            </v-row>

            <!-- location -->
            <v-row v-show="ctab == 'location'" class="px-6 pt-1 pb-2">
              <v-btn class="teal ml-3 mb-3" dark @click="ctab = 'description'">
                {{ $t('Back') }}
              </v-btn>
              <v-spacer />
              <v-btn class="teal mr-3 mb-3" dark @click="ctab = 'addons'">
                {{ $t('Next') }}
              </v-btn>
            </v-row>

            <!-- addons -->
            <v-row v-show="ctab == 'addons'" class="px-6 pt-1 pb-2">
              <v-btn class="teal ml-3 mb-3" dark @click="ctab = 'location'">
                {{ $t('Back') }}
              </v-btn>
              <v-spacer />
            </v-row>
          </v-card>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import PartnerCamperGeneral from '~/components/partner/add-camper/PartnerCamperGeneral.vue'
import CamperCategory from '~/components/partner/add-camper/CamperCategory.vue'
import CamperVehicleData from '~/components/partner/add-camper/CamperVehicleData.vue'
import CamperConditions from '~/components/partner/add-camper/CamperConditions.vue'
import CamperDescription from '~/components/partner/add-camper/CamperDescription.vue'
import CamperLocation from '~/components/partner/add-camper/CamperLocation.vue'
import CamperAddons from '~/components/partner/add-camper/CamperAddons.vue'
export default {
  components: {
    PartnerCamperGeneral,
    CamperCategory,
    CamperVehicleData,
    CamperConditions,
    CamperDescription,
    CamperLocation,
    CamperAddons
  },
  data () {
    return {
      ctab: 'category',
      data: {},
      meta: '',
      loading: false,
      pageLoading: true,
      error: '',
      message: '',
      life_on_board: [],
      catOptions: [],
      citydata: [],
      addons: [],
      addoncheck: [],
      tab: this.$getLang,
      images: []
    }
  },
  computed: {
    show_submit () {
      if (this.ctab === 'addons') {
        return true
      }
      return false
    },
    pageHeading () {
      if (this.ctab === 'category') {
        return this.$langAdmin('ChooseCamperCategory')
      } else if (this.ctab === 'vehicle') {
        return this.$langAdmin('CamperDetails')
      } else if (this.ctab === 'general') {
        return this.$langAdmin('GeneralDetails')
      } else if (this.ctab === 'conditions') {
        return this.$langAdmin('CamperBookingConditions')
      } else if (this.ctab === 'description') {
        return this.$langAdmin('CamperDescription')
      } else if (this.ctab === 'location') {
        return this.$langAdmin('CamperLocation')
      } else if (this.ctab === 'seasonal price') {
        return this.$langAdmin('SetSeasonalPrice')
      } else if (this.ctab === 'addons') {
        return this.$langAdmin('CamperAddons')
      }
      return ''
    }
  },
  mounted () {
    this.getData()
    if (this.$login && this.$getUser.role !== 2) {
      this.$router.push({ path: '/' })
    }
  },
  methods: {
    getData () {
      this.getCatData()
      this.getlCatData()
      this.getlCityData()
      this.getlAddonData()
    },
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      this.$api.post('vendor/addcamper', formData).then((res) => {
        this.loading = false
        if (res.data.status) {
          this.message = res.data.message
          setTimeout(() => {
            this.$router.push({ path: '/partner/camper' })
          }, 1000)
        } else {
          this.error = res.data.error
        }
      })
    },
    getCatData () {
      this.$api('categorylisting/camper').then((res) => {
        // console.log(res.data.data)
        // this.loading = false
        this.catOptions = this.$psJSON(res.data.data)
      })
    },
    getlCatData () {
      this.$api('categorylisting/life_on_board').then((res) => {
        // console.log(res.data.data)
        // this.loading = false
        this.life_on_board = res.data.data
      })
    },
    getlCityData () {
      this.$api('contentlisting/city').then((res) => {
        // console.log(res.data.data)
        // this.loading = false
        this.citydata = res.data.data
      })
    },
    getlAddonData () {
      this.$api('addonlisting/addon').then((res) => {
        // console.log(res.data.data)
        // this.loading = false
        this.addons = res.data.data
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
  },
  head () {
    return {
      title: this.$langAdmin('AddCamper'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('AddCamper')
        }
      ]
    }
  }
}
</script>
