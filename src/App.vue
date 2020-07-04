<template>
  <div id="app">
    <!-- <h2>{{name  | Ucase}}</h2>
    <h3>{{amount | currencyConvert}}</h3> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <nav>
      <ul>
        <li><router-link to="/">Home</router-link>
        <li><router-link to="/about">About</router-link>
        <li><router-link to="/setting">Setting</router-link>
       

        </li>
      </ul>
    </nav>
   <router-view></router-view> -->


   
 <!-- <ChildComponet v-on:chnagetitle="UpdateTitle($event)"/> -->
   <!-- <Child v-bind:Users="Users"/> -->
   <component v-bind:is="comp"></component>
   <button v-on:click ="UpdateCmp('Signin')">Sign In</button>
   <button v-on:click ="UpdateCmp('Signeup')">Sign Up</button>

   
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Child from './components/Child.vue'
//import ChildComponet from './components/ChildComponet.vue'
//import SignUp from './components/SignUp.vue'
// import EmployeeList from './components/EmployeeList.vue'
 //import DeleteUser from './components/DeleteUser.vue'
 import Signin from './components/Signin.vue'
 import Signeup from './components/Signeup.vue'

export default {
  name: 'App',
  
  components: {
    'Signin':Signin,
    'Signeup':Signeup,
    //HelloWorld,
    //Home,
  //ChildComponet,
 // EmployeeList,
  //Child,
  // About,
  // Home1
  
 
  },
  data(){
    // return { Users:[
    // {name:"Gulam",email:"gulam@gmail.com"},
    // {name:"sam",email:"king@Gmail.com"},
    // {name:"King",email:"ali@gmail.com"},
    // {name:"Ali",email:"hello@gmail.com"},
    //   ]},
      // return{ name:"gulma khan",
      //           amount:100,
      //          }
      return{comp:"Signeup"}
  },
  methods:{
     UpdateCmp(item){
      this.comp = item
    }
   
  }
  
    
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
