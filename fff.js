// Импорт dotenv для защиты API токена
require('dotenv').config()
// Импорт нашего модуля с константами
const my_const = require('./const')
// Инициализация бота с помощью Telegraf
const bot = new Telegraf(process.env.BOT_TOKEN)
