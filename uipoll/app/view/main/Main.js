/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('uipoll.view.main.Main', {
    extend: 'Ext.panel.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'uipoll.view.main.MainController',
    ],

    controller: 'main',

    items:[{
        xtype: 'panel',
        layout: 'hbox',
        items:[{
            xtype: 'button',
            text: 'start',
            configUrl: 'start',
            handler: 'pollAjax'
        },{
            xtype: 'button',
            text: 'stop',
            configUrl:'stop',
            handler: 'pollAjax'
        },{
            xtype: 'button',
            text: 'reset redis',
            configUrl:'reset',
            handler: 'pollAjax'
        }]
    },{
        xtype: 'panel',
        width: 500,
        height: 900,
        name: 'leaderBoardPanel',
        tpl: new Ext.XTemplate(
            '<table id="leaderboard">',
                '<tr>',
                '<th>Rank</th>',
                '<th>Name</th>',
                '<th>Score</th>',
                '</tr>',
                '<tpl foreach=".">',
                    '<tr>',
                    '<td>{rank}</th>',
                    '<td>{name}</th>',
                    '<td>{score}</th>',
                    '</tr>',
                '</tpl>',
            '</tr>'
          ),
    }],
    initComponent() {
        Ext.getApplication().appSock.onmessage = function(e) {
            this.down('[name="leaderBoardPanel"]').setData(Ext.JSON.decode(e.data));
        }.bind(this);
        this.callParent();
    }
});
