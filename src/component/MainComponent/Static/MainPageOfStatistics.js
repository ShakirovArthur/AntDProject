import React from "react";
import HeaderStatic from "./CellsWithStatistics/HeaderStatic";
import UsersStatic from "./CellsWithStatistics/UsersStatic";
import FeedbackStatic from "./CellsWithStatistics/FeedbackStatic";
import ListStatic from "./CellsWithStatistics/ListStatic";
import ListProduct from "./StatisticsCards/ListProduct";
import MainTab from "./Tabs/Tabs";
import TableStatic from "./Table/TableStatic";
import {Breadcrumb} from "antd";
import Data from "./DataPicker/DataPicker";
import './mainStatic.css'


const MainPageOfStatistics = () => {
    return (
        <>
            <div>
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Пользователь</Breadcrumb.Item>
                    <Breadcrumb.Item>Имя</Breadcrumb.Item>
                    <Data/>
                </Breadcrumb>
                <div style={{display: 'flex',gap:'18px'}}>
                    <HeaderStatic/>
                    <UsersStatic/>
                    <FeedbackStatic/>
                    <ListStatic/>
                </div>
                <div className='tabAndListProduct'>
                <ListProduct/>
                <MainTab/>
                </div>
            </div>
            <TableStatic/>

        </>
    )
}

export default MainPageOfStatistics