# d3-arrow
Attach arrowheads to lines. This module is in alpha, so use with caution.

## Installing

If you use NPM, `npm install d3-geo-scale-bar`. Otherwise, download the [latest release](https://github.com/HarryStevens/d3-geo-scale-bar/raw/master/dist/d3-geo-scale-bar.zip). AMD, CommonJS, and vanilla environments are supported. In vanilla, a d3 global is exported:

```html
<script src="https://d3js.org/d3-selection.v1.min.js"></script>
<script src="https://unpkg.com/d3-arrow@0.0.2/dist/d3-arrow.min.js"></script>
<script>

const svg = d3.select("body").append("svg")
    .attr("width", 60)
    .attr("height", 20);

const myArrow = d3.arrow5()
    .id("my-arrow");

svg.call(myArrow);

svg.append("polyline")
    .attr("marker-end", "url(#my-arrow)")
    .attr("points", [[5, 10], [55, 10]])
    .attr("stroke", "black");

</script>
```