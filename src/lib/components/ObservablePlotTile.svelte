<script lang="ts">
	import { getTileContext } from 'tilez';

	import { plot, type PlotOptions } from '@observablehq/plot';

	export let options: PlotOptions;

	const { specs, element } = getTileContext();

	let svgPlot: SVGSVGElement;

	$: if ($specs) {
		if (!['html', 'svg'].includes($specs.type))
			throw new Error(
				`There is no Observable Plot tile available for type '${$specs.type}'!`,
			);
	}

	$: if ($element) {
		svgPlot = plot({
			...options,
			width: $specs.width,
			height: $specs.height,
		}) as SVGSVGElement;

		$element.replaceChildren(svgPlot);
	}
</script>
