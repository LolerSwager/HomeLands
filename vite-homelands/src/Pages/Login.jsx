import styled from "styled-components"
import appService from "../Appservices/Appservice"
import { useLoginStore } from "../Hooks/useLoginStore"
import { useForm } from "react-hook-form"
import { useGetList } from "../Hooks/useGetList"

export default function Browse() {
    const { loggedIn, setLoggedIn, setLogOut, userinfo } = useLoginStore()
    const { state: myreviews } = useGetList("reviews", "items")
    const {
        register,
        formState: { errors },
        handleSubmit,
        reset,
    } = useForm()

    const onSubmit = (submitData) => {
        const fetchResults = async () => {
            try {
                const response = await appService.login(submitData.username, submitData.password)
                setLoggedIn(true, response.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchResults()
    }
    return (
        <main>
            {!loggedIn ? (
                <StyledFrom onSubmit={handleSubmit(onSubmit)}>
                    <h2>Login</h2>
                    <p>Indtast dit brugernavn og adgangskode for at logge ind</p>
                    {errors.username?.type === "required" && (
                        <p className="alert" role="alert">
                            {errors.username?.message}
                        </p>
                    )}
                    <input
                        {...register("username", {
                            required: "Brugernavn er påkrævet",
                        })}
                        type="text"
                        autoComplete="username"
                        placeholder="Brugernavn"
                    />
                    {errors.password?.type === "required" && (
                        <p className="alert" role="alert">
                            {errors.password?.message}
                        </p>
                    )}
                    <input
                        {...register("password", {
                            required: "kodeord er påkrævet",
                        })}
                        type="password"
                        autoComplete="password"
                        placeholder="Adgangskode"
                    />
                    <button>Login</button>
                    <button onClick={() => reset()}>Anuller</button>
                </StyledFrom>
            ) : (
                <>
                    <StyledFrom>
                        <div>
                            <h2>
                                Velkommen tilbage {userinfo.user.firstname} {userinfo.user.lastname}
                            </h2>
                            <p>du er på hold {userinfo.user.class}</p>
                        </div>
                        <button onClick={() => setLogOut()}>logout</button>
                    </StyledFrom>
                    <StyledTable>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Dato</th>
                                <th>Handling</th>
                            </tr>
                        </thead>
                        <tbody>
                            {myreviews.map((items) => {
                                if (parseInt(items.user_id) === userinfo.user_id) {
                                    return (
                                        <tr key={items.id}>
                                            <td>{items.title}</td>
                                            <td>{items.created}</td>
                                            <td>
                                                <p>Rediger</p>
                                                <p>slet</p>
                                            </td>
                                        </tr>
                                    )
                                }
                            })}
                        </tbody>
                    </StyledTable>
                </>
            )}
        </main>
    )
}

const StyledTable = styled.table`
    p {
        color: green;
        &:last-child {
            color: red;
        }
    }
    tbody {
        border: 1px solid black;
        tr {
            td {
                padding: .5rem 1rem;
                border-bottom: 1px solid black;
                min-width: 100px;
                &:last-child {
                    display: flex;
                    justify-content: space-around;
                }
            }
        }
    }
`

const StyledFrom = styled.form`
    margin: 5rem 7rem;

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
    .alert {
        color: red;
        margin: 0.5rem 0 -1rem 0;
    }
`
