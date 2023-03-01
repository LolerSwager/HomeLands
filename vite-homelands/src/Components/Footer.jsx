import styled from "styled-components"

export default function Footer() {
    return (
        <SyledFooter>
            <article>
                <h2>HomeLands</h2>
                <section>
                    <p>Øster Uttrupvej 5</p>
                    <p>9000 Aalborg</p>
                </section>
                <section>
                    <p>Email: info@homelands.dk</p>
                    <p>Telefon: +45 1122 3344</p>
                </section>
                <section>
                    <i className="fa-brands fa-square-twitter"></i>
                    <i className="fa-brands fa-square-facebook"></i>
                </section>
            </article>
        </SyledFooter>
    )
}

const SyledFooter = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 94px;
    background-color: #000000;
    color: #ffffff;
    article {
        width: 100%;
        display: flex;
        justify-content: space-around;
        section:last-of-type {
            display: inherit;
            align-items: center;
            gap: 1rem;
            i {
                font-size: 2rem;
            }
        }
    }
`
