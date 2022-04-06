<style scoped>
    @import url("../../styles/clienteStyle/clientConta.scss");
</style>

<template>

    <div class="box_clientConta">
        
        <div class="painel_clientConta">

            <span :style="{
                'color':'rgba(121, 174, 64, 1)',
                'font-size':'1.4rem',
                'padding':'4px',
                'font-weight':'bold'}"
            >
                Escolha um item para editar</span>

            <!-- NOME DE USUÁRIO -->
            <span class="btnNameClientEdit backgroundColor" @click="changeFlag('nome')">
                Editar nome de usuário
                <v-icon>mdi-account-cog</v-icon>
            </span>
            
            <span v-if="flagEditUser" class="labelNameClientEdit">
                {{ $store.state.nomeUsuario }}
            </span>

            <input v-if="flagEditUser"
                type="text" @input="newNameClient = $event.target.value" 
                name="newNameClient"
                class="subheading inputNameClientEdit animate__animated animate__flash"
                v-on:keyup.enter="editUser(newNameClient,'nome')"
                placeholder="Novo nome de usuário" />

            <span @click="editUser(newNameClient,'nome')" 
            v-if="flagEditUser" 
            class="btnNameClientEdit backgroundColor">
                Salvar edição
            </span>

            <v-divider :style="{'margin-top':'10px'}"></v-divider>

            <!-- ENDEREÇO DO USUÁRIO -->
            <span class="btnNameClientEdit backgroundColor" @click="changeFlag('adr')">
                Editar Endereço
                <v-icon>mdi-home</v-icon>
            </span>

            <span class="labelNameClientEdit" v-if="flagEditAdr">
                {{ $store.state.enderecoUsuario }}
            </span>

            <input v-if="flagEditAdr"
                type="text" @input="newAdrClient = $event.target.value" 
                name="newNameClient"
                class="subheading inputNameClientEdit animate__animated animate__flash"
                v-on:keyup.enter="editUser(newAdrClient,'adr')"
                placeholder="Novo endereço do usuário" />

            <span @click="editUser(newAdrClient,'adr')"
            v-if="flagEditAdr" 
            class="btnNameClientEdit backgroundColor">
                Salvar edição
            </span>

            <v-divider :style="{'margin-top':'10px'}"></v-divider>

            <!-- TELEMÓVEL DO USUÁRIO -->
            <span class="btnNameClientEdit backgroundColor" @click="changeFlag('fone')">
                Editar Telemóvel
                <v-icon>mdi-phone</v-icon>
            </span>

            <span class="labelNameClientEdit" v-if="flagEditFone">
                {{ $store.state.foneUsuario }}
            </span>

            <input v-if="flagEditFone"
                type="text" @input="newFoneClient = $event.target.value" 
                name="newNameClient"
                class="subheading inputNameClientEdit animate__animated animate__flash"
                v-on:keyup.enter="editUser(newFoneClient,'fone')"
                placeholder="Novo número de telemóvel" />

            <span @click="editUser(newFoneClient,'fone')"
            v-if="flagEditFone" 
            class="btnNameClientEdit backgroundColor">
                Salvar edição
            </span>

            <v-divider :style="{'margin-top':'10px'}"></v-divider>

            <!-- PASS USUÁRIO -->
            <span class="btnNameClientEdit backgroundColor" @click="changeFlag('pass')">
                Editar senha
                <v-icon :style="{'margin-left':'4px'}">mdi-account-key</v-icon>
            </span>

            <input v-if="flagEditPass"
                type="password" @input="newPassClient = $event.target.value" 
                name="newNameClient"
                class="subheading inputNameClientEdit animate__animated animate__flash"
                v-on:keyup.enter="editUser(newPassClient,'pass')"
                placeholder="Nova password" />

            <span @click="editUser(newPassClient,'pass')"
            v-if="flagEditPass" 
            class="btnNameClientEdit backgroundColor">
                Salvar edição
            </span>

            <span v-if="flagMsgErrorEdit"
            :style="{
                'color':colorMsg,
                'font-size':'1.1rem',
                'padding':'4px',
                'margin-top':'10px'}"
            >
                {{ msgErrorEdit }}</span>

        </div>
    </div>

