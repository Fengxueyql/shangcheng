<template>
<div class="box">
    <div class="all">
        <van-icon name="arrow-left" size="25" />
        <div class="bg">
            <div class="text">
                <van-form>
                    <div class="title">
                        <p>登录/注册</p>
                    </div>
                    <van-field name="用户名" placeholder="USERNAME" v-model="username" :rules="[{ required: true, message: '请填写用户名' }]" />
                    <van-field type="password" name="密码" placeholder="PASSWORD" v-model="password" :rules="[{ required: true, message: '请输入密码' }]" />
                    <van-field name="手机号码" label="手机号码" placeholder="仅注册需要" v-model="news" :rules="[{ required: true, message: '请填写用户手机号码' }]" />
                    <van-field center clearable label="短信验证码" placeholder="请输入短信验证码" v-model="code_auth">
                        <template #button>
                            <van-button size="small" type="primary">
                                发送验证码
                            </van-button>
                            <div v-html="name"></div>
                        </template>
                    </van-field>
                    <div class="but">
                        <div>
                            <van-button type="primary">登录</van-button>
                        </div>
                        <div>
                            <van-button type="info" @click='goto'>注册</van-button>
                        </div>
                    </div>
                </van-form>
            </div>
        </div>

    </div>
</div>
</template>

<script>
import Vue from 'vue';
import {
    Dialog
} from 'vant';
export default {
    name: '',
    props: {},
    data() {
        return {
            username: '',
            password: '',
            message: '',
            code_auth: '',
            news: '',
            name: '',

        }
    },
    components: {},
    methods: {

        //注册
        goto() {
            this.$api.register({
                nickname: this.username,
                password: this.password,
                verify: this.code_auth,

            }).then((res) => {
                if (res.code === 200) {
                    localStorage.setItem('user', JSON.stringify({
                        nickname: this.username,
                        password: this.password,

                    }))
                    this.$toast.success(res.msg);
                    this.$router.push("/login")

                }

                this.$toast.fail(res.msg)

            })

        },
        //验证码
        get() {
            this.$api.getverify().then((res) => {
                this.name = res;
            });
        },

    },
    mounted() {
        this.get()

    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.bg {
    background-image: url('../../assets/login.jpg');
    width: 375px;
    height: 667px;
}

.text {
    position: absolute;
    top: 150px;
    width: 350px;
    height: 400px;
    background-color: white;
    left: 15px;
}

.title {
    background-color: white;
    font-size: 18px;

}

.but {
    width: 150px;
    height: 50px;
    line-height: 50px;
    margin: 10px;
    display: flex;
    justify-content: space-around;
}

.box {
    height: 667px;
}
</style>
