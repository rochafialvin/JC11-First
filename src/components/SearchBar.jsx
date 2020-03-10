import React from 'react'

class SearchBar extends React.Component {
    // Tempat penyimpanan data untuk komponen SearchBar
    state = {
        images : []
    }

    onSubmitForm = (event) => {
        // Agar halaman tidak me refresh / reload
        event.preventDefault()

        this.props.qwerty('sun')
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