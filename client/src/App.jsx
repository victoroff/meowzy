import { Suspense, lazy, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'

const catList = lazy(() => import ('./pages/CatList'))
const catDetail = lazy(() => import ('./pages/CatDetail'))
const Editcat = lazy(() => import ('./pages/EditCat'))
const Addcat = lazy(() => import ('./pages/AddCat'))

function App() {

  const [catToEdit, setcatToEdit] = useState(null)

  return (
    <div className="App">
      <Router>
        <h1>cat shelter</h1>

        <Link to='/add'>
          <button>Add new cat</button>
      </Link>

        <Routes>
          <Route path='/' element={<Suspense fallback={<></>}><catList /></Suspense>}/>

          <Route path='/:catId' element={<Suspense fallback={<></>}><catDetail setcatToEdit={setcatToEdit} /></Suspense>}/>

          <Route path='/:catId/edit' element={<Suspense fallback={<></>}><Editcat catToEdit={catToEdit} /></Suspense>}/>

          <Route path='/add' element={<Suspense fallback={<></>}><Addcat /></Suspense>}/>
        </Routes>

      </Router>
    </div>
  )
}

export default App
