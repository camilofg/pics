import React from 'react'

const ImageCard = (props) => {
    return (
        <div>
            Image Card Single
            <img key={props.id} alt={props.description} src={props.url}/>
        </div>
    )
}

export default ImageCard