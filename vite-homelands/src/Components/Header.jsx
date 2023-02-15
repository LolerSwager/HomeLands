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
                        <Link to="/login">Login</Link>
                    </li>
                    <div>
                        <input type="text" placeholder="Indtast søgeord" />
                        <button>
                            <i class="fa-solid fa-magnifying-glass"></i>
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
        align-items: center;
        list-style: none;
        gap: 1rem;
        margin: 0 1rem;
        li {
            a {
                color: #ffffff;
                text-decoration: none;
            }
        }
        div {
            display: flex;
            width: 247px;
            height: 34px;
            border-radius: 5px;
            background-color: red;
            margin: 0;
            padding: 0;
            input {
                border: none;
                width: 100%;
                padding: 1rem;
            }
            button {
                border: none;
                width: 38px;
                height: 34px;
                background-color: #999999;
                color: #ffffff;
                &:hover {
                    background-color: #af7627;
                }
            }
        }
    }
`
