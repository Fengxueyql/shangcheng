//封装所有的请求
import http from './index'
let  Api =  {
    // 对象的属性就是请求的方法名
    //1. 获取首页数据(get)
   getRecommend() {
       return http.get('/recommend')
   },
   //2. 搜索(post)
   search(value) {
       return http.post('/search',{
        value
       })
   },
   //3. 分类查询(get)
   getcalass({id}) {
       return http.get('/classification?mallSubId=${id}',{
           id
       })
   },
   //4. 查询获取购物车数据(post)
   getcard(data) {
       return http.post('/getCard',data)
   },
   //5. 购物车加减商品(post)
   editcart(count,id,mallPrice) {
       return http.post('/editCart', {
        count,
        id,
        mallPrice
       })
   },
   //6. 购物车商品删除(post)
   deleteshop(cid) {
       return http.post('/deleteShop',cid

       )
   },
   //7. 购物车支付页面(post)
   order(address,tel,orderId,totalPrice,idDirect,count) {
       return http.post('/order', {
        address,
        tel,
        orderId,
        totalPrice,
        idDirect,
        count
       })
   },
   //8.单个商品详情(get)
   getgood(id) {
       return http.get(`/goods/one?id=${id}`, {
           id
       })
   },
   //9. 收藏单个商品(post)
   collection(goods) {
       return http.post('/collection', {
        goods
       })
   },
   //10. 取消收藏(post)
   cancelCollecton({id}) {
       return http.post('/cancelCollection',{
           id
       })
   },
   //11. 查询商品是否已收藏(post)
   isCollection({id}) {
       return http.post('/isCollection',{
           id
       })
   },
   //12. 加入购物车(post)
   addShop(data) {
       return http.post('/addShop', data)
   },
   //13. 退出登录(post)
   loginout() {
       return http.post('/loginOut')
   },
   //14. 获取用户信息(post)
   queryUser() {
       return http.post('/queryUser')
   },
   //15. 修改保存用户信息(post)
   saveUser(gender,year,month,day,id,nickname) {
       return http.post('/saveUser', {
        gender,
        year,
        month,
        day,
        id,
        nickname
       })
   },
   //16. 商品评论(post)
   goodsOnecomment(id,rate,content,_id,order_id,image) {
       return http.post('/goodsOne/comment', {
        id,
        rate,
        content,
        anonymous,
        _id,
        order_id,
        image
        
       })
   },
   //17. 获取登录注册默认验证码(get)
   getverify() {
       return http.get('/verify')
   },
   //18. 查询用户收货地址(get)
   getAddress() {
       return http.get('/getAddress')
   },
   //19. 查询默认收货地址(get)
   getDefaultAddress() {
       return http.get('/getDefaultAddress')
   },
   //20. 设置默认收货地址(post)
   setDefaultAddress({id}) {
       return http.post('/setDefaultAddress',{
           id
       })
   },
   //21. 增加收货地址(post)
   address(name,tel,address,isDefault,province,city,county,addressDetail,areaCode,id) {
       return http.post('/address', {
        name,
        tel,
        address,
        isDefault,
        province,
        city,
        county,
        addressDetail,
        areaCode,
        id,
       })
   },
   //22. 删除地址(post)
   deleteAddress({id}) {
       return http.post('/deleteAddress', {
         id  
       })
   },
   //23. 注册(post)
   register({nickname,password,verify}) {
       return http.post('/register', {
        nickname,
        password,
        verify,
        
       })
   },
   //24. 登录(post)
   login(data) {
       return http.post('/login',data)
   },
   //25. 订单查询(get)
   getmyOrder() {
       return http.get('/myOrder')
   },
   //26. 查询已评价(get)
   getalreadyEvaluated() {
       return http.get('/alreadyEvaluated')
   },
   // 27. 查询未评价(get)
   gettobeEvaluated() {
       return http.get('/tobeEvaluated')
   },
   //28. 查询单条评论(post)
   evaluateOne(id,_id) {
    return service.req('/evaluateOne', {
         id,
        _id
    })
   },
};
export { Api };