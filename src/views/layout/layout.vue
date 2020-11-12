<template>
<div>
    <van-tabbar :route=true v-model="na">
        <van-tabbar-item icon="home-o" to='/'>首页</van-tabbar-item>
        <van-tabbar-item icon="bars" to='/class'>分类</van-tabbar-item>
        <van-tabbar-item icon="cart-o" badge='5' to='/cart'>购物车</van-tabbar-item>
        <van-tabbar-item icon="friends-o" to='mine'>我的</van-tabbar-item>

    </van-tabbar>

    <!--子路由出口-->
    <router-view> </router-view>
</div>
</template>

<script>
export default {
    name: '',
    //接收父组件传递过来的参数
    props: {},
    components: {

    },
    // 定义变量
    data() {
        return {
            na: '',

        }
    },
    //监听方法  click事件等
    methods: {

    },
    //调用
    mounted() {

    },
    watch: {

    },
    //计算
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
