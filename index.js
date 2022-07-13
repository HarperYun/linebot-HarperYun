import 'dotenv/config'
import linebot from 'linebot'
import goplay from './commands/play.js'
// import test from './commands/test.js'

// data.fetchData()

// schedule.scheduleJob('0 0 * * * ', () => {
//   data.fetchData()
// })

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async event => {
  if (event.message.type === 'text') {
    switch (event.message.text) {
      case '嘉義旅遊':
        event.reply('嘉義很無聊欸你確定?')
        break
      case '確定':
        event.reply('好吧，我已經勸過你了ʅ（´◔౪◔）ʃ')
        break
      case '取消':
        event.reply('OK掰掰(⁰▿⁰)')
        break
      case '使用說明':
        event.reply(
          '使用說明',
          '可輸入"嘉義旅遊"、"確定"、"取消"。',
          '機器人搜尋功能請在關鍵字前面加上"嘉義ㄉ "（包含空格共四個字元）。',
          '例如：嘉義ㄉ 彌陀寺',
          '可搜尋各旅遊景點名稱，獲得簡介、電話、地址等資訊。'
        )
        break
    }
    if (event.message.text.startsWith('嘉義ㄉ ')) {
      goplay(event)
      // test(event)
    }
  }
})

// switch (event.message.text) {
//   case '嘉義旅遊':
//     event.reply('嘉義很無聊欸你確定?')
//     break
//   case '確定':
//     event.reply('好吧，我已經勸過你了ʅ（´◔౪◔）ʃ')
//     break
//   case '取消':
//     event.reply('OK掰掰(⁰▿⁰)')
//     break
// }

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人來了')
})
