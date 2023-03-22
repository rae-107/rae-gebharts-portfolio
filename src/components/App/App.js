import './App.css';
import Home from '../Home/Home'
import { Routes, Route } from 'react-router-dom'

function App() {
  return(
    <main className='app'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' ></Route>
        <Route path='/about' ></Route>
        <Route path='/contact' ></Route>
      </Routes>
    </main>
  )
}

export default App;
