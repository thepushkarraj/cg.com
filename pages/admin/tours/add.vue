<template>
  <AdminPageAdd
    :type="'tour'"
    :name="$t('Tour')"
    :base-url="localePath('/admin/tours/')"
    :selectoption="false"
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
      title: this.$langAdmin('AddTourTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('AddTourDes')
        }
      ]
    }
  }
}
</script>
