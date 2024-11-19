import { useState } from 'react'
import Header from './partials/Header'
import Footer from './partials/Footer'

export const App = () => {

  const [numOfClicks, setOfClicks] = useState<number>(0);

  return (
    <>
      <Header/>
      <main className='p-5'>
        <button onClick={() => setOfClicks((index) => ++index)}>Num of Clicks: {numOfClicks}</button>
      </main>
      <Footer/>
    </>
  )
}
