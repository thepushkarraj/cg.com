<template>
  <AdminPageEdit
    :type="'blog'"
    :name="$t('Post')"
    :base-url="localePath('/admin/blog/')"
    :selectoption="true"
  />
</template>

<script>
import AdminPageEdit from '~/components/admin/pages/AdminPageEdit'
export default {
  layout: 'admin',
  components: {
    AdminPageEdit
  },
  head () {
    return {
      title: this.$langAdmin('EditBlogTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('EditBlogDes')
        }
      ]
    }
  }
}
</script>
