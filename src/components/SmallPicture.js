import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 30vw;
    margin: 2vh 1vw;
`
const Image = styled.div`
    width: 30vw;
    height: 20vw;
    margin: 0 7vw;
    border: 5px solid darkgray;
    border-radius: 10px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`
//Consider: user metadata of image to find width and height

const Title = styled.a`
    height: 5vh;
    color: yellow;
`

const SmallPicture = (props) => {
    //const link = `/${props.contentType}/${props.id}`
    return(
        <Wrapper>
            <Title href={props.link}>{props.title}</Title>
            <a href={props.link}>
                <Image style={{backgroundImage: "url("+props.image+")"}}/>
            </a>
        </Wrapper>
    )
}

export default SmallPicture