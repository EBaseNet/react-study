import { useState } from "react"
import { cn } from "./utils/cn"
import { cva } from "class-variance-authority"

import "./App.css"

const divVariants = cva("bg-blue-500", {
  variants: {
    isGreen: {
      true: "bg-green-500",
    },
  },
})

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className={cn(divVariants({ isGreen: count === 3 }))}>
      <button onClick={() => setCount((prev) => prev + 1)}>count is {count}</button>
    </div>
  )
}

export default App
