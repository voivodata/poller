/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('uipoll.Application', {
    extend: 'Ext.app.Application',

    name: 'uipoll',


    onAppUpdate: function () {
        Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
            function (choice) {
                if (choice === 'yes') {
                    window.location.reload();
                }
            }
        );
    },
    init() {
        var conurl  = 'ws://'+window.location.host+':8080';
        this.appSock = new WebSocket(conurl);
        this.appSock.onopen = function(e) {
            console.log("Connection established!");
        };
    }
});
