import React from 'react'
import {Routes,Route} from 'react-router-dom';

import One from './Components/One';
import Two from './Components/Two';
import Three from './Components/Three';
import Four from './Components/Four';
import Five from './Components/Five';
import Six from './Components/Six';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<One/>}/>
      <Route path='/2' element={<Two/>}/>
      <Route path='/3' element={<Three/>}/>
      <Route path='/4' element={<Four/>}/>
      <Route path='/5' element={<Five/>}/>
      <Route path='/6' element={<Six/>}/>
    </Routes>
  )
}

export default App