<template>
 <v-layout row wrap>
    <v-flex v-for="(item, i) in items" :key="i" xs12 sm6 lg4>
        <admin-card :key="i" 
        :title="item.title"
        :contentNumber="item.contentNumber"
        :icon="item.icon"
        :slug="item.slug">
        </admin-card>
    </v-flex>
 </v-layout>
</template>

<style scoped>
</style>


<script>
import AdminCard from '../components/adminCard.vue'

  export default {
    components: {
        AdminCard,
    },
    data () {
      return {
        items:[
          {
            contentNumber: 9,
            title: "Sobre Nós",
            slug: "sobre-nos",
            icon: "dashboard"
          },
          {
            contentNumber: 1,
            title: "Parceiros",
            slug: "parceiros",
            icon: "person"
          },
           {
            contentNumber: 1,
            title: "Carta de Serviço",
            slug: "servicos",
            icon: "person"
          },
           {
            contentNumber: 1,
            title: "Portfólio",
            slug: "portfolio",
            icon: "person"
          },
           {
            contentNumber: 1,
            title: "Membros e pós-juniores",
            slug: "membros",
            icon: "person"
          },
          {
          contentNumber: 1,
            title: "Contato",
            slug: "contato",
            icon: "person"
          },

        ]
      }
    },
    methods: {
    },
  }

</script>