import { useState } from 'react'
import Autorized from './Autorized/Autorized'
import NotAutorized from './NoAutorized/NotAutorized'
const AppProvider = () => {
    const [autorization, setAutorization] = useState(false);
  return (
    // autorization 
    // ?
    // <Autorized/>
    // :
    <NotAutorized/>
  )
}

export default AppProvider