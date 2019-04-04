<template>
  <div>
    <h3>点击添加</h3>
    <div class="num">{{ count }}</div>
    <button @click="increment">自增</button>
    <button @click="incrementByAsync">异步自增</button>
  </div>
</template>

<script>
export default {
  name: 'increment',
  data () {
    return {
      count: 0
    }
  },
  methods: {
    increment () {
      this.count++
    },
    async incrementByAsync () {
      window.setTimeout(() => {
        this.count++
      }, 1000)
    }
  }
}
</script>
