/**
 * 100% stacked 3D columns are column charts where categories are stacked
 * on top of each other. The value of each category is recalculated, so that
 * it represents a share of the whole, which is the full stack and is equal
 * to 100 by default.
 */
Ext.define('KitchenSink.view.charts.column3d.Stacked100', {
    extend: 'Ext.Panel',
    xtype: 'column-stacked-100-3d',
    requires: ['Ext.chart.theme.Muted'],
    controller: 'column-stacked-100-3d',
    //<example>
    // Content between example tags is omitted from code preview.
    bodyStyle: 'background: transparent !important',
    otherContent: [{
        type: 'Controller',
        path: 'classic/samples/view/charts/column3d/Stacked100Controller.js'
    }, {
        type: 'Store',
        path: 'app/store/Browsers.js'
    }],
    layout: {
        type: 'vbox',
        pack: 'center'
    },
    //</example>
    width: 650,

    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        interactions: ['itemhighlight'],
        width: '100%',
        height: 460,
        innerPadding: '0 3 0 0',
        theme: 'Muted',
        captions: {
            title: 'Usage share of desktop browsers',
            credits: {
                text: 'Data: Browser Stats 2012\n' +
                    'Source: http://www.w3schools.com/',
                align: 'left'
            }
        },
        legend: {
            docked: 'bottom'
        },
        store: {
            type: 'browsers'
        },
        animation: Ext.isIE8
            ? false
            : {
                easing: 'backOut',
                duration: 500
            },
        axes: [{
            type: 'numeric3d',
            position: 'left',
            grid: true,
            fields: ['data1', 'data2', 'data3', 'data4', 'other' ],
            renderer: 'onAxisLabelRender',
            minimum: 0,
            maximum: 100
        }, {
            type: 'category3d',
            position: 'bottom',
            grid: true,
            fields: ['month'],
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [{
            type: 'bar3d',
            fullStack: true,
            title: [ 'IE', 'Firefox', 'Chrome', 'Safari', 'Others' ],
            xField: 'month',
            yField: [ 'data1', 'data2', 'data3', 'data4', 'other' ],
            stacked: true,
            highlightCfg: {
                brightnessFactor: 1.2,
                saturationFactor: 1.5
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onTooltipRender'
            }
        }]
    }],

    tbar: [
        '->',
        {
            text: 'Preview',
            handler: 'onPreview'
        }
    ]
});
