<template>
<div>
    <div class="a1">商品分类</div>
    <div>
        <!----上标签-->
        <van-tabs v-model="active">
            <van-tab v-for="(item) in list" :key="item.mallCategoryId" :title="item.mallCategoryName">

            </van-tab>

        </van-tabs>
    </div>

    <div>
        <!----侧边导航-->
        <van-sidebar v-model="activeKey">

            <van-sidebar-item v-for="(item) in list" :key="item.mallCategoryId" :title="item.mallCategoryName" />

        </van-sidebar>
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
            activeKey: '',
            active: '',
            list: '',
            list1: '',

        }
    },
    //监听方法  click事件等
    methods: {
        goto() {
            this.$api.getRecommend().then((res) => {
                if (res.code === 200) {
                    this.list = res.data.category;
                    this.list1 = res.data

                }
            })
        },

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
.a1 {
    width: 100%;
    height: 30px;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
}
</style>
