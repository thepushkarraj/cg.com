<template>
   <div class="text-center" v-if="$route.fullPath != '/'">
    <v-dialog
      v-model="dialog"
      width="500"
    >
     <Login v-if="login == true" v-on:checked="doSomething" />
     <Register v-else v-on:checked="doSomething" />
    </v-dialog>
  </div>
</template>
<script>
/* eslint-disable */
export default {
  data () {
    return {
      dialog: false,
      login: true
    }
  },
  mounted () {
    document.querySelectorAll('.login_popup').forEach(item => {
      item.addEventListener('click', event => {
        // alert('popup working')
        this.dialogSet()
      })
    })
  },
  methods: {
    dialogSet(){
      if (!this.$login) {
        this.dialog = true
      }
    },
    doSomething () {
      this.login = !this.login
    }
  }
}
</script>

