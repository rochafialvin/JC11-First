import React from 'react'
import axios from 'axios'

class SearchBar extends React.Component {
    // Tempat penyimpanan data untuk komponen SearchBar
    state = {images : []}

    onSubmitForm = (event) => {
        // Agar halaman tidak me refresh / reload
        event.preventDefault()

        // Akses Unsplash API
        // Setelah melakukan request, akan running function 'then'
        // 'then' menerima function dengan satu parameter 'res'
        // 'res' akan berisi 'respon' dari API
        // Data yang kita mau akan berada di property 'data' dari object 'res' 
        // Data akan ada di 'res.data'

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
        ).then((res) => { this.setState({ images: res.data }) })
        
        // setState digunakan untuk meng-update 'state'


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