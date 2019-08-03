var SlackBot = require('slackbots');

// create a bot
var bot = new SlackBot({
    token: 'xoxb-713784051284-714932897088-98LuMQLssZsiMTiO9cwfLWED', // Add a bot https://my.slack.com/services/new/bot and put the token
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
//jsonParser();
    // define existing username instead of 'user_name'
jsonParser();
});
function jsonParser() {

    var string = JSON.stringify();
    var objectValue = JSON.parse(string);
    return objectValue['mm'];
}