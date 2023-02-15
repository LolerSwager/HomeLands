import styled from "styled-components"
import Header from "../Components/Header"
import Footer from "../Components/Footer"

export default function Browse() {
    return (
        <>
            <Header />
            <main>
                <StyledFrom>
                    <h2>Login</h2>
                    <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
                    <input type="text" name="" id="" placeholder="Brugernavn" />
                    <input type="password" name="" id="" placeholder="Adgangskode" />
                    <button>Login</button>
                    <button>Anuller</button>
                </StyledFrom>
            </main>
            <Footer />
        </>
    )
}

const StyledFrom = styled.form`
    h2 {
        margin: 1rem 0;
    }
    input {
        padding: 0.7rem 1rem;
        margin: 1rem 1rem 1rem 0;
        min-width: 450px;
        border-radius: 5px;
        border: 1px solid #000000;
        display: block;
    }
    button {
        background-color: #000000;
        color: #ffffff;
        padding: 0.7rem 1rem;
        border-radius: 7px;
        margin: 0 1rem 0 0;
    }
`
