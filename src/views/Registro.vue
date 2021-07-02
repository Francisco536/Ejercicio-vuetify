<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-row class="fill-height">
                  <v-col cols="12" md="4" class="teal accent-3">
                    <v-card-text class="white--text mt-12">
                      <h1 class="text-center display-1">Bienvenido de nuevo</h1>
                      <h5 class="text-center">
                        Inicie sesión con su información personal
                      </h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined dark href="/"
                        >Iniciar sesión</v-btn
                      >
                    </div>
                  </v-col>

                  <v-col cols="12" md="8">
                    <v-card-text class="mt-12">
                      <h1
                        class="text-center display-2 teal--text text--accent-3"
                      >
                        Crear una cuenta
                      </h1>

                      <h4 class="text-center mt-4">
                        Utilice su correo para su registro
                      </h4>
                      <v-form  @submit.prevent="registro">
                        <v-text-field
                       prepend-icon="person"
                          label="Nombre"
                          name="nombre"
                          v-model="name"
                          type="text"
                          color="teal accent-3"
                          required
                        />
                        <v-text-field
                          label="Correo"
                          name="correo"
                          v-model="email"
                          prepend-icon="email"
                          type="text"
                          color="teal accent-3"
                          required
                        />
                        <v-text-field
                          id="password"
                          label="Contraseña"
                          name="password"
                          v-model="passw"
                          prepend-icon="lock"
                          type="password"
                          color="teal accent-3"
                          required
                        />
                        <div class="text-center mt-3">
                          <v-btn
                            type="submit"
                            rounded
                            color="teal accent-3"
                            dark
                            >Registrarse</v-btn
                          >
                        </div>
                      </v-form>
                      <v-alert class="mt-10" type="error" v-if="error">
                          {{error}}
                          </v-alert>
                    </v-card-text>
                  </v-col>
                </v-row>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import  '@/Firebase/init'
import firebase from 'firebase'

export default {
  data() {
    return {
      name: '',
      email: '',
      passw: '',
      error: ''
    };
  },
  
  methods: {
    registro() {
     this.error = ''
      if (this.name && this.email && this.passw) {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.passw)
        .then(user => {
           if(user){
                 user.user.updateProfile({
                displayName: this.name
                 }).then((u)=>{
                this.name=''
                this.correo=''
                this.pass=''
                this.$router.push({name: 'inicio'})
console.log(u)

                 }).catch((err)=>{
                     this.error = err.menssage
                 })
             }
        }).catch((err) => {
            this.error = err.menssage
          });
      } else {
        this.error = 'todos los campos son requeridos'
      }
    },
  },
};
</script>