import { FC } from "react"
import { Item } from "../data/data"

export interface ItemProps {
  item: Item
  onClick: (item: Item) => void
  hideText: boolean
}

export interface ItemRendererProps {
  width: number
  height: number
  items: Item[]
  hideText: boolean
  onClick: (item: Item) => void
}

export type ItemRenderer = FC<ItemRendererProps>
