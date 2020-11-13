<template>
<div>
    <div class="box1" v-if="flag">
        <div class="box3"><img src="../../../assets/b1.jpg">
            <div class="box2">欢迎您：小白</div>
            <van-button type="primary">退出登录</van-button>

        </div>
    </div>
    <div class="box1" v-if="!flag">
        <div class="box3"><img src="../../../assets/b1.jpg">
            <div class="box2">请退出登录：小白赤</div>
            <van-button type="primary">退出登录</van-button>

        </div>
    </div>

    <div class="box4">
        <van-grid :column-num="5">
            <van-grid-item icon="idcard" text="代付款" />
            <van-grid-item icon="orders-o" text="代发货" />
            <van-grid-item icon="logistics" text="待收货" />
            <van-grid-item icon="records" text="评价" />

            <van-grid-item icon="shop-collect-o" text="已完成" />
        </van-grid>
    </div>
    <!--第一个--->
    <div>
        <van-cell icon="label-o" title="全部" is-link to="index" />

    </div>
    <!--第二个--->
    <div>
        <van-cell icon="idcard" title="收藏商品" is-link to="index" />
    </div>
    <!--第三个--->
    <div>
        <van-cell icon="location-o" title="地址管理" is-link to="index" />
    </div>
    <!--第四个--->
    <div>
        <van-cell icon="eye-o" title="最近浏览" is-link to="index" />
    </div>
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
            active: '',
            flag: true

        }
    },
    //监听方法  click事件等
    methods: {

    },
    //调用
    mounted() {

        this.flag = localStorage.getItem("user") ? true : false;

    },
    watch: {

    },
    //计算
    computed: {

    }
}
</script>

<style lang="scss" scoped>
.box1 {
    width: 400px;
    height: 300px;
    background-color: rgb(230, 10, 94);
    border: 1px solid rgb(230, 10, 94);
    position: relative;

}

.box3 {
    margin-left: 180px;

    margin-top: 80px;

}

.box1 img {
    width: 80px;
    border-radius: 50%;
    height: 80px;
}

.box2 {
    width: 150px;
    height: 50px;

    margin-right: 200px;
    font-size: 18px;
    color: white;
}

.box4 {
    width: 400px;
}
</style>
