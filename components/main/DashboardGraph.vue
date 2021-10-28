<template>
  <v-row>
    <client-only>
      <div class="col-md-6">
        <Apexchart width="100%" height="250" type="area" :options="chartOptions" :series="series" />
      </div>
      <div class="col-md-6">
        <Apexchart width="100%" height="250" type="area" :options="chartOptionsa" :series="seriesa" />
      </div>
    </client-only>
  </v-row>
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
      dates: [],
      values: [],
      datesa: [],
      valuesa: [],
      chartOptions: {},
      series: [],
      yaxis: [],
      chartOptionsa: {},
      seriesa: [],
      data: [],
      loading: true
    }
  },
  mounted () {
    this.getData()
    this.getAmount()
  },
  methods: {
    getData () {
      this.$api(this.$userRole() + '/dashboard-booking').then((res) => {
        this.loading = false
        this.dates = res.data.data.date
        this.values = res.data.data.value
        this.chartOptions = {
          chart: {
            id: 'vuechart-example',
            toolbar: {
              show: false
            }
          },
          xaxis: {
            categories: this.dates,
            labels: {
              show: false
            }
          },
          yaxis: [
            {
              title: {
                text: this.$multiLang('Bookings')
              }
            }],
          dataLabels: {
            enabled: false
          }
        }
        this.series = [{
          name: this.$multiLang('Bookings'),
          data: this.values
        }]
        // console.log(this.data)
      })
    },
    getAmount () {
      this.$api(this.$userRole() + '/booking-amount').then((res) => {
        this.loading = false
        this.datesa = res.data.data.date
        this.valuesa = res.data.data.value
        this.chartOptionsa = {
          chart: {
            id: 'vuechart-example',
            toolbar: {
              show: false
            }
          },
          xaxis: {
            categories: this.datesa,
            labels: {
              show: false
            }
          },
          yaxis: [
            {
              title: {
                text: this.$multiLang('Amount')
              }
            }],
          dataLabels: {
            enabled: false
          }
        }
        this.seriesa = [{
          name: this.$multiLang('Amount'),
          data: this.valuesa
        }]
        // console.log(this.data)
      })
    }
  }
}
</script>
