import { Stage, Sprite, Text, Container } from "@inlet/react-pixi"
import React, { FC, useCallback } from "react"
import { ItemProps, ItemRenderer } from "./renderer"
import image from "../item.png"
import { Points } from "../data/types"

const ItemSprite: FC<ItemProps> = ({ item, onClick, hideText }) => {
  return (
    <Container
      position={item.position}
      rotation={Points.rotation(item.direction)}
      click={useCallback(() => onClick(item), [item])}
      interactive={true}
    >
      <Sprite image={image} width={30} height={30} />
      {!hideText && (
        <Text
          text={item.id}
          style={{ fill: "white", fontSize: 12 }}
          x={0}
          y={30}
        />
      )}
    </Container>
  )
}

export const PixiRenderer: ItemRenderer = ({
  width,
  height,
  items,
  onClick,
  hideText,
}) => (
  <Stage
    width={width}
    height={height}
    options={{ antialias: true, autoDensity: true }}
  >
    {items.map((item) => (
      <ItemSprite
        item={item}
        key={item.id}
        onClick={onClick}
        hideText={hideText}
      />
    ))}
  </Stage>
)
