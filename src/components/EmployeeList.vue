<template>
    <div>
       <table border="1">
           <tr> 
               <td>employee_ID</td>
               <td>employee_name</td>
                <td>employee_age</td>
                 <td>employee_salary</td>
           </tr>
            <tr v-for="item in list" v-bind:key="item.id"> 
               <td>{{item.id}}</td>
               <td>{{item.employee_name}}</td>
                <td>{{item.employee_age}}</td>
                 <td>{{item.employee_salary}}</td>
           </tr>
       </table>
    </div>
</template>
<script>
import Vue from 'vue'
import VueAxios from 'vue-axios'
import axios from 'axios'
Vue.use(VueAxios,axios)
export default {
    name:"EmployeeList",
    data(){
        return {
            list:undefined
        }
    },
    mounted(){
        Vue.axios.get('http://dummy.restapiexample.com/api/v1/employees').then(res=>{
            this.list = res.data.data
            console.log(res.data.data)
        })
    }
}
</script>