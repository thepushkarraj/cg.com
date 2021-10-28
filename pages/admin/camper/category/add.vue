<template>
  <AdminCategoryAdd
    :type="'camper'"
    :name="$t('CamperType')"
    :base-url="localePath('/admin/camper/category/')"
  />
</template>

<script>
import AdminCategoryAdd from '~/components/admin/category/AdminCategoryAdd'
export default {
  layout: 'admin',
  components: {
    AdminCategoryAdd
  },
  head () {
    return {
      title: this.$langAdmin('AddCamperTypeTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('AddCamperTypeDes')
        }
      ]
    }
  }
}
</script>
