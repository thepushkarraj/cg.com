<template>
  <v-row>
    <div class="col-md-12">
      <v-card>
        <v-container fluid>
          <v-row class="pb-0">
            <div class="col-6">
              <h3 class="mt-2">
                <slot name="heading" />
              </h3>
            </div>
            <div class="col-6 text-right">
              <slot name="actions" />
            </div>
          </v-row>
          <v-divider class="my-4" />
          <slot name="subheader" />
          <slot />
        </v-container>
      </v-card>
    </div>
  </v-row>
</template>
