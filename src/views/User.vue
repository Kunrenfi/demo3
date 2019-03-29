<template>
    <div class="about">
        <h1 >Hello World!</h1>
    </div>
</template>

<script>
    import store from '../store.js';

    export default {
       date(){
           return{
               uname:''

           }

       },
        computed:{
            Users(){

                this.uname= store.state.username
            }
        }
    }
</script>

<style>

</style>