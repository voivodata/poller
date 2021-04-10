Ext.define('KitchenSink.view.d3.hierarchy.SunburstZoomController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.sunburst',

    requires: [
        'Ext.util.Format'
    ],

    onTooltip: function(component, tooltip, node, element, event) {
        var record = node.data,
            size = record.get('size'),
            n = record.childNodes.length;

        if (size) {
            tooltip.setHtml(Ext.util.Format.fileSize(size));
        }
        else {
            tooltip.setHtml(n + ' file' + (n === 1 ? '' : 's') + ' inside.');
        }
    }

});
