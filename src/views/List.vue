<template>
    <li>
        <router-link to="/list">
            <p>{{title}}</p>
            <p>{{price}}</p>
        </router-link>
    </li>
</template>

<script>
  export default{
    name: "list",
    props: ['title', 'price'],

  }

</script>

<style scoped>

</style>