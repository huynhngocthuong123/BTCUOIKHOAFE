import React, { Fragment } from 'react'
import { useFormik } from 'formik';
import * as Yup from "yup";
import "../Register/Register.scss"
import { GP } from '../../Util/setting';
import { useDispatch } from "react-redux";
import { Link, NavLink } from 'react-router-dom';
import { DangKyAction, DangNhapAction } from '../../Redux/action/NDAction';
import { useNavigate } from "react-router-dom"
export default function Login(props) {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const formik = useFormik({
        initialValues: {
            taiKhoan: '',
            matKhau: '',
        },
        validationSchema: Yup.object({
            taiKhoan: Yup.string().required("Tài khoản không được để trống").min(6, "Tối thiểu đủ 6 kí tự").max(20, "Tối đa 10 kí tự").matches(/^[A-Z a-z]+$/, "Tài khoản không được có kí tự đặc biệt"),
            matKhau: Yup.string().matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{6,}$/, "Mật khẩu tối thiếu từ 6 kí tự (Gồm ít nhất 1 chữ in hoa,1 kí tự,1 số) ").required("Mật khẩu không được để trống"),
        }),
        onSubmit: values => {
            console.log("du lieu", values)
            dispatch(DangNhapAction(values))
        },
    });
    return (
        <Fragment>
            <div className="Rigister">
                <div className='Rigister_content'>
                    <div className='a'>
                        <div className="right_top">
                            <h1>ĐĂNG NHẬP TÀI KHOẢN</h1>
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
                            <div className='form__footer'>
                                <button type='submit' className='btn btn-success'>Đăng Nhập</button>
                                <Link to="/register">
                                    <button type='button' className='btn btn-success'>Quay Lại Đăng Ký</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}
