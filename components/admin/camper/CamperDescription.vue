<template>
  <span>
    <v-row v-for="item, index in $allLanguages" :key="index">
      <div v-show="tab === item.code" class="col-md-12">
        <TextInput
          :value="$lang(data.meta_title,item.code)"
          :label="$t('MetaTitle')"
          :name="'meta_title[' + item.code + ']'"
          :required="false"
          :icon="'mdi-pencil'"
        />
        <TextEditor
          :value="$lang(data.description,item.code)"
          outlined
          :name="'description[' + item.code + ']'"
        />
        <v-textarea
          :value="$lang(data.meta_description,item.code)"
          outlined
          :label="$t('MetaDescription')"
          :name="'meta_description[' + item.code + ']'"
          :required="false"
          class="mt-8"
        />
      </div>
    </v-row>
  </span>
</template>

<script>
export default {
  props: ['data', 'tab'],
  data () {
    return {
      minimum_age: ['21', '22', '23', '24', '25', '26', '27', '28', '29', '30', 'More than 30'],
      yes_no: [this.$multiLang('Yes'), this.$multiLang('No')]
    }
  }
}
</script>
