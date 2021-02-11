export interface IPoint {
  x: number
  y: number
}

export const Points = {
  zero: { x: 0, y: 0 },
  add: (a: IPoint, b: IPoint) => ({ x: a.x + b.x, y: a.y + b.y }),
  random(length: number) {
    const theta = Math.random() * 2 * Math.PI
    return {
      x: length * Math.cos(theta),
      y: length * Math.sin(theta),
    }
  },
  angle: (a: IPoint) => Math.atan2(a.y, a.x),
}
