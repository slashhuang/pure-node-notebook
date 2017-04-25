/*
 * 博客列表页面
 * @Author slashhuang
 * 17/4/25
 */
require('../detail/scss/index.scss')
import { blogListApi } from './ajax'
import React,{ Component }  from 'react'
import { render } from 'react-dom'
import { Spin } from 'antd'
class ListPanel extends Component{
    state={
        blogList:[]
    }
    componentDidMount(){
        blogListApi().then(blogList=>{
            this.setState({blogList})
        })
    }
    renderTitle(detail){
        let {title,category} = detail
        return  <div className='blog-head clearfix'>
                    <div className='blog-title'>{title}</div>
                    <div className='blog-category'>{category}</div>
                </div>
    }
    renderBlogContent(detail){
        if(detail.content){
            return <div dangerouslySetInnerHTML={{__html:detail.content}}></div>
        }else{
            return <Spin />
        }
    }
    renderBlog(detail){
        return <div className="blog-detail markdown">
                     {this.renderTitle(detail)}
                    <div className='blog-content'>
                        {this.renderBlogContent(detail)}
                    </div>
                </div>
    }
    renderList(){
        let { blogList } =this.state;
        return blogList.map(blog=>{
            return this.renderBlog(blog)
        })
    }
    render(){
        let { blogList } =this.state;
        return (
            <div className='container clearfix'>
                {
                    do{
                        if(blogList.length>0){
                             this.renderList()
                         }else{
                            <Spin/>
                         }
                    }
                }
            </div>
        )
    }
}
render(<ListPanel />,document.getElementById('mod-list'))





