import styled from 'styled-components'

export const StyledCard = styled.div`
    background-color: red;
    color: #fff;
    border-radius: min(20px, 5vw);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-family: arial;
    font-size: clamp(1rem, 1.5vw, 1.4rem);
    width: min(90vw, 300px);
    
    h1 {
        font-size: 1em;
    }

    p {
        font-size: 0.8em;
    }
`