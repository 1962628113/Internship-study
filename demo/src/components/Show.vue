<template>
  <div class="student">
    <span>学号：{{student.code}}</span>
    <span>姓名：{{student.name}}</span>
    <span>分数：{{student.score}}</span>
  </div>
</template>
<script>
  export default {
    name:'show',
    props:{
      student:{
        type:Object
      }
    }
  }
</script>
