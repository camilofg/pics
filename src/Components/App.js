import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import ImageList from './ImageList'



// const App = () => {
//     return (
//         <div className="ui container" style={{ marginTop: '10px'}}>
//             <SearchBar />
//         </div>
//     )
// }

class App extends React.Component {
    // constructor(props) {
    //     super(props)
    // }

    onSearchSubmit(term) {
        axios.get('https://api.unsplash.com/search/photos', {
            headers: {}
        })
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onUserSubmit={this.onSearchSubmit} />
                <ImageList />
            </div>
        )
    }



}

export default App