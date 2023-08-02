import { useContext } from 'react'
import MyContext from '../contexts/MyContext'
import Level2 from './Level2'

export default function Level1() {
    const { checked } = useContext(MyContext)

    return (
        <>
            <p> level 1: currently {checked ? 'checked' : 'unchecked'}</p>
            <Level2 />
        </>
    )
}