</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            flagEditUser: false,
            flagEditAdr: false,
            flagEditFone: false,
            flagEditPass: false,

            flagMsgErrorEdit: false,
            msgErrorEdit: '',
            colorMsg:'rgb(204, 22, 22)',

            newNameClient: '',
            newAdrClient: '',
            newFoneClient: '',
            newPassClient: '',
            
        }
    },

    methods: {
        changeFlag(tipoEdit) {

            switch (tipoEdit) {

                case 'nome':

                    this.flagEditUser = true // open
                    this.flagEditAdr = false
                    this.flagEditFone = false
                    this.flagEditPass = false

                    this.flagMsgErrorEdit = false
                    break;

                case 'adr':

                    this.flagEditUser = false
                    this.flagEditAdr = true // open
                    this.flagEditFone = false
                    this.flagEditPass = false

                    this.flagMsgErrorEdit = false
                    break;

                case 'fone':

                    this.flagEditUser = false
                    this.flagEditAdr = false
                    this.flagEditFone = true // open
                    this.flagEditPass = false

                    this.flagMsgErrorEdit = false
                    break;

                case 'pass':

                    this.flagEditUser = false
                    this.flagEditAdr = false
                    this.flagEditFone = false
                    this.flagEditPass = true // open

                    this.flagMsgErrorEdit = false
                    break;
            }
        },
        editUser(newItemClient, flagStrItem) {

            if (newItemClient == '' || newItemClient.length < 5) {

                this.msgErrorEdit = 'Insira um dado válido'
                this.colorMsg = 'rgb(204, 22, 22)'
                this.flagMsgErrorEdit = true
                return

            } else {

                // -- STORAGE
                var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

                var user_name = trafegoLocal.storedDateUser.nome

                const self = this

                var infoInsert = {

                    nome:user_name,
                    elemEdit:flagStrItem,
                    newInfo:newItemClient
                }

                var params = {

                    token:'testToken',
                    func:'editinfouser',
                    data:infoInsert /* POST request */
                }

                switch (flagStrItem) {

                    case 'nome':

                        axios.post(self.$store.state.pathAxios, params).then(function (res) {

                            //console.log(res.data.result)

                            if (res.data.result == 'user_edited') {

                                self.flagEditUser = false
                                self.flagMsgErrorEdit = true
                                self.colorMsg = 'green' //rgba(168, 243, 15, 0.5)'
                                self.msgErrorEdit = 'Nome editado com sucesso'
                                self.newUserClient = '' // RESET

                                // update user info dinamicamente
                                var newUserData = {

                                    nome: newItemClient,
                                    adr: trafegoLocal.storedDateUser.adr,
                                    fone: trafegoLocal.storedDateUser.fone,
                                    pass: '',
                                }

                                var update_trafegoLocal = {

                                    storedUserLogado: trafegoLocal.storedUserLogado, // bool <--- hold
                                    storedDateUser: newUserData, // {} <------------------------------ update
                                    storedPddListUser: trafegoLocal.storedPddListUser, // [] <--- hold
                                    storedCarrinho: trafegoLocal.storedCarrinho, // [] <--------- hold
                                    storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
                                    storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
                                }

                                localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))
                                
                                window.location.reload() // forçar update
                                return

                            } else {

                                self.msgErrorEdit = 'Nome de usuário já existente'
                                self.colorMsg = 'rgb(204, 22, 22)'
                                self.flagMsgErrorEdit = true
                                return
                            }
                        })

                        break;

                    case 'adr':

                        axios.post(self.$store.state.pathAxios, params).then(function (res) {

                            //console.log(res.data.result)

                            if (res.data.result == 'user_edited') {

                                self.flagEditAdr = false
                                self.flagMsgErrorEdit = true
                                self.colorMsg = 'green' //rgba(168, 243, 15, 0.5)'
                                self.msgErrorEdit = 'Endereço editado com sucesso'
                                self.newAdrClient = '' // RESET

                                // update user info dinamicamente
                                var newUserData = {

                                    nome: trafegoLocal.storedDateUser.nome,
                                    adr: newItemClient,
                                    fone: trafegoLocal.storedDateUser.fone,
                                    pass: '',
                                }

                                var update_trafegoLocal = {

                                    storedUserLogado: trafegoLocal.storedUserLogado, // bool <--- hold
                                    storedDateUser: newUserData, // {} <------------------------------ update
                                    storedPddListUser: trafegoLocal.storedPddListUser, // [] <--- hold
                                    storedCarrinho: trafegoLocal.storedCarrinho, // [] <--------- hold
                                    storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
                                    storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
                                }

                                localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))
                                
                                return

                            } else {

                                self.msgErrorEdit = 'Falha na edição do endereço'
                                self.colorMsg = 'rgb(204, 22, 22)'
                                self.flagMsgErrorEdit = true
                                return
                            }
                        })

                        break;

                    case 'fone':

                        axios.post(self.$store.state.pathAxios, params).then(function (res) {

                            //console.log(res.data.result)

                            if (res.data.result == 'user_edited') {

                                self.flagEditFone = false
                                self.flagMsgErrorEdit = true
                                self.colorMsg = 'green' //rgba(168, 243, 15, 0.5)'
                                self.msgErrorEdit = 'Telemóvel editado com sucesso'
                                self.newFoneClient = '' // RESET

                                // update user info
                                var newUserData = {

                                    nome: trafegoLocal.storedDateUser.nome,
                                    adr: trafegoLocal.storedDateUser.adr,
                                    fone: newItemClient,
                                    pass: '',
                                }

                                var update_trafegoLocal = {

                                    storedUserLogado: trafegoLocal.storedUserLogado, // bool <--- hold
                                    storedDateUser: newUserData, // {} <------------------------------ update
                                    storedPddListUser: trafegoLocal.storedPddListUser, // [] <--- hold
                                    storedCarrinho: trafegoLocal.storedCarrinho, // [] <--------- hold
                                    storageElemsCateg: trafegoLocal.storageElemsCateg, // {} <--- hold
                                    storedPddListGeral: trafegoLocal.storedPddListGeral // [] <-- hold
                                }

                                localStorage.setItem('trafegoLocal', JSON.stringify(update_trafegoLocal))

                                return

                            } else {

                                self.msgErrorEdit = 'Falha na edição do telemóvel'
                                self.colorMsg = 'rgb(204, 22, 22)'
                                self.flagMsgErrorEdit = true
                                return
                            }
                        })

                        break;

                    case 'pass':

                        axios.post(self.$store.state.pathAxios, params).then(function (res) {

                            //console.log(res.data.result)

                            if (res.data.result == 'user_edited') {

                                self.flagEditPass = false // desabilitar exibição input
                                self.flagMsgErrorEdit = true
                                self.colorMsg = 'green' //rgba(168, 243, 15, 0.5)'
                                self.msgErrorEdit = 'Password editada com sucesso'
                                self.newPassClient = '' // RESET

                                return

                            } else {

                                self.msgErrorEdit = 'Falha na edição da password'
                                self.colorMsg = 'rgb(204, 22, 22)'
                                self.flagMsgErrorEdit = true
                                return
                            }
                        })

                        break;
                }
            }
        }
    },

    created () {

        window.scrollTo(0,0)

        // -- STORAGE
        var trafegoLocal = JSON.parse(localStorage.getItem('trafegoLocal'))

        this.$store.state.nomeUsuario = trafegoLocal.storedDateUser.nome
    }
}
</script>