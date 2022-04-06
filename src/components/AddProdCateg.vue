  
<style scoped>
    @import url("../form-style.scss");
    @import url("../cardForm.scss");
    @import url("../categ-edit-style.scss");
</style>

<template>
    <div>
        <div class="categExib">
            <v-container>

                <template v-if="categ_flag_edit">

                    <div class="panelCategs">

                        <v-img :src="uploadedImage2"
                            class="label-categ">

                            <p :style="[{color:setCor}]" class="label-in">{{ setCateg }}</p>

                        </v-img>
                    </div>
                </template>

                <template v-else>
                    <span>Selecione uma categoria</span>
                </template>

            </v-container>
        </div>

        <div class="products">
            <v-container>
                <div class="panelProducts">
                    
                    <div class="task-grid">

                        <img :src="uploadedImage" style="width:50%" class="task-in" />

                        <div class="task-in">

                            <div class="into-task">
                                <p class="primeiro-i-t">{{ uploadedContent.tituloE }}</p>
                            </div>

                            <div class="into-task">

                                <span class="segundo-i-t">
                                    <label>
                                       {{ uploadedContent.descricaoE }}
                                    </label>
                                </span>
                            </div>

                            <div class="into-task">

                                <span class="terceiro-i-t">
                                    <span class="preco">{{ uploadedContent.precoE | dinheiro }}</span>
                                </span>

                                <v-btn class="green white--text terceiro-i-t">
                                    <span class="">ADD</span>
                                </v-btn>

                            </div>
                        </div>
                    </div>
                </div>
            </v-container>
        </div>

        <div class="productsEdit">
            <v-container>
                <div class="geralProductsEdit"> 

                    <form @submit.prevent="onForm" action="" method="post">

                        <div class="input_edit">

                            <div class="input_col_categ">

                                <input type="text" v-model="preTitulo" name="preTitulo"
                                    class="input_edit_line" placeholder="Nome do produto" />

                                <input type="text" v-model="preDescricao" name="preDescricao" 
                                    class="input_edit_line" placeholder="Decrição do produto" />

                                <input class="input_edit_line" type="text" name="prePreco" 
                                    v-model="prePreco" placeholder="Preço: 123.56" />

                                <input class="input_edit_line" type="number" name="preQnt" 
                                    v-model="preQnt" placeholder="Quantidade em estoque" />
                            </div>

                            <div class="input_col_categ">

                                <v-select
                                :items="categLi"
                                v-model="setCateg"
                                label="Categorias"
                                dense
                                solo
                                class="input_drop_categ"
                                ></v-select>

                                <input class="input_edit_line" type="text"
                                v-model="setCateg" name="setCateg"
                                placeholder="Nova categoria" />

                                <v-tabs class="input_edit_line">

                                    <v-tab @click="setCor='green'"
                                    class="color1">COR 1</v-tab>

                                    <v-tab @click="setCor='red'"
                                    class="color2">COR 2</v-tab>

                                    <v-tab @click="setCor='blue'"
                                    class="color3">COR 3</v-tab>

                                </v-tabs>

                            </div>
                        </div>

                        <div class="input_edit">
                            <div class="space_aux">
                            </div>
                        </div>

                        <div class="input_edit">
                            <div class="input_col">
                                <span class="labelCol">SELECIONE UMA IMAGEM PARA O PRODUTO</span>
                                <input type="file" class="file_input" name="photo" @change="onFileChange"  accept="image/*" />
                            </div>
                        </div>

                        <div class="input_edit">
                            <div class="input_col">
                                <span class="labelCol">SELECIONE UMA IMAGEM PARA A CATEGORIA</span>
                                <input type="file" class="file_input2" name="photo2" @change="onFileChange2"  accept="image2/*" />
                            </div>
                        </div>

                        <div class="input_edit">
                            <div class="space_aux">
                            </div>
                        </div>

                        <div class="input_edit">
                            <v-btn @click="preForm" class="input_edit_endline">Pré-Visualização</v-btn>
                            <v-btn value="submit" type="submit" class="input_edit_endline">Adicionar produto</v-btn>
                        </div>

                        <div class="input_edit">
                            <div class="ajuste_label_form">
                                <label class="label_end_form">{{ labelEnd }}</label>
                            </div>
                        </div>
                    </form>

                </div>
            </v-container>
        </div>

    </div>
