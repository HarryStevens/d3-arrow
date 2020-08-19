# d3-arrow
Attach arrowheads to lines. This module is in alpha, so use with caution.

## Installing

If you use NPM, `npm install d3-geo-scale-bar`. Otherwise, download the [latest release](https://github.com/HarryStevens/d3-geo-scale-bar/raw/master/dist/d3-geo-scale-bar.zip). AMD, CommonJS, and vanilla environments are supported. In vanilla, a d3 global is exported:

```html
<script src="https://d3js.org/d3-selection.v1.min.js"></script>
<script src="https://unpkg.com/d3-arrow@0.0.4/dist/d3-arrow.min.js"></script>
<script>

const myArrow = d3.arrow5();

</script>
```

## API Reference

The API is based on the list of arrows in Adobe Illustrator v24.1.2. To add an arrowhead to an SVG element, you must first add the arrowhead generator to your SVG using [<i>selection</i>.call](https://github.com/d3/d3-selection#selection_call). Then, pass the generator's [<i>id</i>](#arrow_id) to the element's "marker-end" attribute:

```js
const svg = d3.select("body").append("svg")
    .attr("width", 60)
    .attr("height", 20);

const myArrow = d3.arrow5()
    .id("my-arrow")
    .attr("fill", "steelblue")

svg.call(myArrow);

svg.append("polyline")
    .attr("marker-end", "url(#my-arrow)")
    .attr("points", [[5, 10], [55, 10]])
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2)
```

<a name="arrow5" href="#arrow5">#</a> d3.<b>regressionLinear</b>() · [Source](https://github.com/harrystevens/d3-arrow/blob/master/src/arrow-5.js "Source"), [Example](https://observablehq.com/d/7759e56ba89ced03 "Example")

Creates a new arrow generator with an [<i>id</i>](#arrow_id) of "d3-arrow-5" and a [<i>scale</i>](#arrow_scale) of 1.

<a name="arrow10" href="#arrow10">#</a> d3.<b>regressionLinear</b>() · [Source](https://github.com/harrystevens/d3-arrow/blob/master/src/arrow-10.js "Source"), [Example](https://observablehq.com/d/7759e56ba89ced03 "Example")

Creates a new arrow generator with an [<i>id</i>](#arrow_id) of "d3-arrow-10" and a [<i>scale</i>](#arrow_scale) of 1.

<a name="arrow11" href="#arrow11">#</a> d3.<b>regressionLinear</b>() · [Source](https://github.com/harrystevens/d3-arrow/blob/master/src/arrow-11.js "Source"), [Example](https://observablehq.com/d/7759e56ba89ced03 "Example")

Creates a new arrow generator with an [<i>id</i>](#arrow_id) of "d3-arrow-11" and a [<i>scale</i>](#arrow_scale) of 1.

<a name="arrow13" href="#arrow31">#</a> d3.<b>regressionLinear</b>() · [Source](https://github.com/harrystevens/d3-arrow/blob/master/src/arrow-13.js "Source"), [Example](https://observablehq.com/d/7759e56ba89ced03 "Example")

Creates a new arrow generator with an [<i>id</i>](#arrow_id) of "d3-arrow-13" and a [<i>scale</i>](#arrow_scale) of 1.