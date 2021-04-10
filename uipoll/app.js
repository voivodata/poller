/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'uipoll.Application',

    name: 'uipoll',

    requires: [
        // This will automatically load all classes in the uipoll namespace
        // so that application classes do not need to require each other.
        'uipoll.*'
    ],

    // The name of the initial view to create.
    mainView: 'uipoll.view.main.Main'
});
