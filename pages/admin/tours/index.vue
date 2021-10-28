<template>
  <AdminPageList :type="'tour'" :name="$langAdmin('Tour')" :base-url="localePath('/admin/tours/')" />
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
      title: this.$langAdmin('TourTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('TourDes')
        }
      ]
    }
  }
}

</script>
