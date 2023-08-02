import { useContext } from 'react'
import MyContext from '../contexts/MyContext'

export default function Level3() {
    const { checked, setChecked } = useContext(MyContext)

    return (
        <>
           <p> level 3: currently {checked ? 'checked' : 'unchecked'}</p>
            <input className='checkbox' type='checkbox' value={checked} onClick={() => setChecked(!checked)}/>
        </>
    )
}
