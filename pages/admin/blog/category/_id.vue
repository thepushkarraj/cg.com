<template>
  <AdminCategoryEdit
    :type="'blog'"
    :name="$t('BlogCategory')"
    :base-url="localePath('/admin/blog/category/')"
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
