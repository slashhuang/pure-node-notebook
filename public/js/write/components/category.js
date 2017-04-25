/*
 * 文章分类
 * @Author slashhuang
 * 17/4/24
 */
 import React,{Component} from 'react'
 import {Row,Col} from 'antd'
 import { Card,Input,Button } from 'antd';
 import { categoryApi } from '../ajax'
 export default
 class Category extends Component{
    state={
      categoryList:[],
      newCategory:{}
    }
    submit(){
      let { newCategory } = this.state
      categoryApi(newCategory).then(val=>{
        this.setState({
          categoryList:categoryList.concat([newCategory])
        })
      })
    }
    render(){
        let { categoryList,newCategory } =this.state
        return (
            <div className='content'>
              <Row>
                <Col span={12}>
                  <Card title="已有分类"
                        extra={<a href="https://ant.design/components/card/">More</a>}
                        style={{ width: '80%' }}>
                    {
                      categoryList.map(()=>{
                         let {name,id} = category
                        return (
                           <Row type="flex" justify="center">
                             分类:{ name }
                             id: {id }
                          </Row>
                          )
                      })
                    }
                  </Card>
                </Col>
                <Col span={12}>
                 <Card title="添加分类"
                       extra={<a href="#">More</a>}
                       style={{ width: '80%' }}>
                       <Input type='text' value={newCategory.name ||''}
                              onChange={e=>this.setState({
                                  newCategory:{
                                    name:e.target.value,
                                    id:e.target.value
                                  }
                                })}/>
                       <Button onClick={::this.submit}>提交分类</Button>
                  </Card>
                </Col>
              </Row>
            </div>
        )
    }
 }

