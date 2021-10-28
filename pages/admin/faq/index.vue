<template>
  <AdminPageList :type="'faq'" :name="$t('FAQ')" :base-url="localePath('/admin/faq/')" />
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
      title: this.$langAdmin('FaqTitle'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$langAdmin('FaqDes')
        }
      ]
    }
  }
}

</script>
