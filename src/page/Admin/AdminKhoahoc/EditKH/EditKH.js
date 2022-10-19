import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
// import './AddKH.scss'
import * as Yup from 'yup';
import { EditOutlined, DeleteOutlined, FileAddOutlined } from '@ant-design/icons';
import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Input,
    InputNumber,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { useFormik } from 'formik';
import moment from 'moment/moment';
import { useDispatch, useSelector } from 'react-redux';
import { layDanhMucKhoaHoc, LayDMKH } from '../../../../Redux/action/DMKHAction';
import { GP } from '../../../../Util/setting';
import { capNhatKHAction, layThongTinKHAction, ThemKhoaHocAction } from '../../../../Redux/action/AdminAction';
import { Link, useParams } from 'react-router-dom';
import { fromJSON } from 'postcss';

const EditKH = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [componentSize, setComponentSize] = useState('default');
    const [img, setImg] = useState('');
    const dispatch = useDispatch()

    let { thongTinKH } = useSelector(state => state.KHReducer)
    let { dmkh } = useSelector(state => state.DMKHReducer)
    console.log('==========================', thongTinKH)
    // console.log('dmkh', dmkh);
    // console.log('id ?', props.id.maKhoaHoc)

    let { biDanh, danhMucKhoaHoc, hinhAnh, luotXem, maKhoaHoc, maNhom, moTa, ngayTao, nguoiTao, tenKhoaHoc } = thongTinKH

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            maKhoaHoc: maKhoaHoc,
            biDanh: biDanh,
            tenKhoaHoc: tenKhoaHoc,
            moTa: moTa,
            luotXem: 0,
            danhGia: 0,
            hinhAnh: hinhAnh,
            maNhom: GP,
            ngayTao: ngayTao,
            maDanhMucKhoaHoc: thongTinKH?.danhMucKhoaHoc?.maDanhMucKhoahoc,
            taiKhoanNguoiTao: nguoiTao?.taiKhoan,
        },
        validationSchema: Yup.object({
            maKhoaHoc: Yup.string().required("Mã khóa học không được để trống").min(1, "Tối thiểu đủ 1 kí tự").max(20, "Tối đa 20 kí tự"),
            tenKhoaHoc: Yup.string().required("Tên Khóa Học không được để trống").min(6, "Tối thiểu đủ 6 kí tự").max(100, "Tối đa 100 kí tự"),
            moTa: Yup.string().required("Mô tả không được để trống").min(6, "Tối thiểu đủ 6 kí tự").max(1000, "Tối đa 1000 kí tự"),

        }),
        onSubmit: values => {
            console.log("values", values)
            dispatch(capNhatKHAction(values))
        },
    });

    const showModal = () => {
        setIsModalOpen(true);
        dispatch(layThongTinKHAction(props.id.maKhoaHoc))
    };

    const handleChangeDate = (values) => {
        // console.log(values);
        let ngayTao = moment(values).format('DD/MM/YYYY');
        formik.setFieldValue('ngayTao', ngayTao)
    }

    const handleChangeFile = (e) => {
        // lấy file từ event
        if (e.target.files[0]) {
            formik.setFieldValue('hinhAnh', e.target.files[0].name);
            let reader = new FileReader();
            reader.readAsDataURL(e.target.files[0]);
            reader.onload = (e) => {
                // console.log(e.target.result);
                setImg(e.target.result)
            }
        }
        // console.log('file', file.name)
    }

    const renderCategories = () => {
        return dmkh.map((value, index) => {
            return (
                <Select.Option key={index} value={value.maDanhMuc}>
                    {value.tenDanhMuc}
                </Select.Option>
            )
        })
    }

    return (
        <>
            <Link onClick={showModal} style={{ fontSize: 20, color: 'Green', paddingRight: 15 }}><EditOutlined /></Link>

            <Modal title="Thêm khóa học" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <Form onSubmitCapture={formik.handleSubmit}
                    labelCol={{
                        span: 5,
                    }}
                    wrapperCol={{
                        span: 14,
                    }}
                    layout="horizontal"
                    initialValues={{
                        size: componentSize,
                    }}
                >

                    <Form.Item label="Mã KH">
                        <Input name='maKhoaHoc' onChange={formik.handleChange}
                            value={formik.values.maKhoaHoc} />
                        {formik.touched.maKhoaHoc && formik.errors.maKhoaHoc ? (
                            <div className="text-red-600">{formik.errors.maKhoaHoc}</div>
                        ) : null}
                    </Form.Item>
                    <Form.Item label="Tên KH">
                        <Input name='tenKhoaHoc' onChange={formik.handleChange} value={formik.values.tenKhoaHoc} />
                        {formik.touched.tenKhoaHoc && formik.errors.tenKhoaHoc ? (
                            <div className="text-red-600">{formik.errors.tenKhoaHoc}</div>
                        ) : null}
                    </Form.Item>
                    <Form.Item label="Hình ảnh">
                        <Input type='file' name='hinhAnh' onChange={handleChangeFile} />
                        <img style={{ width: 100, height: 100 }} src={img === '' ? hinhAnh : img} alt="" />
                    </Form.Item>
                    <Form.Item label="Mô Tả">
                        <TextArea rows={4} name='moTa' onChange={formik.handleChange} value={formik.values.moTa} />
                        {formik.touched.moTa && formik.errors.moTa ? (
                            <div className="text-red-600">{formik.errors.moTa}</div>
                        ) : null}
                    </Form.Item>
                    <Form.Item label="Ngày Tạo">
                        <DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDate} value={moment(formik.values.ngayTao, 'DD/MM/YYYY')} />
                    </Form.Item>
                    <Form.Item label="Danh Mục KH">
                        <Select onChange={formik.handleChange} placeholder={formik.values.maDanhMucKhoaHoc}>
                            return {renderCategories()}
                        </Select>
                    </Form.Item>
                    <button type="submit" className="btn-submit">Cập Nhật</button>
                </Form>
            </Modal>

        </>
    );
};

export default EditKH;