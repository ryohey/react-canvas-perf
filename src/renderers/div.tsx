import { Points } from "../data/types"
import { ItemRenderer } from "./renderer"
import image from "../iconmonstr-car-1-64.png"

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
      }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          style={{
            position: "absolute",
            left: item.position.x,
            top: item.position.y,
            transform: `rotate(${Points.angle(item.direction)}rad)`,
          }}
          onClick={() => onClick(item)}
        >
          <img src={image} width="30" draggable={false} />
          <div>{item.id}</div>
        </div>
      ))}
    </div>
  )
}
