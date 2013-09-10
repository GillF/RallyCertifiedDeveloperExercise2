Ext.define('CustomApp', {
    extend:'Rally.app.App',
    componentCls:'app',
    items:{
        html:''
    },

    launch:function () {
        this.add({
            xtype:"rallycardboard",
            cardConfig:{
                xtype:"customcard"
            },
            columns:[
                {
                    xtype:'rallycardboardcolumn',
                    value:'Defined'
                },
                {
                    xtype:'rallycardboardcolumn',
                    value:'Completed'
                }
            ]
        });
    }
});
