import { iterate } from "./utils/iterate";

export default function arrow11() {
  let attrs = {
    fill: "none",
    stroke: "black",
    "stroke-width": 1
  };
  let id = "d3-arrow-10";
  let scale = 1;
  
  function arrow(context){
    let defs = context.select("defs");
    if (defs.empty()) {
      defs = context.append("defs");
    }

    const path = defs.append("marker")
        .attr("id", id)
        .attr("refX", 7 * scale)
        .attr("refY", 7 * scale)
        .attr("markerWidth", 8 * scale)
        .attr("markerHeight", 14 * scale)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("orient", "auto-start-reverse")
      .append("path")
        .attr("d", `M 0 0 L ${7 * scale} ${7 * scale} L 0 ${14 * scale}`);

    iterate(attrs, path);
  }
  
  arrow.id = function(string){ return arguments.length ? (id = string, arrow) : id; }
  arrow.scale = function(number){ return arguments.length ? (scale = number, arrow) : scale; }
  arrow.attr = function(key, value){ return arguments.length ? (attrs[key] = value, arrow) : attrs[key]; }
  
  return arrow;
}