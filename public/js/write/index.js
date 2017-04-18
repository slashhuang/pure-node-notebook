/*
 * @Author slashhuang
 * 17/4/18
 * 写博客界面
 * 因为这块代码只能登陆才可见，所以暂时可以不考虑首屏性能问题
 */
import 'antd/dist/antd.css';  // or 'antd/dist/antd.less' 
import './scss/index.scss';
import React ,{ Component } from 'react';
import { render } from 'react-dom';
import { categoryApi,submitBlogApi  } from './ajax'
//UI框架
import LeftMenu from './menu';
import { Row, Col,Menu, Input,Select, Button, Icon } from 'antd';
const Option = Select.Option;

//markdown 功能
import marked from 'marked';
import highlight from 'highlight.js'
marked.setOptions({
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }
});
class Write extends Component{
	constructor(){
		super();
		this.state={
			categoryList:[],
			content:"",
			title:'',
			category:''
		}
		this.storeData = this.storeData.bind(this);
		this.submitData = this.submitData.bind(this);
	}
	componentDidMount(){
		categoryApi().then(categoryList=>{
			this.setState({
				categoryList:categoryList
			})
		})
	}
	submitData(){
		let {
			categoryList,
			...blogData
		} = this.state;
		this.setState({
			loading:true
		})
		submitBlogApi(blogData).then(res=>{
			this.setState({
				loading:false
			})
		})
	}
	storeData(obj,callback){
		this.setState(obj,callback)
	}
	parserHtml(){
		let {content} = this.state;
		if(content){
			marked(content,(err,_content)=>{
				this.previewDom.innerHTML = _content
			})
		}
	}
	render(){
		let {
			categoryList,
			content,
			title,
			category
		} = this.state;
		return (
			<div className='container'>
				<div className='menu-left'>
					<LeftMenu />
				</div>
				 <div className="content">
				 	<Row>
				      	<Col span={10}>
				      		<Row type="flex" align="middle">
				      			<Col span={6}>
				      				文章标题
				      			</Col>
				      			<Col span={12}>
					      			<Input placeholder="请输入文章标题" 
					      				   value={title}	
					      				   onChange={e=>this.storeData({'title':e.target.value})}/>
				      			</Col>
				      		</Row>
						</Col>
				      <Col span={10}>
				     		 <Row type="flex" align="middle">
				      			<Col span={8}>
					      			选择文章分类
				      			</Col>
				      			<Col span={12}>
						      		<Select
									    showSearch
									    style={{ width: 200 }}
									    placeholder="请选择文章分类"
									    optionFilterProp="children"
									    onChange={val=>this.storeData({'category':val})}
									    filterOption={(input, option) => option.props.value.toLowerCase().indexOf(input.toLowerCase()) >= 0}
									  >
									  {
									  	categoryList.map(category=>{
											let {id,name} = category;
											return  <Option value={''+id} key={id}>{name}</Option>
										})
									  }
									</Select>
					      		</Col>
				      		</Row>
				      </Col>
				    </Row>
				    <Row className="markdown">
				    	<Col span={12}>
				    		<Input type="textarea"
				    			   className="mark-content" 
				    			   value={content}
				    			   onChange={e=>{
				    			   		this.storeData({content:e.target.value},this.parserHtml)
				    			   	}}/>
				    	</Col>
				    	<Col span={12}>
				    		<div className="mark-content"
				    			ref={preview =>{this.previewDom = preview}}>
				    		</div>
				    	</Col>
				    </Row>
				     <Row className="submit-btn"
				     	  type="flex" justify="center">
				    		<Button type="primary" 
				    			size='large'
				    			loading={this.state.loading} 
				    			onClick={this.submitData}>
					          提交博客
					        </Button>
				    </Row>
				 </div>

			</div>
		)
	}
}
render(<Write />,document.getElementById('mod-write'))
