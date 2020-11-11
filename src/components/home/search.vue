<template>
<div>
    <van-search v-model="value" show-action label="地址" placeholder="请输入搜索关键词" @search="onSearch">
        <template #action>
            <div @click="onSearch">搜索</div>
        </template>
    </van-search>

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
            value: ''

        }
    },
    //监听方法  click事件等
    methods: {
        onSearch(val) {
            Toast(val);
        },

    },
    //调用
    mounted() {

    },
    watch: {

    },
    //计算
    computed: {

    }
}
</script>

<style scoped lang='scss'>

</style>
