<template>
    <div class="upload">
        <h1>Upload Image</h1>
        <label>Upload Image Here...</label>
        <input type="file" @change="takeFile"/><br>
        <button @click="saveImage()">Upload</button>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Upload',
    data () {
        return {
            inputphoto: '',
            file: null,
            formData: new FormData()
        }
    },
    methods: {
        takeFile () {
            console.log('take file')
            this.file = event.target.files[0]
            console.log('---->',event.target.files[0])
        },
        saveImage () {
            console.log('masuk fungsi simpan')
            
            this.formData.set('photo', this.file)
            console.log('THIS FORM DATA ========>',this.file)

            axios.post('http://35.198.212.156/api/image', {
                headers: { authorization: 'UjnphTXZCeJj1Rq3WVqs91'},
                photo: this.formData
            })
              .then(function (response) {
                  console.log(response)
              })
              .catch(function (err) {
                  console.log(err)
              })
        }
    }
}
</script>

<style>

</style>
