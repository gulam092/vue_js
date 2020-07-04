<template>
    <div>
        <button v-on:click ="updateTitle">Update Parents Title</button>
    </div>
</template>
<script>
export default {
   name:"ChildComponet" ,
 methods:{
       updateTitle(){
           this.$emit('chnagetitle','props Updated by Child')
       }
 },
 beforeCreate() {
      console.log("beforeCreate")
    },
    created() {
      console.log("created")
    },
    beforeMount() {
      console.log("beforeMount")
    },
    mounted() {
      console.log("mounted")
    },
    beforeUpdate() {
      console.log("beforeUpdate")
    },
    updated() {
      console.log("updated")
    },
    beforeDestroy() {
      console.log("beforeDestroy")
    },
    destroyed() {
      console.log("destroyed")
    }
 
}
</script>
