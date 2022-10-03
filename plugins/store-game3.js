let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 11.000'
let ff2 = 'Rp 20.000'
let ff3 = 'Rp 49.000'
let ff4 = 'Rp 98.000'
let ff5 = 'Rp 293.000'
let info = `
✨PRICELIST ARENA OF VALOR(AOV)✨
40 AOV GAME     ${ff1}
90 AOV GAME     ${ff2}
230 AOV GAME    ${ff3}
470 AOV GAME    ${ff4}
1430 AOV GAME   ${ff5}

*> VIA ID*
*> PROSES 1 - 5 MENIT*
*Note*
*Tanyakan stok sebelum order*

*🎮KABUL STORE*
`
const sections = [
   {
	title: `${htjava} List Store ✦-------`,
	rows: [
	      {title: "40 AOV GAME", rowId: '.order *Top Up:* 40 AOV GAME • ARENA OF VALOR(AOV)', description: 'PRICE: ' + ff1 + ', 40 AOV GAME ARENA OF VALOR(AOV)' },
        {title: "90 AOV GAME", rowId: '.order *Top Up:* 90 AOV GAME • ARENA OF VALOR(AOV)', description: 'PRICE: ' + ff2 + ', 90 AOV GAME ARENA OF VALOR(AOV)' },
        {title: "230 AOV GAME", rowId: '.order *Top Up:* 230 AOV GAME • ARENA OF VALOR(AOV)', description: 'PRICE: ' + ff3 + ', 230 AOV GAME ARENA OF VALOR(AOV)' },
        {title: "470 AOV GAME", rowId: '.order *Top Up:* 470 AOV GAME • ARENA OF VALOR(AOV)', description: 'PRICE: ' + ff4 + ', 470 AOV GAME ARENA OF VALOR(AOV)' },
        {title: "1430 AOV GAME", rowId: '.order *Top Up:* 1430 AOV GAME • ARENA OF VALOR(AOV)', description: 'PRICE: ' + ff5 + ', 1430 AOV GAME ARENA OF VALOR(AOV)' },
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
handler.help = ['game3']
handler.command = /^(game3)$/i
export default handler
