<template>
  <v-app>
  <v-layout>
    <v-flex xs10 offset-xs1>
      <v-card width="1200px">
        <v-img
          src="https://image.shutterstock.com/image-photo/wood-wall-background-texture-natural-260nw-754092013.jpg"
          height="190px"
          aspect-ratio="2.75"
        >
          <v-container >
            <v-layout fill-height>
              <v-flex xs12 class="text-xs-center" flexbox>
                <br>
                <span >Curriculum Vitae</span><br>
                <span class="headline">Juan Arístides Meaño</span>
                <br>
                <span >Desarrollador Web</span>
                
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>

        <v-layout row wrap>
          <v-flex xs4 >
            <v-card color="grey lighten-1">
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
                      <template v-for="(item, index) in itemsLink">
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
                          <v-list-tile-content>
                            <v-list-tile-title v-html="item.title"></v-list-tile-title>
                            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                          </v-list-tile-content>
                        </v-list-tile>
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
                    <span class="headline">Acerca de mi</span><br>
                    <v-divider></v-divider><br>
                    <span>Soy Ingeniero de Sistemas con 10 años de experiencia en desarrollo de aplicaciones web para la industria petrolera manejando herramientas como PHP, CSS, Javascript y MySQL, actualmente orientando mi perfil profesional hacía el desarrollo especializado de Front-end mediante el uso de tecnologías y frameworks como VueJS, Vuetify, Angular, NodeJS y Webpack entre otras.</span>
                  </v-flex>
                  <v-flex >
                      <div class="text-xs-center">
                        <v-progress-circular
                          rotate="360"
                          size="100"
                          width="15"
                          value="50"
                          color="teal"
                          class="mx-3 my-3"
                        >
                          asfsdaf
                        </v-progress-circular>

                        <v-progress-circular
                          rotate="-90"
                          size="100"
                          width="15"
                          value="value"
                          color="primary"
                          class="mx-3 my-3"
                        >
                          fsadf
                        </v-progress-circular>

                        <v-progress-circular
                          rotate="90"
                          size="100"
                          width="15"
                          value="value"
                          color="red"
                          class="mx-3 my-3"
                        >
                          afasf
                        </v-progress-circular>

                        <v-progress-circular
                          rotate="180"
                          size="100"
                          width="15"
                          value="value"
                          color="pink"
                          class="mx-3 my-3"
                        >
                          edhsdgh
                        </v-progress-circular>
                      </div>
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
            subtitle: "Nombre"
          },
          { divider: true, inset: true },
          {
            title: '4 de Junio de 1980',
            subtitle: "Fecha de Nacimiento"
          },
          { divider: true, inset: true },
          {
            title: 'V-14828113',
            subtitle: "Documento de Identidad"
          },
          { divider: true, inset: true },
          {
            title: 'Venezolano',
            subtitle: "Nacionalidad"
          },
          { divider: true, inset: true },
          {
            title: 'Ingeniero de Sistemas',
            subtitle: "Título"
          }
        ],
         itemsContacto: [
          { header: 'CONTÁCTO' },
          {
            title: '+58 426 5826402',
            subtitle: "Teléfono"
          },
          { divider: true, inset: true },
          {
            title: 'juanmeanoc@gmail.com',
            subtitle: "E-mail"
          },
          { divider: true, inset: true },
          {
            title: 'juan.meano',
            subtitle: "Skype"
          },
          { divider: true, inset: true },
          {
            title: 'Monagas, Venezuela',
            subtitle: "Dirección"
          }
        ],
         itemsLink: [
          { header: 'LINKS' },
          {
            title: '+58 426 5826402',
            subtitle: "Linkedin"
          },
          { divider: true, inset: true },
          {
            title: 'juanmeanoc@gmail.com',
            subtitle: "Github"
          },
          { divider: true, inset: true },
          {
            title: 'juan.meano',
            subtitle: "Curriculum"
          }
        ]
    }
  }
};
</script>

