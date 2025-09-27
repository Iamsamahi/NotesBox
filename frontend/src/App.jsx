//WE WILL DEFINE OUR ROUTES HERE AND RENDER DIFFERENT PAGES BASED ON THE URL


import React from 'react'
import { Routes, Route } from 'react-router'
import Homepage from './pages/Homepage'
import CreatePage from './pages/CreatePage'
import NoteDetailPage from './pages/NoteDetailPage'
import toast from 'react-hot-toast'
 
const App = () => {
  return (
    <div data-theme="forest">
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/create" element={<CreatePage/>} />
        <Route path="/noteDetail/:id" element={<NoteDetailPage/>}/>
      </Routes>
    </div>
  )
}

export default App
