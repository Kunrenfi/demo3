<template>
    <div >



        <div class="logo"></div>

        <form v-if="!isReg" class="middle" style="padding-top: 10px;width: 90%;margin: 0 auto">
            <div class="weui-cells__title">账号</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input"  name ="name" type="text"  v-model="uname" placeholder="请输入账号">
                    </div>
                </div>
            </div>
            <div class="weui-cells__title"  >密码</div>
            <div class="weui-cells" style="margin-bottom: 80px">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input"  name="password" type="password" v-model="password" placeholder="请输入密码">
                    </div>
                </div>
            </div>

            <input  @click="login()" class="weui-btn weui-btn_primary wid"   value="登录">
            <button type="button" @click="reg1()" class="weui-btn weui-btn_plain-default wid">注册</button>

        </form>

        <form v-else style="padding-top: 10px;width: 90%;margin: 0 auto">

            <div class="weui-cells__title">账号</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" v-model="uuname" placeholder="请输入账号">
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">密码</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="password" v-model="upassword" placeholder="请输入密码">
                    </div>
                </div>
            </div>
            <div class="weui-cells__title">输入电话号码</div>
            <div class="weui-cells">
                <div class="weui-cell">
                    <div class="weui-cell__bd">
                        <input class="weui-input" type="text" v-model="phone"  placeholder="电话">
                    </div>
                </div>
            </div>
            <button type="button" @click="addUser()"  class="weui-btn weui-btn_primary wid" >确定</button>
            <button type="button"@click="cancel1()" class="weui-btn weui-btn_plain-default wid">取消</button>
        </form>



    </div>
</template>

<script>
    import store from '../store.js'
    export default {


        data(){
            return{
                    isReg:false,
                    uname:'',
                    password:'',
                    phone:'',
                uuname:'',
                upassword:''

         }
        },
        methods:{


            reg1(){
                this.isReg = true
            },
            login(){

                if
                    (this.uname===''||this.password===''){
                        alert("用户名和密码不能为空")
                }else {
                    this.axios({
                        method:"post",
                        url:"/api/login",
                       data:{
                            uname:  this.uname,
                            password:this.password
                        },


                        dataType:"json",

                       }).then((res)=>{
                        if(res.data.msg=="success"){
                            store.commit("addItem",res.data.ListDetials);
                          //  store.commit("adduser",res.data.userDetials);
                         //   console.log(res.data.userDetials)
                            this.$router.push('/home')
                        }else {
                            alert(res.data.msg);
                        }


                    })
                }

            },
            addUser(){
                if (this.uuname===''||this.upassword===''||this.phone===''){
                    alert("内容不能为空")
                }else {
                        this.axios({
                            method: "post",
                            url: "/api/register",
                            data: {
                                uname: this.uuname,
                                password: this.upassword,
                                phone: this.phone
                            },
                            dataType: "json",

                        }).then((res) => {
                            if (res.data.msg == "success") {
                                store.commit("addItem",res.data.ListDetials);
                              //  store.commit("addUser",res.data.username);
                                console.log(res.data.ListDetials)
                                alert("注册成功");
                                this.$router.push('/home')
                            } else {
                                alert(res.data.msg);
                            }
                        })


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
    .logo{
        width: 120px;
        height: 120px;
        border: rgba(109, 109, 109, 0.91) 1px solid;border-radius: 50%;box-shadow: 8px 8px 8px #a5a5a5;
        background-image: url(../assets/logo.png);
        background-size: 100%;
        background-position: center;
        background-repeat: no-repeat;
        margin: 10px auto;
   }


</style>