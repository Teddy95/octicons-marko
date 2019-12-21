// Compiled using marko@4.18.14 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/vdom").t(),
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
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_registerComponent = components_helpers.rc,
    marko_componentType = marko_registerComponent("/octicons-marko$1.0.0/components/octicon/index.marko", function() {
      return module.exports;
    }),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    module_octicons = require("@primer/octicons"),
    octicons = module_octicons.default || module_octicons,
    marko_helpers = require("marko/src/runtime/vdom/helpers"),
    marko_createElement = marko_helpers.e,
    marko_const = marko_helpers.const,
    marko_const_nextId = marko_const("3db741"),
    marko_node0 = marko_createElement("div", {
        "class": "octicon-wrapper"
      }, "@octicon", null, 0, 0, {
        i: marko_const_nextId()
      });

function render(input, out, __component, component, state) {
  var data = input;

  out.n(marko_node0, component);
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);
