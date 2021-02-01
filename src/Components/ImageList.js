import './ImageList.css'
import React from 'react'
import ImageCard from './ImageCard'

const ImageList = (props) => {

    const images = props.images.map((image)=>{
        return <ImageCard key={image.id} image={image} />
    })

    // const images = props.images.map(({description, id, urls})=>{
    //     return <ImageCard key={id} alt={description} src={urls.regular} />
    // })

    return (
        <div className="image-list">
            {images}
        </div>
    )
}
// class ImageList extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div>   
//                 Image list component
//                 {this.props.images}
//             </div>
//         )
//     }
// }

export default ImageList