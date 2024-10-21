import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Read from './Read'; 
import Create from './Create';
import Update from './Update';
function App() {
    return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Read />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
