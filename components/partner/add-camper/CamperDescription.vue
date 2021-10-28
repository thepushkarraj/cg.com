<template>
  <span>
    <v-row v-for="item, index in $allLanguages" :key="index">
      <div v-show="tab === item.code" class="col-md-12">
        <TextEditor
          outlined
          :name="'description[' + item.code + ']'"
        />
        <TextInput
          class="mt-6"
          :label="$t('MetaTitle')"
          :name="'meta_title[' + item.code + ']'"
          :required="false"
          :icon="''"
        />
        <v-textarea
          outlined
          :label="$t('MetaDescription')"
          :name="'meta_description[' + item.code + ']'"
          :required="false"
        />
      </div>
    </v-row>
  </span>
</template>

<script>
export default {
  props: ['tab']
}
</script>
