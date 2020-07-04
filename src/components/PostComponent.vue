<template>
    <div>
        <h1>Form submission by ApI</h1>
        <form @submit="submitData" method="POST">
        <input type="text"  v-model="post.title" name="title" placeholder="Enter User title"/><br><br>
        <input type="text" v-model="post.author" name ="author" placeholder="Enter Author "/><br><br>
        <button type="submit">Post</button>
        </form>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    name:"PostComponent",
    data(){
                   return{ post:{
                         title:null,
                       author:null,
                   }
                       

                   }
    },
    methods:{
           submitData(e){
                     this.axios.post('http://localhost:3000/posts',this.post)
                     .then((response) => {
                    console.log("Result",response.data)
                    })
               console.log(this.post)
                    e.preventDefault()
           }
    },

}
</script>