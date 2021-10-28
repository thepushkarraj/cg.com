<template>
  <one-row>
    <template #heading>
      {{ $t('Dashboard') }}
    </template>
    <DashboardGraph />
    <v-row>
      <div
        v-for="(card,index) in cards"
        :key="index"
        class="col-md-6"
      >
        <v-card :to="localePath(card.to)">
          <div
            class="white--text align-end primary"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <h1 class="pl-4 pt-4">
              {{ card.count }}
            </h1>
            <v-card-title class="pt-0" v-text="card.title" />
          </div>
        </v-card>
      </div>
    </v-row>
  </one-row>
</template>

<script>
import DashboardGraph from '~/components/main/DashboardGraph.vue'
export default {
  components: {
    DashboardGraph
  },
  layout: 'admin',
  data () {
    return {
      data: [],
      loading: true,
      cards: [
        { title: this.$multiLang('Campers'), to: '/admin/camper/', count: 0 },
        { title: this.$multiLang('Booking'), to: '/admin/booking/', count: 0 },
        { title: this.$multiLang('BlogPosts'), to: '/admin/blog/', count: 0 },
        { title: this.$multiLang('Customers'), to: '/admin/customers/', count: 0 },
        { title: this.$multiLang('Partners'), to: '/admin/partner/', count: 0 },
        { title: this.$multiLang('Faq'), to: '/', count: 0 }
      ]
    }
  },
  watch: {
    data (val) {
      this.cards = [
        { title: this.$multiLang('Campers'), to: '/admin/camper/', count: val.camper },
        { title: this.$multiLang('Booking'), to: '/admin/booking/', count: val.booking },
        { title: this.$multiLang('BlogPosts'), to: '/admin/blog/', count: val.post },
        { title: this.$multiLang('Customers'), to: '/admin/customer/', count: val.customers },
        { title: this.$multiLang('Partners'), to: '/admin/partner/', count: val.partners },
        { title: this.$multiLang('FaqTitle'), to: '/admin/faq/', count: val.faq }
      ]
    }
  },
  mounted () {
    this.$api('admin/dashboard').then((res) => {
      this.loading = false
      this.data = res.data.data
      // console.log(res.data.data)
    })
  },
  head () {
    return {
      title: this.$langAdmin('Dashboard'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('Dashboard')
        }
      ]
    }
  }
}
</script>
