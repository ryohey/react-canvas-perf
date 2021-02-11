import React, { FC, useCallback } from "react"
import { ItemProps, ItemRenderer } from "./renderer"
import image from "../car.png"
import { Item } from "../data/data"
import { Points } from "../data/types"
import { Container, Sprite, Stage, Text } from "react-pixi-fiber"
import { Texture } from "pixi.js"

const ItemSprite: FC<ItemProps> = ({ item, onClick, hideText }) => {
  return (
    <Container
      position={item.position}
      rotation={Points.angle(item.direction)}
      click={useCallback(() => onClick(item), [item])}
      interactive={true}
    >
      <Sprite texture={Texture.from(image)} width={30} height={30} />
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

export const PixiFiberRenderer: ItemRenderer = ({
  width,
  height,
  items,
  onClick,
  hideText,
}) => (
  <Stage options={{ width, height, antialias: true, autoDensity: true }}>
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
