import { iterate } from "./utils/iterate";

export default function arrow5() {
  let attrs = {
    fill: "black"
  };
  let id = "d3-arrow-5";
  let scale = 1;
  
  function arrow(context){
    let defs = context.select("defs");
    if (defs.empty()) {
      defs = context.append("defs");
    }

    const path = defs.append("marker")
        .attr("id", id)
        .attr("refX", 13 * scale)
        .attr("refY", 7 * scale)
        .attr("markerWidth", 15 * scale)
        .attr("markerHeight", 14 * scale)
        .attr("markerUnits", "userSpaceOnUse")
        .attr("orient", "auto-start-reverse")
      .append("path")
        .attr("d", `M 0 0 L ${15 * scale} ${7 * scale} L 0 ${14 * scale} L ${2.5 * scale} ${7 * scale} z`);

    iterate(attrs, path);
  }
  
  arrow.id = function(string){ return arguments.length ? (id = string, arrow) : id; }
  arrow.scale = function(number){ return arguments.length ? (scale = number, arrow) : scale; }
  arrow.attr = function(key, value){ return arguments.length === 2 ? (attrs[key] = value, arrow) : attrs[key]; }
  
  return arrow;
}