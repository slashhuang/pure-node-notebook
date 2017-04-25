/*
 * 文章分类
 * @Author slashhuang
 * 17/4/24
 */
 import React,{Component} from 'react'
 import {Row,Col} from 'antd'
 export default
 class Category extends Component{
    render(){
        return (
            <div className='content'>
              <Row>
                <Col span={12}>
                   已有分类
                </Col>
                <Col span={12}>
                添加分类
                </Col>
              </Row>
            </div>
        )
    }
 }

