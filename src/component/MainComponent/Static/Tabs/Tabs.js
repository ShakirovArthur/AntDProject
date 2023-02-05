import { Tabs } from 'antd';
import FirstDiagram from "../Diagrams/FirstDiagram";
import {SecondDiagram} from "../Diagrams/SecondDiagram";
import SaleStatic from "../StatisticsCards/SaleStatic";
import './Tabs.css'

const items = [
    {
        key: '1',
        label : 'График №1',
        children: <FirstDiagram/>
    },
    {
        key: '2',
        label: 'График №2',
        children: <SecondDiagram/>
    }
]

const MainTab = () =>{
        return (
            <div className='saleStaticAndTabs'>
        <Tabs defaultActiveKey="1" className='mainTab' items={items} />
                <SaleStatic/>
            </div>
        )};

export default MainTab ;