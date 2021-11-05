sap.ui.define([
  "sap/ui/core/UIComponent",
  "sap/ui/core/ComponentSupport",//https://github.com/SAP/ui5-tooling/issues/381
], function(UIComponent) {
  "use strict";

  return UIComponent.extend("demo.Component", {
    metadata: {
      interfaces: [
        "sap.ui.core.IAsyncContentCreation",
      ],
      manifest: "json",
    },

  });
});