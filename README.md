# ![Tilez-Logo](https://github.com/spren9er/tilez/blob/main/docs/images/tilez_logo.svg?raw=true) tilez - observable plot

_Observable Plot_ tile for usage with Svelte layout engine [**_tilez_**](https://github.com/spren9er/tilez).


## Installation

Install **_tilez-observable-plot_** as npm package via

```
npm install tilez-observable-plot
```

## Usage

You can use _Observable Plot_ tile for tile types `'html'` and `'svg'`. Component **ObservablePlotTile** has following props:

- **_options_** _Observable Plot_ specs

```html
<script lang="ts">
  import { Tile } from 'tilez';
  import { ObservablePlotTile } from 'tilez-observable-plot';

  const data = [
    { a: 'A', b: 28 },
    { a: 'B', b: 55 },
    { a: 'C', b: 43 },
    { a: 'D', b: 91 },
    { a: 'E', b: 81 },
    { a: 'F', b: 53 },
    { a: 'G', b: 19 },
    { a: 'H', b: 87 },
    { a: 'I', b: 52 },
  ];

  const options = {
    marks: [
      Plot.barY(data, { x: 'a', y: 'b', fill: 'steelblue' }),
      Plot.ruleY([0]),
    ],
  };
</script>

<Tile type="html" width="800px" height="600px">
  <ObservablePlotTile {options} />
</Tile>
```