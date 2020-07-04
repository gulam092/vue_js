<template>
    <div>
        <h1>Loop state ment</h1>
        <table border="1" style="align:center">
            <tr>

                <td>Id</td>
                <td>Name</td>
                <td>Email</td>
            </tr>
            <tr v-for="item in users" :key="item.id">
                
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.email}}</td>
            </tr>
        </table>
    </div>
</template>


<script>
export default {
    name:"loop",
    data(){
           return {
              users:[
                {id:1,name:'gulam',email:'khan@test.com'},
               {id:2,name:'khan',email:'gulam@test.com'},
               {id:3,name:'Ali',email:'ali@test.com'},
              ]
           }
    },
}
</script>