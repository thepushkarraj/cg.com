<template>
  <AdminPageList :type="'addon'" :name="$t('Addon')" :base-url="localePath('/admin/addons/')" />
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
      title: this.$langAdmin('AddonTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('AddonDes')
        }
      ]
    }
  }
}

</script>
