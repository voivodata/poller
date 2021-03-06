Ext.define('KitchenSink.view.calendar.Validation', {
    extend: 'Ext.Panel',
    xtype: 'calendar-validation',
    controller: 'calendar-validation',

    requires: [
        'KitchenSink.view.calendar.ValidationController',
        'KitchenSink.data.calendar.Validation',
        'Ext.calendar.panel.Days'
    ],

    //<example>
    otherContent: [{
        type: 'Controller',
        path: 'modern/src/view/calendar/ValidationController.js'
    }, {
        type: 'Store',
        path: 'samples/data/calendar/Validation.js'
    }],
    //</example>

    viewModel: {
        data: {
            value: new Date()
        },
        stores: {
            calStore: {
                type: 'calendar-calendars',
                autoLoad: true,
                eventStoreDefaults: {
                    prefetchMode: 'day'
                },
                proxy: {
                    type: 'ajax',
                    url: '/KitchenSink/CalendarValidation'
                }
            }
        }
    },

    layout: 'fit',

    items: [{
        xtype: 'calendar-days',
        startTime: 8,
        endTime: 18,
        visibleDays: 2,
        gestureNavigation: false,
        bind: {
            store: '{calStore}',
            value: '{value}'
        },
        listeners: {
            beforeeventdragstart: 'onBeforeDragStart',
            beforeeventresizestart: 'onBeforeResizeStart',
            validateeventdrop: 'confirmAction',
            validateeventresize: 'confirmAction',
            validateeventerase: 'confirmAction'
        }
    }]

});
