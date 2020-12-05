import axios from "axios"
import { Toast } from "vant"
//添加axios基地址
axios.defaults.baseURL = "http://liangwei.tech:3000";
// axios.defaults.baseURL = "http://157.122.54.189:9083";
//添加axios请求拦截器
axios.interceptors.request.use(config => {
    if (!config.headers.Authorization && localStorage.getItem('token')) {
        config.headers.Authorization = 'Bearer ' + localStorage.getItem('token');
    }
    return config;
})

//添加axios响应拦截器
axios.interceptors.response.use(res => {
    //定义返回码的正则
    const AuthErrReg = /^4\d{2}$/;
    //进行判断，如果符合就弹出错误信息，进行防御性编程
    if (AuthErrReg.test(res.data.statusCode)) {
        Toast.fail(res.data.message || '系统错误');
    }

    if (res.data.message == '用户信息验证失败') {
        localStorage.removeItem('token')
        localStorage.removeItem('userId')
        router.replace('/login')
    }
    return res;
})


export default axios