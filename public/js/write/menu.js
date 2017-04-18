import React ,{ Component } from 'react';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default
class LeftMenu extends React.Component {
  state = {
    current: 'mail',
  }
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="inline"
        style={{ width: 240,height:300 }}
        theme="dark"
        defaultOpenKeys={['sub1']}
      >
      <SubMenu key="sub1" 
              title={<span><Icon type="setting" /><span>管理面板</span></span>}>
          <MenuItemGroup key="g1">
            <Menu.Item key="appstore">
              <Icon type="mail" />文章分类
            </Menu.Item>
            <Menu.Item key="app">
              <Icon type="appstore" />文章管理
            </Menu.Item>
          </MenuItemGroup>
      </SubMenu>

      </Menu>
    );
  }
}

