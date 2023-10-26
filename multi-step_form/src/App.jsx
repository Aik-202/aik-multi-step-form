import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"; 
import {
  Personal,
  Plans,
  AddOns,
  Finished,
  Thanks
} from './Pages'
import './App.css'

function App() {

  return (
      <>
        <Router>
          <Routes>
            <Route exact path='/' element={ <Personal /> }></Route>
            <Route exact path='/plans' element={ <Plans /> }></Route>
            <Route exact path='/addons' element={ <AddOns /> }></Route>
            <Route exact path='/finished' element={ <Finished /> }></Route>
            <Route exact path='/thanks' element={ <Thanks /> }></Route>
          </Routes>
        </Router>
      </>
  )
}

export default App
