<template>
<v-app>
    <v-navigation-drawer fixed app clipped class="black " :mini-variant="mini" :drawer="drawer" v-model="drawer">
      <v-list class="black">
        <template v-for="(item, i) in items">
          <v-list-tile :key="i" v-on:click="changeRoute(i)">
            <v-list-tile-action>
              <v-icon color="grey">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title class="grey--text">
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="green" app fixed clipped-left dense>
      <v-toolbar-side-icon v-on:click="mini = !mini" class="header-text-color hidden-md-and-down"></v-toolbar-side-icon>
      <v-toolbar-side-icon v-on:click="drawer = !drawer, mini=false" class="header-text-color hidden-lg-and-up"></v-toolbar-side-icon>
      <v-toolbar-title class="header-text-color title ml-5 mr-5">CompJr</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-on:click="logout()" class="header-text-color">Log Out</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<style scoped>
.header-text-color{
  color:aliceblue
}
</style>


<script>
  export default {
    components: {
    },
    data () {
      return {
        mini: true,
        drawer: true,
        items: [
          {icon: 'dashboard', text: 'Dashboard'},
          { icon: 'domain', text: 'Sobre Nós',},
          { icon: 'comment', text: 'Parceiros' },
          { icon: 'work', text: 'Carta de Serviço' },
          { icon: 'list_alt', text: 'Portfólio' },
          { icon: 'group', text: 'Membros e pós-juniores' },
          { icon: 'phone', text: 'Contato' },
        ]
      }
    },
    methods: {
      changeRoute(i){
        if(i==0){
          this.$router.push("/admin")
        }
        else if(i==1){
          this.$router.push("/admin/sobre-nos");
        }
        else if(i==2){
          this.$router.push("/admin/parceiros");
        }
        else if(i==3){
          this.$router.push("/admin/servicos");
        }
        else if(i==4){
          this.$router.push("/admin/portfolio");
        }
        else if(i==5){
          this.$router.push("/admin/membros");
        }
        else if(i==6){
          this.$router.push("/admin/contato");
        }
      }
    },
  }

</script>
