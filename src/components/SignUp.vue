<template>
    <div>
        <input type="text" placeholder="Enter Your Name" v-model ="SignUp.username"/><br><br>
        <input type="password" placeholder="Enter Your Password" v-model ="SignUp.password"/><br><br>
        <p>Choose Hoby</p>
        <input type="checkbox" id="criket" value="criket" v-model ="SignUp.hobbies">
        <label for="criket">criket
        </label>
         <input type="checkbox" id="footbal" value="footbal" v-model ="SignUp.hobbies">
        <label for="footbal">footbal
        </label>
        <p>Choose gender</p>
         <input type="radio" id="male" value="male" v-model ="SignUp.gender">
        <label for="male">male
        </label>
         <input type="radio" id="female" value="female" v-model ="SignUp.gender">
        <label for="female">female
        </label><br><br>
       <button v-on:click ="signUpUser">Sign Up</button>
    </div>
</template>
<script>
export default {
    name:"SignUp",
    data(){
        return {
            SignUp:{
                username:null,
                password:null,
                hobbies:[],
                gender:[]
            }
        }
    },
    methods:{
        signUpUser(){
            console.log(this.SignUp)
        }
    }
}
</script>