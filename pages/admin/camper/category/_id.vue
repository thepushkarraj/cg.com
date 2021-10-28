<template>
  <AdminCategoryEdit
    :type="'camper'"
    :name="$t('CamperType')"
    :base-url="localePath('/admin/camper/category/')"
  />
</template>

<script>
import AdminCategoryEdit from '~/components/admin/category/AdminCategoryEdit'
export default {
  layout: 'admin',
  components: {
    AdminCategoryEdit
  },
  head () {
    return {
      title: this.$langAdmin('EditCamperTypeTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('EditCamperTypeDes')
        }
      ]
    }
  }
}
</script>
