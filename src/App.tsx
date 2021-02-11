import React, { useEffect, useState } from "react"
import { DivRenderer } from "./renderers/div"
import { generateItems, Item, updateItem } from "./data/data"
import { FpsView } from "react-fps"

function App() {
  const [items, setItems] = useState<Item[]>(generateItems(1000))

  useEffect(() => {
    const timeoutId = setTimeout(() => setItems(items.map(updateItem)), 30)
    return () => clearTimeout(timeoutId)
  }, [items])

  return (
    <div className="App">
      <DivRenderer items={items} onClick={() => {}} />
      <FpsView />
    </div>
  )
}

export default App
