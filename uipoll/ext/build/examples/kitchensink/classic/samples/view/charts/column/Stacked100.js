/**
 * 100% stacked 3D columns are column charts where categories are stacked
 * on top of each other. The value of each category is recalculated, so that
 * it represents a share of the whole, which is the full stack and is equal
 * to 100 by default.
 */
Ext.define('KitchenSink.view.charts.column.Stacked100', {
    extend: 'Ext.Panel',
    xtype: 'column-stacked-100',
    controller: 'column-stacked-100',
    requires: ['Ext.chart.theme.Muted'],
    //<example>
    // Content between example tags is omitted from code preview.
    bodyStyle: 'background: transparent !important',
    layout: {
        type: 'vbox',
        pack: 'center'
    },
    otherContent: [{
        type: 'Controller',
        path: 'classic/samples/view/charts/column/Stacked100Controller.js'
    }, {
        type: 'Store',
        path: 'app/store/Cars.js'
    }],
    //</example>

    width: 650,

    tbar: [
        '->',
        {
            text: 'Preview',
            platformConfig: {
                desktop: {
                    text: 'Download'
                }
            },
            handler: 'onDownload'
        }
    ],

    items: [{
        xtype: 'cartesian',
        reference: 'chart',

        downloadServerUrl: '//svg.sencha.io',

        width: '100%',
        height: 460,

        legend: {
            type: 'sprite',
            docked: 'bottom',
            marker: {
                type: 'square'
            },
            border: {
                radius: 0
            }
        },
        store: {
            type: 'cars'
        },
        theme: 'Muted',

        captions: {
            title: 'Car production by largest manufacturers',
            credits: 'Source: International Organization of Motor Vehicle Manufacturers'
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            grid: true,
            fields: [ 'to', 'gm', 'vw', 'hy', 'fo' ],
            renderer: 'onAxisLabelRender'
        }, {
            type: 'category',
            position: 'bottom',
            fields: 'year',
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [{
            type: 'bar',
            stacked: true,
            fullStack: true,

            title: [ 'Toyota', 'GM', 'Volkswagen', 'Hyundai', 'Ford' ],

            xField: 'year',
            yField: [ 'to', 'gm', 'vw', 'hy', 'fo' ],

            style: {
                minGapWidth: 30
            },
            highlight: {
                fillStyle: 'yellow'
            },
            tooltip: {
                trackMouse: false,
                renderer: 'onBarTipRender'
            }
        }]
        //<example>
    }]

});
