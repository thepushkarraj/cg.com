<template>
  <AdminPageAdd
    :type="'blog'"
    :name="$t('Post')"
    :base-url="localePath('/admin/blog/')"
    :selectoption="true"
  />
</template>

<script>
import AdminPageAdd from '~/components/admin/pages/AdminPageAdd'
export default {
  layout: 'admin',
  components: {
    AdminPageAdd
  },
  head () {
    return {
      title: this.$langAdmin('AddBlogTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('AddBlogDes')
        }
      ]
    }
  }
}
</script>
