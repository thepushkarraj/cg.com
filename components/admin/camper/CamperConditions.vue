<template>
  <span>
    <v-row>
      <div class="col-md-12">
        <Checkbox
          :value="data.smoking"
          :name="'smoking'"
          :label="$t('SmokingAllowed')"
        />
        <Checkbox
          :value="data.animals_allowed"
          :name="'animals_allowed'"
          :label="$t('AnimalsAllowed')"
        />
        <Checkbox
          :value="data.driving_license"
          :name="'driving_license'"
          :label="$t('DrivingLicense')"
        />
        <Checkbox
          :value="data.insurance"
          :name="'insurance'"
          :label="$t('Insurance')"
        />
      </div>
    </v-row>
    <v-row>
      <div class="col-md-12">
        <v-select
          :value="data.minimum_age"
          outlined
          :name="'minimum_age'"
          :items="minimum_age"
          :label="$t('Age')"
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
      dates: [],
      menu: false
    }
  }
}
</script>
