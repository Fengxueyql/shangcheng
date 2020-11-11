<template>
<div class="box0">
    <div>休闲食品</div>
    <div>

        <div class="box2">
            <!---左边盒子-->
            <div class="box3">
                <div class="box5"><img src="http://images.baixingliangfan.cn/homeFloor/20180407/20180407180109_6316.jpg"></div>
                <div class="box6"><img src="http://images.baixingliangfan.cn/homeFloor/20180407/20180407180151_6180.jpg"></div>
            </div>
            <!---右边盒子-->
            <div class="box4">
                <div><img src="http://images.baixingliangfan.cn/homeFloor/20180407/20180407180217_3970.jpg"></div>
                <div><img src="http://images.baixingliangfan.cn/homeFloor/20180407/20180407180257_2378.jpg"></div>
                <div><img src="http://images.baixingliangfan.cn/homeFloor/20180407/20180407180427_8557.jpg"></div>
            </div>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: "",
    //接收父组件传递过来的参数
    props: {},
    components: {},
    // 定义变量
    data() {
        return {
            list: [],
        };
    },
    //监听方法  click事件等
    methods: {
        goto() {
            this.$api.getRecommend().then((res) => {
                if (res.code === 200) {
                    this.list = res.data.floor1;

                }
            });
        },
    },
    //调用
    mounted() {
        this.goto();
    },
    watch: {},
    //计算
    computed: {},
};
</script>

<style lang="scss" scoped>
.box0 {
    margin-bottom: 25px;
}

.box1 {
    width: 400px;
    height: 25px;
    margin-top: 10px;
    font-size: 16px;
    font-weight: bolder;
    color: orange;
    background-color: grey;
    text-align: center;
    line-height: 25px;
}

.box2 {

    width: 400px;
    height: 200px;
    border: 1px solid grey;
    display: flex;

}

.box3 {
    width: 190px;
    height: 220px;

}

.box4 {
    width: 200px;
    height: 150px;

}

.box4 img {
    height: 100px;
    width: 200px;
}

.box5 img {
    width: 190px;
    height: 220px;
}

.box6 img {
    width: 190px;
    height: 80px;
}
</style>
