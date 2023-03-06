import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Staff from "../Components/TheStaff"
import { useGetList } from "../Hooks/useGetList"
import styled from "styled-components"
import { useLoginStore } from "../Hooks/useLoginStore"
import Slider from "../Components/ImgSlider"
import TestCard from "../Components/TestCard"
import { useForm } from "react-hook-form"
import AppService from "../Appservices/Appservice"

export default function Home() {
    const { state: homelist } = useGetList("homes", "items")
    const { state: reviewslist } = useGetList("reviews", "items")
    const { state: reviewslistinfo } = useGetList("reviews", "count")
    const { loggedIn, userinfo } = useLoginStore()
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm()

    const onSubmit = (submitData) => {
        try {
            AppService.post("reviews", {
                title: submitData.title,
                content: submitData.textarea,
                user_id: userinfo.user_id,
                active: true,
                num_stars: 1,
            })
            alert(`Title: ${submitData.title} \n review: ${submitData.textarea}`)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <main>
            <StyledCardWrapper>
                {homelist
                    .sort(() => Math.random() - 0.5)
                    .slice(0, 3)
                    .map((items) => (
                        <TestCard key={items.id} data={items} showheart={false} />
                    ))}
            </StyledCardWrapper>
            <StyledContactForm>
                <h2>Det siger kunderne: </h2>
                {!loggedIn ? (
                    reviewslist.slice(reviewslistinfo - 1, reviewslistinfo).map((items) => (
                        <section key={items.id}>
                            <h3>{items.title}</h3>
                            <p>{items.content}</p>
                            <h5>
                                {items.user.firstname} {items.user.lastname},
                                {" " +
                                    new Date(parseInt(items.created * 1000)).toLocaleString("en-DK", {
                                        month: "long",
                                        year: "numeric",
                                    })}
                            </h5>
                        </section>
                    ))
                ) : (
                    <section>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h2>{userinfo.user.id}</h2>
                            {errors.title?.type === "required" && (
                                <p className="alert" role="alert">
                                    {errors.title?.message}
                                </p>
                            )}
                            <input
                                {...register("title", {
                                    required: "title er påkrævet",
                                })}
                                type="text"
                                placeholder="title"
                            />
                            {errors.textarea?.type === "required" && (
                                <p className="alert" role="alert">
                                    {errors.textarea?.message}
                                </p>
                            )}
                            <textarea
                                {...register("textarea", { required: "du mangler at skrive en besked" })}
                                placeholder="skriv en besked"
                            />
                            <button>send</button>
                        </form>
                    </section>
                )}
            </StyledContactForm>
            <Staff />
        </main>
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
    .alert {
        color: red;
        margin: 0 0 -0.3rem 0;
    }
    text-align: center;
    section {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        width: 100%;
        height: 228px;
        background-color: #fed9c9;
        form {
            display: grid;
            place-items: center;
            gap: 0.5rem;
            input,
            textarea {
                width: 350px;
                padding: 0.3rem;
            }
            button {
                padding: 0.3rem;
            }
        }
    }
`
