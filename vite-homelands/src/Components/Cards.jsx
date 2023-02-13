import styled from "styled-components"

export default function Cards() {
    return (
        <StyledCard>
            <img src="" alt="" />
            <h3>somthing</h3>
            <p>
                <b>9000 Aalborg</b>
            </p>
            <p>Ejerlejlighed</p>
            <div>
                <span className="energy-lable">A</span>
                <h4>3 Værlser, 96 m^2</h4>
                <h4 className="price">1,695.000,00 DKK</h4>
            </div>
        </StyledCard>
    )
}

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
