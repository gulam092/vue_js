<template>
    <div>
    <h1>Child Componets </h1>
    <!-- <h3>{{name}}</h3> -->
    <h3 v-for="user in Users" :key="user.name">
      {{user.name}}
      {{user.email}}
    </h3>
    </div>
</template>
<script>
export default {
    name:"child",
    props:['Users']
}
</script>