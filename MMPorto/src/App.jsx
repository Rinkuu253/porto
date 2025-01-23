import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputText } from './component/InputText'
import { Introduction } from './sectionList/Introduction'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <div className='bg-white'>
      <section id='introduction'>
          <Introduction />
      </section>
      <section id='about'>
          <Introduction />
      </section>
    </div>
      
    </>
  )
}

export default App
