import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
    return (
        <div className="">
            <Navbar />
            <div className="">
                <Routes>
                    <Route path='/' element={<Home/>} />
                </Routes>
            </div>
        </div>
    )

}

export default App
