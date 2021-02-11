import { FC } from "react"
import { Item } from "../data/data"

export interface ItemRendererProps {
  width: number
  height: number
  items: Item[]
  onClick: (item: Item) => void
}

export type ItemRenderer = FC<ItemRendererProps>
