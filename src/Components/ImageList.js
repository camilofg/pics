import React from 'react'


const ImageList = (props) => {
    console.log(props.images)
    // const images = props.images.map((image)=>{
    //     return <img key={image.id} alt={image.description} src={image.urls.regular} />
    // })

    const images = props.images.map(({description, id, urls})=>{
        return <img key={id} alt={description} src={urls.regular} />
    })

    return (
        <div>
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