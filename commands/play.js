import axios from 'axios'

export default async (event) => {
  await axios.get('https://www.iyochiayi.com/api/v1/travels?lang=zh-TW').then((resp) => {
    // console.log(resp)
    const ddata = resp.data.data
    const idx = ddata.findIndex(item => item.Name === event.message.text.slice(4))
    if (idx > -1) {
      event.reply([
        {
          type: 'text', text: ddata[idx].Name + '\n電話: ' + ddata[idx].Tel + '\n簡介: ' + ddata[idx].Desc
        },
        {
          type: 'location',
          title: ddata[idx].Name,
          address: ddata[idx].Add,
          latitude: ddata[idx].Lat,
          longitude: ddata[idx].Lng
        }
      ]) // 最多回傳五項
    } else {
      event.reply('查無資料')
    }
  }).catch(error => {
    console.log(error)
    event.reply('未知錯誤')
  })
}
