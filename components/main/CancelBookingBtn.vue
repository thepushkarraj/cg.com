<template>
  <tr>
    <td>
      <v-icon color="primary" class="mr-2">
        mdi-clipboard-check
      </v-icon>
      {{ $langAdmin('BookingStatus') }}
    </td>
    <td v-if="$getUser.role === 1">
      {{ $bookingStatus(status) }}
      <v-btn
        v-if="status === 7"
        x-small
        depressed
        outlined
        class="ml-2"
        color="green"
        @click="approveform(camperid)"
      >
        {{ $t('CalcellationApprove') }}
      </v-btn>
      <v-btn
        v-if="status === 7"
        x-small
        depressed
        outlined
        class="ml-2"
        color="red"
        @click="submitForm(1)"
      >
        {{ $t('Reject') }}
      </v-btn>
      <v-btn
        v-if="status === 4"
        x-small
        depressed
        outlined
        class="ml-2"
        color="green"
        @click="submitForm(5)"
      >
        {{ $t('MakeRefund') }}
      </v-btn>
      <v-divider v-if="cancelNote" class="my-2" />
      <p v-if="cancelNote">
        <strong> {{ $t('CancellationNote') }}: </strong> {{ data.cancel_reason }}
      </p>
    </td>
    <td v-else-if="$getUser.role === 2">
      {{ $bookingStatus(status) }}
    </td>
    <td v-else-if="$getUser.role === 3">
      {{ $bookingStatus(status) }}
      <v-btn
        v-if="status === 1"
        x-small
        depressed
        outlined
        class="ml-2"
        color="red"
        @click="cancel = !cancel"
      >
        {{ $t('Cancel') }}
      </v-btn>
      <v-divider v-if="cancelNote" class="my-2" />
      <p v-if="cancelNote">
        <strong>{{ $t('CancellationNote') }}: </strong> {{ data.cancel_reason }}
      </p>
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
      cancel: false,
      cancelLoading: false,
      approveLoading: false,
      status: parseInt(this.data.booking_status),
      camperid: this.data.id
    }
  },
  computed: {
    cancelNote () {
      // console.log(this.data)
      // console.log(this.data)
      if (this.status === 7 || this.status === 4 || this.status === 5 || this.status === 2) {
        return true
      }
      return false
    }
  },
  watch: {
    cancel (val) {
      this.changeStatus(val)
    }
  },
  mounted () {
    this.changeStatus(this.cancel)
  },
  methods: {
    changeStatus (val) {
      this.$emit('change-status', val)
    },
    submitForm (val) {
      const formData = new FormData()
      formData.append('booking_status', val)
      this.$api.post('admin/bookingstatus/' + this.$route.params.id, formData).then((res) => {
        if (res.data.status) {
          this.message = res.data.message
          this.status = parseInt(res.data.data)
        } else {
          this.error = res.data.error
        }
      })
    },
    approveform (val) {
      this.$api.post('admin/refund/' + this.$route.params.id).then((res) => {
        // console.log(res.data)
        if (res.data.status) {
          this.message = res.data.message
          this.status = parseInt(res.data.data)
        } else {
          this.error = res.data.error
        }
      })
    }
  }
}
</script>
