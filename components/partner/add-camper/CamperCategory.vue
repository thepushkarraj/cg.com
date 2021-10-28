<template>
  <v-row>
    <div v-if="loading" class="col-12">
      <h1 class="text-center">
        <v-btn loading class="transparent" depressed large />
      </h1>
    </div>
    <div v-for="item in catOptions" v-else :key="item.id" class="col-md-4 col-sm-6">
      <v-card class="rounded" style="overflow:hidden">
        <label>
          <input type="radio" name="category_id" :value="item.id" checked>
          <img style="width:100%" :src="$mediaBase + item.image_thumb">
          <p class="text-center mb-2"> {{ $lang(item.name) }} </p>
        </label>
      </v-card>
    </div>
  </v-row>
</template>

<script>
export default {
  data () {
    return {
      catOptions: [],
      loading: true
    }
  },
  mounted () {
    this.getCatData()
  },
  methods: {
    getCatData () {
      this.$api('categorylistingpartner/camper').then((res) => {
        this.catOptions = res.data.data
        this.loading = false
      })
    }
  }
}

</script>
<style scoped>
img{width:300px;height:200px;object-fit:cover;}
[type=radio] {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
}

/* IMAGE STYLES */
[type=radio] + img {
  cursor: pointer;
}

/* CHECKED STYLES */
[type=radio]:checked + img {
  border: 4px solid #f00;
}
</style>
