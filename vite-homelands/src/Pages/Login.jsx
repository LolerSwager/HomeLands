import styled from "styled-components"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import appService from "../Appservices/Appservice"
import { useLoginStore } from "../Hooks/useLoginStore"
import { useForm } from "react-hook-form"

export default function Browse() {
    const { loggedIn, setLoggedIn, setLogOut, username, user } = useLoginStore()
    const { register, handleSubmit } = useForm()
    const onSubmit = (submitData) => {
        const fetchResults = async () => {
            try {
                const response = await appService.login(submitData.username, submitData.password)

                console.log(response)
                setLoggedIn(true, response.data.username, response.data.user)
            } catch (error) {
                console.error(error)
            }
        }
        fetchResults()
    }
    return (
        <>
            <Header />
            <main>
                {!loggedIn ? (
                    <StyledFrom onSubmit={handleSubmit(onSubmit)}>
                        <h2>Login</h2>
                        <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
                        <input
                            {...register("username", {
                                required: "Brugernavn er påkrævet",
                            })}
                            type="text"
                            autoComplete="username"
                            placeholder="Brugernavn"
                        />
                        <input
                            {...register("password", {
                                required: "kodeord er påkrævet",
                            })}
                            type="password"
                            autoComplete="password"
                            placeholder="Adgangskode"
                        />
                        <button>Login</button>
                        <button>Anuller</button>
                    </StyledFrom>
                ) : (
                    <StyledFrom>
                        <div>
                            <h2>
                                Velkommen tilbage {user.firstname} {user.lastname}
                            </h2>
                            <p>du er på hold {user.class}</p>
                        </div>
                        <button onClick={() => setLogOut()}>logout</button>
                    </StyledFrom>
                )}
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
