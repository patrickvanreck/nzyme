import React from "react";
import Plot from 'react-plotly.js'
import Store from "../../util/Store";

function SimpleRangeIndicator(props) {

  var suffix = props.suffix ? props.suffix : undefined
  var valueformat = props.valueformat ? props.valueformat : undefined
  var tickformat = props.tickformat ? props.tickformat : undefined

  var data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      value: props.value,
      type: "indicator",
      mode: "gauge+number",
      number: { suffix: suffix, font: { size: 34 }, valueformat: valueformat },
      gauge: { axis: { range: props.range, ticksuffix: suffix, tickformat: tickformat } }
    }
  ]

  const colors = {}
  if (Store.get('dark_mode')) {
    colors.background = '#2B2D42'
    colors.text = '#ffffff'
    colors.lines = '#8D99AE'
    colors.grid = '#8D99AE'
  } else {
    colors.background = '#ffffff'
    colors.text = '#212529'
    colors.lines = '#212529'
    colors.grid = '#e3e3e3'
  }

  return (
      <Plot
          style={{ width: "100%", height: "225px" }}
          data={data}
          layout={{
            margin: { t: 0, b: 0, l: 40, r: 40 },
            font: {
              family: "'Nunito Sans', sans-serif",
              size: 12,
              color: colors.text
            },
            paper_bgcolor: colors.background,
            plot_bgcolor: colors.background,
          }}
          config={{
            displayModeBar: false,
            autosize: true
          }}
          useResizeHandler
      />
  )

}

export default SimpleRangeIndicator;