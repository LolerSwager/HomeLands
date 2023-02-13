import { useState, useEffect } from "react"
import AppService from "../Appservices/Appservice"

export const useGetListId = (endpoint, id, key) => {
    const [state, setState] = useState([])
    useEffect(() => {
        const fetchApiData = async () => {
            const response = await AppService.getDetail(endpoint, id)
            try {
                if (response.data) {
                    !key && console.log(response.data)
                    key && setState(response.data[key])
                }
            } catch (error) {
                console.error(error)
            }
        }
        fetchApiData()
    }, [endpoint, id, key])
    return { state }
}