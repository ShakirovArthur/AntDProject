import React, {useState} from "react";
import './niche.css'
import {Button, Select, Space,Tooltip} from "antd";
import TableNiche from "./TableNiche";
import { QuestionCircleOutlined} from "@ant-design/icons";

const NicheCards = () => {
    const [headerCategory] = useState([{title: 'Категория', select: ['Женщинам', 'Мужчина']}, {
        title: 'Тренд выручки',
        select: ['Растущий', 'Убывающий']
    }, {title: 'Средний чек', select: ['Высокая', 'Средняя', 'Низкая']}, {
        title: 'Кол-во товаров с продажами',
        select: ['Большая', 'Средняя', 'Низкая']
    }, {
        title: 'Кол-во продавцов с продажами',
        select: ['Большое', 'Среднее', 'Низкое']
    }, {title: 'Кол-во брендов с продажами', select: ['Большое', 'Среднее', 'Низкое']}, {
        title: 'Выручка на товар',
        select: ['Большое', 'Среднее', 'Низкое']
    }, {title: 'Выручка на продавца', select: ['Большое', 'Среднее', 'Низкое']}, {
        title: 'Выручка на бренд',
        select: ['Большое', 'Среднее', 'Низкое']
    }, {title: 'Суммарная выручка', select: ['Большое', 'Среднее', 'Низкое']}])

    const [activeButton,setActiveButton] = useState(false)
    return (
        <>
        <div className='niche'>
            {headerCategory.map((item) => (
                <div className='gridComponent'>
                    <h5 className='headerCategory'>{item.title} <Tooltip title='Текст с подсказкой'><QuestionCircleOutlined /></Tooltip> </h5>
                    <Space wrap style={{paddingTop: '30px'}}>
                        <Select
                            defaultValue="Выбери категорию"
                            style={{
                                width: 300,
                                marginBottom: '20px'
                            }}
                            options={item.select.map((items) => ({
                                label:items,
                                value:items
                            }))}
                        />
                    </Space>
                </div>
            ))}
        </div>
            <Button onClick={() => setActiveButton(!activeButton)} type="primary" size='large' style={{marginLeft:'45%',paddingLeft:'30px',paddingRight:'30px',marginBottom:'20px'}}>
                Найти нишу
            </Button>
            {activeButton ? <TableNiche/> : ''}
        </>
    )
}
export default NicheCards