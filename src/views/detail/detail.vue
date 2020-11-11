<template>
<div>
    <!--上边框-->
    <div class="box1">
        <img :src=" this.list.goodsOne.image">
    </div>
    <!--下边框-->
    <div class="box2">
        <!--左边图片-->
        <div class="box3"><img :src=" this.list.goodsOne.image"></div>
        <!--右边框-->
        <div>
            <div class="box4">{{ this.list.goodsOne.name}}</div>
            <div class="box5">￥{{ this.list.goodsOne.present_price}}</div>
        </div>

    </div>

    <!--下边框-->
    <div class="box6">
        <div class="box7">购物数量：</div>
        <div>
            <div>剩余{{this.list.goodsOne.amount}}件</div>
            <div></div>
        </div>
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
        }
    },
    //监听方法  click事件等
    methods: {
        goto() {
            this.$api.getgood(this.id).then((res) => {
                if (res.code === 200) {
                    this.list = res.goods;
                    console.log(this.list)

                }
            });
        },
        gohome() {
            this.id = this.$route.query.id;
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
    width: 400px;
    height: 400px;
    background-color: grey;
    z-index: 1;
    opacity: 0.6;
}

.box1 img {
    width: 400px;
    height: 400px;

}

.box2 {
    width: 400px;
    height: 100px;
    border: 1px solid grey;
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

}

.box3 img {
    width: 120px;
    height: 120px;
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

.box6 {
    width: 400px;
    height: 20px;
}

.box7 {

    font-size: 16px;
}
</style>
