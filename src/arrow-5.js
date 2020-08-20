import { draw } from "./utils/draw";

export default function arrow5() {
  let attrs = {
    fill: "black"
  };
  let id = "d3-arrow-5";
  let scale = 1;
  
  function arrow(context){
    draw(
      context,
      attrs,
      id,
      scale,
      14,
      8,
      `M 1 1 L ${16 * scale} ${8 * scale} L 1 ${15 * scale} L ${3.5 * scale} ${8 * scale} z`
    );
  }
  
  arrow.id = function(string){ return arguments.length ? (id = string, arrow) : id; }
  arrow.scale = function(number){ return arguments.length ? (scale = number, arrow) : scale; }
  arrow.attr = function(key, value){ return arguments.length === 2 ? (attrs[key] = value, arrow) : attrs[key]; }
  
  return arrow;
}