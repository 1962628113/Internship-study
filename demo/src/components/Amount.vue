<template>
  <div class="amount">
    <h1>学科计分器</h1>
    <div class="score"><input type="number" v-model="amount.English"  min="0" max="100" oninput="if(value.length>3)value=value.slice(0,1)" ><div class="show"><span>英语得{{amount.English}}分</span></div></div>
    <div class="score"><input type="number" v-model="amount.Maths"><div  class="show"><span>数学得{{amount.Maths}}分</span></div></div>
    <div class="score"><input type="number" v-model="amount.Language"><div  class="show"><span>语文得{{amount.Language}}分</span></div></div>
    <div class="Dividing-line"></div>
    <div><span>总分：{{Totalscore}}</span></div>
  </div>
</template>
<script>
  export  default {
    name:'Amount',
    data(){
      return {
        amount:{English:0,Maths:0,Language:0}
      }
    },
    computed:{
      Totalscore:function () {
        return this.amount.English+this.amount.Maths+this.amount.Language;
      }
    },
    methods:{
    }
  }

</script>
<style scoped>
  .amount {
    width: 80%;
    margin: 0 auto;
    display: flex;
    background-color:floralwhite;
    flex-direction: column;

  }
  h1 {
    text-shadow: 0 5px #fff;
  }
  .score {
    padding: 10px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    /*position: relative;*/
  }
  .score input {
    width: 100px;
    margin-right: 10px;
  }
  .score span {
    right: 0;
  }
  .show {
    width: 40%;
  }
  .Dividing-line {
     height: 10px;
    border-bottom: 1px solid red;
  }
</style>
