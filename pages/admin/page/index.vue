<template>
  <AdminPageList :type="'page'" :name="$t('Page')" :base-url="localePath('/admin/page/')" />
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
      title: this.$langAdmin('PageTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('PageDes')
        }
      ]
    }
  }
}

</script>
