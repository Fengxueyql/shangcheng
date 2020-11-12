<template>
<div>
    <div class="box1">
        <div v-for="(item,index) in list1" :key="index"><img :src="item.image" class="box2" @click="jump(item)"></div>

    </div>
    <div class="box3"><img :src="list2.PICTURE_ADDRESS"></div>
    <div class="box4">商品推荐</div>
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
            list1: [],
            list2: {},

        }
    },
    //监听方法  click事件等
    methods: {
        goto() {
            this.$api.getRecommend().then((res) => {
                if (res.code === 200) {
                    this.list1 = res.data.category;
                    this.list2 = res.data.advertesPicture

                }
            })
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
        this.goto()

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
    margin-top: 5px;
    display: flex;
    justify-content: space-around;

}

.box2 {
    width: 60px;
    margin-top: 10px;
}

.box3 img {

    width: 360px;
}

.box4 {
    font-size: 16px;
    font-weight: bolder;
}
</style>
