import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"

import Canvas from "./pages/Canvas"
import LandingPage from "./pages/LandingPage"

export default function Rotas(){
    return <BrowserRouter>
        <Routes>
            <Route index path="/canvas" element={<Canvas/>}/>
            <Route path="/" element={ <LandingPage/> }/>
        </Routes>
    </BrowserRouter>
}