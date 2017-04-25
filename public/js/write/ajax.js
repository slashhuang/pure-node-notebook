//网络请求
import axios from 'axios';
// Add a response interceptor
axios.interceptors.response.use(function (response) {
    // Do something with response data
    return response['data'];
  }, function (error) {
    // Do something with response error
    alert(`error ${error}`)
  });

const categoryListApi = (category)=>{
    let api = '/categoryList.action'
    return axios.get(api).then((res)=>{
            return res['data']
        })
};
const categoryApi = (category)=>{
	let api = '/category.action'
	return axios.post(api,category).then((res)=>{
			return res['data']
		})
};
const submitBlogApi = (data)=>{
	let api = '/blog.action'
	return axios.post(api,data)
				.then((res)=>{
                    if(res['status']==-1){
                        return {
                            error:true,
                            msg:res['data']
                        }
                    }else{
                        return res['data']
                    }
				})
}
export {
	categoryApi,
	submitBlogApi,
    categoryListApi
}


