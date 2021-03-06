Ext.define('KitchenSink.view.d3.heatmap.PivotController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.heatmap-pivot',

    showConfigurator: function() {
        this.getView().showConfigurator();
    },

    monthLabelRenderer: function(value) {
        return Ext.Date.monthNames[value];
    },

    onRefreshData: function() {
        var heatmap = this.lookup('heatmap'),
            store = heatmap.getMatrix().store;

        store.refreshRandomData(100);
    },

    onBeforeAddConfigField: function(panel, config) {
        var dest = config.toContainer,
            store = dest.getStore();

        if (dest.getFieldType() !== 'all' && store.getCount() >= 1) {
            // this will force single fields on both axis and aggregate
            store.removeAll();
        }
    },

    onShowFieldSettings: function(panel, config) {
        var align = config.container.down('[name=align]');

        // hide the alignment field in settings since it's useless
        if (align) {
            align.hide();
        }
    },

    onTooltip: function(component, tooltip, datum, element, event) {
        var d = datum.data,
            x = component.getXAxis().getField(),
            y = component.getYAxis().getField(),
            z = component.getColorAxis().getField();

        tooltip.setHtml(
            '<div>X: ' + d[x] + '</div>' +
            '<div>Y: ' + d[y] + '</div>' +
            '<div>Z: ' + d[z] + '</div>' +
            '<div>Records: ' + d.records + '</div>'
        );
    }
});
