import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Post from './Pages/Post'
import Contact from './Pages/Contact'
import Notfound from './Components/Notfound'
import Layout from './Layout'

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />}></Route>
                <Route path="about" element={<About />}></Route>
                <Route path="post" element={<Post />}></Route>
                <Route path="contact" element={<Contact />}></Route>
            </Route>
            <Route path="*" element={<Notfound />}></Route>
        </Routes>
    </BrowserRouter>
  )
}
