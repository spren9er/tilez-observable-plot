<script lang="ts">
	import type { PageData } from './$types';

	import { Tile, HTile, VTile } from 'tilez';

	import { barY, ruleX, ruleY, dot, areaY } from '@observablehq/plot';

	import ObservablePlotTile from '$lib/components/ObservablePlotTile.svelte';

	export let data: PageData;

	const { barData, scatterData, areaData } = data;

	const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	const barOptions = {
		x: {
			domain: weekdays,
		},
		marks: [
			barY(barData, {
				x: 'weekday',
				y: 'total',
				fill: 'steelblue',
				tip: true,
			}),
			ruleY([0]),
		],
	};

	const scatterOptions = {
		marks: [
			dot(scatterData, { x: 'x', y: 'y', fill: 'steelblue' }),
			ruleX([0]),
			ruleY([0]),
		],
	};

	const areaOptions = {
		x: {
			domain: weekdays,
		},
		marks: [
			areaY(areaData, {
				x: 'weekday',
				y: 'total',
				fill: 'sales',
			}),
			ruleY([0]),
		],
	};
</script>

<div style:width="100%" style:height="100vh">
	<HTile type="svg" innerPadding="30px" outerPadding="15px">
		<VTile>
			<Tile>
				<ObservablePlotTile options={barOptions} />
			</Tile>
			<Tile>
				<ObservablePlotTile options={scatterOptions} />
			</Tile>
		</VTile>
		<VTile>
			<Tile height="50%" vAlign="center">
				<ObservablePlotTile options={areaOptions} />
			</Tile>
		</VTile>
	</HTile>
</div>

<style>
	:global(body) {
		margin: 0;
		padding: 0;
	}
</style>
