import { useState } from 'react'
import MyContext from './contexts/MyContext'
import Level1 from './components/Level1'

function App() {
  const [checked, setChecked] = useState(false)

  return (
    <>
      <MyContext.Provider value={{checked, setChecked}}>
        <div className='outer-container'>
          <h1>REACT Context Demo</h1>
          <Level1 />
        </div>
      </MyContext.Provider>
    </>
  )
}

export default App
