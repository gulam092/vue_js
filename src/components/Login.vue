<template>
    <div>
    <p v-if="error.length">
     
        <b>Please correct the following error(s)</b>
     <ul>
      <li v-for="err in error" :key="err.id">{{ err }}</li>
    </ul>
     
        </p>
        <form @submit="login">
        <input type="text"  v-model="username" name="username" placeholder="Enter User Name"/><br><br>
        <input type="password" v-model="password" name ="password" placeholder="Enter Password "/><br><br>
        <button type="submit">Login</button>
        </form>
    </div>
</template>
<script>
export default {
    name:"Login",
    methods:{
        login(e){
            this.error = [];
            if(this.username && this.password){
                console.log('no error')
                return true;
            }
            if(!this.username){
                this.error.push("User name is required!")
            }
            if (!this.password) {
                this.error.push("password is required!")
            }
          console.log("hello",this.error)
          e.preventDefault()
        },
        
    },
    data(){
            return{ 
                error:[],
                username:null,
                password:null,
            

            }
        }
}
</script>