let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 11.000'
let ff2 = 'Rp 20.000'
let ff3 = 'Rp 50.000'
let ff4 = 'Rp 98.000'
let ff5 = 'Rp 293.000'
let info = `
✨PRICELIST POINT BLANK ZEPETTO✨
1200 PB Cash  ${ff1}
2400 PB Cash  ${ff2}
6000 PB Cash  ${ff3}
12000 PB Cash ${ff4}
36000 PB Cash ${ff5}

*> VIA ID*
*> PROSES 1 - 5 MENIT*
*Note*
*Tanyakan stok sebelum order*

🎮KABUL STORE
`
const sections = [
   {
	title: `${htjava} List Store ✦-------`,
	rows: [
	      {title: "1200 PB Cash", rowId: '.order *Top Up:* 1200 PB Cash • POINT BLANK ZEPETTO', description: 'PRICE: ' + ff1 + ', 1200 PB Cash POINT BLANK ZEPETTO' },
        {title: "2400 PB Cash", rowId: '.order *Top Up:* 2400 PB Cash • POINT BLANK ZEPETTO', description: 'PRICE: ' + ff2 + ', 2400 PB Cash POINT BLANK ZEPETTO' },
        {title: "6000 PB Cash", rowId: '.order *Top Up:* 6000 PB Cash • POINT BLANK ZEPETTO', description: 'PRICE: ' + ff3 + ', 6000 PB Cash POINT BLANK ZEPETTO' },
        {title: "12000 PB Cash", rowId: '.order *Top Up:* 12000 PB Cash • POINT BLANK ZEPETTO', description: 'PRICE: ' + ff4 + ', 12000 PB Cash POINT BLANK ZEPETTO' },
        {title: "36000 PB Cash", rowId: '.order *Top Up:* 36000 PB Cash • POINT BLANK ZEPETTO', description: 'PRICE: ' + ff5 + ', 36000 PB Cash POINT BLANK ZEPETTO' },
        ]
    },
]
const listMessage = {
  text: info,
  footer: botdate,
  mentions: await conn.parseMention(info),
  title: wm,
  buttonText: "Click Here!",
  sections
}
await conn.sendMessage(m.chat, listMessage, { quoted: m, mentions: await conn.parseMention(info), contextInfo:{ forwardingScore: 99999, isForwarded: true }})
//conn.sendHydrated(m.chat, info, wm, null, sgc, "🌎 Group Official", null,null, [['Owner','.owner']], m)
}
handler.help = ['game5']
handler.command = /^(game5)$/i
export default handler
