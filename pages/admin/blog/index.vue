<template>
  <AdminPageList :type="'blog'" :name="$t('Post')" :base-url="localePath('/admin/blog/')" />
</template>

<script>
import AdminPageList from '~/components/admin/pages/AdminPageList'
export default {
  layout: 'admin',
  components: {
    AdminPageList
  },
  head () {
    return {
      title: this.$langAdmin('BlogTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('BlogDes')
        }
      ]
    }
  }
}

</script>
