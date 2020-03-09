import React from 'react'
import axios from 'axios'

class SearchBar extends React.Component {


    onSubmitForm = (event) => {
        // Agar halaman tidak me refresh / reload
        event.preventDefault()

        // Akses Unsplash API
        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: 'Client-ID A-c3T4tZE8CTC4eJ0liT89vki1JMBaUmHO2zJ9RJ-OY'
                },

                params: {
                    query: 'cat',
                    per_page: 15
                }
            }
        ).then((res) => {console.log(res.data)})


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