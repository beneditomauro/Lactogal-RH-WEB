
<template>
  <v-app>
    <NavBar/>
    <v-content class="mx-4">
       <router-view/>
    </v-content>

      <v-footer class="pa-3">
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>

  </v-app>
</template>

<script>

import NavBar from '@/components/NavBar'

import fb from '@/DB_config/firestore'


export default {
  name: 'App',
  components: {
    NavBar
    
    
  },
  data () {
    return {
    
    }
  }
}

</script>


