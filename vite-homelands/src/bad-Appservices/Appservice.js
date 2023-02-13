import Axios from "axios"
import authHeader from "./auth-header"

//? https://prnt.sc/Q6_jNB8xuUBu
//? apiName is the defult pathname
const apiName = "homeland"
const apiUrl = "https://api.mediehuset.net"
const baseUrl = new URL(apiName, apiUrl)

const getList = (endpoint) => {
    const url = new URL(`${baseUrl.pathname}/${endpoint}`, baseUrl)
    return Axios.get(url.href, { headers: authHeader() })
}

const getDetail = (endpoint, id) => {
    const url = new URL(`${baseUrl.pathname}/${endpoint}/${id}`, baseUrl)
    return Axios.get(url.href, { headers: authHeader() })
}

const post = (endpoint, data) => {
    const url = new URL(`${baseUrl.pathname}/${endpoint}`, baseUrl)
    return Axios.post(url.href, data, { headers: authHeader() })
}

const put = (endpoint, data) => {
    const url = new URL(`${baseUrl.pathname}/${endpoint}`, baseUrl)
    return Axios.put(url.href, data, { headers: authHeader() })
}

const update = async (endpoint, id, data) => {
    const url = new URL(`${baseUrl.pathname}/${endpoint}/${id}/${data}`, baseUrl)
    return await Axios.put(url.href, data, { headers: authHeader() })
}

const remove = (endpoint, id) => {
    const url = new URL(`${baseUrl.pathname}/${endpoint}/${id}`, baseUrl)
    return Axios.delete(url.href, { headers: authHeader() })
}

const login = async (username, password) => {
    const url = new URL("token", baseUrl)
    return await Axios.post(url.href, { username, password })
}

const logout = async () => {
    const url = new URL("logout", baseUrl)
    return await Axios.post(url.href, { headers: authHeader() })
}

const AppService = {
    getList,
    getDetail,
    put,
    update,
    remove,
    login,
    logout,
    post,
}

export default AppService