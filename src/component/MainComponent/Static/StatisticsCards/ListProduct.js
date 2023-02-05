import { Avatar, List, message } from 'antd';
import VirtualList from 'rc-virtual-list';
import { useEffect, useState } from 'react';
import './statisticsCards.css'
import Photos from '../../../Logo/photo.jpg';

const data = [
    'Производитель',
    'Название',
    'Оценка',
    'Кол-во',
    'Остаток',
    'Артикул',
    "Цвет",
    "Категории",
    "Поисковые запросы"
  ];

const ContainerHeight = 500;
const ListProduct = () => {
  const [datas, setData] = useState(data);
  
  return (
    <div className='listProduct'>
    <List>
        <h3 style={{textAlign:'center',paddingTop:'10px'}}>Название товара</h3>
        <img className='imgProduct' src={Photos}/>
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
  export default ListProduct