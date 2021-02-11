import { Points } from "../data/types"
import { ItemProps, ItemRenderer } from "./renderer"
import image from "../item.png"
import { FC, useCallback } from "react"

const SVGItem: FC<ItemProps> = ({ item, onClick, hideText }) => {
  return (
    <g
      transform={`translate(${item.position.x}, ${
        item.position.y
      }) rotate(${Points.angle(item.direction)})`}
      onClick={useCallback(() => onClick(item), [item])}
    >
      <image href={image} width="30" />
      {!hideText && (
        <text y={40} fill="white">
          {item.id}
        </text>
      )}
    </g>
  )
}

export const SVGRenderer: ItemRenderer = ({
  items,
  width,
  height,
  onClick,
  hideText,
}) => {
  return (
    <div
      style={{
        position: "relative",
        userSelect: "none",
        overflow: "hidden",
        background: "black",
      }}
    >
      <svg width={width} height={height}>
        {items.map((item) => (
          <SVGItem
            item={item}
            onClick={onClick}
            key={item.id}
            hideText={hideText}
          />
        ))}
      </svg>
    </div>
  )
}
