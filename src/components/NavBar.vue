<template>
   <nav>
       <v-toolbar 
        fixed
        app
        clipped
        class="white"
        light>
           <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
           <v-toolbar-title  
            style="width: 300px"
            class="ml-0 pl-3"
            dark
            app
            :clipped-left="$vuetify.breakpoint.mdAndUp"
            fixed
            color="teal darken-1--text text--lighten-1">

            
               <span class="hidden-sm-and-down" >LACTOGAL-RH </span>
               <v-avatar size="25px" tile>
                <img
                    src="@/assets/App.png"
                    alt="Lactogal"
                >
                </v-avatar>

           </v-toolbar-title>
           <v-spacer></v-spacer>
           <v-btn flat
           class=" red--text text--lighten-1" 
           v-on:click="logout">
               
               <span >Log Out</span>
               <v-icon>exit_to_app</v-icon>
           </v-btn>
       </v-toolbar>

       <v-navigation-drawer 
       v-model="drawer"
        app
        class="light-blue lighten-5">
           <v-list>
               <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                   <v-list-tile-action>
                       <v-icon class="">{{ link.icon  }}</v-icon>
                   </v-list-tile-action>
                   <v-list-tile-content>
                       <v-list-tile-title >{{ link.text }}</v-list-tile-title>
                   </v-list-tile-content>

               </v-list-tile>
           </v-list>
       </v-navigation-drawer>
   </nav>
</template>

<script>
import firebase from 'firebase';

export default {
    
    data()
    {
        return {
            drawer: true,
            links:[
                {icon:'contacts', text: 'Feed', route: '/'},
                {icon:'folder', text: 'Minhas tarefas', route: '/my'},
                
            ]
        }
    },
    methods: {
    logout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ path: 'login' });
        });
    }
  }
    
}
</script>
