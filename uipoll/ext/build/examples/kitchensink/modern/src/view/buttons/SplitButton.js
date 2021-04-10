/**
 * Demonstrates a range of split button options the framework offers out of the box
 */
Ext.define('KitchenSink.view.buttons.SplitButton', {
    extend: 'Ext.Container',
    xtype: 'buttons-split',

    viewModel: {
        type: 'buttons-extra'
    },

    requires: [
        'Ext.layout.HBox',
        'Ext.layout.VBox',
        'Ext.Button',
        'Ext.SplitButton'
    ],

    //<example>
    otherContent: [{
        type: 'ViewModel',
        path: 'modern/src/view/buttons/ExtraModel.js'
    }],

    profiles: {
        defaults: {
            buttonShadow: true,
            labelCls: 'button-group-label button-group-right',
            labelPadding: '25 10 0 0',
            labelProperty: 'width',
            layout: 'hbox',
            padding: 8,
            shadow: true,
            stripMargins: '10 20 20 20',
            tbarPadding: '5 8',
            toggleCls: 'demo-solid-background',
            width: 650,
            smallHeight: '28px',
            mediumHeight: '36px',
            largeHeight: '42px',
            smallFontSize: '12px',
            mediumFontSize: '14px',
            largeFontSize: '16px',
            smallLineHeight: '16px',
            mediumLineHeight: '18px',
            largeLineHeight: '20px'
        },
        ios: {
            buttonShadow: undefined,
            tbarPadding: undefined,
            toggleCls: undefined
        },
        phone: {
            defaults: {
                labelCls: 'button-group-label',
                labelPadding: undefined,
                labelProperty: undefined,
                layout: 'vbox',
                padding: undefined,
                shadow: undefined,
                stripMargins: '10 6 10 6',
                tbarPadding: '12 8',
                width: undefined
            },
            ios: {
                tbarPadding: undefined
            }
        }
    },

    cls: 'demo-buttons-extra',
    padding: '${padding}',
    shadow: false,
    //</example>

    scrollable: 'y',
    width: '${width}',
    autoSize: true,

    defaults: {
        autoSize: true
    },

    items: [{
        cls: 'demo-solid-background',
        shadow: '${shadow}',
        defaults: {
            flex: '1 1 auto', // this allows auto-height in vbox
            margin: '${stripMargins}',
            layout: {
                type: '${layout}'
            },
            autoSize: true
        },
        layout: {
            type: 'vbox'
        },
        items: [{
            margin: '20 20 10',
            items: [{
                xtype: 'component',
                cls: '${labelCls}',
                padding: '${labelPadding}',
                '${labelProperty}': 75,
                html: 'Default'
            }, {
                xtype: 'container',
                cls: 'button-group',
                flex: 1,
                minHeight: 55,
                autoSize: true,
                defaults: {
                    xtype: 'splitbutton',
                    margin: '0 10',
                    menu: [{
                        text: 'Menu Item 1'
                    }, {
                        text: 'Menu Item 2'
                    }, {
                        text: 'Menu Item 3'
                    }],
                    bind: {
                        ui: '{style} {round ? "round" : ""}',
                        iconCls: '{icon}',
                        disabled: '{disabled}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    margin: '0 10 0 20',
                    height: '${smallHeight}',
                    bind: {
                        text: '{smallText}'
                    },
                    style: {
                        fontSize: '${smallFontSize}',
                        lineHeight: '${smallLineHeight}'
                    }
                }, {
                    height: '${mediumHeight}',
                    bind: {
                        text: '{mediumText}'
                    },
                    style: {
                        fontSize: '${mediumFontSize}',
                        lineHeight: '${mediumLineHeight}'
                    }
                }, {
                    margin: '0 20 0 10',
                    height: '${largeHeight}',
                    bind: {
                        text: '{largeText}'
                    },
                    style: {
                        fontSize: '${largeFontSize}',
                        lineHeight: '${largeLineHeight}'
                    }
                }]
            }]
        }, {
            items: [{
                xtype: 'component',
                cls: '${labelCls}',
                padding: '${labelPadding}',
                '${labelProperty}': 75,
                html: 'Alt'
            }, {
                xtype: 'container',
                cls: 'button-group alt',
                flex: 1,
                minHeight: 55,
                autoSize: true,
                defaults: {
                    xtype: 'splitbutton',
                    margin: '0 10',
                    menu: [{
                        text: 'Menu Item 1'
                    }, {
                        text: 'Menu Item 2'
                    }, {
                        text: 'Menu Item 3'
                    }],
                    bind: {
                        ui: 'alt {style} {round ? "round" : ""}',
                        iconCls: '{icon}',
                        disabled: '{disabled}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    height: '${smallHeight}',
                    margin: '0 10 0 20',
                    bind: {
                        text: '{smallText}'
                    },
                    style: {
                        fontSize: '${smallFontSize}',
                        lineHeight: '${smallLineHeight}'
                    }
                }, {
                    height: '${mediumHeight}',
                    bind: {
                        text: '{mediumText}'
                    },
                    style: {
                        fontSize: '${mediumFontSize}',
                        lineHeight: '${mediumLineHeight}'
                    }
                }, {
                    margin: '0 20 0 10',
                    height: '${largeHeight}',
                    bind: {
                        text: '{largeText}'
                    },
                    style: {
                        fontSize: '${largeFontSize}',
                        lineHeight: '${largeLineHeight}'
                    }
                }]
            }]
        }, {
            items: [{
                xtype: 'component',
                cls: '${labelCls}',
                padding: '${labelPadding}',
                '${labelProperty}': 75,
                html: 'Raised'
            }, {
                xtype: 'container',
                cls: 'button-group',
                flex: 1,
                minHeight: 55,
                autoSize: true,
                defaults: {
                    xtype: 'splitbutton',
                    margin: '0 10',
                    menu: [{
                        text: 'Menu Item 1'
                    }, {
                        text: 'Menu Item 2'
                    }, {
                        text: 'Menu Item 3'
                    }],
                    bind: {
                        ui: 'raised {style} {round ? "round" : ""}',
                        iconCls: '{icon}',
                        disabled: '{disabled}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    height: '${smallHeight}',
                    margin: '0 10 0 20',
                    bind: {
                        text: '{smallText}'
                    },
                    style: {
                        fontSize: '${smallFontSize}',
                        lineHeight: '${smallLineHeight}'
                    }
                }, {
                    height: '${mediumHeight}',
                    bind: {
                        text: '{mediumText}'
                    },
                    style: {
                        fontSize: '${mediumFontSize}',
                        lineHeight: '${mediumLineHeight}'
                    }
                }, {
                    margin: '0 20 0 10',
                    height: '${largeHeight}',
                    bind: {
                        text: '{largeText}'
                    },
                    style: {
                        fontSize: '${largeFontSize}',
                        lineHeight: '${largeLineHeight}'
                    }

                }]
            }]
        }, {
            items: [{
                xtype: 'component',
                cls: '${labelCls}',
                padding: '${labelPadding}',
                '${labelProperty}': 75,
                html: 'Alt Raised',
                autoSize: true
            }, {
                xtype: 'container',
                cls: 'button-group alt',
                flex: 1,
                minHeight: 55,
                defaults: {
                    xtype: 'splitbutton',
                    margin: '0 10',
                    menu: [{
                        text: 'Menu Item 1'
                    }, {
                        text: 'Menu Item 2'
                    }, {
                        text: 'Menu Item 3'
                    }],
                    bind: {
                        ui: 'raised alt {style} {round ? "round" : ""}',
                        iconCls: '{icon}',
                        disabled: '{disabled}'
                    }
                },
                layout: {
                    type: 'hbox',
                    align: 'middle',
                    pack: 'space-around'
                },
                items: [{
                    margin: '0 10 0 20',
                    height: '${smallHeight}',
                    bind: {
                        text: '{smallText}'
                    },
                    style: {
                        fontSize: '${smallFontSize}',
                        lineHeight: '${lineHeight}'
                    }
                }, {
                    height: '${mediumHeight}',
                    bind: {
                        text: '{mediumText}'
                    },
                    style: {
                        fontSize: '${mediumFontSize}',
                        lineHeight: '${mediumLineHeight}'
                    }
                }, {
                    margin: '0 20 0 10',
                    height: '${largeHeight}',
                    bind: {
                        text: '{largeText}'
                    },
                    style: {
                        fontSize: '${largeFontSize}',
                        lineHeight: '${largeLineHeight}'
                    }
                }]
            }]
        }]
    }, {
        xtype: 'toolbar',
        docked: 'top',
        ui: 'transparent',
        padding: '${tbarPadding}',
        layout: {
            type: 'hbox',
            align: 'stretch'
        },
        defaults: {
            margin: '0 10 0 0',
            shadow: '${buttonShadow}',
            ui: 'action'
        },
        items: [{
            text: 'Style',
            menu: {
                bind: {
                    groups: '{buttonStyle}'
                },
                defaults: {
                    xtype: 'menuradioitem',
                    group: 'value'
                },
                items: [{
                    text: 'None',
                    value: '',
                    checked: true
                },
                        {
                            text: 'Action',
                            value: 'action'
                        },
                        {
                            text: 'Decline',
                            value: 'decline'
                        },
                        {
                            text: 'Confirm',
                            value: 'confirm'
                        }
                ]
            }
        }, {
            text: 'Type',
            menu: {
                bind: {
                    groups: '{buttonType}'
                },
                defaults: {
                    xtype: 'menuradioitem',
                    group: 'value'
                },
                items: [{
                    text: 'Text',
                    value: 'text',
                    checked: true
                },
                        {
                            text: 'Icon',
                            value: 'icon'
                        },
                        {
                            text: 'Text & Icon',
                            value: 'text-icon'
                        }
                ]
            }
        }, {
            xtype: 'component',
            shadow: false,
            flex: 1
        }, {
            xtype: 'togglefield',
            bind: '{round}',
            boxLabel: 'Round',
            cls: '${toggleCls}',
            margin: '0 20 0 0',
            padding: '0 10'
        }, {
            xtype: 'togglefield',
            bind: '{disabled}',
            boxLabel: 'Disabled',
            cls: '${toggleCls}',
            margin: null,
            padding: '0 10'
        }]
    }]
});
