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
      price: 23
    }
  },
  created () {
    this.message = 'bye!'
  }
}
</script>
