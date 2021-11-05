sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "sap/ui/model/Filter",
  "sap/ui/model/FilterOperator",
  "sap/ui/core/CustomData", // dependency for the .data API
], function(Controller, Filter, FilterOperator) {
  "use strict";

  /**
   * This is a small sample. Adjust according to your project
   */
  return Controller.extend("demo.controller.Root", {
    onInit: function() {
      this.startList(this.byId("table"), 0, 10, {
        path: "/SEPMRA_I_Product_E",
        template: this.byId("itemToCopy"),
        filters: [
          new Filter({
            path: "ProductCategory",
            operator: FilterOperator.EndsWith, // between
            value1: "ers",
          })
        ],
        parameters: {/* Model dependent */},
        // See ManagedObject.AggregationBindingInfo for more options
      });
    },

    startList: function(listBase, $skip, $top, restInfo) {
      let startIndex = $skip;
      let length = $top;
      let totalSize;
      (function repeat(that) {
        const bindingInfo = Object.assign({ startIndex, length }, restInfo);
        listBase.bindItems(bindingInfo);
        listBase.data("repeater", event => {
          totalSize = event.getParameter("total"); // $count value e.g. 20
          startIndex += $top;
          startIndex = startIndex < totalSize ? startIndex : 0;
          that._timeoutID = setTimeout(() => repeat(that), 2000);
        }).attachEventOnce("updateFinished", listBase.data("repeater"), that);
      })(this);
    },

    stopList: function(listBase) {
      clearInterval(this._timeoutID);
      listBase.detachEvent("updateFinished", listBase.data("repeater"), this);
    },

    onExit: function() {
      this.stopList(this.byId("table"));
    },

  });
});