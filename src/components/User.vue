<template>
    <div>
        <h1>About User</h1>
        <h2> User Id is {{userId}}</h2>
    </div>
</template>
<script>
export default {
    name:"User",
    data(){
        return{userId:this.$route.params.id}
        //console.log("Hello",userId.this.$route.params.id)
    }
}
</script>