<template>
    <div>
        <h1>Delete Api </h1>
        <table border="1">
            <tr>
                 <td>ID</td>
                <td>Title</td>
                <td>Author</td>
                <td>Action</td>
            </tr>
             <tr v-for="user in users" v-bind:key="user.id">
                <td>{{user.id}}</td>
                <td>{{user.title}}</td>
               <td>{{user.author}}</td>
                <td><button v-on:click ="DeleteUder(user.id)">delete</button></td>
            </tr>
        </table>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
export default {
    name:"DeleteUser",
    data(){
        return {
            users:null,

        }
    },
    methods:{
          getUsers(){
               this.axios.get("http://localhost:3000/posts").then((result)=>{
                   console.log(result)
                   this.users = result.data
        })
          },
          DeleteUder(id){
              this.axios.delete("http://localhost:3000/posts/"+id).then((result)=>{
                   console.log(result)
              
              this.getUsers()
          })
          },
    },
    mounted(){
        this.getUsers()

    }
}
</script>