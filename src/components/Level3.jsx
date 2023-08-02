import { useContext } from 'react'
import MyContext from '../contexts/MyContext'

export default function Level3() {
    const { checked, setChecked } = useContext(MyContext)

    function checkClicked() {
        setChecked(!checked)
    }

    return (
        <>
           <p> level 3: currently {checked ? 'checked' : 'unchecked'}</p>
            <input className='checkbox' type='checkbox' value={checked} onClick={checkClicked}/>
        </>
    )
}
