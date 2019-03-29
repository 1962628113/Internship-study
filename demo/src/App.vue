<template>
  <div id="app">
    <router-link to="/about">about</router-link> |
    <router-link to="/Amount">学科计分器</router-link>
    <router-link :to="{path:'/bvue',query:{a_data:[1,2,3],b_data:[4,5,6]}}">bvue</router-link>
    <router-link to="/bar">Go to Bar</router-link>
    <router-view name="modal"/>
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data(){
    return {
      price:''
    }
  },
  computed:{

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
