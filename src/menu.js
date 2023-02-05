import {PieChartOutlined, UserOutlined, DesktopOutlined, DatabaseOutlined} from '@ant-design/icons';
import { Layout, Menu, theme} from 'antd';
import {Avatar} from 'antd';
import {useState} from 'react';
import './menu.css'
import InputSearch from './component/Header/header';
import {Link,Route} from "react-router-dom";
import {Routes} from "react-router-dom";
import MainPageOfStatistics from "./component/MainComponent/Static/MainPageOfStatistics";
import StartPage from "./component/MainComponent/StartPage/MainStartPage/StartPage";
import NicheCards from "./component/MainComponent/Niche/NicheCards";


const {Header, Content, Footer, Sider} = Layout;

function getItem(path ,label, key, icon, children, type) {
    return {
        path,
        key,
        icon,
        children,
        label,
        type,
    };
}

const items = [
    getItem('/','Главная','1',<DesktopOutlined />),
    getItem('/static','Статистика','2',<PieChartOutlined />),
    getItem('/niche','Поиск ниши','3',<DatabaseOutlined />)
].map((item, index) => {
    return {
        key: index,
        label: <Link to={item.path}>{item.label}</Link>,
        icon: item.icon,
    };
});


const App = () => {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();
    return (
            <Layout
                style={{
                    minHeight: '100vh',
                }}
            >
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                    <Avatar size={64} icon={<UserOutlined/>}/>
                    {!collapsed ? <div className='userName'>Пользователь</div>:''}
                    <Menu theme="dark" defaultSelectedKeys='0' mode="inline"  items={items}/>
                </Sider>
                <Layout className="site-layout">
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                            height: 60,
                        }}
                    >
                        <InputSearch/>
                    </Header>

                    <Content
                        style={{
                            margin: '0 16px',
                        }}
                    >
                        <Routes>
                            <Route exact path="/" element={<StartPage />} />
                            <Route path="/static" element={<MainPageOfStatistics />} />
                            <Route path='/niche' element={<NicheCards/>}/>
                        </Routes>
                        <div
                            style={{
                                padding: 24,
                                background: '#ededed',
                            }}
                        >
                        </div>
                    </Content>
                    <Footer
                        style={{
                            textAlign: 'center',

                            gridGap:'10%',
                            marginLeft:'50px'
                        }}
                    >
                       <p>©2023 Created by Tech-systems</p>
                    </Footer>
                </Layout>
            </Layout>

    );
};
export default App;