</template>

<script>
import axios from 'axios'
export default {
    data: () => ({
        // control
        categ_flag_edit: true,
        // make
        labelEnd: '#',
        uploadedImage: '', // img 1 produto.
        uploadedImage2: '', // img categoria.
        uploadedContent: { // Conteúdo de exibição inicial.
            tituloE: 'Novo Título',
            descricaoE: 'Descrição do produto',
            precoE: '00.00',
        },
        preTitulo: null,
        preDescricao: null,
        prePreco: null,
        preQnt: null,
        // rcv
        categLi: [],
        itemsCateg: [], // receber axios get.
        setCateg: '', // rcv a categoria existente selecionada no <v-select> ou a nova via input.
        setCor: '',
    }),
    methods: {
        //+--------------------------------------------------- PRE VIEW ELEM --+
        preForm() {
            this.uploadedContent.tituloE = this.preTitulo
            this.uploadedContent.descricaoE = this.preDescricao
            this.uploadedContent.precoE = this.prePreco
            this.labelEnd = 'Pré visualização disponível'
        },
        //+------------------------------------------------- IMAGEM 1 - PRODUTO --+
        onFileChange (e) {
        let files = e.target.files || e.dataTransfer.files
        this.createImage(files[0])
        },
        //View uploaded image
        createImage (file) {
        let reader = new FileReader()
        reader.onload = (e) => {
            this.uploadedImage = e.target.result
        }
        reader.readAsDataURL(file)
        },
        //+------------------------------------------ IMAGEM 2 - CATEGORIA --+
        onFileChange2 (e) {
        
            let files = e.target.files || e.dataTransfer.files
            this.createImage2(files[0])
        },
        createImage2 (file) {
        
            let reader = new FileReader()
            reader.onload = (e) => {
            
                this.uploadedImage2 = e.target.result
            }
        
            reader.readAsDataURL(file)
        },
        //+-------------------------------------------------- FORM --+
        onForm() {

            this.labelEnd = 'Aguarde'

            var params = new FormData()
            console.log(this.uploadedImage)
            params.append('image', this.uploadedImage) // O upload img vem de onFileChange().
            
            //Posting the data converted to FormData using Axios to Flask.
            axios.post(`http://127.0.0.1:5000/api/img_upload`, params).then(function () {
                console.log()
            })

            /*var params2 = new FormData()
            params2.append('image2', this.uploadedImage2) // O upload img vem de onFileChange().
            axios.post(`http://127.0.0.1:5000/api/img_upload_2`, params2).then(function (response) {
                console.log(response)
            })
            this.uploadedContent = {
                categoriaE: this.setCateg,
                colorCategE: this.setCor,
                tituloE: this.preTitulo,
                descricaoE: this.preDescricao,
                precoE: this.prePreco,
                qntE: this.preQnt
            }
            //Second request in the same click event.
            axios.post(`http://127.0.0.1:5000/api/text_upload`, this.uploadedContent).then(function (response) {
                console.log(response)
            })*/
            // RESET content front.
            this.uploadedImage = null,
            this.uploadedContent = {
                categoriaE: '',
                tituloE: 'Novo Título',
                descricaoE: 'Descrição do produto',
                precoE: '00.00'
            },
            this.preTitulo = null,
            this.preDescricao = null,
            this.prePreco = null,
            this.preQnt = null,
            this.setCateg = null,
            this.setCor = null,
            this.labelEnd = 'Produto adicionado' 
        },
        getBooks() {
            const path = 'http://localhost:5000/api/get_categ_names';
            axios.get(path)
                .then((res) => {
                this.categLi = res.data.categGet; /* lista de categorias */
                //console.log(this.categLi);
                //this.nomeCateg = res.data.nome_categ; /* nomes categorias */
                //this.liProd = res.data.content_categ; /* lista de produtos por categoria */
                })
                .catch((error) => {
                // eslint-disable-next-line
                console.error(error);
                });
        }
    },
    created() {
        this.getBooks();
    }
}
</script>