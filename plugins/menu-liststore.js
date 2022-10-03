import moment from 'moment-timezone'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
//-----PRICE
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh}:${wibm}:${wibs} WIB`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00 
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let tag = `@${m.sender.replace(/@.+/, '')}`
  let mentionedJid = [m.sender]
let ucpn = `${ucapan()}`
let name = conn.getName(m.sender)
//sewa
let sh = '5'
let sn = '15'
let ss = '30'
let sp = '35'
let sv = '65'
//premium
let ph = '5'
let pn = '20'
let pp = '40'
let pv = '50'
let ppm = '70'
let wibb = `${wktuwib}`
let info = `
🛒 *KABUL STORE || READY*
Dijamin 100% amanah *#STAYHALAL*
Silahkan pilih list Store dibawah ini `
  /*    {title: "🔖 HEMAT", rowId: '.order *Paket:* HEMAT • Sewa', description: 'PRICE: ' + sh + 'k (1 minggu)' },
	{title: "🔖 NORMAL", rowId: '.order *Paket:* NORMAL • Sewa', description: 'PRICE: ' + sn + 'k (1 bulan)' },
	{title: "🔖 STANDAR", rowId: '.order *Paket:* STANDAR • Sewa', description: 'PRICE: ' + ss + 'k (2 bulan)' },
	{title: "🔖 PRO", rowId: '.order *Paket:* PRO • Sewa', description: 'PRICE: ' + sp + 'k (4 bulan)' },
	{title: "🔖 VIP", rowId: '.order *Paket:* VIP • Sewa', description: 'PRICE: ' + sv + 'k (12 bulan)' },*/
const sections = [{
title: `⟥⟝⟢⟨ 👑KABUL STORE || READY👑 ⟩⟣⟞⟤`,
rows: [
        {title: "💎 • Top Up FREE FIRE", rowId: ".game1i"},
	{title: "💎 • Top Up FREE FIRE", rowId: ".game1"},
        {title: "💎 • Top Up DOMINO QIU QIU", rowId: ".game2"},
        {title: "💎 • Top Up ARENA OF VALOR(AOV)", rowId: ".game3"},
        {title: "💎 • Top Up POKER TEXAS", rowId: ".game4"},
        {title: "💎 • Top Up POINT BLANK ZEPETTO", rowId: ".game5"},
        {title: "💎 • Top Up BIG ZENY RAGNAROK", rowId: ".game6"},
        {title: "💎 • Top Up MOBILE LEGEND", rowId: ".game7"},
        {title: "💎 • Top Up CALL OF DUTY", rowId: ".game8"},
        {title: "💎 • Top Up MOBILE PUBG", rowId: ".game9"},
        {title: "💎 • Top Up CHIP DOMINO", rowId: ".game10"},
        {title: "💎 • Top Up BIG CAT COIN RAGNAROK", rowId: ".game11"},
        {title: "💎 • Top Up CANDY SAUSAGE MAN", rowId: ".game12"},
        {title: "📱 • KOUTA AXIS 3-5 HARI", rowId: ".game13"},
        {title: "📱 • KOUTA AXIS 15 HARI", rowId: ".game14"},       
        {title: "📱 • KOUTA AXIS 7 HARI", rowId: ".game15"},
        {title: "📱 • KOUTA AXIS BRONET 30 HARI", rowId: ".game16"},    
        {title: "📱 • KOUTA AXIS WEST CANNEL", rowId: ".game17"},
	{title: "📱 • KOUTA INDOSAT PURE MINI", rowId: ".game18"},
        {title: "📱 • PULSA INDOSAT ", rowId: ".game19"},
        {title: "📱 • PULSA AXIS", rowId: ".game20"},    
        {title: "📱 • PULSA TRI", rowId: ".game21"},
        {title: "📱 • PULSA TELKOMSEL  ", rowId: ".game22"},
        {title: "💲 •  PAYMENT", rowId: ".game23"},
        {title: "🎮 • FORMAT SEMUA TOP UP GAME  ", rowId: ".game24"},
	{title: "🎮 • FORMAT SEMUA KOUTA  ", rowId: ".game25"},
]},
]

const listMessage = {
  text: info,
  footer:  `Hai kak ${name}\n⌚ : ${wibb}\n📆 : ${week} ${date}`,
  title: '⬒ ───⟢⟨ *Mʏ Lɪsᴛ Sᴛᴏʀᴇ* ⟩⟣─── ⬒',
  buttonText: "Click Here!",
  sections
}

let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
  
  case 'sewabottt': 
  let teks = `*${htki} ${command.toUpperCase()} ${htka}*\n📮 : ${text}\n*- @${m.sender.split`@`[0]}*`
conn.reply(global.nomorown + '@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {
        contextInfo: {
            mentionedJid: [m.sender]
        }
    })
   /* m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')*/
  break
  
  default:
  if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage)
  throw false
  }
   m.reply('☑️ Pesan Telah terkirim ke Owner!\n_*Menunggu confirmasi Dari Owner...*_')
}

handler.help = ['sewa', 'premium']
handler.tags = ['main']
handler.command = /^(list|store|liststore|lit|cek|tokoh)$/i

export default handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Sudah Dini Hari Kok Belum Tidur Kak? 🥱"
  if (time >= 4) {
    res = "Pagi Lord 🌄"
  }
  if (time >= 10) {
    res = "Selamat Siang Kak ☀️"
  }
  if (time >= 15) {
    res = "Selamat Sore Kak 🌇"
  }
  if (time >= 18) {
    res = "Malam Kak 🌙"
  }
  return res
}
