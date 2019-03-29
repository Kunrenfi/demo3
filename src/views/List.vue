<template>
    <div>
    <div class="weui-search-bar" id="searchBar">
        <form class="weui-search-bar__form">
            <div class="weui-search-bar__box">
                <i class="weui-icon-search"></i>
                <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
                <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
            </div>
            <label class="weui-search-bar__label" id="searchText">
                <i class="weui-icon-search"></i>
                <span>搜索</span>
            </label>
        </form>
        <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>


    </div>
        <div>
            <ul>
                  <li v-for="(item,index) in pagelists" :key="index">

                      <div class="data_control">
                          <div class="data_blank"></div>
                      <a class="data_title">名称：{{item.listName}}</a>
                      <a class="data_content">证件号：{{item.listNumber}}</a>
                          <div class="data_console"><div @click="infolist()">{{item.listDetails}}</div></div>
                      </div>
                  </li>
            </ul>

        </div>

<!--    <div >
        <ul>

            <div v-for="(item,index) in pagelists"
            :key="index">
                {{item.title}}&#45;&#45;{{item.content}}
                <div @click="infolist()">详情</div>
            </div>
        </ul>
    </div>-->
    </div>
</template>

<script>
    import store from '../store.js'
    export default {
        name: "List",
        store,
        methods:{
            infolist(){

                this.$router.push('/info')
            }
        },
        computed:{
            pagelists(){
                return store.state.lists
            }
        }
    }
</script>

<style scoped>
  li{
      width: 100%;
      height: 80px;
  }
  .data_blank{
      width: 100%;
      height: 8px;
      background-color: rgba(28,31,33,.06);
  }
    .data_title{
        float: left;
    }
    .data_content{
        float: right;
    }
    .data_control{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .data_console{
        width: 100%;
        margin: 0 10px;
        background-color: #c6c5c5;
        height: 40px;
    }
</style>