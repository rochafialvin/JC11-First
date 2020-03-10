// ROOT COMPONENTS
import React from 'react'
import axios from 'axios'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

// Membuat komponen berbasis class
class App extends React.Component {

    state = {
        images: []
    }

    onSearch = (keyword) => {
        // Request image
        axios.get(
            'https://api.unsplash.com/search/photos',
            {
                headers: {
                    Authorization: 'Client-ID A-c3T4tZE8CTC4eJ0liT89vki1JMBaUmHO2zJ9RJ-OY'
                },

                params: {
                    query: keyword,
                    per_page: 15
                }
            }
            // respon dari request ('res') disimpan ke 'state'
        ).then((res) => {
            this.setState({ images: res.data.results})
        })
    }
    
    render() {
        return (
            // JSX adalah syntax pemanis untuk membuat html
            <div className='container'>
                <h1 className='text-center my-3' >REACT 101</h1>
                {/* asd -> property */}
                <SearchBar onSearch={this.onSearch} />
                <ImageList images={this.state.images}/>
            </div>
        )
    }
}

// Karena akan di import di file lain
export default App

