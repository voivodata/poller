/**
 * This example illustrates a combo box which loads data from a local array.
 */
Ext.define('KitchenSink.view.form.combobox.Simple', {
    extend: 'Ext.form.Panel',
    xtype: 'simple-combo',

    //<example>
    requires: [
        'KitchenSink.model.State',
        'KitchenSink.store.States'
    ],

    exampleTitle: 'Simple ComboBox',
    otherContent: [{
        type: 'Model',
        path: 'app/model/State.js'
    }, {
        type: 'Store',
        path: 'app/store/States.js'
    }],
    //</example>

    profiles: {
        classic: {
            labelWidth: 110
        },
        neptune: {
            labelWidth: 110
        },
        graphite: {
            labelWidth: 140
        },
        'classic-material': {
            labelWidth: 140
        }
    },
    title: 'Simple ComboBox',
    width: 500,
    layout: 'form',
    cls: 'simple-combo',
    viewModel: {},

    items: [{
        xtype: 'fieldset',
        layout: 'anchor',
        fieldDefaults: {
            labelWidth: '${labelWidth}'
        },
        items: [{
            xtype: 'component',
            anchor: '100%',
            html: [
                '<h3>Locally loaded data</h3>',
                '<p>This ComboBox uses local data from a JS array</p>'
            ]
        }, {
            xtype: 'displayfield',
            fieldLabel: 'Selected State',
            bind: '{states.value}'
        }, {
            xtype: 'combobox',
            reference: 'states',
            publishes: 'value',
            fieldLabel: 'Select State',
            displayField: 'state',
            anchor: '-15',
            store: {
                type: 'states'
            },
            minChars: 0,
            queryMode: 'local',
            typeAhead: true
        }]
    }]
});
