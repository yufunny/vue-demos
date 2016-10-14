<template id="github-demo">
  <div>
    <h1>Latest vue.js Commits</h1>
    <template v-for="branch in branchs">
      <input type="radio" name="branch"
        :id="branch" :value="branch" v-model="currentBranch">
      <label :for="branch">{{branch}}</label>
    </template>
    <p>vuejs/vue@{{currentBranch}}</p>
    <ul>
      <li v-for="record in commits">
        <a :href="record.html_url" target="_blank" class="commit">{{record.sha.slice(0,7)}}</a>
        -<span class="message">{{record.commit.message | truncate}}</span><br>
        by <span class="author">{{record.commit.author.name}}</span>
        at <span class="date">{{record.commit.author.date | formatDate}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  var apiUrl = 'https://api.github.com/repos/vuejs/vue/commits?per_page=3&sha=';
  export default{
    data(){
      return {
        branchs:['master','dev'],
        currentBranch:"master",
        commits:null,        
      }
    },
    created:function(){
      this.fetchData()
    },
    watch:{
      currentBranch:'fetchData',
    },
    filters:{
      truncate:function(v){
        var newline = v.indexOf('\n')
        return newline > 0 ? v.slice(0,newline) : v
      },
      formatDate:function(v){
        return v.replace(/T|Z/g, '')
      }
    },
    methods:{
      fetchData:function(){
        var xhr = new XMLHttpRequest()
        var self = this
        xhr.open('GET',apiUrl + self.currentBranch)
        xhr.onload = function () {
          self.commits = JSON.parse(xhr.responseText)
        }
        xhr.send()
      }
    }
  }
</script>

<style>
  #github-demo {
    font-family: 'helvetica',Arial,sans-serif;
  }
  #github-demo a{
    text-decoration: none;
    color: #f66;
  }
  #github-demo li{
    line-height: 1.5em;
    margin-bottom: 20px;
  }
  .author, .date{
    font-weight: bold;
  }
</style>
