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
}
export const KHService = new KhoaHocService()
