<template>
<div>

    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">

        <van-swipe-item v-for="(item,index) in list" :key="index"><img :src="item.image"></van-swipe-item>

    </van-swipe>

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
            list: []

        }
    },
    //监听方法  click事件等
    methods: {
        goto() {
            this.$api.getRecommend().then((res) => {
                if (res.code === 200) {
                    this.list = res.data.slides;

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
.van-swipe-item img {
    width: 100%;
}
</style>
