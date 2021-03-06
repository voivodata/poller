Ext.define('Neptune.view.button.widget.Small', {
    extend: 'Ext.button.Button',
    xtype: 'smallButton',

    text: 'Small',

    constructor: function(cfg) {
        if (cfg.icon) {
            this.glyph = 'xF015@\'Font Awesome 5 Free\'';
            delete cfg.icon;
        }

        this.callParent(arguments);
    }
});
