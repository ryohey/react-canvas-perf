import {
  Application,
  Container,
  DisplayObject,
  Sprite,
  Text,
  Texture,
} from "pixi.js"
import { useEffect, useRef, useState } from "react"
import { ItemRenderer } from "./renderer"
import image from "../item.png"
import { Item } from "../data/data"
import { Points } from "../data/types"

class PixiItem extends Container {
  id = ""
  sprite = new Sprite(Texture.from(image))
  text = new Text("", { fill: "white", fontSize: 12 })

  constructor(id: string) {
    super()
    this.id = id
    this.sprite.width = 30
    this.addChild(this.sprite)
    this.text.y = 30
    this.addChild(this.text)
    this.interactive = true
  }

  update(item: Item) {
    this.rotation = Points.rotation(item.direction)
    this.x = item.position.x
    this.y = item.position.y
    this.text.text = item.id
  }
}

const isPixiItem = (obj: DisplayObject): obj is PixiItem =>
  obj instanceof PixiItem

export const VanillaPixiRenderer: ItemRenderer = ({
  items,
  width,
  height,
  onClick,
  hideText,
}) => {
  const [app, setApp] = useState<Application | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const app = new Application({
      width,
      height,
      antialias: true,
      autoDensity: true,
      resolution: window.devicePixelRatio,
    })
    ref.current!.appendChild(app.view)
    setApp(app)
  }, [])

  useEffect(() => {
    if (!app) {
      return
    }
    const pixiItems = app.stage.children.filter(isPixiItem)
    for (let item of items) {
      let pixiItem = pixiItems.find((p) => p.id === item.id)
      if (pixiItem === undefined) {
        pixiItem = new PixiItem(item.id)
        app.stage.addChild(pixiItem)
      }
      pixiItem.update(item)
      pixiItem.addListener("click", () => onClick(item))
    }
    const itemIds = items.map((i) => i.id)
    app.stage.removeChild(...pixiItems.filter((p) => !itemIds.includes(p.id)))
  }, [items])

  useEffect(() => {
    if (!app) {
      return
    }
    const pixiItems = app.stage.children.filter(isPixiItem)
    for (let pixiItem of pixiItems) {
      if (hideText) {
        if (pixiItem.text.parent) {
          pixiItem.removeChild(pixiItem.text)
        }
      } else {
        if (!pixiItem.text.parent) {
          pixiItem.addChild(pixiItem.text)
        }
      }
    }
  }, [hideText])

  return <div ref={ref}></div>
}
