import React from 'react'

class SearchBar extends React.Component {
    state = { term: ''}

    onFormSubmit = (event) => {
        event.preventDefault()

        this.props.onUserSubmit(this.state.term)
    }


    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor="search">Image Search</label>
                        <input type='text' 
                        value={this.state.term} 
                        id="search" 
                        onChange={(e) => this.setState({term:e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar