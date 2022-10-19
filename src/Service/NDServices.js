import React, { Component } from 'react'
import ServiceBaseAxios from './ServiceBaseAxios'

export class NDServices extends ServiceBaseAxios {
    dangKyND = (thongTinDangKy) => {
        return this.POST('/api/QuanLyNguoiDung/DangKy', thongTinDangKy)
    }
    dangNhapND = (thongTinDangNhap) => {
        return this.POST('/api/QuanLyNguoiDung/DangNhap', thongTinDangNhap)
    }
}

export const QLNDServices = new NDServices()
