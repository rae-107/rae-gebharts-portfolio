import './App.css';
import { Routes, Route } from 'react-router-dom'

function App() {
  return(
    <main className='app'>
      <Routes>
        <Route path='/' ></Route>
        <Route path='/projects' ></Route>
        <Route path='/about' ></Route>
        <Route path='/contact' ></Route>
      </Routes>
    </main>
  )
}

export default App;
