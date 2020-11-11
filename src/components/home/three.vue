<template>
<div class="box">
    <div>新鲜水果</div>
    <div>

        <div class="box2">
            <!---左边盒子-->
            <div class="box3">
                <div class="box5"><img src="http://images.baixingliangfan.cn/homeFloor/20180407/20180407180547_3253.jpg"></div>
                <div class="box6"><img src="http://images.baixingliangfan.cn/homeFloor/20180407/20180407180631_4071.jpg"></div>
            </div>
            <!---右边盒子-->
            <div class="box4">
                <div><img src="http://images.baixingliangfan.cn/homeFloor/20180407/20180407180705_7181.jpg"></div>
                <div><img src="http://images.baixingliangfan.cn/homeFloor/20180407/20180407180736_2822.jpg"></div>
                <div><img src="http://images.baixingliangfan.cn/homeFloor/20180408/20180408081756_7181.jpg"></div>
            </div>
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
            list: [],

        }
    },
    //监听方法  click事件等
    methods: {
        goto() {
            this.$api.getRecommend().then((res) => {
                if (res.code === 200) {
                    this.list = res.data.floor2;

                }
            });
        },

    },
    //调用
    mounted() {
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
