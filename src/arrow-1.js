import { draw } from "./utils/draw";

export default function arrow1() {
  let attrs = {
    fill: "black"
  };
  let id = "d3-arrow-1";
  let scale = 1;
  
  function arrow(context){
    draw(
      context,
      attrs,
      id,
      scale,
      14,
      9,
      `M 1 1 Q ${8 * scale} ${6 * scale} ${16 * scale} ${9 * scale} Q ${8 * scale} ${12 * scale} 1 ${17 * scale} L ${4 * scale} ${9 * scale} Z`
    );
  }
  
  arrow.id = function(string){ return arguments.length ? (id = string, arrow) : id; }
  arrow.scale = function(number){ return arguments.length ? (scale = number, arrow) : scale; }
  arrow.attr = function(key, value){ return arguments.length === 2 ? (attrs[key] = value, arrow) : attrs[key]; }
  
  return arrow;
}