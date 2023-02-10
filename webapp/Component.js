sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/Device",
  "sap/ui/core/ComponentSupport", //https://github.com/SAP/ui5-tooling/issues/381
  "sap/ui/core/date/Gregorian",
], function(UIComponent, Device) {
  "use strict";

  return UIComponent.extend("my.demo.Component", {
    metadata: {
      interfaces: [
        "sap.ui.core.IAsyncContentCreation",
      ],
      manifest: "json",
    },

    init: function () {
      UIComponent.prototype.init.apply(this, arguments);
      this.setDensity().getRouter().initialize();
    },

    setDensity: function ({
      styleClass = Device.system.desktop ? "sapUiSizeCompact" : "sapUiSizeCozy",
      targetElement = document.body,
    } = {}) {
      targetElement.classList.add(styleClass);
      return this;
    },

  });
});