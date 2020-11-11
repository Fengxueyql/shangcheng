<template>
<div class="box1">
    <div class="box">热销食品</div>
    <div v-for="(item, index) in list" :key="index" class="box6" @click="add(item)">
        <img :src="item.image" class="box2" />
        <div class="box4">{{ item.name.substr(0,8)+'...' }}</div>
        <div class="box5">
            <div class="box4">￥{{ item.mallPrice }}</div>
            <div class="box3">￥{{ item.price }}</div>
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
                    this.list = res.data.hotGoods;

                }
            });
        },

        //路由传参
        add(item) {

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
    },
    watch: {},
    //计算
    computed: {},
};
</script>

<style lang="scss" scoped>
.box {
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

.box1 {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}

.box3 {
    font-size: 12px;
    text-decoration: line-through;
}

.box4 {
    font-size: 14px;
    color: red;

}

.box5 {
    display: flex;
}

.box6 img {
    width: 150px;
    height: 170px;
}
</style>
