import styled from "styled-components"

export default function Header() {
    return (
        <StyledHeader>
            <h1>HomeLands </h1>
            <nav>
                <ul>
                    <li>Forside</li>
                    <li>Boliger til salg</li>
                    <li>Login</li>
                    <div>
                        <input type="text" />
                        <button>
                            <i>søge</i>
                        </button>
                    </div>
                </ul>
            </nav>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    background-color: #000000;
    color: #ffffff;
    ul {
        display: flex;
    }
`
