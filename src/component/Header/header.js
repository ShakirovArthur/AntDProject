import React from "react";
import { Input, Space } from 'antd';
import Icons from '../Logo/icon.svg'
import Telegram from '../Logo/Telegram_logo.svg'
import './header.css'


const { Search } = Input;
const onSearch = (value) => console.log(value);
const SearchHeader = () => (
    <div className='header'>
        <div className='nameAndIcon'>
      <img className='mainIcon' src={Icons} alt='icon'/>
    <h2 className='headerText' >OneStats</h2>
        </div>

  <Space direction="vertical" style={{paddingRight:'2%'}}>

      <div className='socialMedia'>
          <img className='logoTelegram' src={Telegram}/>
          <img className='logoVk' src='https://pngicon.ru/file/uploads/vk.png' />
    <Search
      placeholder="input search text"
      onSearch={onSearch}
      style={{
        width: 200,
      }}
    />
        </div>
    </Space>
    </div>
)
 export default SearchHeader
