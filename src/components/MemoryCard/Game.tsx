import styled from "styled-components"

import { MemoryCard } from ".";

export default function Game() {

    return <Container>

        <CardContainer>

            <MemoryCard revealed={true} />
            
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            <MemoryCard />
            
        </CardContainer>

    </Container>
}

const Container = styled.main`
    position: relative;
    background-color: var(--THEME_COLOR_01);
    box-shadow: var(--SHADOW_INSET_ELEVATION_HIGH);
    border-radius: 8px;
`;

const CardContainer = styled.section`
    position: absolute;
    padding: 32px;
    inset: 0px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    grid-auto-rows: 360px;
    overflow-y: auto;
    perspective: 3000px;
    transform-style: preserve-3d;
`;
