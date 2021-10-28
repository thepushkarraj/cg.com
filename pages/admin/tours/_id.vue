<template>
  <AdminPageEdit
    :type="'tour'"
    :name="$t('Tour')"
    :base-url="localePath('/admin/tours/')"
    :selectoption="false"
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
      title: this.$langAdmin('EditTourTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('EditTourDes')
        }
      ]
    }
  }
}
</script>
