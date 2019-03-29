<template>
  <div class="b_vue">
    {{a_data}}==={{b_data}}
    {{$route.query}}
    <input type="text" placeholder="aa" onchange="aa(this.placeholder)">
  </div>
</template>
<script>
  export default {
    name:'bvue',
    props:["a_data","b_data"]
  }
</script>
