import React from 'react'
import styled from 'styled-components'

import SmallPicture from './SmallPicture'

const Grid = (props) => {
    console.log(props.content)
    console.log(props.contentType)
    
    const Wrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        width: 80vw;
        padding: 0 10vw;
    `

    return(
        <Wrapper>
            {props.content.map((item, index) => {
                return <SmallPicture key={index} image={item.image} title={item.title} id={item._id} link={item.link}/>
            })}
        </Wrapper>
    )
}

export default Grid