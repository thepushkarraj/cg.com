<template>
  <AdminCategoryAdd
    :type="'faq'"
    :name="$t('FaqCategory')"
    :base-url="localePath('/admin/faq/category/')"
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
