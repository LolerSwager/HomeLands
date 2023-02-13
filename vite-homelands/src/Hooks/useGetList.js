import { useState, useEffect } from "react"
import AppService from "../Appservices/Appservice"

export const useGetList = (endpoint, key) => {
    const [state, setState] = useState([])
    useEffect(() => {
        const fetchApiData = async () => {
            const response = await AppService.getList(endpoint)
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
    }, [endpoint, key])
    return { state }
}