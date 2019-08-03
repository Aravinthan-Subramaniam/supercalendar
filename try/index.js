var SlackBot = require('slackbots');

// create a bot
var bot = new SlackBot({
    token: 'xoxb-713784051284-714932897088-NZVWdPFdgnvcR3VrOlvTxUNU', // Add a bot https://my.slack.com/services/new/bot and put the token
    name: 'My Bot'
});

bot.on('start', function() {
    // more information about additional params https://api.slack.com/methods/chat.postMessage
    var params = {
        icon_emoji: ':cat:'
    };


    // define channel, where bot exist. You can adjust it there https://my.slack.com/services
    bot.postMessageToChannel('general', 'meow!', params);
    //bot.postMessageToChannel('general',bot.getUser('arvindhangs'),params);
jsonParser();
    // define existing username instead of 'user_name'

});
function jsonParser() {
    var stri= bot.getUser('arvindhangs');
    console.log(stri);
    console.log("****");
    var string1 = JSON.stringify(stri);
    console.log(string1);
    console.log('----');
    var objectValue = JSON.parse(string1);
    console.log(objectValue);
    return objectValue['email'];
}