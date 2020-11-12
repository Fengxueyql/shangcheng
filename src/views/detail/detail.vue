<template>
<div>
    <!--上边框-->
    <div class="box1">
        <img :src=" this.list.image">
    </div>
    <!--下边框-->
    <div class="box2">
        <!--左边图片-->
        <!-- <div class="box3"><img :src=" this.list.goodsOne.image"></div> -->
        <!--右边框-->
        <div>
            <div class="box4">{{ this.list.name}}</div>
            <div class="box5">￥{{ this.list.present_price}}</div>
        </div>

    </div>

    <!--下边框-->
    <div class="box6">
        <div class="box7">购物数量：</div>
        <div>
            <div>剩余{{this.list.amount}}件</div>
            <div></div>
        </div>
    </div>
    <!--商品介绍-->
    <div class="a1">
        <van-button type="primary">商品详情</van-button>
        <van-button type="info">商品评论</van-button>
    </div>
    <!--商品详情-->

    <div v-html="list1" class="a3"></div>

    <!--底部导航栏-->
    <div>
        <van-tabbar :route=true v-model="na">
            <van-tabbar-item icon="home-o" to='/'>客服</van-tabbar-item>

            <van-tabbar-item icon="cart-o" badge='5' to='/cart'>购物车</van-tabbar-item>
            <van-button type="primary" @click="car(id)">加入购物车</van-button>
            <van-button type="warning">立即购买</van-button>

        </van-tabbar>
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
            id: '',
            list: '',
            image: '',
            na: '',
            list1: ''
        }
    },
    //监听方法  click事件等
    methods: {
        goto() {
            this.$api.getgood(this.id).then((res) => {
                if (res.code === 200) {
                    this.list = res.goods.goodsOne;

                    this.list1 = res.goods.goodsOne.detail;

                }
            });
        },
        gohome() {
            this.id = this.$route.query.id;
        },

        //购物车
        car(ids) {
            this.$router.push({
                path: '/cart',
                query: {
                    id: ids

                }

            })

        }
    },
    //调用
    mounted() {

        this.gohome()
        this.goto();
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
    width: 100%;
    height: 400px;
    background-color: grey;
    z-index: 1;
    opacity: 0.6;

    img {
        width: 100%;
    }
}

.a3 {
    margin-top: 15px;
}

.box2 {
    width: 400px;

    display: flex;
    justify-content: flex-end;
    position: relative;
}

.box3 {
    width: 80px;
    height: 80px;

    position: absolute;
    top: -25px;
    left: 0px;

    img {
        width: 20%;
    }

}

.box4 {

    height: 30px;
    margin-left: 110px;
    font-size: 16px;
    color: black;

}

.box5 {
    width: 280px;
    height: 20px;
    margin-left: 110px;
    font-size: 18px;
    color: red;

}

.a1 {
    display: flex;
    justify-content: space-between;
    margin-top: 70px
}

.box6 {
    width: 100%;
    height: 20px;
}

.box7 {

    font-size: 16px;
}
</style>
