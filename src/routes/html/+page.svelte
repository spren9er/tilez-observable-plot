<script lang="ts">
	import { Tile, HTile, VTile } from 'tilez';

	// @ts-ignore
	import * as Plot from '@observablehq/plot';

	import ObservablePlotTile from '$lib/components/ObservablePlotTile.svelte';

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

<HTile type="html" width="800" height="600">
	<VTile>
		<Tile height="50%" vAlign="center">
			<ObservablePlotTile {options} />
		</Tile>
	</VTile>
	<VTile>
		<Tile>
			<ObservablePlotTile {options} />
		</Tile>
		<Tile>
			<ObservablePlotTile {options} />
		</Tile>
	</VTile>
</HTile>
