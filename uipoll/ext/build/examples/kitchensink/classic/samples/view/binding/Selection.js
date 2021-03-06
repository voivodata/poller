/**
 * This example shows selection binding. The selection from each component
 * is bound to the same source and is automatically updated when a selection
 * in any component changes.
 */
Ext.define('KitchenSink.view.binding.Selection', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.binding-selection',
    width: 600,
    height: '${height}',

    profiles: {
        classic: {
            height: 270,
            phoneColumnWidth: 100
        },
        neptune: {
            height: 270,
            phoneColumnWidth: 100
        },
        graphite: {
            height: 400,
            phoneColumnWidth: 150
        },
        'classic-material': {
            height: 400,
            phoneColumnWidth: 150
        }
    },

    //<example>
    requires: ['KitchenSink.view.binding.SelectionController'],
    otherContent: [{
        type: 'Controller',
        path: 'classic/samples/view/binding/SelectionController.js'
    }, {
        type: 'Model',
        path: 'app/model/Company.js'
    }, {
        type: 'Model',
        path: 'app/model/field/PhoneNumber.js'
    }, {
        type: 'Data',
        path: 'app/data/Company.js'
    }],
    //</example>

    viewModel: {
        stores: {
            companies: {
                model: 'Company',
                autoLoad: true
            }
        }
    },

    controller: 'binding.selection',

    layout: 'vbox',

    items: [{
        xtype: 'combobox',
        margin: '10 0 0 10',
        forceSelection: true,
        editable: false,
        displayField: 'name',
        valueField: 'id',
        triggerAction: 'all',
        queryMode: 'local',
        labelWidth: 160,
        bind: {
            store: '{companies}',
            selection: '{selectedCompany}'
        },
        fieldLabel: 'Company Combo'
    }, {
        xtype: 'container',
        width: 600,
        margin: '15 0 0 0',
        flex: 1,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        padding: 15,
        items: [{
            title: 'Companies Grid',
            flex: 1,
            xtype: 'grid',
            reference: 'grid',
            bind: {
                store: '{companies}',
                selection: '{selectedCompany}'
            },
            columns: [{
                text: 'Name', dataIndex: 'name', flex: 1
            }, {
                text: 'Phone', dataIndex: 'phone', width: '${phoneColumnWidth}'
            }]
        }, {
            flex: 1,
            cls: 'binding-selection-view',
            itemSelector: '.customer',
            scrollable: 'y',
            xtype: 'dataview',
            reference: 'dataview',
            tpl: '<h1>Company View</h1><tpl for="."><div class="customer"><div class="indicator"></div>{name}<div class="indicator rtl"></div></div></tpl>',
            bind: {
                store: '{companies}',
                selection: '{selectedCompany}'
            }
        }]
    }]
});
