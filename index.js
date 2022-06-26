import 'dotenv/config'
import linebot from 'linebot'
import goplay from './commands/play.js'
// import test from './commands/test.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', async event => {
  if (event.message.type === 'text') {
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
// }

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('機器人來了')
})
