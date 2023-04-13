import './App.css';
import Home from '../Home/Home'
import { Routes, Route } from 'react-router-dom'
import { Projects } from '../Projects/Projects'

function App() {
  return(
    <main className='app'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects />} ></Route>
        <Route path='/about' ></Route>
        <Route path='/contact' ></Route>
      </Routes>
    </main>
  )
}

export default App;
