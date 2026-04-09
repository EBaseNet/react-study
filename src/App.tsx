// import { useEffect, useState } from "react"
// import { cn } from "./utils/cn"
// import { cva } from "class-variance-authority"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import MovieApp from "./movieApp/MovieApp"
import MovieDetail from "./movieApp/MovieDetail"

function App() {
  return <>
    <h1 className="text-center font-black text-center mt-10 mb-5">🎬 Studio Ghibli Movie 🎬</h1>
    <hr /> 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MovieApp />}></Route>
        <Route path="/detail/:id" element={<MovieDetail />}></Route>
      </Routes>
    </BrowserRouter>
  </>
}

export default App
