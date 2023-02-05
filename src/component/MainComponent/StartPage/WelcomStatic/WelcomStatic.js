import { Tabs } from 'antd';
import WelcomDiagramOne from "./WelcomDiagramOne";
import WelcomDiagramSecond from "./WelcomDiagramSecond";
import './welcomStatic.css'

const items = [
    {
        key: '1',
        label: 'Всего товаров',
        children: <WelcomDiagramOne/>
    },
    {
        key:'2',
        label: 'Всего продавцов',
        children: <WelcomDiagramSecond/>
    }
]

const WelcomDiagramMain = () => <Tabs defaultActiveKey="1" className='welcomStatic' items={items}  />
    ;
export default WelcomDiagramMain