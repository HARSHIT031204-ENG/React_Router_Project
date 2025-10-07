import { useState } from 'react'
import Header from './component/Header/Header'
import Footer from './component/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
        <Header/>
          

        <Footer/>
      </>
  )
}

export default App
