<template>
  <AdminPageAdd
    :type="'page'"
    :name="$t('Page')"
    :base-url="localePath('/admin/page/')"
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
      title: this.$langAdmin('AddPageTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('AddPageDes')
        }
      ]
    }
  }
}
</script>
