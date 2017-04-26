/*
 * 日志详情组件
 * @Author slashhuang
 * 17/4/25
 */
import React,{ Component }  from 'react'

export default
 class DetailPanel extends Component{
    renderTitle(){
        let {title,category,_id} = this.props.detail
        return  <div className='blog-head clearfix'>
                    <h1 className='blog-title'>
                        <a href={`/blog?id=${_id}`}>
                            {title}
                        </a>
                    </h1>
                    <h3 className='blog-category'>标签:{category}</h3>
                </div>
    }
    renderBlog(){
        let {detail} = this.props
        if(detail.content){
            return <div dangerouslySetInnerHTML={{__html:detail.content}}></div>
        }else{
            return <div>没有内容</div>
        }
    }
    render(){
        if(this.props.detail){
            return (
                 <div className="blog-detail markdown">
                         {this.renderTitle()}
                        <div className='blog-content'>
                            {this.renderBlog()}
                        </div>
                </div>
            )
        }else{
            return null
        }

    }
}