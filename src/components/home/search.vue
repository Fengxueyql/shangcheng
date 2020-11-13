<template>
<div>
    <van-search v-model="value" show-action placeholder="请输入搜索关键词" @search="onSearch">
        <template #action>

            <div v-for="(item, index) in list" :key="index">{{item.name}} </div>
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
            value: '',
            list: '',

        }
    },
    //监听方法  click事件等
    methods: {
        onSearch(val) {
            Toast(val);
        },

        onSearch() {
            let info = {
                value: this.value
            }
            this.$api.search(info).then((res) => {
                if (res.code === 200) {
                    this.list = res.data.list
                    this.list.map((item) => {
                        this.$set(
                            item,
                            "nickname",
                            item.name.replace(
                                eval(`/${this.value}/g`),
                                `<span style="color:red">${this.value}</span>`
                            )
                        )
                    })

                }
            });
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
