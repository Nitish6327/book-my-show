import React from 'react'
import Home from './Pages/Home'
import BsState from './Context/BSstate'

function App() {
  return (
    <div>
      <BsState>
      <Home/>
      </BsState>

      
    </div>
  )
}

export default App
