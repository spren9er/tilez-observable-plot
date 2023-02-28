<script lang="ts">
	import { getTileContext } from 'tilez';

	// @ts-ignore
	import * as Plot from '@observablehq/plot';

	export let options: { [key: string]: unknown };

	const { specs, element } = getTileContext();

	let plot: SVGElement;

	$: if ($specs) {
		if (!['html', 'svg'].includes($specs.type))
			throw new Error(
				`There is no Observable Plot tile available for type '${$specs.type}'!`,
			);
	}

	$: if ($element) {
		plot = Plot.plot({
			...options,
			width: $specs.width,
			height: $specs.height,
		});

		$element.firstChild
			? $element.replaceChildren(plot)
			: $element.appendChild(plot);
	}
</script>
