<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
              
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 teal--text text--accent-3"
                        >Iniciar sesión</h1>
                        
                        <h4 class="text-center mt-4">Ejercicio Vuetify</h4>
                        <v-form @submit.prevent="login">
                          <v-text-field
                            label="Correo"
                            v-model="correo"
                            prepend-icon="email"
                            type="text"
                            color="teal accent-3"
                            
                          />

                          <v-text-field
                            id="password"
                            label="Contraseña"
                            v-model="pass"
                            prepend-icon="lock"
                            type="password"
                            color="teal accent-3"
                          />
                          <div class="text-center mt-3">
                        <v-btn type="submit" rounded color="teal accent-3" dark>Iniciar sesion</v-btn>
                      </div>
                        </v-form>
                         <v-alert class="mt-10" type="error" v-if="error">
                          {{error}}
                          </v-alert>
                        
                      </v-card-text>
                      
                    </v-col>
                    <v-col cols="12" md="4" class="teal accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Registrate</h1>
                      
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark href="/registro">Registrarse</v-btn>
                      </div>
                    </v-col>
                  </v-row>
             
                
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import '@/Firebase/init'
import firebase from 'firebase'
export default {
    data (){
        return {
            correo: '',
            pass: '', 
            error: ''

        }
    },
    name: 'Home',
 methods: {
    login(){
        this.error=''
        if (this.correo && this.pass) {
            firebase.auth().signInWithEmailAndPassword(this.correo, this.pass)
            .then(user => {
              this.$router.push({name: 'inicio'})
              console.log(user)
            }).catch(err =>{ 
                this.error = err.message
            })
        } else {
           this.error= 'Debe rellenar todos los campos'
        }
    }
    }
}
</script>