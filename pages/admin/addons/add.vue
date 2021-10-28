<template>
  <AdminAddonPageAdd
    :type="'addon'"
    :name="$t('Addon')"
    :base-url="localePath('/admin/addons/')"
  />
</template>

<script>
import AdminAddonPageAdd from '~/components/admin/pages/AdminAddonPageAdd'
export default {
  layout: 'admin',
  components: {
    AdminAddonPageAdd
  },
  head () {
    return {
      title: this.$langAdmin('AddAddonTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('AddAddonDes')
        }
      ]
    }
  }
}
</script>
