<template>
  <AdminCategoryAdd
    :type="'blog'"
    :name="$t('BlogCategory')"
    :base-url="localePath('/admin/blog/category/')"
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
      title: this.$langAdmin('AddCategoryTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('AddCategoryDes')
        }
      ]
    }
  }
}
</script>
