<template>
  <div>
    <one-row>
      <template #heading>
        {{ data.first_name + ' ' + data.last_name }}
      </template>
      <template #subheader />
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr>
              <td width="5%" style="min-width:40px;">
                <v-icon>
                  mdi-email
                </v-icon>
              </td>
              <td width="30%" style="min-width:100px;">
                <strong>
                  {{ $t('Email') }}:
                </strong>
              </td>
              <td> {{ data.email }} </td>
            </tr>
            <tr>
              <td>
                <v-icon>
                  mdi-cellphone
                </v-icon>
              </td>
              <td>
                <strong>
                  {{ $t('Phone') }}:
                </strong>
              </td>
              <td> {{ data.mobile }} </td>
            </tr>
            <tr>
              <td>
                <v-icon>
                  mdi-map-marker-check
                </v-icon>
              </td>
              <td>
                <strong>
                  {{ $t('Address') }}:
                </strong>
              </td>
              <td> {{ data.address }} </td>
            </tr>
            <tr>
              <td>
                <v-icon>
                  mdi-city-variant-outline
                </v-icon>
              </td>
              <td>
                <strong>
                  {{ $t('City') }}:
                </strong>
              </td>
              <td> {{ data.city }} </td>
            </tr>
            <tr>
              <td>
                <v-icon>
                  mdi-map
                </v-icon>
              </td>
              <td>
                <strong>
                  {{ $t('Country') }}:
                </strong>
              </td>
              <td> {{ data.country }} </td>
            </tr>
            <tr>
              <td>
                <v-icon>
                  mdi-information-outline
                </v-icon>
              </td>
              <td>
                <strong>
                  {{ $t('Status') }}:
                </strong>
              </td>
              <td> {{ (data.status == 1) ? 'Active' : 'Inactive' }} </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </one-row>
  </div>
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
      data: [],
      user: [],
      loading: false,
      pageLoading: true
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    getData () {
      this.$api('admin/userdata/' + this.$route.params.id).then((res) => {
        // console.log(res.data.data)
        this.loading = false
        this.data = this.$psJSON(res.data.data)
        this.pageLoading = false
      })
    }
  },
  head () {
    return {
      title: this.$langAdmin('EditProfileTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('EditProfileDes')
        }
      ]
    }
  }
}
</script>

<style>
  .border-bottom{
    border-bottom: 1px solid #ccc;
  }
</style>
