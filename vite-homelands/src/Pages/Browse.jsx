import { useGetList } from "../Hooks/useGetList"
import styled from "styled-components"
import Header from "../Components/Header"
import Footer from "../Components/Footer"
import Card from "../Components/Card"
import { useEffect, useMemo, useState } from "react"
import AppService from "../Appservices/Appservice"
import TestCard from "../Components/TestCard"
export default function Browse() {
    const { state: homelist } = useGetList("homes", "items")

    return (
        <>
            <Header />
            <main>
                <div>
                    <h3>Boliger til salg</h3>
                    <input type="text" />
                    <select>
                        <option value="somthing"></option>
                    </select>
                </div>
                <StyledCardWrapper>
                    {homelist.map((items) => (
                        <TestCard key={items.id} data={items} showheart={true} />
                    ))}
                </StyledCardWrapper>
            </main>
            <Footer />
        </>
    )
}

const StyledCardWrapper = styled.article`
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(3, 460px);
    grid-gap: 2rem;
    width: 100%;
`