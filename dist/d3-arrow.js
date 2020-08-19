// https://github.com/HarryStevens/d3-arrow#readme Version 0.0.7. Copyright 2020 Harry Stevens.
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.d3 = global.d3 || {}));
}(this, (function (exports) { 'use strict';

  function iterate(attrs, path) {
    var keys = Object.keys(attrs),
        l = keys.length;

    for (var i = 0; i < l; i++) {
      var key = keys[i];
      path.attr(key, attrs[key]);
    }
  }

  function arrow5() {
    var attrs = {
      fill: "black"
    };
    var id = "d3-arrow-5";
    var scale = 1;

    function arrow(context) {
      var defs = context.select("defs");

      if (defs.empty()) {
        defs = context.append("defs");
      }

      var path = defs.append("marker").attr("id", id).attr("refX", 13 * scale).attr("refY", 7 * scale).attr("markerWidth", 15 * scale).attr("markerHeight", 14 * scale).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto-start-reverse").append("path").attr("d", "M 0 0 L ".concat(15 * scale, " ").concat(7 * scale, " L 0 ").concat(14 * scale, " L ").concat(2.5 * scale, " ").concat(7 * scale, " z"));
      iterate(attrs, path);
    }

    arrow.id = function (string) {
      return arguments.length ? (id = string, arrow) : id;
    };

    arrow.scale = function (number) {
      return arguments.length ? (scale = number, arrow) : scale;
    };

    arrow.attr = function (key, value) {
      return arguments.length ? (attrs[key] = value, arrow) : attrs[key];
    };

    return arrow;
  }

  function arrow10() {
    var attrs = {
      fill: "none",
      stroke: "black",
      "stroke-width": 1
    };
    var id = "d3-arrow-10";
    var scale = 1;

    function arrow(context) {
      var defs = context.select("defs");

      if (defs.empty()) {
        defs = context.append("defs");
      }

      var path = defs.append("marker").attr("id", id).attr("refX", 4 * scale).attr("refY", 3.5 * scale).attr("markerWidth", 6 * scale).attr("markerHeight", 7 * scale).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto-start-reverse").append("path").attr("d", "M 0 0 L ".concat(4 * scale, " ").concat(3.5 * scale, " L 0 ").concat(7 * scale));
      iterate(attrs, path);
    }

    arrow.id = function (string) {
      return arguments.length ? (id = string, arrow) : id;
    };

    arrow.scale = function (number) {
      return arguments.length ? (scale = number, arrow) : scale;
    };

    arrow.attr = function (key, value) {
      return arguments.length ? (attrs[key] = value, arrow) : attrs[key];
    };

    return arrow;
  }

  function arrow11() {
    var attrs = {
      fill: "none",
      stroke: "black",
      "stroke-width": 1
    };
    var id = "d3-arrow-10";
    var scale = 1;

    function arrow(context) {
      var defs = context.select("defs");

      if (defs.empty()) {
        defs = context.append("defs");
      }

      var path = defs.append("marker").attr("id", id).attr("refX", 7 * scale).attr("refY", 7 * scale).attr("markerWidth", 8 * scale).attr("markerHeight", 14 * scale).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto-start-reverse").append("path").attr("d", "M 0 0 L ".concat(7 * scale, " ").concat(7 * scale, " L 0 ").concat(14 * scale));
      iterate(attrs, path);
    }

    arrow.id = function (string) {
      return arguments.length ? (id = string, arrow) : id;
    };

    arrow.scale = function (number) {
      return arguments.length ? (scale = number, arrow) : scale;
    };

    arrow.attr = function (key, value) {
      return arguments.length ? (attrs[key] = value, arrow) : attrs[key];
    };

    return arrow;
  }

  function arrow13() {
    var attrs = {
      fill: "none",
      stroke: "black",
      "stroke-width": 1
    };
    var id = "d3-arrow-10";
    var scale = 1;

    function arrow(context) {
      var defs = context.select("defs");

      if (defs.empty()) {
        defs = context.append("defs");
      }

      var path = defs.append("marker").attr("id", id).attr("refX", 12 * scale).attr("refY", 9 * scale).attr("markerWidth", 14 * scale).attr("markerHeight", 18 * scale).attr("markerUnits", "userSpaceOnUse").attr("orient", "auto-start-reverse").append("path").attr("d", "M 0 0 L ".concat(12 * scale, " ").concat(9 * scale, " L 0 ").concat(18 * scale));
      iterate(attrs, path);
    }

    arrow.id = function (string) {
      return arguments.length ? (id = string, arrow) : id;
    };

    arrow.scale = function (number) {
      return arguments.length ? (scale = number, arrow) : scale;
    };

    arrow.attr = function (key, value) {
      return arguments.length ? (attrs[key] = value, arrow) : attrs[key];
    };

    return arrow;
  }

  exports.arrow10 = arrow10;
  exports.arrow11 = arrow11;
  exports.arrow13 = arrow13;
  exports.arrow5 = arrow5;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
