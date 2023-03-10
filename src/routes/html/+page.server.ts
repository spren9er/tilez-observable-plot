import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ fetch }) => {
  const bar = await fetch('/bar.json');
  const barData = await bar.json();

  const scatter = await fetch('/scatter.json');
  const scatterData = await scatter.json();

  const area = await fetch('/area.json');
  const areaData = await area.json();

  return { barData, scatterData, areaData };
};
