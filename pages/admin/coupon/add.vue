<template>
  <one-row class="mb-5">
    <template #heading>
      {{ $t('AddCoupon') }}
    </template>
    <template #actions>
      <v-btn class="success" dark :to="localePath('/admin/coupon')">
        <span class="d-none d-sm-block"> {{ $t('ViewAll') }}</span>
      </v-btn>
    </template>
    <form-layout :error="error" :message="message" :loading="loading" :submit="'Submit'" @submit-form="submitForm">
      <input type="hidden" :value="$getLang" name="language">
      <v-row>
        <div class="col-md-6">
          <v-row>
            <div class="col-md-12">
              <TextInput :label="$t('CoupenCode')" :name="'coupon_code'" :icon="''" />
              <SelectInput
                :label="$t('CoupenType')"
                :name="'price_type'"
                :options="coupon_options"
              />
              <TextInput :label="$t('CoupenPrice')" :name="'coupon_price'" :icon="''" />
              <DatePicker :label="$t('Startdate')" :name="'start_time'" :icon="''" />
              <DatePicker :value="'2021-05-28'" :label="$t('Enddate')" :name="'end_time'" :icon="''" />
            </div>
          </v-row>
        </div>
      </v-row>
    </form-layout>
  </one-row>
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
      date: new Date().toISOString().substr(0, 10),
      data: [],
      meta: '',
      loading: false,
      error: '',
      message: '',
      tab: this.$getLang,
      coupon_options: [
        {
          name: { en: 'Percent' },
          value: 'Percent'
        },
        {
          name: { en: 'Fix Price' },
          value: 'Fix Price'
        }
      ]
    }
  },
  methods: {
    submitForm () {
      this.submitFormInit()
      const form = document.getElementById('new_form')
      const formData = new FormData(form)
      this.$api.post('admin/addcoupen', formData).then((res) => {
        // console.log(res.data)
        this.loading = false
        if (res.data.status) {
          this.message = res.data.message
          setTimeout(() => {
            this.$router.push({ path: '/admin/coupon' })
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
  },
  head () {
    return {
      title: this.$langAdmin('AddCoupenTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('AddCoupenDes')
        }
      ]
    }
  }
}
</script>
