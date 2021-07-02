<template v-slot:activator="{ on, attrs }">

    <v-content>
      <v-toolbar color="#1EE7AA ">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Bienvenido {{ user.displayName }}</v-toolbar-title>

        <v-spacer></v-spacer>
        
        <v-spacer></v-spacer>

        <v-menu bottom left>
          <template v-slot:activator="{ on, attrs }">
            <v-btn dark icon v-bind="attrs" v-on="on">
              <v-icon>language</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title>Español</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Ingles</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>
      <v-navigation-drawer v-model="drawer" absolute temporary dark>
        <template v-slot:prepend>
          <v-list dense>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="#1EE7AA ">account_circle</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ user.displayName }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-list dense>
            <v-list-item>
              <v-list-item-icon>
                <v-icon color="#1EE7AA ">mdi-email</v-icon>
              </v-list-item-icon>

              <v-list-item-content>
                <v-list-item-title>{{ user.email }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </template>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item>
            <v-list-item-content>
              <v-btn dark icon v-bind="attrs" v-on="on" @click.prevent="logout">
                <v-icon color="#1EE7AA ">exit_to_app</v-icon>
                Cerrar sesión
              </v-btn>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

 <template>
  <tabla></tabla>
 </template>
    </v-content>

</template>
<script>
import Tabla from '@/components/Tabla'
import firebase from "firebase";

export default {
  name: "inicio",
  data() {
    return {
      drawer: true,
      user: null,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "Home" });
        });
    },
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.user = user;
      } else {
        this.user = null;
      }
    });
  },
  components:{
    Tabla
    
  }
};
</script>