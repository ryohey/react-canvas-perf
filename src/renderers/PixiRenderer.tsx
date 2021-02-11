import { Stage, Sprite, Text, Container } from "@inlet/react-pixi"
import React, { FC, useCallback } from "react"
import { ItemRenderer } from "./renderer"
import image from "../car.png"
import { Item } from "../data/data"
import { Points } from "../data/types"

const ItemSprite: FC<{ item: Item; onClick: (item: Item) => void }> = ({
  item,
  onClick,
}) => {
  return (
    <Container
      position={item.position}
      rotation={Points.angle(item.direction)}
      click={useCallback(() => onClick(item), [item])}
      interactive={true}
    >
      <Sprite image={image} width={30} height={30} />
      <Text
        text={item.id}
        style={{ fill: "white", fontSize: 12 }}
        x={0}
        y={30}
      />
    </Container>
  )
}

export const PixiRenderer: ItemRenderer = ({
  width,
  height,
  items,
  onClick,
}) => (
  <Stage
    width={width}
    height={height}
    options={{ antialias: true, autoDensity: true }}
  >
    {items.map((item) => (
      <ItemSprite item={item} key={item.id} onClick={onClick} />
    ))}
  </Stage>
)
