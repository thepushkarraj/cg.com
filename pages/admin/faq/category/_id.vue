<template>
  <AdminCategoryEdit
    :type="'faq'"
    :name="$t('FaqCategory')"
    :base-url="localePath('/admin/faq/category/')"
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
      title: this.$langAdmin('EditCategoryTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('EditCategoryDes')
        }
      ]
    }
  }
}
</script>
