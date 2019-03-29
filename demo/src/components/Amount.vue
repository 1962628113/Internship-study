<template>
  <div class="amount">
    <h1>学科计分器</h1>
    <div class="name">姓名 ：
      <select name="" id="selectname">
        <option value="小王">小王</option>
        <option value="小王">小王</option>
        <option value="小明">小明</option>
        <option value="小明">小明</option>
    </select></div>
    <div class="score"><input type="number" v-model="amount.English" min="0" max="100"
                              oninput="if(value.length>3)value=value.slice(0,1)">
      <div class="show"><span>英语得{{amount.English}}分</span></div>
    </div>
    <div class="score"><input type="number" v-model="amount.Maths" min="0" max="100"
                              oninput="if(value.length>3)value=value.slice(0,1)">
      <div class="show"><span>数学得{{amount.Maths}}分</span></div>
    </div>
    <div class="score"><input type="number" v-model="amount.Language" min="0" max="100"
                              oninput="if(value.length>3)value=value.slice(0,1)">
      <div class="show"><span>语文得{{amount.Language}}分</span></div>
    </div>
    <div class="Total"><button v-on:click="add()">添加</button><span>总分：{{Totalscore}}</span></div>
    <div class="Dividing-line"></div>

    <show v-for="(student,index) in students" :student="student" :index="index" />


  </div>
</template>
<script>
  import show from './Show'
  var index=-1
  export default {
    name: 'Amount',
    components:{
      show
    },
    data() {
      return {
        amount: {English: 0, Maths: 0, Language: 0},
        students: []
      }
    },
    computed: {
      Totalscore: function () {
        var English=this.amount.English;
        var Maths=this.amount.Maths;
        var Language=this.amount.Language
        var Totalscore=Math.abs(English)+Math.abs(Maths)+Math.abs(Language)
        return Totalscore
      }
    },
    methods:{
      add:function () {
        index+=1;
        var name=document.getElementById('selectname').value;
        var score=this.Totalscore;
        let student={name:null,score:null,code:null}
        student.name=name;
        student.score=score
        student.code=index
        this.students.push(student)
      }
    }
  }

</script>
<style scoped>
  .amount {
    width: 80%;
    margin: 0 auto;
    display: flex;
    background-color: floralwhite;
    flex-direction: column;

  }

  h1 {
    text-shadow: 0 5px #fff;
  }

  .name {
    display: flex;
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
  .Total {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }
  .student {
    display: flex;
    flex-flow: row wrap;
  }
  .student span {
  }
</style>
