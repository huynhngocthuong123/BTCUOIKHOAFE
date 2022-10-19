import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import './AddKH.scss'
import * as Yup from 'yup';
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
import { ThemKhoaHocAction } from '../../../../Redux/action/AdminAction';

const AddKH = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [componentSize, setComponentSize] = useState('default');
    const [img, setImg] = useState();

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(LayDMKH())
    }, [])

    let { dmkh } = useSelector(state => state.DMKHReducer)
    // console.log('dmkh', dmkh);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const formik = useFormik({
        initialValues: {
            maKhoaHoc: '',
            biDanh: 'biDanh',
            tenKhoaHoc: '',
            moTa: '',
            luotXem: 0,
            danhGia: 0,
            hinhAnh: {},
            maNhom: GP,
            ngayTao: '',
            maDanhMucKhoaHoc: '',
            taiKhoanNguoiTao: 'ADMIN'
        },
        validationSchema: Yup.object({
            maKhoaHoc: Yup.string().required("Mã khóa học không được để trống").min(1, "Tối thiểu đủ 1 kí tự").max(20, "Tối đa 20 kí tự").matches(/^[A-Z a-z]+$/, "Mã khóa học không được có kí tự đặc biệt"),
            tenKhoaHoc: Yup.string().required("Tên Khóa Học không được để trống").min(6, "Tối thiểu đủ 6 kí tự").max(100, "Tối đa 100 kí tự").matches(/^[A-Z a-z]+$/, "Tên Khóa Học không được có kí tự đặc biệt"),
            moTa: Yup.string().required("Mô tả không được để trống").min(6, "Tối thiểu đủ 6 kí tự").max(1000, "Tối đa 1000 kí tự"),

        }),
        onSubmit: values => {
            console.log("values", values)
            let addcourses = new FormData();
            for (let key in values) {
                if (key !== 'hinhAnh') {
                    addcourses.append(key, values[key])
                }
                else {
                    addcourses.append('file', values.hinhAnh, values.hinhAnh.name);
                }
            }

            // console.log('addcourses', addcourses.get('file'))
            dispatch(ThemKhoaHocAction(addcourses))
        },
    });

    const handleChangeDate = (values) => {
        // console.log(values);
        let ngayTao = moment(values).format('DD/MM/YYYY');
        formik.setFieldValue('ngayTao', ngayTao)
    }

    const handleChangeFile = (event) => {
        // lấy file từ event
        let file = event.target.files[0];
        console.log('file', file)

        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = (e) => {
            console.log(e.target.result);
            setImg(e.target.result)
        }
        formik.setFieldValue('hinhAnh', file);
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
            <Button type="primary" onClick={showModal}>
                <i className="fa fa-plus mr-1"></i>
                Thêm
            </Button>

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
                        <Input name='maKhoaHoc' onChange={formik.handleChange} />
                        {formik.touched.maKhoaHoc && formik.errors.maKhoaHoc ? (
                            <div className="text-red-600">{formik.errors.maKhoaHoc}</div>
                        ) : null}
                    </Form.Item>
                    <Form.Item label="Tên KH">
                        <Input name='tenKhoaHoc' onChange={formik.handleChange} />
                        {formik.touched.tenKhoaHoc && formik.errors.tenKhoaHoc ? (
                            <div className="text-red-600">{formik.errors.tenKhoaHoc}</div>
                        ) : null}
                    </Form.Item>
                    <Form.Item label="Hình ảnh">
                        <Input type='file' name='hinhAnh' onChange={handleChangeFile} />
                        <img style={{ width: 100, height: 100 }} src={img} alt="" />
                    </Form.Item>
                    <Form.Item label="Mô Tả">
                        <TextArea rows={4} name='moTa' onChange={formik.handleChange} />
                        {formik.touched.moTa && formik.errors.moTa ? (
                            <div className="text-red-600">{formik.errors.moTa}</div>
                        ) : null}
                    </Form.Item>
                    <Form.Item label="Ngày Tạo">
                        <DatePicker format={'DD/MM/YYYY'} onChange={handleChangeDate} />
                    </Form.Item>
                    <Form.Item label="Danh Mục KH">
                        <Select onChange={formik.handleChange}>
                            <Select.Option value="#">Chọn Danh Mục Khóa Học</Select.Option>
                            {renderCategories()}
                        </Select>
                    </Form.Item>
                    <button type="submit" class="btn-submit">Thêm</button>
                </Form>
            </Modal>

        </>
    );
};

export default AddKH;