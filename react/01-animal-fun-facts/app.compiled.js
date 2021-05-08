(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        "use strict";

        Object.defineProperty(exports, "__esModule", {
          value: true,
        });
        var animals = (exports.animals = {
          dolphin: {
            image: "/images/dolphin.jpg",
            facts: [
              "Dolphins have been shown to give distinct names to each other!",
              "Dolphins are known to display their own culture!",
              "Dolphins have two stomachs!",
            ],
          },
          lobster: {
            image: "/images/lobster.jpg",
            facts: [
              "Lobsters taste with their legs!",
              "Lobsters chew with their stomachs!",
              "Lobsters can live as long as 100 years.",
            ],
          },
          starfish: {
            image: "/images/starfish.jpg",
            facts: [
              "Starfish can have up to 40 arms!",
              "Starfish have no brain and no blood!",
              "Starfish can regenerate their own arms!",
            ],
          },
        });
      },
      {},
    ],
    2: [
      function (require, module, exports) {
        "use strict";

        var _animals = require("./animals");
      },
      { "./animals": 1 },
    ],
  },
  {},
  [2]
);
