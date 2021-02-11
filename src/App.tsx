import React, { useEffect, useState } from "react"
import { DivRenderer } from "./renderers/div"
import { generateItems, Item, updateItem } from "./data/data"
import { FpsView } from "react-fps"
import { ItemRendererProps } from "./renderers/renderer"

function App() {
  const [items, setItems] = useState<Item[]>(generateItems(1000))

  useEffect(() => {
    const timeoutId = setTimeout(() => setItems(items.map(updateItem)), 30)
    return () => clearTimeout(timeoutId)
  }, [items])

  const props: ItemRendererProps = {
    width: 320,
    height: 320,
    items,
    onClick: () => {},
  }

  return (
    <div className="App">
      <DivRenderer {...props} />
      <FpsView />
    </div>
  )
}

export default App
