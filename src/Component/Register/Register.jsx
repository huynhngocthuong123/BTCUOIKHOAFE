import React, { Fragment } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import "./Register.scss"
import { GP } from '../../Util/setting';
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
import { DangKyAction } from '../../Redux/action/NDAction';

export default function Register() {
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
            email: '',
            soDt: '',
            hoTen: '',
            maNhom: GP,
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required("Tài khoản không được để trống").min(6, "Tối thiểu đủ 6 kí tự").max(20, "Tối đa 10 kí tự").matches(/^[A-Z a-z]+$/, "Tài khoản không được có kí tự đặc biệt"),
            matKhau: Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/, "Mật khẩu tối thiếu từ 6 kí tự (Gồm ít nhất 1 chữ in hoa,1 kí tự,1 số) ").required("Mật khẩu không được để trống"),
            email: Yup.string().required("Mật khẩu không để trống").email("Email không đúng format"),
            soDt: Yup.string().required("Số điện thoại không để trống"),
            hoTen: Yup.string().required("Họ tên không để trống")
            // .matches(/^[A-Z a-z]+$/, "Họ tên không hợp lệ")
        }),
        onSubmit: values => {
            dispatch(DangKyAction(values))
        },
    });
    return (
        <Fragment>
            <div className="Rigister">
                <div className='Rigister_content'>
                    <div className='a'>
                        <div className="right_top">
                            <h1>ĐĂNG KÝ TÀI KHOẢN</h1>
                        </div>
                        <form onSubmit={formik.handleSubmit} className='form_rigister'>
                            <div className="form-group">
                                <label htmlFor="taiKhoan">Tài Khoản</label>
                                <input onChange={formik.handleChange}
                                    value={formik.values.taiKhoan} type="text" className="form-control" id="taiKhoan" name='taiKhoan' placeholder="Nhập tài khoản" />
                                {formik.touched.taiKhoan && formik.errors.taiKhoan ? (
                                    <div className="text-danger">{formik.errors.taiKhoan}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="matKhau">Mật Khẩu</label>
                                <input onChange={formik.handleChange}
                                    value={formik.values.matKhau} type="password" className="form-control" id="matKhau" name='matKhau' placeholder="Nhập mật khẩu" />
                                {formik.touched.matKhau && formik.errors.matKhau ? (
                                    <div className="text-danger">{formik.errors.matKhau}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input onChange={formik.handleChange}
                                    value={formik.values.email} type="email" className="form-control" id="email" name='email' placeholder="Nhập Email" />
                                {formik.touched.email && formik.errors.email ? (
                                    <div className="text-danger">{formik.errors.email}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="soDt">Số Điện Thoại</label>
                                <input onChange={formik.handleChange}
                                    value={formik.values.soDt} type="text" className="form-control" id="soDt" name='soDt' placeholder="Nhập số điện thoại" />
                                {formik.touched.soDt && formik.errors.soDt ? (
                                    <div className="text-danger">{formik.errors.soDt}</div>
                                ) : null}
                            </div>
                            <div className="form-group">
                                <label htmlFor="hoTen">Họ Tên</label>
                                <input onChange={formik.handleChange}
                                    value={formik.values.hoTen} type="text" className="form-control" id="hoTen" name='hoTen' placeholder="Nhập họ và tên" />
                                {formik.touched.hoTen && formik.errors.hoTen ? (
                                    <div className="text-danger">{formik.errors.hoTen}</div>
                                ) : null}
                            </div>
                            <div className='form__footer'>
                                <button type='submit' className='btn btn-success'>Đăng Ký</button>
                                <NavLink to="/login">
                                    <button type='button' className='btn btn-success'>Quay Lại Đăng Nhập</button>
                                </NavLink>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
