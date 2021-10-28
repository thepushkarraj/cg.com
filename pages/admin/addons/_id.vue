<template>
  <AdminAddonPageEdit
    :type="'addon'"
    :name="$t('Addon')"
    :base-url="localePath('/admin/addons/')"
  />
</template>

<script>
import AdminAddonPageEdit from '~/components/admin/pages/AdminAddonPageEdit'
export default {
  layout: 'admin',
  components: {
    AdminAddonPageEdit
  },
  head () {
    return {
      title: this.$langAdmin('EditAddonTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('EditAddonDes')
        }
      ]
    }
  }
}
</script>
