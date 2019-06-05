<template>
    <v-flex mt-3 mb-3 ml-3 mr-3>
      <v-card color="cyan lighten-2" class="flex">
        <v-layout white--text>
          <v-flex xs12 pt-2 pl-2 pb-2 >
            <div class="headline mb-2">{{contentNumber}}</div>
            <div>{{title}}</div>
          </v-flex>
          <v-flex pr-2>
            <v-spacer></v-spacer>
            <v-icon class="card-icon cyan--text">{{icon}}</v-icon>
          </v-flex>
        </v-layout>
        <v-card-actions class="cyan darken-2 footer white--text" @click="moreClicked()">
          <v-layout justify-center row wrap>
            Ver Mais
          </v-layout>
        </v-card-actions>
      </v-card>
    </v-flex>
</template>

<style scoped>
.header-text-color{
  color:aliceblue
}
.full-width{
  width: 99%;
}
.footer{
  align-content: center;
  cursor: pointer;
}

.card-icon{
  font-size: 80px;
}
</style>


<script>
  export default {
    components: {
    },
    data () {
      return {

      }
    },
    props:{
        contentNumber: {
            type: Number,
            required: false
        },
        title: {
            type: String,
            required: true
        },
        icon: {
            type: String,
            required: true
        },
        slug:{
          type: String,
          required: true
        }
    },
    methods: {
      moreClicked(){
        this.$router.push("/admin/"+this.slug);
      }
    },
  }

</script>