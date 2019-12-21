// Compiled using marko@4.18.14 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        onCreate: function(input) {
          if ((typeof input.name) === "undefined") {
            this.destroy();
          }

          this.state = {
              icon: input.name,
              iconClass: input.class,
              scale: 1,
              spin: false,
              flip: false
            };

          if ((typeof input.scale) !== "undefined") {
            this.state.scale = input.scale;
          }

          if (((typeof input.spin) !== "undefined") && (input.spin === true)) {
            this.state.spin = true;
          }

          if (((typeof input.flip) !== "undefined") && ((input.flip === "vertical") || (input.flip === "horizontal"))) {
            this.state.flip = input.flip;
          }
        },
        onMount: function() {
          var octiconWrapper = this.getEl("octicon");

          var iconClass = false;

          var options = {
                  width: octicons[this.state.icon].width * this.state.scale,
                  height: octicons[this.state.icon].height * this.state.scale
                };

          if ((typeof this.state.iconClass) !== "undefined") {
            iconClass = this.state.iconClass;
          }

          if (this.state.spin) {
            if (!iconClass) {
              iconClass = "octicon-spin";
            } else {
              iconClass += " octicon-spin";
            }
          }

          if (this.state.flip) {
            if (!iconClass) {
              iconClass = "octicon-flip-" + this.state.flip;
            } else {
              iconClass += " octicon-flip-" + this.state.flip;
            }
          }

          if (iconClass) {
            options.class = iconClass;
          }

          octiconWrapper.innerHTML = octicons[this.state.icon].toSVG(options);
        }
      },
    marko_componentType = "/octicons-marko$1.0.0/components/octicon/index.marko",
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_octicons = require("@primer/octicons"),
    octicons = module_octicons.default || module_octicons;

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div class=\"octicon-wrapper\"></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    deps: [
      {
          type: "scss",
          code: ".octicon-wrapper {\n\t\tdisplay: inline;\n\n\t\t.octicon-spin {\n\t\t\tanimation-name: spin;\n\t\t\tanimation-duration: 1150ms;\n\t\t\tanimation-iteration-count: infinite;\n\t\t\tanimation-timing-function: linear;\n\t\t}\n\n\t\t.octicon-flip-horizontal {\n\t\t\t-webkit-transform: scaleX(-1);\n\t\t\t-moz-transform: scaleX(-1);\n\t\t\ttransform: scaleX(-1);\n\t\t}\n\n\t\t.octicon-flip-vertical {\n\t\t\t-webkit-transform: scaleY(-1);\n\t\t\t-moz-transform: scaleY(-1);\n\t\t\ttransform: scaleY(-1);\n\t\t}\n\n\t\t@keyframes spin {\n\t\t\tfrom {\n\t\t\t\ttransform: rotate(0deg);\n\t\t\t}\n\t\t\tto {\n\t\t\t\ttransform: rotate(360deg);\n\t\t\t}\n\t\t}\n\t}",
          virtualPath: "./index.marko.scss",
          path: "./index.marko"
        }
    ],
    id: "/octicons-marko$1.0.0/components/octicon/index.marko",
    component: "./index.marko"
  };
