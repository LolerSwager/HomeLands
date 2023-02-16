import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Staff from "../Components/TheStaff"
import { useGetList } from "../Hooks/useGetList"
import styled from "styled-components"

export default function Home() {
    const { state: homelistmini } = useGetList("homes", "items")
    return (
        <>
            <Header />
            <main>
                <StyledCardWrapper>
                    {homelistmini.slice(0, 3).map((items) => (
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
                <StyledContactForm>
                    <h2>Det siger kunderne:</h2>
                    <section>
                        <h3>Fandt drømmehuset…</h3>
                        <p>
                            “HomeLands hjalp os med at finde vores drømmehus i 2018. Efter at vi havde prøvet to andre
                            mæglere lykkedes det dem at sælge
                            <br /> vores gamle hus på under tre måneder. Både service og pris var helt i top”
                        </p>
                        <h5>Anna Hattevej, August 2019</h5>
                    </section>
                </StyledContactForm>
                <Staff />
            </main>
            <Footer />
        </>
    )
}

const StyledCardWrapper = styled.article`
    display: grid;
    justify-content: center;
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

const StyledContactForm = styled.article`
    text-align: center;
    section {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: 228px;
        background-color: #fed9c9;
    }
`
