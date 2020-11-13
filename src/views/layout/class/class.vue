<template>
<div class="box1">
    <div class="a1">商品分类</div>
    <div class="box2">
        <div>
            <!----侧边导航-->
            <van-sidebar v-model="activeKey">
                <van-sidebar-item v-for="item in list" :key="item.mallCategoryId" :title="item.mallCategoryName" @click="tab(item)" />
            </van-sidebar>
        </div>

        <div>
            <!----上标签-->
            <van-tabs v-model="active" @click="add">
                <van-tab v-for="(item, index) in list1" :key="index" :title="item.mallSubName" :name="item.mallSubId">
                    <div>
                        <!----侧标签-->
                        <div v-for="(item, index) in goods" :key="index">
                            <div class="box3">
                                <div class="box4"><img :src="item.image" /></div>
                                <div class="box5">
                                    <div class="box8">{{ item.name }}</div>

                                    <div class="box6">
                                        <div class="box8">￥{{ item.present_price }}</div>
                                        <div class="box7">￥{{ item.orl_price }}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </van-tab>
            </van-tabs>
        </div>

        <!----主体内容部分-->
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
            activeKey: "",
            active: "",
            list: "",
            list1: "",
            goods: [],
            classlist: "",
        };
    },
    //监听方法  click事件等
    methods: {
        //获取数据
        go() {
            this.$api.getRecommend().then((res) => {
                if (res.code === 200) {
                    this.list = res.data.category;
                    this.list1 = this.list[0].bxMallSubDto
                    this.getclass(this.list[0].bxMallSubDto[0].mallSubId);
                }
            });
        },

        //做判断分类
        tab(item) {

            this.list1 = item.bxMallSubDto;
            // console.log(this.list1);
            this.getclass(item.bxMallSubDto[0].mallSubId);

        },

        //传递参数分类
        getclass(e) {
            console.log(e)
            this.$api.getcalass(e).then((res) => {
                if (res.code === 200) {
                    this.goods = res.dataList;
                    // console.log(this.goods);
                }
            });
        },
        //做展示部分
        add(name) {
            // console.log(name)
            this.getclass(name);
        },
    },
    //调用
    mounted() {
        this.go();
    },
    watch: {},
    //计算
    computed: {},
};
</script>

<style lang="scss" scoped>
.box2 {
    display: flex;
    justify-content: space-between;
}

.box6 {
    display: flex;
}

.a1 {
    width: 400px;
    height: 30px;
    text-align: center;
    line-height: 30px;
}

.van-tab {
    width: 15px;
    height: 10px;
    text-align: center;
    line-height: 10px;
}

.box8 {
    color: red;
}

.box7 {
    text-decoration: line-through;
    font-size: 8px;

}

.van-tabs {
    position: fixed;
    left: 75px;
}

.box3 {
    display: flex;
    justify-content: space-around;
}

.box4 img {
    width: 80px;
    height: 100px;
}
</style>
