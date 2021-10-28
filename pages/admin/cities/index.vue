<template>
  <AdminPageList
    :type="'city'"
    :name="$t('City')"
    :base-url="localePath('/admin/cities/')"
    :selectoption="false"
  />
</template>

<script>
import AdminPageList from '~/components/admin/pages/AdminPageList'
export default {
  layout: 'admin',
  components: {
    AdminPageList
  },
  head () {
    return {
      title: this.$langAdmin('CityTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('CityDes')
        }
      ]
    }
  }
}

</script>
