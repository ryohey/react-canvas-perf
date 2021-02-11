import React, { FC, useCallback, useEffect, useState } from "react"
import { ItemProps, ItemRenderer } from "./renderer"
import imageSrc from "../item.png"
import { Points } from "../data/types"
import { Layer, Group, Image, Stage, Text } from "react-konva"

const ItemSprite: FC<ItemProps> = ({ item, onClick, hideText }) => {
  const [image, setImage] = useState<HTMLImageElement | null>(null)

  useEffect(() => {
    const imageElm = new window.Image()
    imageElm.src = imageSrc
    imageElm.addEventListener("load", () => setImage(imageElm))
  }, [])

  return (
    <Group
      position={item.position}
      rotation={Points.angle(item.direction)}
      click={useCallback(() => onClick(item), [item])}
      interactive={true}
    >
      {image && <Image image={image} width={30} height={30} />}
      {!hideText && <Text text={item.id} fontSize={12} x={0} y={30} />}
    </Group>
  )
}

export const KonvaRenderer: ItemRenderer = ({
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
    <Layer>
      {items.map((item) => (
        <ItemSprite
          item={item}
          key={item.id}
          onClick={onClick}
          hideText={hideText}
        />
      ))}
    </Layer>
  </Stage>
)
