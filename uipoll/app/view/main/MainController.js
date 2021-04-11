/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define('uipoll.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',


    pollAjax(button) {
        var url = window.location.origin+'/poller/leaderboard/'+button.configUrl;
        Ext.Ajax.request({
            url,
            method: 'GET',
            scope: this,
            success(res) {
                res = Ext.decode(res.responseText);
                Ext.toast(res.success);
            },
        });
    }

});
