import React from 'react'

class SearchBar extends React.Component {
    state = { term: ''}

    // this is another way to give reference to this at the current class
    // constructor(props) {
    //     super(props)
    //        this.onFormSubmit = this.onFormSubmit.bind(this;)
    // }

    // or by using a arrow function or making the calle inside the form as a arrow function: <form onSubmit={(event) => this.onFormSubmit(event)} className="ui form">
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
                        {/* <input type='text' id="search" onChange={this.onInputChange}/> */}
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