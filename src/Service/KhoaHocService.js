import React, { Component } from 'react'
import ServiceBaseAxios from './ServiceBaseAxios'

export default class KhoaHocService extends ServiceBaseAxios {
    ListDanhMuc = () => {
        return this.GET("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
    }
}
export const KHService = new KhoaHocService()
