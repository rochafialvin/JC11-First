import React from 'react'

class SearchBar extends React.Component {


    onSubmitForm = (event) => {
        // Agar halaman tidak me refresh / reload
        event.preventDefault()
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitForm} className="form-group">
                    <input className="form-control" type="text"/>
                </form>
            </div>
        )
    }
}

export default SearchBar