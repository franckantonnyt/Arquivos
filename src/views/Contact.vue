<template>
<div>
    <v-toolbar flat color="white">
        <v-toolbar-title>Contato</v-toolbar-title>
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
                                <v-text-field v-model="editedItem.adress" label="Endereço"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="editedItem.phone" label="Telefone"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="editedItem.whatsapp" label="Whatsapp"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="editedItem.email" label="Email"></v-text-field>
                            </v-flex>
                            <v-flex xs12>
                                <v-text-field v-model="editedItem.facebook" label="Facebook"></v-text-field>
                            </v-flex>
                                <v-flex xs12>
                            <v-text-field v-model="editedItem.instagram" label="Instagram"></v-text-field>
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
                            <td class="text-xs">{{ props.item.adress }}</td>
                            <td class="text-xs">{{ props.item.phone }}</td>
                            <td class="text-xs">{{ props.item.whatsapp }}</td>
                            <td class="text-xs">{{ props.item.email }}</td>
                            <td class="text-xs">{{ props.item.facebook }}</td>
                            <td class="text-xs">{{ props.item.instagram }}</td>
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
                { text: 'Endereço', value: 'adress', sortable: false},
                { text: 'Telefone', value: 'phone', sortable: false },
                { text: 'Whatsapp', value: 'whatsapp', sortable: false },
                { text: 'Email', value: 'email', sortable: false },
                { text: 'Facebook', value: 'facebook', sortable: false },
                { text: 'Instagram', value: 'instagram', sortable: false },
                {sortable: false}
            ],
            items: [],
            editedIndex: -1,
            editedItem: {
                adress: '', 
                phone: '',
                whatsapp: '',
                email: '',
                facebook: '',
                instagram: '',
            },
            defaultItem: {
               adress: '', 
                phone: '',
                whatsapp: '',
                email: '',
                facebook: '',
                instagram: '',
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