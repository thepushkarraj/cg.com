<template>
  <AdminCategoryList
    :type="'camper'"
    :name="$t('CamperType')"
    :base-url="localePath('/admin/camper/category/')"
  />
</template>

<script>
import AdminCategoryList from '~/components/admin/category/AdminCategoryList'
export default {
  layout: 'admin',
  components: {
    AdminCategoryList
  },
  head () {
    return {
      title: this.$langAdmin('CamperTypeTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('CamperTypeDes')
        }
      ]
    }
  }
}
</script>
