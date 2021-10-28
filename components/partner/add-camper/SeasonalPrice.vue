<template>
  <v-row>
    <div class="col-md-3">
      <h3 class="pt-sm-16 pt-0">
        {{ $t('PricePerDay') }}
      </h3>
    </div>
    <div class="col-md-3">
      <p>
        <v-icon color="primary" class="mr-2">
          mdi-clipboard-check
        </v-icon>
        {{ $t('StandardSeason') }} <br>
        <v-icon color="primary" class="mr-2">
          mdi-calendar
        </v-icon>
        {{ $t('AprJunSepOct') }}
      </p>
      <TextInput
        class="mt-3"
        :label="$t('StandardSeasonPrice')"
        :name="'first_season'"
        :required="false"
        prepend-inner-icon="mdi-map-marker"
      />
    </div>
    <div class="col-md-3">
      <p>
        <v-icon color="primary" class="mr-2">
          mdi-clipboard-check
        </v-icon>
        {{ $t('HighSeason') }} <br>
        <v-icon color="primary" class="mr-2">
          mdi-calendar
        </v-icon>
        {{ $t('JulAug') }}
      </p>
      <TextInput
        class="mt-3"
        :label="$t('HighSeasonPrice')"
        :name="'second_season'"
        :required="false"
      />
    </div>
    <div class="col-md-3">
      <p>
        <v-icon color="primary" class="mr-2">
          mdi-clipboard-check
        </v-icon>
        {{ $t('WinterSeason') }} <br>
        <v-icon color="primary" class="mr-2">
          mdi-calendar
        </v-icon>
        {{ $t('NovMar') }}
      </p>
      <TextInput
        class="mt-3"
        :label="$t('WinterSeasonPrice')"
        :name="'third_season'"
        :required="false"
      />
    </div>
  </v-row>
</template>
