<template>
  <AdminPageEdit
    :type="'page'"
    :name="$t('Page')"
    :base-url="localePath('/admin/page/')"
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
      title: this.$langAdmin('EditPageTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('EditPageDes')
        }
      ]
    }
  }
}
</script>
