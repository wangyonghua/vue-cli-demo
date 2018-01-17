<template>
    <div>
        子组件{{childData}}
    </div>
</template>

<script>
  export default {
    props: ['childData'],
    name: "child",
    data: () => ({}),
    created () {
      console.log(this.childData) // 空值
    },
    methods: {}
  }
</script>