<template>
  <AdminPageAdd
    :type="'city'"
    :name="$t('City')"
    :base-url="localePath('/admin/cities/')"
    :selectoption="false"
    :order="true"
  />
</template>

<script>
import AdminPageAdd from '~/components/admin/pages/AdminPageAdd'
export default {
  layout: 'admin',
  components: {
    AdminPageAdd
  },
  head () {
    return {
      title: this.$langAdmin('AddCityTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('AddCityDes')
        }
      ]
    }
  }
}
</script>
