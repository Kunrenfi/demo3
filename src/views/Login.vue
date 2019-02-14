<template>
    <div >





        <div v-if="!isReg">
            <div class="weui-cells__title">账号</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input"  name ="name" type="text"  v-model="name" placeholder="请输入账号">
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">密码</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input"  name="password" type="password" v-model="password" placeholder="请输入密码">
                    </div>
                </div>
            </div>
            <button type="button"  @click="login()" class="weui-btn weui-btn_primary wid">登录</button>
            <button type="button" @click="reg1()" class="weui-btn weui-btn_plain-default wid">注册</button>



        </>
        <form v-else>

            <div class="weui-cells__title">账号</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" v-model="name" placeholder="请输入账号">
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">密码</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="password" v-model="password" placeholder="请输入密码">
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">再次输入密码</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="password" v-model="repeat" placeholder="再次输入密码">
                    </div>
                </div>
            </div>
            <button type="button" @click="addUser()"  class="weui-btn weui-btn_primary wid" >确定</button>
            <button type="button"@click="cancel1()" class="weui-btn weui-btn_plain-default wid">取消</button>
        </form>



    </div>
</template>

<script>

    export default {
        name: "Login",

        data(){
            return{
             isReg:false,
             name:'',
             password:'',
             repeat:''
         }
        },
        methods:{
            reg1(){
                this.isReg = true
            },
            login(){
                 //document.getElementById(login).action="http://localhost/login";
/*
                if(localStorage.getItem("name")===this.name
                && localStorage.getItem("password")===this.password){
                    this.name='';
                    this.password='';
                    this.$router.push('/home')

                }else {

                    alert("账号或密码错误！")
                }*/
                this.$http.get('http://localhost:8082/testlogin')
                /*this.$axios
                    .post('/testlogin',{
                        username: this.username,
                        password: this.password

                    })
                    .then(successResponse =>{
                       this.responseResult = JSON.stringify(successResponse.date)
                    })*/
            },
            addUser(){
                if (this.password===this.repeat){
                    localStorage.setItem("name",this.name);
                    localStorage.setItem("password",this.password);
                    this.name='';
                    this.password='';
                    this.isReg=falvuese;
                }else {
                    alert("两次密码不一致");
                }


            },
            cancel1(){
                this.isReg =false;
            }
        }
    }
</script>

<style scoped lang="css">
   .wid{
       width: 80%;

   }

</style>