<script lang="ts">
  import { getTileContext } from 'tilez';

  import { plot, type PlotOptions } from '@observablehq/plot';

  interface Props {
    options: PlotOptions;
  }

  let { options }: Props = $props();

  const { specs, element } = getTileContext();

  // Validation of type
  const { type } = $specs;
  if (!['html', 'svg'].includes(type))
    throw new Error(`No Observable Plot tile available for type '${type}'!`);

  let svgPlot = $derived.by(() => {
    const { width, height } = $specs;

    return plot({ ...options, width, height });
  });

  $effect(() => {
    if ($element) $element.replaceChildren(svgPlot);
  });
</script>
