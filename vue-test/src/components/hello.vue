<template>
  <div>
    <span>{{ message }}</span>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      message: 'hello!',
      price: 123
    }
  },
  created () {
    this.message = 'bye!'
  }
}
</script>
