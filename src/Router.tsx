import React, { createContext, FC, useContext } from "react"

export enum Path {
  index,
  div,
  pixi,
  pixiFiber,
  konva,
  svg,
}

const RouterContext = createContext<Path>(Path.index)

export interface RouterProps {
  path: Path
}

export interface RouteProps {
  path: Path
}

export const Route: FC<RouteProps> = ({ path, children }) => {
  const currentPath = useContext(RouterContext)
  if (path === currentPath) {
    return <>{children}</>
  }
  return <></>
}

export const Router: FC<RouterProps> = ({ path, children }) => {
  return (
    <RouterContext.Provider value={path}>{children}</RouterContext.Provider>
  )
}
