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
        detail:{}
    }
    componentDidMount(){
        blogDetailApi().then(detail=>{
            this.setState({detail})
        })
    }
    renderBlog(){
        let {detail} = this.state
        if(detail){
            return detail.content
        }else{
            return <Spin />
        }
    }
    render(){
        return (
            <div className='container'>
                <div className='blog-detail'
                    dangerouslySetInnerHTML={{__html:this.renderBlog()}}>
                </div>
            </div>
        )
    }
}
render(<DetailPanel />,document.getElementById('mod-detail'))





