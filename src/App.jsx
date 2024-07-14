import { useState } from 'react'
// npx tailwindcss -i ./src/index.css -o ./output.css --watch

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <p className='text-center text-3xl underline'>hello</p>
    </>
  )
}

export default App
