import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section ({ 
    title, 
    description, 
    leftBtnText, 
    rightBtnText,
    backgroundImg 
}) {
    return (
        <Wrap Image={ backgroundImg }>
            <Fade bottom>
                <ItemText>
                    <h1>{ title }</h1>
                    <p>{ description }</p>
                </ItemText>
            </Fade>

            <Buttons>
                <Fade bottom>
                    <ButtonGroup>
                        <LeftButton>{ leftBtnText }</LeftButton>
                        
                        { rightBtnText && 
                            <RightButton>{ rightBtnText }</RightButton>
                        }
                    </ButtonGroup>
                </Fade>

                <DownArrow src="/images/down-arrow.svg" />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${ props => `url("/images/${props.Image}")` };
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;     // vertical alignment
    align-items: center;                // horizontal alignment
    scroll-snap-align: start;
`

const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;

`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    cursor: pointer;
    border-radius: 100px;
    height: 40px;
    width: 256px;
    background-color: rgba(23, 26, 32, 0.8);
    opacity: 0.85;
    color: #fff;
    font-size: 12px;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 8px;

`

const RightButton = styled(LeftButton)`
    background: #fff;
    opacity: 0.75;
    color: #000;
`

const DownArrow = styled.img`
    margin-top: 20px;
    height: 40px;
    overflow-x: hidden;
    animation: animateDown infinite 1.5s;
    cursor: pointer;
`

const Buttons = styled.div`

`