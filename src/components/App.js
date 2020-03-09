// ROOT COMPONENTS
import React from 'react'

// Membuat komponen berbasis class
class App extends React.Component {

    // Function yang wajib ada, apa yang ingin kita tampilkan, akan kita tulis di sini
    // Function render hanya boleh me-return satu buah tag html
    render() {
        return (
            <div>
                <h1>REACT 101</h1>
            </div>
        )
    }
}

// Karena akan di import di file lain
export default App

