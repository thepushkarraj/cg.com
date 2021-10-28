<template>
  <AdminCategoryList
    :type="'blog'"
    :name="$langAdmin('BlogCategory')"
    :base-url="localePath('/admin/blog/category/')"
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
      title: this.$langAdmin('CategoryTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('CategoryDes')
        }
      ]
    }
  }
}
</script>
