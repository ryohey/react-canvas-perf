import { Points } from "../data/types"
import { ItemRenderer } from "./renderer"
import image from "../car.png"
import { Item } from "../data/data"
import { FC, useCallback } from "react"

const DivItem: FC<{ item: Item; onClick: (item: Item) => void }> = ({
  item,
  onClick,
}) => {
  return (
    <div
      key={item.id}
      style={{
        position: "absolute",
        left: item.position.x,
        top: item.position.y,
        transform: `rotate(${Points.angle(item.direction)}rad)`,
      }}
      onClick={useCallback(() => onClick(item), [item])}
    >
      <img src={image} width="30" draggable={false} />
      <div style={{ color: "white" }}>{item.id}</div>
    </div>
  )
}

export const DivRenderer: ItemRenderer = ({
  items,
  width,
  height,
  onClick,
}) => {
  return (
    <div
      style={{
        position: "relative",
        userSelect: "none",
        width,
        height,
        overflow: "hidden",
        background: "black",
      }}
    >
      {items.map((item) => (
        <DivItem item={item} onClick={onClick} />
      ))}
    </div>
  )
}
