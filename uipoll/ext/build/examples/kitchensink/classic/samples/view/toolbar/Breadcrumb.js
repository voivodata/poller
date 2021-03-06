/**
 * Demonstrates a breadcrumb toolbar. A breadcrumb component is just another way of
 * navigating hierarchical data structures. It is bound to a standard tree store and
 * allows the user to set the selected node by clicking on the navigation buttons.
 */
Ext.define('KitchenSink.view.toolbar.Breadcrumb', {
    extend: 'Ext.panel.Panel',
    xtype: 'breadcrumb-toolbar',

    //<example>
    otherContent: [{
        type: 'Store',
        path: 'classic/samples/store/Files.js'
    }],
    profiles: {
        classic: {
            width: 380
        },
        neptune: {
            width: 500
        },
        'neptune-touch': {
            width: 620
        },
        graphite: {
            width: 710
        },
        'classic-material': {
            width: 710
        }
    },
    //</example>

    width: '${width}',
    height: 400,
    overflowHandler: 'scroller',
    bodyPadding: 20,
    html: KitchenSink.DummyText.longText,

    tbar: [{
        xtype: 'breadcrumb',
        showIcons: true,
        store: {
            type: 'files'
        },

        items: [{
            xtype: 'component',
            html: 'Split buttons:',
            style: {
                'margin-left': '10px',
                'margin-right': '10px'
            }
        }]
    }],

    bbar: [{
        xtype: 'breadcrumb',
        showIcons: true,
        useSplitButtons: false,
        store: {
            type: 'files'
        },

        items: [{
            xtype: 'component',
            html: 'Normal buttons:',
            style: {
                'margin-left': '10px',
                'margin-right': '10px'
            }
        }]
    }]
});
