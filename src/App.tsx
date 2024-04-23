import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Button } from './components/ui/button'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-row justify-center items-center'>
        <a href="https://vitejs.dev" target="_blank" className='font-medium'>
          <img src={viteLogo} className="h-36 p-6 will-change-transform transition-[filter] duration-300 hover:drop-shadow-[0_0_1em_#646cffaa]" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-36 p-6 will-change-transform transition-[filter] hover:drop-shadow-[0_0_1em_#61dafbaa] animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className='text-5xl font-bold my-8'>Vite + React</h1>
      <div className="p-8">
        <Button variant='secondary' onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </Button>
        <p className='p-4'>
          Edit <code className='font-mono'>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="p-4 text-[#888]">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
