import { Button, Table } from 'antd';
import React, { Fragment, useEffect, useState } from 'react';
import { EditOutlined, DeleteOutlined, FileAddOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import './AdminKhoahoc.scss'
import { useDispatch, useSelector } from 'react-redux';
import { KHService } from '../../../Service/KhoaHocService';
import { LayKhoaHocAction } from '../../../Redux/action/AdminAction';
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import { history } from '../../../App';
import AddKH from './AddKH/AddKH';
import { LayDMKH } from '../../../Redux/action/DMKHAction';
import EditKH from './EditKH/EditKH';


export default function AdminKhoahoc() {

    let navigate = useNavigate();

    const dispatch = useDispatch();
    const { arrayKH } = useSelector(state => state.KHReducer);
    console.log('list KH', arrayKH)
    // let { hinhAnh, luotXem, maKhoaHoc, moTa, ngayTao, tenKhoaHoc } = arrayKH;
    useEffect(() => {
        dispatch(LayKhoaHocAction())
    }, [])

    const { Search } = Input;
    const columns = [
        {
            title: 'Mã Khóa Học',
            dataIndex: 'maKhoaHoc',
            // sortOder: 'descend',
            sortDirections: ['descend'],
            width: 130,
        },
        {
            title: 'Ảnh',
            dataIndex: 'hinhAnh',
            width: 150,
            render: ((text, arrayKH) => {
                return <img src={arrayKH.hinhAnh} width={70} height={50} alt="" />
            })
            // defaultSortOrder: 'descend',
            // sorter: (a, b) => a.age - b.age,

        },
        {
            title: 'Tên Khóa Học',
            dataIndex: 'tenKhoaHoc',
            width: 200,
            // onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            title: 'Mô tả',
            dataIndex: 'moTa',
            render: (text, arrayKH) => {
                return <Fragment>
                    {arrayKH.moTa.length > 50 ? arrayKH.moTa.substr(0, 40) + '...' : arrayKH.moTa}
                </Fragment>
            }
            // onFilter: (value, record) => record.address.indexOf(value) === 0,
        },
        {
            title: 'Lượt xem',
            dataIndex: 'luotXem',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.luotXem - b.luotXem,
            width: 110,
        },
        {
            title: 'Ngày tạo',
            dataIndex: 'ngayTao',
            defaultSortOrder: 'descend',
            // sorter: (a, b) => a.ngayTao - b.ngayTao,
            sorter: (a, b) =>
                new Date(moment(a.ngayTao, "MMMM Do YYYY").format("LLL")) -
                new Date(moment(b.ngayTao, "MMMM Do YYYY").format("LLL")),
        },
        {
            title: 'xử lý',
            dataIndex: 'maKhoaHoc',
            defaultSortOrder: 'descend',
            render: (text, arrayKH) => {
                return <Fragment>
                    <EditKH id={arrayKH} />
                    <Link key={2} style={{ fontSize: 20, color: 'Red' }} to="/"><DeleteOutlined /></Link>
                </Fragment>
            }
            // sorter: (a, b) => a.age - b.age,
        },
    ];
    const data = arrayKH
    const onChange = (pagination, filters, sorter, extra) => {
        console.log('params', pagination, filters, sorter, extra);
    };
    const onSearch = (value) => console.log(value);

    return (
        <div>
            <h1 className='a'>Admin</h1>
            <AddKH />
            <Search className='py-3' placeholder="input search text" onSearch={onSearch} enterButton />
            <Table columns={columns} dataSource={data} onChange={onChange} />
        </div >
    )
}
