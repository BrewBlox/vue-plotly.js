<template>
  <Plotly
    :data="data"
    :layout="layout"
  />
</template>

<script>
import * as Plotly from 'plotly.js';
import createPlotlyComponent from '../src/factory';

export default {
  name: 'Example',
  components: {
    Plotly: createPlotlyComponent(Plotly),
  },
  data: () => ({
    data: [{
      x: [1, 2, 3, 4],
      y: [1, 3, 2, 6],
      type: 'bar',
      marker: { color: '#ab63fa' },
      name: 'Bar',
    }, {
      x: [1, 2, 3, 4],
      y: [3, 2, 7, 4],
      type: 'line',
      marker: { color: '#19d3f3' },
      name: 'Line',
    }],
    layout: {
      plotBackground: '#f3f6fa',
      margin: {
        t: 0,
        r: 0,
        l: 20,
        b: 30,
      },
    },
  }),
};
</script>
