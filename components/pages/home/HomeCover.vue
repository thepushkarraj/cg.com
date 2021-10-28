<template>
  <div
    class="slider"
    style="
      background-image: linear-gradient(0deg, #33333300, #33333300), url('/img/cover1.jpg');
      background-position: bottom right;
      background-size: cover;
    "
  >
    <v-container class="pa-10" style="min-height: 500px">
      <div class="d-none d-sm-block" style="height:200px" />
      <div class="row">
        <v-col md="12" xs="12" class="text-center">
          <h1 class="mt-5 mb-5 pt-5 white--text">
            {{ $t('CoverHeading') }}
          </h1>
        </v-col>
      </div>
      <v-row>
        <v-col
          md="12"
          class="pa-5 mb-16 rounded-xl"
          style="background:#00000088"
        >
          <div class="v-sheet v-sheet--outlined">
            <CamperFilter />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
