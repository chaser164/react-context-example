import { useContext } from 'react'
import MyContext from '../contexts/MyContext'
import Level3 from './Level3'

export default function Level2() {
    const { checked } = useContext(MyContext)

  return (
    <>
        <p> level 2: currently {checked ? 'checked' : 'unchecked'}</p>
        <Level3 />
    </>
  )
}

