<template>
<div>

    <search></search>
    <lun1></lun1>
    <lun2></lun2>

    <one></one>
    <div>
        <two></two>
    </div>
    <div class="a1">
        <three></three>
    </div>
    <div class="a1">
        <four></four>
    </div>

</div>
</template>

<script>
import search from "../components/home/search"
import lun1 from "../components/home/lun1"
import lun2 from "../components/home/lun2"
import one from "../components/home/one"
import two from "../components/home/two"
import three from "../components/home/three"
import four from "../components/home/four"

export default {
    name: '',
    //接收父组件传递过来的参数
    props: {},
    components: {
        search,
        lun1,
        lun2,
        one,
        two,
        three,
        four,

    },
    // 定义变量
    data() {
        return {

        }
    },
    //监听方法  click事件等
    methods: {

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

<style lang="scss" scoped>
.a1 {
    margin-top: 100px;
}
</style>
