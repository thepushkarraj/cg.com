<template>
  <section>
    <p v-if="message" class="red--text text-center">
      {{ message }}
    </p>
    <v-btn
      v-if="!data.data.available"
      class="red rounded-xl login_popup"
      block
      dark
      x-large
    >
      {{ $t('NotAvailable') }}
    </v-btn>
    <v-btn
      v-else-if="$login && $getBooking.start_date && $getBooking.end_date"
      :to="localePath('/booking/checkout')"
      class="green rounded-xl login_popup"
      block
      dark
      x-large
    >
      {{ $t('BookNow') }}
    </v-btn>
    <v-btn
      v-else-if="!$login"
      block
      class="green rounded-xl login_popup"
      dark
      x-large
    >
      {{ $t('BookNow') }}
    </v-btn>
    <v-btn
      v-else
      block
      class="green rounded-xl login_popup"
      dark
      x-large
      @click="message = $t('SelectBookingDates')"
    >
      {{ $t('BookNow') }}
    </v-btn>
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default () {
        return []
      }
    },
    messageVal: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      message: this.messageVal
    }
  },
  watch: {
    messageVal (val) {
      this.message = val
    }
  },
  mounted () {
    const p = new URLSearchParams(window.location.search)
    const status = p.get('status')
    console.log(status)
    if (status === 'na') {
      this.message = this.$multiLang('CamperIsNotAvailableForSelectedDates')
    }
  }
}
</script>
