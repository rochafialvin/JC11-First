// React, untuk memproses kode menjadi sebuah komponen
import React from 'react'
// Digunakan untuk memanipulasi komponen /  menghubungkan App.js ke Index.html
import ReactDOM from 'react-dom'
// extension .js tidak wajib di tulis
import App from './components/App.jsx'

// Menghubungkan App ke Index.html di folder public
ReactDOM.render(<App/>, document.getElementById('root'))