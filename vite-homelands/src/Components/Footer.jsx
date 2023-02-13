import styled from "styled-components"

export default function Footer() {
    return (
        <SyledFooter>
            <h2>HomeLands</h2>
            <div>
                <p>Øster Uttrupvej 5</p>
                <p>9000 Aalborg</p>
            </div>
            <div>
                <p>Email: info@homelands.dk</p>
                <p>Telefon: +45 1122 3344</p>
            </div>
            <i>twitter</i>
            <i>facebook</i>
        </SyledFooter>
    )
}

const SyledFooter = styled.footer`
    display: flex;
    align-items: center;
    gap: 5rem;
    height: 94px;
    background-color: #000000;
    color: #ffffff;
`