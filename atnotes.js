const Telegram = require('node-telegram-bot-api');
const dbot = require('dbot-js');

const token = '1328949633:AAECJHxDRUj30ZTrlTew7lsa43afWx7_8w0';
const atnotes_bot = new Telegram(token, { polling: true });

atnotes_bot.on('message', function (msg) {
    var chatId = msg.chat.id;
    var message = msg.text.toString()

    dbot.get_response(message, function (err, result) {
        if (!err) {
            atnotes_bot.sendMessage(chatId, result)
        }
    })
})