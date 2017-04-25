/*
 * 博客详情页面
 * @Author slashhuang
 * 17/4/25
 */
require('./scss/index.scss')
import { blogDetailApi } from './ajax'
import React,{ Component }  from 'react'
import { render } from 'react-dom'
import { Spin } from 'antd'
class DetailPanel extends Component{
    state={
        detail:{
            title:'',
            content:"",
            category:""
        }
    }
    componentDidMount(){
        blogDetailApi().then(detail=>{
            this.setState({detail})
        })
    }
    renderTitle(){
        let {title,category} = this.state.detail
        return  <div className='blog-head clearfix'>
                    <div className='blog-title'>{title}</div>
                    <div className='blog-category'>{category}</div>
                </div>
    }
    renderBlog(){
        let {detail} = this.state
        if(detail.content){
            return <div dangerouslySetInnerHTML={{__html:detail.content}}></div>
        }else{
            return <Spin />
        }
    }
    render(){
        return (
            <div className='container clearfix'>
                <div className="blog-detail markdown">
                     {this.renderTitle()}
                    <div className='blog-content'>
                        {this.renderBlog()}
                    </div>
                </div>
                <div className="widgets">
                </div>
            </div>
        )
    }
}
render(<DetailPanel />,document.getElementById('mod-detail'))





