# React.js Canvas Rendering Performance Test

Performance comparison for rendering many elements in React.js with canvas

## Renderers

- [@inlet/react-pixi](https://github.com/inlet/react-pixi)
- [react-pixi-fiber](https://github.com/michalochman/react-pixi-fiber)
- [react-konva](https://github.com/konvajs/react-konva)
- pixi.js without library
- `div` with CSS
- `svg`

## Test

### Environment

MacBook Pro (13-inch, 2017, Four Thunderbolt 3 Ports)

- Intel Core i7 3.5GHz
- 16GB
- Render 1000 items

### Result (production build)

| Renderer                | FPS | FPS (no text) |
| ----------------------- | --- | ------------- |
| @inlet/react-pixi       | 6   | 38            |
| react-pixi-fiber        | 6   | 48            |
| react-konva             | 9   | 26            |
| pixi.js without library | 31  | 32            |
| div                     | 29  | 32            |
| svg                     | 7   | 39            |

### Result (development build)

| Renderer                | FPS | FPS (no text) |
| ----------------------- | --- | ------------- |
| @inlet/react-pixi       | 6   | 31            |
| react-pixi-fiber        | 5   | 37            |
| react-konva             | 8   | 18            |
| pixi.js without library | 38  | 40            |
| div                     | 16  | 17            |
| svg                     | 7   | 21            |
