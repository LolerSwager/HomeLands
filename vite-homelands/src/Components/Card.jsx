import { useEffect, useMemo, useState } from "react"
import styled from "styled-components"
import AppService from "../Appservices/Appservice"

export default function Card({ data }) {
    const { price, floor_space } = data

    const [compare, setCompare] = useState()
    
    useEffect(() => {
        async function renderFavorites() {
            const response = await AppService.getList("favorites")
            if (response) {
                setCompare(response.data.items)
            }
        }
        renderFavorites()
    }, [])

    const checkFavorite = useMemo(() => {
        return compare?.find((item) => item.home_id === data?.id)
    }, [compare])

    async function addFaverit(id) {
        const response = await AppService.post("favorites", { home_id: id })
        if (response) {
            console.log("du har tilføjet " + id)
        }
    }

    async function removeFavorite(id) {
        const response = await AppService.remove("favorites", id)
        if (response) {
            console.log("du har fjernet " + id)
        }
    }

    return (
        <StyledCard>
            <img src={data.images[0].filename.medium} alt={data.images[0].description} />
            <p>{data.address}</p>
            <p>
                {data.zipcode} {data.city}
            </p>
            {!checkFavorite ? (
                <i className="fa-regular fa-heart" onClick={() => addFaverit(data.id)}></i>
            ) : (
                <i className="fa-solid fa-heart" onClick={() => removeFavorite(data.id)}></i>
            )}

            <p>{data.type}</p>
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