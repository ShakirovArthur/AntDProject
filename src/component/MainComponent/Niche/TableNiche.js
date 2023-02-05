import {Button, Space, Table} from 'antd';
import {useCallback, useState} from 'react';
import './niche.css'

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Jim Red',
        age: 32,
        address: 'London No. 2 Lake Park',
    },
];
const TableNiche = () => {
    const [filteredInfo, setFilteredInfo] = useState({});
    const [sortedInfo, setSortedInfo] = useState({});
    const handleChange = (pagination, filters, sorter) => {
        console.log('Various parameters', pagination, filters, sorter);
        setFilteredInfo(filters);
        setSortedInfo(sorter);
    };
    const clearFilters = useCallback(() => {
            setFilteredInfo({});
        }, [filteredInfo],
    );
    const clearAll = useCallback(() => {
            setFilteredInfo({});
            setSortedInfo({});
        }, [filteredInfo, sortedInfo],
    );
    const setAgeSort = useCallback(() => {
            setSortedInfo({
                order: 'descend',
                columnKey: 'age',
            });
        }, [sortedInfo],
    );
    const columns = [
        {
            title: 'Название',
            dataIndex: 'name',
            key: 'name',
            filters: [
                {
                    text: 'Joe',
                    value: 'Joe',
                },
                {
                    text: 'Jim',
                    value: 'Jim',
                },
            ],
            filteredValue: filteredInfo.name || null,
            onFilter: (value, record) => record.name.includes(value),
            sorter: (a, b) => a.name.length - b.name.length,
            sortOrder: sortedInfo.columnKey === 'name' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Товаров',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
            sortOrder: sortedInfo.columnKey === 'age' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Товаров с движением',
            dataIndex: 'address',
            key: 'address',
            filters: [
                {
                    text: 'London',
                    value: 'London',
                },
                {
                    text: 'New York',
                    value: 'New York',
                },
            ],
            filteredValue: filteredInfo.address || null,
            onFilter: (value, record) => record.address.includes(value),
            sorter: (a, b) => a.address.length - b.address.length,
            sortOrder: sortedInfo.columnKey === 'address' ? sortedInfo.order : null,
            ellipsis: true,
        },
        {
            title: 'Товаров с продажами',
            dataIndex: 'address',
            key: '4',
        },
        {
            title: 'Процент товаров с движением',
            dataIndex: 'address',
            key: '5',
        },
        {
            title: 'Товаров с остатком',
            dataIndex: 'address',
            key: '6',
        },
        {
            title: 'Сумарные остатки',
            dataIndex: 'address',
            key: '7',
        },
        {
            title: 'Брендов',
            dataIndex: 'address',
            key: '8',
        },
        {
            title: 'Процент брендов с продажами',
            dataIndex: 'address',
            key: '9',
        },
        {
            title: 'Поставщиков',
            dataIndex: 'address',
            key: '10',
        }
    ];
    return (
        <div className='staticNiche'>
            <Space
                style={{
                    marginBottom: '16px',
                }}
            >
                <Button onClick={setAgeSort}>Сортировка </Button>
                <Button onClick={clearFilters}>Очистить фильтр</Button>
                <Button onClick={clearAll}>Сбросить фильтр и сортировку</Button>
            </Space>
            <Table columns={columns} dataSource={data} onChange={handleChange}/>

        </div>
    );
};
export default TableNiche;