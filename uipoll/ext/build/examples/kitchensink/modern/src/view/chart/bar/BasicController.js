Ext.define('KitchenSink.view.chart.bar.BasicController', {
    extend: 'KitchenSink.view.chart.ChartController',
    alias: 'controller.bar-basic',

    onAxisLabelRender: function(axis, label, layoutContext) {
        return Ext.util.Format.number(layoutContext.renderer(label) / 1000, '0,000');
    },

    onSeriesLabelRender: function(v) {
        return Ext.util.Format.number(v / 1000, '0,000');
    },

    onItemEditTooltipRender: function(tooltip, item, target, e) {
        var formatString = '0,000 (billions of USD)',
            record = item.record;

        tooltip.setHtml(record.get('country') + ': ' +
            Ext.util.Format.number(target.yValue / 1000, formatString));
    },

    onSeriesTooltipRender: function(tooltip, record, item) {
        var formatString = '0,000 (millions of USD)';

        tooltip.setHtml(record.get('country') + ': ' +
            Ext.util.Format.number(record.get('ind'), formatString));
    },

    onColumnRender: function(v) {
        return Ext.util.Format.usMoney(v * 1000);
    }
});
