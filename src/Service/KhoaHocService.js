import React, { Component } from 'react'
import { GP } from '../Util/setting'
import ServiceBaseAxios from './ServiceBaseAxios'

export default class KhoaHocService extends ServiceBaseAxios {
    ListDanhMuc = () => {
        return this.GET("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
    }
    ListKhoaHoc = () => {
        return this.GET(`/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom${GP}`)
    }
    themKhoaHoc = (addcourse) => {
        return this.POST('/api/QuanLyKhoaHoc/ThemKhoaHoc', addcourse)
    }
    layThongTinKhoaHoc = (maKhoaHoc) => {
        return this.GET(`/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`)
    }
    CapNhatKH = (updateCourse) => {
        return this.PUT('/api/QuanLyKhoaHoc/CapNhatKhoaHoc', updateCourse)
    }
}
export const KHService = new KhoaHocService()
