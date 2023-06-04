import axios from '../utils/request';

// 获取专栏列表请求
export const genColumns = () => axios.get('/columns');

// 获取专栏对应文章列表请求
export const genPost = (id: string) => axios.post(`/post?id=${id}`);
