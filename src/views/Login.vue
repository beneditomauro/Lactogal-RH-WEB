<template>
  <v-form>
    <v-text-field prepend-icon="person" :rules="emailRules" v-model="email" required name="login" label="email" type="text"></v-text-field>
    <v-text-field v-model="password" required prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
          


    <v-btn
      
      color="success"
      @click="login"
    >
      Login
    </v-btn>


  </v-form>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'login',
  data: function() {
    return {
      email: '',
      emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'Email inválido'
    ],
      password: ''
    };
  },
  methods: {
    login: function(e) {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            //alert(`You are logged in as ${user.email}`);
            this.$router.push({ path: '/' });
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>