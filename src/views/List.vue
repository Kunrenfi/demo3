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
            <div v-for="(item,index) in pagelists"
                 :key="index">
                {{item.title}}&#45;&#45;{{item.content}}
                <div @click="infolist()">详情</div>
            </div>
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

<style>

</style>