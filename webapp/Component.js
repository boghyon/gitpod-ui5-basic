sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/core/ComponentSupport", // https://github.com/SAP/ui5-tooling/issues/381
  "sap/ui/core/date/Gregorian",
], (UIComponent) => {
  "use strict";

  return UIComponent.extend("my.demo.Component", {
    metadata: {
      interfaces: [
        "sap.ui.core.IAsyncContentCreation",
      ],
      manifest: "json",
    },

    init() {
      UIComponent.prototype.init.apply(this, arguments);
      this.getRouter().initialize();
    },

  });
});