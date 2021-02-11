import { range } from "./array"
import { IPoint, Points } from "./types"

export interface Item {
  id: string
  position: IPoint
  direction: IPoint
  frame: number
  turnInterval: number
}

export const updateItem = (item: Item) => {
  const frame = item.frame + 1
  const direction =
    frame > 0 && frame % Math.floor(item.turnInterval) === 0
      ? Points.random(1)
      : item.direction

  return {
    ...item,
    direction,
    frame,
    position: Points.add(item.position, direction),
  }
}

export const generateItems = (count: number): Item[] =>
  range(count).map((i) => ({
    id: i.toString(),
    position: { x: Math.random() * 300, y: Math.random() * 300 },
    direction: Points.random(1),
    frame: 0,
    turnInterval: 10 + Math.random() * 500,
  }))
