<template>
  <div>{{Totalnumber}}</div>
</template>

<script>
export default {
  name: 'computedNumber',
  data () {
    return {
      number: 1
    }
  },
  computed: {
    Totalnumber: function () {
      var that = this
      return ++that.number
    }
  }
}
</script>
