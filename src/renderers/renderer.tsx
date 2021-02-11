import { FC } from "react"
import { Item } from "../data/data"

export interface ItemRendererProps {
  items: Item[]
  onClick: (item: Item) => void
}

export type ItemRenderer = FC<ItemRendererProps>
