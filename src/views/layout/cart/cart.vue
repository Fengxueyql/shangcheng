<template>
<div>
    <div>
        <div class="a1">我的商品</div>
        <div class="a2">
            <div v-for="(item, index) in list" :key="index">
                <div class="a4"><img :src='item.image_path'>
                    <div class="b1">
                        <div>{{item.name}}</div>
                        <div class="a4">
                            <div class="ba"> ￥{{item.mallPrice}}</div>
                            <div class="change">
                                <van-stepper type="text" value="1" />
                            </div>
                            <div class="del">
                                <van-button type="warning" @click="dele(item)">删除</van-button>
                            </div>
                        </div>
                    </div>

                </div>

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
            id: "",
            list: '',
            value: '',
        };
    },
    //监听方法  click事件等
    methods: {
        gocar() {
            this.id = this.$route.query.id;
        },
        //加入购物车数据
        car() {
            this.$api.addShop({
                id: this.id
            }).then((res) => {

            })

        },
        //获取购物车数据
        get() {
            this.$api.getcard({
                id: this.id
            }).then((res) => {
                this.list = res.shopList

                console.log(this.list)

            })

        },
        //删除数据
        dele(item) {

            let arr = [];
            arr.push(item.cid);

            this.$api.deleteshop(
                arr
            ).then(res => {

            })
            this.get()

        },

    },
    //调用
    mounted() {
        this.gocar();
        this.car();
        this.get();
        console.log(this.$route.query.id);
    },
    watch: {},
    //计算
    computed: {},
};
</script>

<style lang="scss" scoped>
.a1 {
    width: 100%;
    height: 50px;
    background-color: pink;
    text-align: center;
}

.a2 {
    width: 100%;
    height: 500px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.a4 {
    display: flex;
    justify-content: flex-end;
}

.box1 {
    display: flex;
}

.a2 img {
    width: 70px;
    height: 90px;
}

.change {
    display: flex;
}

.del {
    width: 50px;
    height: 15px;
    text-align: center;
    line-height: 15px;
}

.b1 {
    display: flex;
    flex-direction: column;
    width: 300px;
}

.ba {
    color: red;
    position: absolute;
    left: 70px;
}
</style>
