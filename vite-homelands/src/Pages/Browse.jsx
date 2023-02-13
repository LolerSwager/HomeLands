import { useGetList } from "../Hooks/useGetList"
import styled from "styled-components"

export default function Browse() {
    const { state: homelist } = useGetList("homes", "items")

    return (
        <>
            <div>
                <h3>Boliger til salg</h3>
                <input type="text" />
                <select>
                    <option value="somthing">somthing</option>
                </select>
            </div>
            <StyledCardWrapper>
                {homelist.map((items) => (
                    <StyledCard key={items.id}>
                        <img src={items.images[0].filename.medium} alt={items.images[0].description} />
                        <h3>{items.address}</h3>
                        <p>
                            <b>
                                {items.zipcode} {items.city}
                            </b>
                        </p>
                        <p>{items.type}</p>
                        <div>
                            <span className="energy-lable">{items.energy_label_name}</span>
                            <h4>
                                {items.num_rooms} Værlser, {items.floor_space} m^2
                            </h4>
                            <h4 className="price">{parseInt(items.price).toLocaleString("de-DK")} DKK</h4>
                        </div>
                    </StyledCard>
                ))}
            </StyledCardWrapper>
        </>
    )
}

const StyledCardWrapper = styled.article`
    display: grid;
    grid-template-columns: repeat(3, 460px);
    grid-gap: 2rem;
    width: 100%;
`

const StyledCard = styled.section`
    width: 460px;
    height: 356px;
    border: 1px solid black;
    padding: 25px 30px;
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
