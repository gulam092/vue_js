<template>
    <div>
        <h1 class="homestyle">Home Component</h1>
        <h1 v-bind:style="{color:'red'}">Style Binding</h1>
        <h1 v-bind:class ="{display:true}"> Classs Bind With Object:</h1>
        <h1 v-bind:class ="[aclass]"> Classs with Array Bind With Object:</h1>
    </div>
</template>
<script>
export default {
    name:"Home",
    data(){
        return{
            show:true,
            aclass:'arrayclass',
        }
    }
}
</script>
<style scoped>
.homestyle{
     color:crimson;
}
.display{
    background-color: darkblue;
}
.arrayclass{
    background-color: darkmagenta;
}
</style>