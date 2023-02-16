import styled from "styled-components"
import { useGetList } from "../Hooks/useGetList"

export default function TheStaff() {
    const { state: stafflist } = useGetList("staff", "items")
    return (
        <>
            <StyledeH2>Mød vores ansatte</StyledeH2>
            <StyledCardWrapper>
                {stafflist.map((items) => (
                    <div className="staffCard" key={items.id}>
                        <img src={items.image} alt={items.position} />
                        <div>
                            <p>
                                {items.firstname} {items.lastname}
                            </p>
                            <p>{items.position}</p>
                        </div>
                    </div>
                ))}
            </StyledCardWrapper>
        </>
    )
}

const StyledeH2 = styled.h2`
    text-align: center;
    margin: 0 0 2rem 0;
`

const StyledCardWrapper = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    .staffCard {
        width: 262px;
        height: 394px;
        border: 1px solid black;
        position: relative;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        div {
            width: 100%;
            padding: 1rem;
            border-top: 1px solid black;
            background-color: #ffffffea;
            position: absolute;
            bottom: 0;
        }
    }
`
