// ROOT COMPONENTS
import React from 'react'
import SearchBar from './SearchBar'

// Membuat komponen berbasis class
class App extends React.Component {

    // Function yang wajib ada, apa yang ingin kita tampilkan, akan kita tulis di sini
    // Function render hanya boleh me-return satu buah tag html
    render() {
        return (
            // JSX adalah syntax pemanis untuk membuat html
            <div className='container'>
                <h1 className='text-center my-3' >REACT 101</h1>
                <SearchBar/>
            </div>
        )
    }
}

// Karena akan di import di file lain
export default App

