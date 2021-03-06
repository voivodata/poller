/**
 * The 'd3-horizontal-tree' component is a perfect way to visualize hierarchical
 * data as an actual tree in case where the relative size of nodes is of little
 * interest, and the focus is on the relative position of each node in the hierarchy.
 * The tree is horizontal because it makes for a more consistent look and more efficient
 * use of space when text labels are shown next to each node.
 */
Ext.define('KitchenSink.view.d3.Tree', {
    extend: 'Ext.panel.Panel',
    xtype: 'd3-view-tree',
    controller: 'd3-tree',

    requires: [
        'KitchenSink.view.d3.SalaryViewModel',
        'Ext.d3.hierarchy.tree.HorizontalTree',
        'Ext.d3.interaction.PanZoom',
        'Ext.tip.ToolTip'
    ],
    //<example>
    // Content between example tags is omitted from code preview.
    otherContent: [
        {
            type: 'Controller',
            path: 'app/view/d3/TreeController.js'
        },
        {
            type: 'View Model',
            path: 'app/view/d3/SalaryViewModel.js'
        },
        {
            type: 'Model',
            path: 'app/model/Salary.js'
        },
        {
            type: 'Reader',
            path: 'app/reader/Salary.js'
        }
        // { // Too much for a browser to handle.
        //     type: 'Data',
        //     path: 'data/tree/salary.json'
        // }
    ],
    //</example>

    width: 930,
    height: 600,

    layout: 'border',

    viewModel: {
        type: 'd3-salary'
    },

    items: [
        {
            xtype: 'treepanel',

            region: 'west',
            split: true,
            splitterResize: false,
            collapsible: true,
            minWidth: 100,
            width: 215,

            title: 'Folders',
            useArrows: true,
            displayField: 'text',

            bind: {
                store: '{store}',
                selection: '{selection}',
                focused: '{selection}'
            }
        },
        {
            region: 'center',

            xtype: 'panel',
            layout: 'fit',
            title: 'Highest Paying Industries',
            items: {
                xtype: 'd3-tree',
                interactions: {
                    type: 'panzoom',
                    zoom: {
                        extent: [0.3, 3],
                        doubleTap: false
                    }
                },
                colorAxis: {
                    field: 'id'
                },
                tooltip: {
                    renderer: 'onTooltip'
                },
                nodeText: function(tree, node) {
                    var model = node.data,
                        text = model.data.text;

                    if (node.depth > 1) {
                        text += ' (' + Ext.util.Format.currency(model.data.salary, '$', 0) + ')';
                    }

                    return text;
                },
                nodeSize: [250, 30],
                nodeRadius: 10,
                bind: {
                    store: '{store}',
                    selection: '{selection}'
                },
                platformConfig: {
                    desktop: {
                        nodeSize: [250, 20],
                        nodeRadius: 5
                    }
                }
            }
        }
    ]
});
