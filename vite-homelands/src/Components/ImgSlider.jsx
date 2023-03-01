import React, { useMemo } from "react"
import { Slide } from "react-slideshow-image"
import styled from "styled-components"
import "react-slideshow-image/dist/styles.css"
import { useGetList } from "../Hooks/useGetList"

const SliderContainer = styled.div`
    * {
        border: solid 1px red;
    }
    color: white;
    margin-top: 2em;
    /* display: flex;
    flex-direction: column;
    justify-content: center; */
    position: relative;
    overflow: hidden;
    .react-slideshow-container {
        position: relative;
        button {
            margin: 3em;
            background-color: inherit;
        }
        svg {
            fill: #ffffffa7;
            margin: 0;
        }
        .default-nav {
            &:focus {
                background: none;
            }
        }
    }
    .each-slide {
        img {
            aspect-ratio: 3/1;
            width: 100%;
            object-fit: cover;
            object-position: center;
        }
    }
    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

const Slider = () => {
    const { state: herolist } = useGetList("images", "items")
    const imageslider = useMemo(() => {
        return herolist
    }, [herolist])
    console.log(imageslider)
    return (
        <SliderContainer>
            <div className="slide-container">
                <Slide>
                    {imageslider.map((data) => (
                        <div className="each-slide" key={data.id}>
                            {console.log(data.image[0])}
                            <img src={data.image[0]} alt={data.description} />
                        </div>
                    ))}
                </Slide>
            </div>
        </SliderContainer>
    )
}
export default Slider
