 import axios from 'axios'

//创建实例
const http = axios.create({
    baseURL: '/api',
    timeout: 10000
})


// 响应拦截 处理请求返回回来的结果
http.interceptors.response.use(res => {
    return res.data
}, err => {
    let status =err.response && err.response.status
    if (status === 400) {
        this.$toast.error('请求参数错误')
    }
    if (status === 401) {
        this.$toast.error('没有权限')
    }
    if (status === 403) {
        this.$toast.error('登录过期')
    }
    if (status === 404) {
        this.$toast.error('请求路径错误')
    }
    if (status === 500) {
        this.$toast.error('服务器出错')
    }
    if (status === 503) {
        this.$toast.error('服务器在维护')
    }
    return Promise.reject(err)
})

export default http




