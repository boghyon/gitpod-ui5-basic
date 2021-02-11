sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "sap/ui/core/ComponentSupport",
], function (UIComponent, Device) {
  "use strict";

  return UIComponent.extend("demo.Component", {
    metadata: {
      manifest: "json"
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
      this.setDensity().getRouter().initialize();
    },

    setDensity: function ({
      styleClass = Device.system.desktop ? "sapUiSizeCompact" : "sapUiSizeCozy",
      targetElement = document.body
    } = {}) {
      targetElement.classList.add(styleClass);
      return this;
    }
  });
});
