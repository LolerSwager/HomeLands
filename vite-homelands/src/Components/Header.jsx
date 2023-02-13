import { Link } from "react-router-dom"
import styled from "styled-components"

export default function Header() {
    return (
        <StyledHeader>
            <h1>HomeLands </h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Forside</Link>
                    </li>
                    <li>
                        <Link to="/browse">Boliger til salg</Link>
                    </li>
                    <li>
                        <Link to="/">Login</Link>
                    </li>
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
        list-style: none;
        gap: 1rem;
        margin: 0 1rem;
    }
`
