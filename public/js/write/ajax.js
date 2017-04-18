//网络请求
import axios from 'axios';


const categoryApi = ()=>{
	let api = '/category.action'
	return axios.get(api).then((res)=>{
			return res['data']
		})
};


export {
	categoryApi
}


