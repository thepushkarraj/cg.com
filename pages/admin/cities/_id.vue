<template>
  <AdminPageEdit
    :type="'city'"
    :name="$t('City')"
    :base-url="localePath('/admin/cities/')"
    :selectoption="false"
    :order="true"
  />
</template>

<script>
import AdminPageEdit from '~/components/admin/pages/AdminPageEdit'
export default {
  layout: 'admin',
  components: {
    AdminPageEdit
  },
  head () {
    return {
      title: this.$langAdmin('EditCityTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('EditCityDes')
        }
      ]
    }
  }
}
</script>
