/**
 * Controller for several grid examples (such as BasicGrid).
 *
 * Provides column renderers and handlers for the ActionColumn and buttons.
 */
Ext.define('KitchenSink.view.grid.core.BasicGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.basic-grid',

    onApprove: function(grid, info) {
        Ext.Msg.alert('Approve', info.record.get('name'));
    },

    onDecline: function(grid, info) {
        Ext.Msg.alert('Decline', info.record.get('name'));
    },

    onCustomFirst: function() {
        Ext.Msg.alert('Custom Menu', 'Clicked first custom column menu item');
    },

    onCustomLast: function() {
        Ext.Msg.alert('Custom Menu', 'Clicked last custom column menu item');
    },

    renderChange: function(value) {
        return this.renderSign(value, '0.00');
    },

    renderPercent: function(value) {
        return this.renderSign(value, '0.00%');
    },

    renderSign: function(value, format) {
        var text = Ext.util.Format.number(value, format),
            tpl = this.signTpl;

        if (Math.abs(value) > 0.1) {
            if (!tpl) {
                this.signTpl = tpl = this.getView().lookupTpl('signTpl');
            }

            text = tpl.apply({
                text: text,
                value: value
            });
        }

        return text;
    }
});
