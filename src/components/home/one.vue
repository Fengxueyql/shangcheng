<template>
<div class="observe-dom-container">
    <div class="scroll-wrapper" ref="scroll">
        <div class="scroll-content">
            <div v-for="(item, index) in list" :key="index" class="scroll-item" @click="jump(item)">
                <div class="box4">
                    <img :src="item.image" />
                    <div class="box3">{{ item.goodsName.substr(0,5)+'...' }}</div>
                    <van-button color="linear-gradient(to right, #ff6034, #ee0a24)" class="box5" @click="add(item)">
                        点击添加
                    </van-button>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import BScroll from "@better-scroll/core";
import ObserveDOM from "@better-scroll/observe-dom";

BScroll.use(ObserveDOM);
export default {
    name: "",
    //接收父组件传递过来的参数
    props: {},
    components: {},
    // 定义变量
    data() {
        return {
            list: {},
        };
    },
    //监听方法  click事件等
    methods: {
        goto() {
            this.$api.getRecommend().then((res) => {
                if (res.code === 200) {
                    this.list = res.data.recommend;

                }
            });
        },
        //滑动
        init() {
            this.bs = new BScroll(this.$refs.scroll, {
                observeDOM: true,
                scrollX: true,
                scrollY: false,
                click: true,
            });
        },
        handleClick() {
            // observe-dom plugin will refresh bs
            this.nums += 2;
        },
        //路由传参
        jump(item) {

            this.$router.push({
                path: '/detail',
                query: {
                    id: item.goodsId

                }

            })

        }
    },
    //调用
    mounted() {
        this.goto();
        this.init();
    },
    watch: {},
    //计算
    computed: {},
};
</script>

<style lang="scss" scoped>
.observe-dom-container {
    text-align: center;
}

.scroll-wrapper {
    width: 400px;

    white-space: nowrap;
    border: 3px solid grey;
    border-radius: 5px;
    overflow: hidden;
}

.scroll-content {
    display: inline-block;

}

.scroll-item {
    height: 55px;
    width: 80px;

    line-height: 35px;
    font-size: 5px;
    display: inline-block;
    text-align: center;
    padding: 0 20px;
}

.btn {
    margin: 50px auto;
    padding: 5px;
    color: #fff;
    border-radius: 4px;
    font-size: 20px;
    background-color: #666;
}

.box4 img {
    width: 70px;
}

.box3 {
    width: 80px;
    height: 55px;
    text-align: center;
    line-height: 55px;
    // background-color: blue;

}
</style>
