<template>
  <span>
    <!-- <v-row v-for="item, index in $allLanguages" :key="index">
      <div v-show="tab === item.code" class="col-md-12">
      </div>
    </v-row> -->
    <v-row>
      <div class="col-md-6">
        <TextInput
          :value="data.no_of_gears"
          :label="$t('NumberofGears')"
          :tooltip="$t('NumberofGearsInCamper')"
          :name="'no_of_gears'"
          :required="false"
        />
        <TextInput
          :value="data.seats"
          :label="$t('NumberofSeats')"
          :tooltip="$t('NumberofSeatsInCamper')"
          :name="'seats'"
          :required="false"
        />
        <TextInput
          :value="data.beds"
          :label="$t('Beds')"
          :tooltip="$t('NumberofBedsInCamper')"
          :name="'beds'"
          :required="false"
        />
        <TextInput
          :value="data.first_registration"
          :label="$t('FirstRegistration')"
          :tooltip="$t('FirstRegistrationDate')"
          :name="'first_registration'"
          :required="false"
        />
        <TextInput
          :value="data.displacement"
          :label="$t('Displacement')"
          :tooltip="$t('DisplacementOfCamper')"
          :name="'displacement'"
          :required="false"
        />
        <TextInput
          :value="$toString(data.power)"
          :label="$t('Power')"
          :tooltip="$t('PowerOfCamper')"
          :name="'power'"
          :required="false"
        />
        <TextInput
          :value="$toString(data.length)"
          :label="$t('Length')"
          :tooltip="$t('LengthOfCamper')"
          :name="'length'"
          :required="false"
        />
      </div>
      <div class="col-md-6">
        <TextInput
          :value="$toString(data.width)"
          :label="$t('Width')"
          :tooltip="$t('WidthOfCamper')"
          :name="'width'"
          :required="false"
        />
        <TextInput
          :value="$toString(data.height)"
          :label="$t('Height')"
          :tooltip="$t('HeightOfCamper')"
          :name="'height'"
          :required="false"
        />
        <TextInput
          :value="$toString(data.weight)"
          :label="$t('Weight')"
          :tooltip="$t('WeightOfCamper')"
          :name="'weight'"
          :required="false"
        />
        <TextInput
          :value="$toString(data.mileage)"
          :label="$t('Mileage')"
          :tooltip="$t('MileageOfCamper')"
          :name="'mileage'"
          :required="false"
        />
        <TextInput
          :value="$toString(data.fuel_tank_capacity)"
          :label="$t('FuelTankCapacity')"
          :tooltip="$t('FuelTankCapacityOfCamper')"
          :name="'fuel_tank_capacity'"
          :required="false"
        />
        <!-- <SelectInputMulti
          :value="data.furnishing"
          :label="$t('FURNISHING')"
          :name="'furnishing'"
          :options="lifeOnBoard"
          :value-type="'number'"
        /> -->
        <!-- <div v-for="i, index in lifeOnBoard" :key="index" class="row">
          <div class="col-12 py-0 my-0">
            <v-checkbox
              class="mt-0"
              :name="'furnishing[]'"
              :value="i.value"
              :label="$lang(i.name)"
            />
          </div>
        </div> -->
      </div>
    </v-row>
  </span>
</template>

<script>
export default {
  props: ['data', 'lifeOnBoard'],
  data () {
    return {
      checked: ''
    }
  }
}
</script>
