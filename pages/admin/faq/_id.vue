<template>
  <AdminFaqPageEdit
    :type="'faq'"
    :name="$t('Faq')"
    :base-url="localePath('/admin/faq/')"
    :selectoption="true"
  />
</template>

<script>
import AdminFaqPageEdit from '~/components/admin/pages/AdminFaqPageEdit'
export default {
  layout: 'admin',
  components: {
    AdminFaqPageEdit
  },
  head () {
    return {
      title: this.$langAdmin('EditFaqTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('EditFaqDes')
        }
      ]
    }
  }
}
</script>
