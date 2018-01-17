<template>
    <ul>
        <list v-for="item in items" :price="item.price" :title="item.title"></list>
    </ul>
</template>

<script>
  import List from './List'
  export default {
    name: "listMain",
    data: () => ({
      items: [
        {price: "129", title: "大学"},
        {price: "140", title: "大学"}
      ]
    }),
    components: {
      List
    }
  }
</script>

<style scoped>
</style>