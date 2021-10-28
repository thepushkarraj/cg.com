<template>
  <AdminCategoryList
    :type="'faq'"
    :name="$t('FaqCategory')"
    :base-url="localePath('/admin/faq/category/')"
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
