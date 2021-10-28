<template>
  <v-container fluid>
    <v-container>
      <v-row>
        <div v-for="i, index in 3" :key="index" class="col-md-4">
          <v-card class="rounded-xl mb-12 pb-3">
            <v-skeleton-loader type="image" class="mb-1" />
            <v-skeleton-loader type="list-item-two-line" class="mb-1" />
            <v-divider />
            <v-skeleton-loader type="list-item-avatar" class="mb-1" />
          </v-card>
        </div>
      </v-row>
    </v-container>
  </v-container>
</template>
