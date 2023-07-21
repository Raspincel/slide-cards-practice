import styled from 'styled-components'

export const StyledContainer = styled.main`
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    gap: min(20px, 5vw);
    align-items: center;
    .cards {
        display: grid;
        padding: min(10vw, 40px);
        gap: min(20px, 5vw);
        grid-template-columns: 1fr 1fr 1fr;
        animation-duration: 1.5s;

        @media (max-width: 1000px) {
            align-items: center;
            justify-content: center;
            display: flex;
            flex-wrap: wrap;
        }
    }

    .buttons {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: min(9px, 4vw);
    }

    .cards-container {
        position: relative;
        overflow: hidden;

        .auxiliar {
            position: absolute;
            animation-duration: 1.5s;
        }

        .aux-previous {
            top: -100%; 
            animation-name: aux-previous;
        }

        .aux-next {
            top: 100%;
            animation-name: aux-next;
        }

        .main-prev {
            animation-name: main-previous
        }

        .main-next {
            animation-name: main-next;
        }

        @keyframes main-previous {
            0% {
                transform: translateY(100%)
            }

            100% {
                transform: translateY(0%);
            }
        }

        @keyframes main-next {
            0% {
                transform: translateY(-100%)
            }

            100% {
                transform: translateY(0%);
            }
        }

        @keyframes aux-previous {
            0% {
                transform: translateY(100%)
            }

            100% {
                transform: translateY(-100%);
            }
        }

        @keyframes aux-next {
            0% {
                transform: translateY(-100%);
            }

            100% {
                transform: translateY(100%)
            }
        }
    }
`

export const StyledButton = styled.button`
    all: unset;
    padding: min(20px, 5vw);
    background-color: #1568d5;
    color: white;
    border-radius: min(10px, 4vw);
    font-size: clamp(1rem, 1.3vw, 1.4rem);
    cursor: pointer;
    font-family: arial;

    &:hover {
        filter: invert(1)
    }
`