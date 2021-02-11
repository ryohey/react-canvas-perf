import React, { useCallback, useEffect, useState } from "react"
import { DivRenderer } from "./renderers/DivRenderer"
import { generateItems, Item, updateItem } from "./data/data"
import { FpsView } from "react-fps"
import { ItemRendererProps } from "./renderers/renderer"
import { PixiRenderer } from "./renderers/PixiRenderer"
import { Path, Route, Router } from "./Router"
import "./App.css"

function App() {
  const [items, setItems] = useState<Item[]>([])
  const [count, setCount] = useState(100)
  const [path, setPath] = useState(Path.index)
  const [log, setLog] = useState("")

  useEffect(() => {
    setItems(generateItems(count))
  }, [path, count])

  useEffect(() => {
    const timeoutId = setTimeout(() => setItems(items.map(updateItem)), 30)
    return () => clearTimeout(timeoutId)
  }, [items])

  const props: ItemRendererProps = {
    width: 320,
    height: 320,
    items,
    onClick: (item) =>
      setLog(`${new Date().toLocaleTimeString()}: click ${item.id}`),
  }

  return (
    <>
      <header>
        <h1>React with {"<canvas>"} Performance Test</h1>
        <select
          value={path}
          onChange={(e) => setPath(parseInt(e.currentTarget.value) as Path)}
        >
          <option value={Path.index}>Home</option>
          <option value={Path.div}>Div Renderer</option>
          <option value={Path.pixi}>PIXI Renderer</option>
        </select>
        <select
          value={count}
          onChange={(e) => setCount(parseInt(e.currentTarget.value))}
        >
          {[10, 100, 1000, 10000].map((n) => (
            <option value={n} key={n}>
              {n} items
            </option>
          ))}
        </select>
        <button>Reset</button>
      </header>
      <div className="fps">
        <FpsView top="auto" left="auto" />
      </div>
      <Router path={path}>
        <Route path={Path.index}>
          <div>Select the renderer</div>
        </Route>
        <Route path={Path.div}>
          <DivRenderer {...props} />
        </Route>
        <Route path={Path.pixi}>
          <PixiRenderer {...props} />
        </Route>
      </Router>
      <div className="log">{log}</div>
    </>
  )
}

export default App
