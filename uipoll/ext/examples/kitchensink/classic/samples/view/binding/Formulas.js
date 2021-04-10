/**
 * This example shows data binding using formulas (calculated properties). This example
 * also demonstrates automatic dependency resolution between formulas that depend on each
 * other's values.
 */
Ext.define('KitchenSink.view.binding.Formulas', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.binding-formulas',
    //<example>
    otherContent: [{
        type: 'ViewModel',
        path: 'classic/samples/view/binding/FormulasModel.js'
    }],
    //</example>
    profiles: {
        classic: {
            width: 'auto',
            bodyPadding: 10
        },
        neptune: {
            width: 'auto',
            bodyPadding: 10
        },
        graphite: {
            width: 'auto',
            bodyPadding: 10
        },
        'classic-material': {
            width: 330,
            bodyPadding: 20
        }
    },

    title: 'View Model Formulas',

    width: 370,
    bodyPadding: '${bodyPadding}',

    viewModel: {
        // Formulas are defined by the ViewModel:
        type: 'binding-formulas',
        data: {
            x: 10
        }
    },

    items: [{
        xtype: 'numberfield',
        fieldLabel: 'Number',
        width: '${width}',
        bind: '{x}'
    }, {
        xtype: 'displayfield',
        fieldLabel: 'Calculated',
        bind: '{x} * 2 = {twice} / {x} * 4 = {quad}'
    }]
});
