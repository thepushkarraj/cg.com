<template>
  <AdminFaqPageAdd
    :type="'faq'"
    :name="$t('Faq')"
    :base-url="localePath('/admin/faq/')"
    :selectoption="true"
  />
</template>

<script>
import AdminFaqPageAdd from '~/components/admin/pages/AdminFaqPageAdd'
export default {
  layout: 'admin',
  components: {
    AdminFaqPageAdd
  },
  head () {
    return {
      title: this.$langAdmin('AddFaqTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('AddFaqDes')
        }
      ]
    }
  }
}
</script>
