import { DatePicker, Space } from 'antd';
import React from 'react';
import './dataPicker.css'


const { RangePicker } = DatePicker;
const Data = () => {
    return(
        <div className='dataPicker'>
        <Space direction="vertical" size={12}>
            <RangePicker />
        </Space>
        </div>
    )
}
export default Data