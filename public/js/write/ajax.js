//网络请求
import axios from 'axios';


const categoryApi = ()=>{
	let api = '/category.action'
	return axios.get(api).then((res)=>{
			return res['data']
		})
};
const submitBlogApi = (data)=>{
	let api = '/blog.action'
	return axios.post(api,data)
				.then((res)=>{
					return res['data']
				})
}
export {
	categoryApi,
	submitBlogApi
}


