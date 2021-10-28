<template>
  <tr>
    <td colspan="2" class="rounded-lg">
      <v-row v-if="data" class="pt-5">
        <div v-if="status === 1" class="col-md-12">
          <form-layout :error="error" :message="message" :loading="loading" :submit="$t('Submit')" @submit-form="submitForm">
            <input type="hidden" name="booking_status" :value="status">
            <v-textarea
              name="cancel_reason"
              :label="$t('TellWhyCancel')"
              value=""
              outlined
              :rules="[rules.required]"
              auto-grow
              :loading="loading"
            />
          </form-layout>
        </div>
        <div v-else-if="status === 7" class="col-md-12">
          <p>{{ $t('BookingCancellationRequest') }}</p>
        </div>
      </v-row>
    </td>
  </tr>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      error: '',
      message: '',
      loading: false,
      rules: {
        required: value => !!value || this.$multiLang('Required')
      },
      status: this.data.booking_status
    }
  },
  methods: {
    submitForm () {
      if (this.$getUser.role === 3) {
        this.submitFormInit()
        const form = document.getElementById('new_form')
        const formData = new FormData(form)
        this.$api.post('user/bookingstatus/' + this.$route.params.id, formData).then((res) => {
          this.submitFormRes(res)
        })
      }
    },
    submitFormRes (res) {
      // console.log(res.data.data.userdata)
      this.loading = false
      if (res.data.status) {
        this.message = res.data.message
        this.status = parseInt(res.data.data)
        document.getElementById('new_form').reset()
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
