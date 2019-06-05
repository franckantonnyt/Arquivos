<template>
<div>
    <v-toolbar flat color="white">
        <v-toolbar-title>Membros</v-toolbar-title>
        <v-divider class="mx-2" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on }">
                <v-btn color="primary" dark class="mb-2" v-on="on">Novo item</v-btn>
            </template>
            <v-card>
                <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12>
                                <v-text-field v-model="editedItem.name" label="Nome"></v-text-field>
                            </v-flex>
                                <v-flex xs12>
                            <v-text-field v-model="editedItem.role" label="Cargo"></v-text-field>
                                </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="editedItem.photo" label="Foto"></v-text-field>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click="close">Cancel</v-btn>
                    <v-btn color="blue darken-1" flat @click="save">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-toolbar>

    <v-container fluid>
        <v-layout>
            <v-flex xs12>
                <v-data-table :headers="headers" :items="items" item-key="id" >
                    <template v-slot:items="props">
                        <tr>
                            <td class="text-xs">{{ props.item.name }}</td>
                            <td class="text-xs">{{ props.item.role }}</td>
                            <td class="text-xs">{{ props.item.photo }}</td>
                            <td class="justify-center layout px-0">
                                <v-icon small class="mr-2" @click="editItem(props.item)">edit</v-icon>
                                <v-icon small @click="deleteItem(props.item)">delete</v-icon>
                            </td>
                        </tr>
                    </template>
                </v-data-table>
            </v-flex>
        </v-layout>
    </v-container>
</div>
</template>

<style scoped>

</style>


<script>
  export default {
    components: {
    },
    data () {
      return {
            dialog: false,
            expand: false,
            headers: [
                { text: 'Nome', value: 'name', sortable: false},
                { text: 'Cargo', value: 'role', sortable: false},
                { text: 'Foto', value: 'photo', sortable: false },
                {sortable: false}
            ],
            items: [],
            editedIndex: -1,
            editedItem: {
                name: '',
                role: '',
                photo: '',
            },
            defaultItem: {
                name: '',
                role:'',
                photo: '',
            }
        }
    },

    computed: {
        formTitle () {
            return this.editedIndex === -1 ? 'Novo item' : 'Editar item'
        }
    },

    watch: {
        dialog (val) {
            val || this.close()
        }
    },

    mounted(){
    },
    props:{
    },
    created () {
      this.initialize()
    },

    methods: {
        initialize () {
            this.items = [
                {
                    id:0,
                    name: 'Ronaldo',
                    role: 'Membro',
                    photo: 'foto',
                }
            ]
        },
        editItem (item) {
        this.editedIndex = this.items.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
        },

      deleteItem (item) {
        const index = this.items.indexOf(item)
        confirm('Tem certeza que deseja deletar esse item?') && this.items.splice(index, 1)
      },

      close () {
        this.dialog = false
        setTimeout(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        }, 300)
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.items[this.editedIndex], this.editedItem)
        } else {
          this.items.push(this.editedItem)
        }
        this.close()
      }  
    },
  }

</script>