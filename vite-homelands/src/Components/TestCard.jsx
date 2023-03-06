import { useCallback, useEffect, useState } from "react"
import { Alert } from "react-native-web"
import styled from "styled-components"
import AppService from "../Appservices/Appservice"
import { useLoginStore } from "../Hooks/useLoginStore"

export default function TestCard({ data, showheart }) {
    const { price, floor_space } = data
    const { loggedIn } = useLoginStore()
    const [compare, setCompare] = useState()

    // checkFavorite samligner id fra favorite med det som er i listen
    const checkFavorite = useCallback(() => {
        return compare?.find((item) => item.home_id === data?.id)
    }, [compare])

    const addFaverit = useCallback(
        async (id) => {
            return checkFavorite(id)
                ? await AppService.remove("favorites", id)
                : await AppService.post("favorites", { home_id: id })
        },
        [checkFavorite]
    )

    useEffect(() => {
        const renderFavorites = async () => {
            const response = await AppService.getList("favorites")
            if (response) {
                setCompare(response.data.items)
            }
        }
        renderFavorites()
    }, [addFaverit])

    return (
        <StyledCard>
            <img src={data.images[0].filename.medium} alt={data.images[0].description} />
            <p>{data.address}</p>
            <p>
                {data.zipcode} {data.city}
            </p>
            <p>{data.type}</p>
            {showheart === true ? (
                <div>
                    {checkFavorite(data.id) ? (
                        <i className="fa-solid fa-heart" onClick={() => addFaverit(data.id)}></i>
                    ) : (
                        <i className="fa-regular fa-heart" onClick={() => addFaverit(data.id)}></i>
                    )}
                </div>
            ) : (
                <i></i>
            )}
            <div>
                <span className="energy-lable">{data.energy_label_name}</span>
                <h4>
                    {data.num_rooms} Værlser, {floor_space} m²
                </h4>
                <h4 className="price">{parseInt(price).toLocaleString("de-DK")} DKK</h4>
            </div>
        </StyledCard>
    )
}

const StyledCard = styled.section`
    width: 460px;
    height: 356px;
    border: 1px solid black;
    padding: 25px 30px;
    i {
        color: red;
    }
    img {
        width: 400px;
        height: 187px;
    }
    h3 {
        font-size: 18px;
        padding: 10px 0;
    }
    div {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;
        width: 400px;
        padding: 10px 0;
        gap: 1rem;
        i {
            font-size: 25px;
        }
        h4 {
            font-size: 18px;
        }
        .energy-lable {
            width: 26px;
            height: 26px;
            background-color: #14c451;
            color: #ffffff;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .price {
            font-weight: bold;
        }
    }
`
