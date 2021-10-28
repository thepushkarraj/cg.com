<template>
  <div v-if="loading">
    <PageListing :list="20" />
  </div>
  <v-container v-else>
    <v-card class="pa-4">
      <v-row>
        <div class="col-lg-12">
          <div>
            <h3 class="pt-2">
              {{ $t('Contact') }}
            </h3>
            <v-divider class="my-3" />
            <v-simple-table style="width:100%;">
              <template v-slot:default>
                <tbody>
                  <tr>
                    <td>
                      {{ $multiLang('Name') }}
                    </td>
                    <td> {{ data.first_name }} {{ data.last_name }} </td>
                  </tr>
                  <tr>
                    <td>
                      {{ $multiLang('Email') }}
                    </td>
                    <td> {{ data.email }} </td>
                  </tr>
                  <tr>
                    <td>
                      {{ $multiLang('Street') }}
                    </td>
                    <td> {{ data.street }} </td>
                  </tr>
                  <tr>
                    <td>
                      {{ $multiLang('City') }}
                    </td>
                    <td> {{ data.city }} </td>
                  </tr>
                  <tr>
                    <td>
                      {{ $multiLang('Postcode') }}
                    </td>
                    <td> {{ data.zipcode }} </td>
                  </tr>
                  <tr>
                    <td>
                      {{ $multiLang('Phone') }}
                    </td>
                    <td> {{ data.phone }} </td>
                  </tr>
                  <tr>
                    <td>
                      {{ $multiLang('Additional') }}
                    </td>
                    <td> {{ data.additional }} </td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </div>
        </div>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  layout: 'admin',
  data () {
    return {
      data: [],
      loading: true
    }
  },
  mounted () {
    this.$api('admin/singlecontactlist/' + this.$route.params.id).then((res) => {
      this.loading = false
      this.data = this.$psJSON(res.data.data)
      // console.log(this.data)
    })
  },
  head () {
    return {
      title: this.$langAdmin('ContactsTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('ContactsDes')
        }
      ]
    }
  }
}
</script>
