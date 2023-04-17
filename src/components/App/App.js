import './App.css';
import Home from '../Home/Home'
import { Routes, Route } from 'react-router-dom'
import { Projects } from '../Projects/Projects'
import { About } from '../About/About';
import { Contact } from '../Contact/Contact';

function App() {
  return(
    <main className='app'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/projects' element={<Projects />} ></Route>
        <Route path='/about' element={<About />} ></Route>
        <Route path='/contact' element={<Contact />} ></Route>
      </Routes>
    </main>
  )
}

export default App;
