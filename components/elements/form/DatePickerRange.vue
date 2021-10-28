<template>
  <div class="box">
    <section>
      <HotelDatePicker
        :i18n="ptBr"
        :value="date"
        :hovering-tooltip="false"
        format="YYYY/MM/DD"
        :disabled-dates="dates"
        :starting-date-value="startDate"
        :ending-date-value="endDate"
        @check-in-changed="checkInChanged"
        @check-out-changed="checkOutChanged"
        @clear-selection="clearSelection"
      />
    </section>
  </div>
</template>

<script>
import HotelDatePicker from 'vue-hotel-datepicker2'
import 'vue-hotel-datepicker2/dist/vueHotelDatepicker2.css'
export default {
  components: {
    HotelDatePicker
  },
  props: {
    value: {
      type: String,
      default: ''
    },
    startingDateValue: {
      type: Date,
      default: null
    },
    disabledDates: {
      type: Array,
      default () {
        return []
      }
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    required: {
      type: Boolean,
      default: true
    },
    stateDateSet: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      ptBr: {
        night: this.$multiLang('Night'),
        nights: this.$multiLang('Nights'),
        'day-names': [
          this.$multiLang('Sun'),
          this.$multiLang('Mon'),
          this.$multiLang('Tue'),
          this.$multiLang('Wed'),
          this.$multiLang('Thur'),
          this.$multiLang('Fri'),
          this.$multiLang('Sat')
        ],
        'check-in': this.$multiLang('Startdate'),
        'check-out': this.$multiLang('Enddate'),
        'month-names': [
          this.$multiLang('January'),
          this.$multiLang('February'),
          this.$multiLang('March'),
          this.$multiLang('April'),
          this.$multiLang('May'),
          this.$multiLang('June'),
          this.$multiLang('July'),
          this.$multiLang('August'),
          this.$multiLang('September'),
          this.$multiLang('October'),
          this.$multiLang('November'),
          this.$multiLang('December')
        ],
        tooltip: {
          halfDayCheckIn: this.$multiLang('AvailableBooking'),
          halfDayCheckOut: this.$multiLang('AvailableBooking'),
          saturdayToSaturday: this.$multiLang('OnlySaturdayToSaturday'),
          sundayToSunday: this.$multiLang('OnlySundayToSunday'),
          minimumRequiredPeriod: 'A minimum of <br/> %{minNightInPeriod} %{night} is required.'
        },
        week: this.$multiLang('Week'),
        weeks: this.$multiLang('Weeks')
      },
      date: null,
      checkInDate: this.startingDateValue,
      dates: this.disabledDates,
      sd: '',
      ed: ''
    }
  },
  computed: {
    startDate () {
      const s = new URLSearchParams(window.location.search)
      const sd = s.get('startdate')
      if (sd) {
        return new Date(sd)
      } else if (this.stateDateSet && this.$getBooking.start_date) {
        return new Date(this.$getBooking.start_date)
      }
      return null
    },
    endDate () {
      const s = new URLSearchParams(window.location.search)
      const sd = s.get('enddate')
      if (sd) {
        return new Date(sd)
      } else if (this.stateDateSet && this.$getBooking.end_date) {
        return new Date(this.$getBooking.end_date)
      }
      return null
    }
  },
  // watch: {
  //   startDateValue (val) {
  //     console.log(val)
  //   },
  //   endDateValue (val) {
  //     console.log(val)
  //   }
  // },
  mounted () {
    // console.log(this.$multiLang('Submit'))
  },
  methods: {
    checkInChanged (val) {
      if (this.$getDate(val) !== '1970-01-01') {
        this.sd = this.$getDate(val)
        this.$store.commit('setBookingData', {
          start_date: this.$getDate(val)
        })
        setTimeout(() => {
          this.$emit('check-in-changed', val)
        }, 10)
      }
    },
    checkOutChanged (val) {
      if (this.$getDate(val) !== '1970-01-01') {
        this.ed = this.$getDate(val)
        const d1 = new Date(this.sd)
        const d2 = new Date(val)
        const diffTime = Math.abs(d2 - d1)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        this.$store.commit('setBookingData', {
          booking_days: diffDays + 1
        })

        this.$store.commit('setBookingData', {
          end_date: this.$getDate(val)
        })

        setTimeout(() => {
          this.$emit('check-out-changed', val)
        }, 10)
      }
    },
    clearSelection () {
      this.$store.commit('setBookingData', {
        end_date: '',
        start_date: ''
      })
    }
  }
}
</script>

<style>
.datepicker__dummy-wrapper {
    border-radius:20px!important;
    padding:3px!important;
}
.datepicker__month-day--first-day-selected, .datepicker__month-day--last-day-selected {
    background: #4cae50!important;
}
.datepicker__month-day--today .datepicker__month-day-wrapper {
    border: 2px solid #4cae50!important;
    padding-top: calc(100% - 5px);
}
@media screen and (min-width: 768px){
.datepicker__month-day--allowed-checkout:hover, .datepicker__month-day--valid:hover {
    background-color: #4cae50!important;
    color: #fff;
}}
.datepicker__month-day--selected {
    background-color: rgb(75 173 79 / 82%)!important;
}
.datepicker--open {
    right: 0px!important;
}
</style>
