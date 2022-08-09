import './App.css'
import { HashRouter, Routes, Route } from 'react-router-dom'
import { Home, Login, ProductDetailed, Purchases } from './pages/index'
import { Loader, NavBar } from './components'
import { useSelector } from 'react-redux'

function App() {

  const isLoading = useSelector(state => state.isLoading)

  return (
    <HashRouter>
      <div className="App">
        {isLoading && <Loader />}
        <NavBar />
        <Routes>
          <Route path='/login' element={<Login />}/>
          <Route path='/' element={<Home />}/>
          <Route path='/product/:productId' element={<ProductDetailed />}/>
          <Route path='/purchases' element={<Purchases />} />
        </Routes>
      </div>
    </HashRouter>
  )
}

export default App
