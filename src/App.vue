<template>
  <v-app>
  <v-layout>
    <v-flex xs12>
      <v-card >
        <v-img
          src="https://image.shutterstock.com/image-photo/wood-wall-background-texture-natural-260nw-754092013.jpg"
          height="190px"
          aspect-ratio="2.75"
        >
          <v-container >
            <v-layout fill-height>
              <v-flex xs12 class="text-xs-center title" flexbox>
                <br>
                <div class="font-italic" >Curriculum Vitae</div><br>
                <div class="headline  font-weight-black font-italic">Juan Arístides Meaño</div>
                <br>
                <code >< Desarrollador Web /></code>
                
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>

        <v-layout row wrap>
          <v-flex xs4 >
            <v-card color="gray lighten-1">
              <v-container >
                <v-layout row wrap >
                  <v-flex>
                    <div style="text-align:center">
                      <v-avatar size="150" >
                        <img
                        src="https://cdn.vuetifyjs.com/images/john.jpg"
                        alt="John">
                      </v-avatar>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
              <v-layout row>
                <v-flex xs12 >
                      <template v-for="(item, index) in items">
                      
                        <v-subheader 
                          v-if="item.header"
                          :key="item.header"
                        >
                        
                          {{ item.header }}
                        </v-subheader>

                        <v-divider
                          v-else-if="item.divider"
                          :inset="item.inset"
                          :key="index"
                        ></v-divider>

                        <v-list-tile 
                          v-else
                          :key="item.title">
                          <v-list-tile-avatar>
                              <v-icon medium>{{ item.icon }}</v-icon>
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </template>
                </v-flex>
              </v-layout>
              <v-divider></v-divider>
              <v-layout row>
                <v-flex xs12 >
                      <template v-for="(item, index) in itemsContacto">
                        <v-subheader 
                          v-if="item.header"
                          :key="item.header"
                        >
                          {{ item.header }}
                        </v-subheader>

                        <v-divider
                          v-else-if="item.divider"
                          :inset="item.inset"
                          :key="index"
                        ></v-divider>

                        <v-list-tile 
                          v-else
                          :key="item.title">
                          <v-list-tile-avatar>
                              <v-icon medium>{{ item.icon }}</v-icon>
                          </v-list-tile-avatar>
                          <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                          </v-list-tile-content>
                        </v-list-tile>
                      </template>
                </v-flex>
              </v-layout>

              <v-divider></v-divider>
              <v-layout row>
                <v-flex xs12 >
                <template >
                  <v-subheader>
                     LINKS
                  </v-subheader>
                  <v-container>
                    <v-btn class="pt-1" href="https://www.linkedin.com/in/juan-meanho/" block color="#0077B5" dark><linkedin-icon/></v-btn>
                      <p class="text-xs-center caption font-italic">https://www.linkedin.com/in/juan-meanho/</p>
                    
                    <v-btn class="pt-1" href="https://github.com/juanmeanho" block color="grey darken-3" dark><github-icon/></v-btn>
                      <p class="text-xs-center caption font-italic">https://github.com/juanmeanho</p>

                    <v-btn class="pt-1" href="https://www.facebook.com/juan.meano" block color="#3b5998" dark><facebook-icon/></v-btn>
                      <p class="text-xs-center caption font-italic">https://www.facebook.com/juan.meano</p>

                    <v-btn class=" text-capitalize" href="https://www.facebook.com/juan.meano" block color="teal" dark>Curriculum Vitae</v-btn>
                      <p class="text-xs-center caption font-italic">https://www.facebook.com/juan.meano</p>
                  </v-container>
                </template>
                <v-divider></v-divider>
                <template >
                  <v-subheader>
                     Aficiones
                  </v-subheader>
                  <v-container>
                    <v-avatar><soccer-icon/></v-avatar>
                    <v-avatar><library-icon/></v-avatar>
                    <v-avatar><airplane-icon/></v-avatar>
                    <v-avatar><beach-icon/></v-avatar>
                    <v-avatar><headphones-icon/></v-avatar>
                    <v-avatar><movie-icon/></v-avatar>
                  </v-container>
                </template>
                <template >
                    <v-footer class="mt-3" color="primary lighten-1" height="50px">
                      <v-layout
                        justify-center
                        row
                        wrap
                      >
                        <v-flex
                          primary
                          lighten-2
                          py-3
                          text-xs-center
                          white--text
                          xs12
                        >
                          Ultima Actualización: <strong> Septiembre de 2018</strong>
                        </v-flex>
                      </v-layout>
                    </v-footer>
                </template>
                     
                </v-flex>
              </v-layout>

            </v-card>
          </v-flex>

          <v-flex xs8>
            <v-card>
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12>
                    <span class="headline"><v-icon medium>person</v-icon>&nbsp;Acerca de mi</span><br>
                    <v-divider></v-divider><br>
                    <span>Soy Ingeniero de Sistemas con 10 años de experiencia en desarrollo de aplicaciones web para la industria petrolera manejando herramientas como PHP, CSS, JavaScript y MySQL, actualmente orientando mi perfil profesional hacía el desarrollo especializado de Front-end mediante el uso de tecnologías y frameworks como Vue.js, Vuetify, ES6, Angular y Webpack entre otras.</span>
                  </v-flex>
                  <v-flex >
                      <div class="text-xs-center">
                        <v-progress-circular
                          rotate="360"
                          size="100"
                          width="15"
                          value="80"
                          color="teal"
                          class="mx-3 my-3"
                        >
                          <v-avatar
                            size="70"
                          >
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSidHh0iF4e8n9YoYiUBpQKZKRHjiEpToP-kYDNhRKKHk2VnpE2" alt="alt">
                          </v-avatar>
                        </v-progress-circular>

                        <v-progress-circular
                          rotate="360"
                          size="100"
                          width="15"
                          value="85"
                          color="amber darken-2"
                          class="mx-3 my-3"
                        >
                           <v-avatar
                            size="74"
                            color="primary"
                          >
                            <img src="https://rapidpurple.com/v2/wp-content/uploads/2014/01/PHP.jpg"
                             alt="alt">
                          </v-avatar>
                        </v-progress-circular>

                        <v-progress-circular
                          rotate="360"
                          size="100"
                          width="15"
                          value="75"
                          color="primary"
                          class="mx-3 my-3"
                        >
                        <v-avatar
                            size="70"
                            color="primary"
                          >
                            <img src="https://pbs.twimg.com/profile_images/875996174305472512/upM71pVR_400x400.jpg"
                             alt="alt">
                          </v-avatar>
                          
                        </v-progress-circular>

                        <v-progress-circular
                          rotate="360"
                          size="100"
                          width="15"
                          value="60"
                          color="indigo"
                          class="mx-3 my-3"
                        >
                          <v-avatar
                            size="74"
                          >
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
                             alt="alt">
                          </v-avatar>
                        </v-progress-circular>
                      </div>
                  </v-flex>
                  <v-flex xs12>
                    <span class="headline"><v-icon medium>business</v-icon>&nbsp;Experiencia Laboral </span><br>
                    <v-divider></v-divider><br>
                    <v-layout>
                      <v-flex xs12>
                        <v-card elevation-10>
                          <v-toolbar height="50%" color="primary" dark>
                             <v-icon >play_arrow</v-icon>
                            <v-toolbar-title >Petroleos de Venezuela S.A</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                              <v-btn flat><v-icon left>date_range</v-icon>Desde 2008</v-btn>
                            </v-toolbar-items>
                          </v-toolbar>

                          <v-card-title primary-title>
                            <div>
                              <h2>
                                  <v-icon>settings</v-icon>
                                Desarrollador de Software</h2>
                                <v-list>
                                  
                                    <v-list-tile>
                                      <v-list-tile-avatar>
                                        <v-icon>assignment</v-icon>
                                      </v-list-tile-avatar>

                                    Desarrollo de aplicaciones web para la empresa y el mantenimiento de las mismas.
                                    </v-list-tile>
                                    <v-list-tile>
                                      <v-list-tile-avatar>
                                        <v-icon>build</v-icon>
                                      </v-list-tile-avatar>
                                      <div>
                                        <v-layout row wrap>
                                          <v-chip color="primary" label text-color="white">PHP</v-chip>
                                          <v-chip color="green" label text-color="white">JavaScript</v-chip>
                                          <v-chip color="indigo  darken-1" label text-color="white">Laravel</v-chip>
                                          <v-chip color="red" label text-color="white">MySql</v-chip>
                                          <v-chip color="primary" label text-color="white">PostgreSQL</v-chip>
                                          <v-chip color="secondary" label text-color="white">JSON</v-chip>
                                          <v-chip color="green" label text-color="white">ExtJs</v-chip>
                                        </v-layout>
                                      </div>
                                    </v-list-tile>
                                </v-list>
                            </div>
                          </v-card-title>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>

                  <v-flex xs12 class="mt-4">
                    <span class="headline"><v-icon medium>library_books</v-icon>&nbsp;Educacion </span><br>
                    <v-divider></v-divider><br>
                    <v-layout>
                      <v-flex xs12>
                        <v-card elevation-10>
                          <v-toolbar height="50%" color="primary" dark>
                             <v-icon >account_balance</v-icon>
                            <v-toolbar-title >Universidad de Oriente</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                              <v-btn flat><v-icon left>date_range</v-icon>2000 - 2006</v-btn>
                            </v-toolbar-items>
                          </v-toolbar>

                          <v-card-title primary-title>
                            <div>
                              <h2>
                                  <v-icon>school</v-icon>
                                Ingeniero de Sistemas</h2>
                                <v-list>
                                  
                                    <v-list-tile>
                                      <v-list-tile-avatar>
                                        <v-icon>location_on</v-icon>
                                      </v-list-tile-avatar>

                                    Núcleo Anzoátegui, Venezuela.
                                    </v-list-tile>
                                    
                                </v-list>
                            </div>
                          </v-card-title>
                        </v-card>
                      </v-flex>
                    </v-layout>
                  </v-flex>

            

                  <v-flex xs12>
                    <v-divider></v-divider><br>
                    <v-layout>
                      <v-flex xs12>
                        <v-card>
                          <v-toolbar height="50%" color="primary" dark>
                             <v-icon >important_devices</v-icon>
                            <v-toolbar-title >Software y Habilidades</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                              <v-btn flat><v-icon left></v-icon></v-btn>
                            </v-toolbar-items>
                          </v-toolbar>
                            <div>
                              <v-flex xs12>
                                <v-list>
                                  <v-list-tile>
                                    <v-flex class="mb-1"><js-icon fillColor="orange darken-4" dark/></v-flex>
                                  <v-progress-linear class="mt-1 ml-1"
                                    color="teal lighten-1"
                                    height="24"
                                    value="80"
                                  ></v-progress-linear>
                                  </v-list-tile>

                                  <v-list-tile>
                                    <v-flex class="mb-1"><php-icon fillColor="#039BE5" dark/></v-flex>
                                  <v-progress-linear class="mt-1 ml-1"
                                    color="yellow lighten-1"
                                    height="24"
                                    value="85"
                                  ></v-progress-linear>
                                  </v-list-tile>

                                  <v-list-tile>
                                    <v-flex class="mb-1"><vuejs-icon fillColor="#00796B" dark/></v-flex>
                                  <v-progress-linear class="mt-1 ml-1"
                                    color="purple darken-2"
                                    height="24"
                                    value="70"
                                  ></v-progress-linear>
                                  </v-list-tile>

                                  <v-list-tile>
                                    <v-flex class="mb-1"><angular-icon fillColor="red" dark/></v-flex>
                                  <v-progress-linear class="mt-1 ml-1"
                                    color="indigo lighten-1"
                                    height="24"
                                    value="60"
                                  ></v-progress-linear>
                                  </v-list-tile>

                                  <v-list-tile>
                                    <v-flex class="mb-1"><database-icon fillColor="#455A64" dark/></v-flex>
                                  <v-progress-linear class="mt-1 ml-1"
                                    color="red lighten-1"
                                    height="24"
                                    value="70"
                                  ></v-progress-linear>
                                  </v-list-tile>

                                  <v-list-tile>
                                    <v-flex class="mb-1"><laravel-icon fillColor="#E65100" dark/></v-flex>
                                  <v-progress-linear class="mt-1 ml-1"
                                    color="blue lighten-1"
                                    height="24"
                                    value="80"
                                  ></v-progress-linear>
                                  </v-list-tile>

                                  <v-list-tile>
                                    <v-flex class="mb-1"><git-icon fillColor="#1B5E20" dark/></v-flex>
                                  <v-progress-linear class="mt-1 ml-1"
                                    color="green lighten-1"
                                    height="24"
                                    value="85"
                                  ></v-progress-linear>
                                  </v-list-tile>

                              

                                    <v-layout wrap >
                                      <v-flex >
                                    <v-chip label outline color="green darken-4">ExtJs</v-chip>
                                    <v-chip label outline color="green darken-4">Zend</v-chip>
                                    <v-chip label outline color="green darken-4">Vuetify</v-chip>
                                    <v-chip label outline color="green darken-4">Vuex</v-chip>
                                    <v-chip label outline color="green darken-4" >Firebase</v-chip>
                                    <v-chip label outline color="green darken-4">Framework7</v-chip>
                                    <v-chip label outline color="green darken-4">Webpack</v-chip>
                                    <v-chip label outline color="green darken-4">Npm</v-chip>
                                    <v-chip label outline color="green darken-4">HTML5</v-chip>
                                    <v-chip label outline color="green darken-4">jQuery</v-chip>
                                    <v-chip label outline color="green darken-4">APIs</v-chip>
                                    <v-chip label outline color="green darken-4">Bootstrap</v-chip>
                                    <v-chip label outline color="green darken-4">JSON</v-chip>
                                    <v-chip label outline color="green darken-4">CSS</v-chip>
                                    <v-chip label outline color="green darken-4">PWA</v-chip>
                                    <v-chip label outline color="green darken-4">SPA</v-chip>
                                    <v-chip label outline color="green darken-4">Responsive</v-chip>
                                    <v-chip label outline color="green darken-4">Material Design</v-chip>
                                  </v-flex>
                                  </v-layout>

                                  
                                </v-list>
                              </v-flex>
                            </div>
                        </v-card>
                      </v-flex>

                      
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
              
            </v-card>
          </v-flex>
        </v-layout>


        
      </v-card>
    </v-flex>
  </v-layout>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {

      title: 'Curriculum',
      items: [
          { header: 'INFORMACIÓN PERSONAL' },
          {
            title: 'Juan Aristides Meaño Correa',
            subtitle: "Nombre",
            icon: 'how_to_reg'
          },
          { divider: true, inset: true },
          {
            title: '4 de Junio de 1980',
            subtitle: "Fecha de Nacimiento",
            icon: 'date_range'
          },
          { divider: true, inset: true },
          {
            title: 'V-14828113',
            subtitle: "Documento de Identidad",
            icon: 'picture_in_picture'
          },
          { divider: true, inset: true },
          {
            title: 'Venezolana',
            subtitle: "Nacionalidad",
            icon: 'person_pin'
          },
          { divider: true, inset: true },
          {
            title: 'Ingeniero de Sistemas',
            subtitle: "Título",
            icon: 'school'
          }
        ],
         itemsContacto: [
          { header: 'CONTÁCTO' },
          {
            title: '+58 426 5826402',
            subtitle: "Teléfono",
            icon: 'phone'
          },
          { divider: true, inset: true },
          {
            title: 'juanmeanoc@gmail.com',
            subtitle: "E-mail",
            icon: 'email'
          },
          { divider: true, inset: true },
          {
            title: 'juan.meano',
            subtitle: "Skype",
            icon: 'ondemand_video'
          },
          { divider: true, inset: true },
          {
            title: 'Monagas, Venezuela',
            subtitle: "Dirección",
            icon: 'near_me'
          }
        ],
         itemsLink: [
          { header: 'LINKS' },
          {
            title: 'https://www.linkedin.com/in/juan-meaño/',
            subtitle: "Linkedin",
            icon: 'how_to_reg'
          },
          { divider: true, inset: true },
          {
            title: 'juanmeanoc@gmail.com',
            subtitle: "Github",
            icon: 'how_to_reg'
          },
          { divider: true, inset: true },
          {
            title: 'juan.meano',
            subtitle: "Curriculum",
            icon: 'how_to_reg'
          }
        ]
    }
  }
};
</script>

