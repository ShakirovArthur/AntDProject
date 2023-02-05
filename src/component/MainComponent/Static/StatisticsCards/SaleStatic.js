import {List } from 'antd';
import VirtualList from 'rc-virtual-list';
import {  useState } from 'react';
import './statisticsCards.css'

const data = [
    'Выручка за период',
    'Средняя выручка за период',
    'Продажи за период',
    'Продажи за все время',
    'Тренд выручки',
    "Упущенная выручка",
    "Цена",
    "Дней с наличием продаж"
  ];

const ContainerHeight = 400;
const SaleStatic = () => {
  const [datas, setData] = useState(data);
  
  return (
    <div className='saleStatistics'>
    <List>
        <h3 style={{paddingLeft:'25px',paddingTop:'10px'}}>Продажи</h3>
      <VirtualList
        data={datas}
        height={ContainerHeight}
        itemHeight={47}
        itemKey="email"
        
      >
        {(item) => (
          <List.Item key={item.email}>
            <List.Item.Meta
              
              title={<a>{item}</a>}
              
            />
            <div>1шт</div>
          </List.Item>
        )}
      </VirtualList>
    </List>
    </div>
  );
};
  export default SaleStatic