<template>
  <one-row v-if="!pageLoading" class="mb-5">
    <template #heading>
      {{ $t('EditCamper') }}
    </template>
    <template #actions>
      <v-btn class="success" dark :to="localePath('/admin/camper/add')">
        <v-icon>mdi-plus</v-icon>
        <span class="d-none d-sm-block">{{ $t('AddCamper') }}</span>
      </v-btn>
    </template>
    <form-layout :error="error" :message="message" :loading="loading" :submit="$t('Submit')" @submit-form="submitForm">
      <input type="hidden" :value="data.id" name="id">
      <input type="hidden" :value="$getLang" name="language">
      <input type="hidden" :value="$getCurrency" name="currency">
      <MultiLangFields @change-lang="changeLang" />
      <div class="row">
        <div class="col-md-12">
          <h4 class="text-uppercase">
            {{ tab }}
          </h4>
          <v-divider class="my-2" />
        </div>
      </div>
      <v-row>
        <div class="col-md-12">
          <v-btn :class="{primary: ctab == 'General', teal: ctab != 'General'}" class="mr-3 mb-3" dark @click="ctab = 'General'">
            {{ $t('General') }}
          </v-btn>
          <v-btn :class="{primary: ctab == 'VehicleDetails', teal: ctab != 'VehicleDetails'}" class="mr-3 mb-3" dark @click="ctab = 'VehicleDetails'">
            {{ $t('VehicleDetails') }}
          </v-btn>
          <v-btn :class="{primary: ctab == 'Conditions', teal: ctab != 'Conditions'}" class="mr-3 mb-3" dark @click="ctab = 'Conditions'">
            {{ $t('Conditions') }}
          </v-btn>
          <v-btn :class="{primary: ctab == 'Description', teal: ctab != 'Description'}" class="mr-3 mb-3" dark @click="ctab = 'Description'">
            {{ $t('Description') }}
          </v-btn>
          <v-btn :class="{primary: ctab == 'Location', teal: ctab != 'Location'}" class="mr-3 mb-3" dark @click="ctab = 'Location'">
            {{ $t('Location') }}
          </v-btn>
          <v-btn :class="{primary: ctab == 'SeasonalPrice', teal: ctab != 'SeasonalPrice'}" class="mr-3 mb-3" dark @click="ctab = 'SeasonalPrice'">
            {{ $t('SeasonalPrice') }}
          </v-btn>
          <v-btn :class="{primary: ctab == 'Addons', teal: ctab != 'Addons'}" class="mr-3 mb-3" dark @click="ctab = 'Addons'">
            {{ $t('Addons') }}
          </v-btn>
        </div>
        <div class="col-md-12">
          <h3 class="mb-2" v-text="$t(ctab)" />
          <v-divider />
        </div>
        <div class="col-md-12">
          <CamperGeneral v-show="ctab == 'General'" :tab="tab" :data="data" :images="images" :cat-options="catOptions" />
          <CamperVehicleData v-show="ctab == 'VehicleDetails'" :data="data" :life-on-board="life_on_board" />
          <CamperConditions v-show="ctab == 'Conditions'" :tab="tab" :data="data" />
          <CamperDescription v-show="ctab == 'Description'" :tab="tab" :data="data" />
          <CamperLocation v-show="ctab == 'Location'" :tab="tab" :data="data" :citydata="citydata" />
          <SeasonalPrice v-show="ctab == 'SeasonalPrice'" :tab="tab" :data="data" />
          <CamperAddons v-show="ctab == 'Addons'" :tab="tab" :addons="addons" :addoncheck="addoncheck" />
        </div>
      </v-row>
    </form-layout>
  </one-row>
</template>

<script>
import CamperGeneral from '~/components/admin/camper/CamperGeneral.vue'
import CamperVehicleData from '~/components/admin/camper/CamperVehicleData.vue'
import CamperConditions from '~/components/admin/camper/CamperConditions.vue'
import CamperDescription from '~/components/admin/camper/CamperDescription.vue'
import CamperLocation from '~/components/admin/camper/CamperLocation.vue'
import SeasonalPrice from '~/components/admin/camper/SeasonalPrice.vue'
import CamperAddons from '~/components/admin/camper/CamperAddons.vue'
export default {
  layout: 'admin',
  components: {
    CamperGeneral,
    CamperVehicleData,
    CamperConditions,
    CamperDescription,
    CamperLocation,
    SeasonalPrice,
    CamperAddons
  },
  data () {
    return {
      ctab: 'General',
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
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.getCatData()
      this.getlCatData()
      this.getlCityData()
      this.getlAddonData()
      this.getlAddonCheck()
      this.$api('admin/singlecamper/' + this.$route.params.id).then((res) => {
        // console.log(res.data.data)
        this.data = this.$psJSON(res.data.data.data)
        this.images = JSON.parse(JSON.stringify(res.data.data.images))
        // console.log(typeof this.data)
        this.pageLoading = false
      })
    },
    submitForm () {
      // console.log('start')
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      this.$api.post('admin/editcamper/' + this.$route.params.id, formData).then((res) => {
        // console.log(res.data)
        this.loading = false
        if (res.data.status) {
          this.message = res.data.message
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
        this.addons = res.data.data
      })
    },
    getlAddonCheck () {
      this.$api('addonscheck/' + this.$route.params.id).then((res) => {
        // console.log(res.data.data)
        this.addoncheck = res.data.data
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
      title: this.$langAdmin('EditCamperTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('EditCamperDes')
        }
      ]
    }
  }
}
</script>
