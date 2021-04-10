/**
 * Demonstrates how to use Ext.chart.series.CandleStick in OHLC mode
 */
Ext.define('KitchenSink.view.chart.financial.OHLC', {
    extend: 'Ext.Container',
    xtype: 'financial-ohlc',
    controller: 'financial-ohlc',

    //<example>
    otherContent: [{
        type: 'Controller',
        path: 'modern/src/view/chart/financial/OHLCController.js'
    }, {
        type: 'Store',
        path: 'modern/src/store/StockPrice.js'
    }, {
        type: 'Model',
        path: 'app/model/StockPrice.js'
    }],

    profiles: {
        defaults: {
            buttonShadow: true,
            insetPadding: '20 10',
            padding: 8,
            panIcon: 'x-fa fa-arrows-alt',
            panText: 'Pan',
            segBtnWidth: 200,
            shadow: true,
            tbarPadding: '5 8',
            zoomIcon: 'x-fa fa-search-plus',
            zoomText: 'Zoom'
        },
        ios: {
            buttonShadow: undefined,
            tbarPadding: undefined
        },
        phone: {
            defaults: {
                insetPadding: '20 10',
                padding: undefined,
                segBtnWidth: 75,
                shadow: undefined,
                tbarPadding: '12 8'
            },
            ios: {
                tbarPadding: undefined
            }
        }
    },

    padding: '${padding}', // give room for the chart's shadow
    shadow: false,
    //</example>

    layout: 'fit',

    items: [{
        xtype: 'cartesian',
        shadow: '${shadow}',
        reference: 'chart',
        insetPadding: '${insetPadding}',
        store: {
            type: 'stock-price'
        },
        interactions: [{
            type: 'panzoom',
            zoomOnPanGesture: false,
            axes: {
                left: {
                    allowPan: false,
                    allowZoom: false
                },
                bottom: {
                    allowPan: true,
                    allowZoom: true
                }
            },
            modeToggleButton: {
                width: '${segBtnWidth}',
                defaults: {
                    flex: 1,
                    ui: 'action'
                },
                items: [{
                    iconCls: '${panIcon}',
                    text: '${panText}',
                    value: 'pan'
                }, {
                    iconCls: '${zoomIcon}',
                    text: '${zoomText}',
                    value: 'zoom'
                }]
            }
        }],
        series: [{
            type: 'candlestick',
            xField: 'time',
            openField: 'open',
            highField: 'high',
            lowField: 'low',
            closeField: 'close',
            style: {
                ohlcType: 'ohlc',
                barWidth: 10,
                opacity: 0.9,
                dropStyle: {
                    fill: 'rgb(237,123,43)',
                    stroke: 'rgb(237,123,43)'
                },
                raiseStyle: {
                    fill: 'rgb(55,153,19)',
                    stroke: 'rgb(55,153,19)'
                }
            },
            aggregator: {
                strategy: 'time'
            }
        }],
        axes: [{
            type: 'numeric',
            position: 'left',
            fields: ['open', 'high', 'low', 'close']
        }, {
            type: 'time',
            position: 'bottom',
            fields: 'time',
            visibleRange: [0.15, 0.45],
            dateFormat: 'M d',
            segmenter: {
                type: 'time',
                step: {
                    unit: Ext.Date.MONTH,
                    step: 1
                }
            }
        }]
    }, {
        xtype: 'toolbar',
        reference: 'toolbar',
        docked: 'top',
        ui: 'transparent',
        padding: '${tbarPadding}',
        hidden: Ext.supports.Touch,
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        defaults: {
            shadow: '${buttonShadow}',
            ui: 'action'
        }
    }]
});
