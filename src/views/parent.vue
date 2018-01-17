<template>
    <div>
        父组件
        <child :child-data="asyncData"></child>
    </div>
</template>

<script>
  import child from './child'
  export default {
    name: 'test1',
    data: () => ({
      asyncData: ''
    }),
    components: {
      child
    },
    created () {
    },
    mounted () {
      // setTimeout模拟异步数据
      setTimeout(() => {
        this.asyncData = 'async data'
        console.log('parent finish')
      }, 2000)
    }
  }
</script>