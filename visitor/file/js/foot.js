restModule('newsletter', '', '', '', function (data) {
    console.error(data);
    AddMessage(data.message.error);
}, function (data) {
    console.table(data);
    AddMessage(data.message.info);
});