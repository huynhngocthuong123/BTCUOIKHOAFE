import axios from "axios"
import { TOKEN, URL_API } from "../Util/setting"


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
}