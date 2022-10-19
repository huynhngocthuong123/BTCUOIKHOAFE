import axios from "axios"
import { TOKEN, URL_API } from "../Util/setting"
import { ACCESS_TOKEN } from '../Redux/action/Type/UserType'


export default class ServiceBaseAxios {
    GET = (url) => {
        return axios({
            method: "get",
            url: `${URL_API}${url}`,
            headers: {
                TokenCybersoft: TOKEN,
            }
        })
    }

    POST = (url, thongtin) => {
        return axios({
            method: "post",
            url: `${URL_API}/${url}`,
            data: thongtin,
            headers: {
                TokenCybersoft: TOKEN,
                "Authorization": 'Bearer ' + localStorage.getItem(ACCESS_TOKEN)
            },
        });
    };

    PUT = (url, thongtin) => {
        return axios({
            method: "put",
            url: `${URL_API}${url}`,
            data: thongtin,
            headers: {
                TokenCybersoft: TOKEN,
            }
        })
    }

}