let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 6.000'
let ff2 = 'Rp 10.000'
let ff3 = 'Rp 20.000'
let ff4 = 'Rp 50.000'
let ff5 = 'Rp 98.000'
let ff6 = 'Rp 196.000'
let info = `
✨PRICELIST CALL OF DUTY✨
26+5 CP     ${ff1}
53+9 CP     ${ff2}
106+21 CP   ${ff3}
264+53 CP   ${ff4}
528+106 CP  ${ff5}
1056+317 CP ${ff6}

> VIA ID
> PROSES 1 - 5 MENIT
> Note : Tanyakan stok sebelum order
     
  *🎮KABUL STORE*
`
const sections = [
   {
	title: `${htjava} List Store ✦-------`,
	rows: [
	      {title: "26+5 CP", rowId: '.order *Top Up:* 26+5 CP • CALL OF DUTY', description: 'PRICE: ' + ff1 + ', 26+5 CP CALL OF DUTY' },
        {title: "53+9 CP", rowId: '.order *Top Up:* 53+9 CP • CALL OF DUTY', description: 'PRICE: ' + ff2 + ', 53+9 CP CALL OF DUTY' },
        {title: "106+21 CP", rowId: '.order *Top Up:* 106+21 CP • CALL OF DUTY', description: 'PRICE: ' + ff3 + ', 106+21 CP CALL OF DUTY' },
        {title: "264+53 CP", rowId: '.order *Top Up:* 264+53 CP • CALL OF DUTY', description: 'PRICE: ' + ff4 + ', 264+53 CP CALL OF DUTY' },
        {title: "528+106 CP", rowId: '.order *Top Up:* 528+106 CP • CALL OF DUTY', description: 'PRICE: ' + ff5 + ', 528+106 CP CALL OF DUTY' },
        {title: "1056+317 CP", rowId: '.order *Top Up:* 1056+317 CP • CALL OF DUTY', description: 'PRICE: ' + ff6 + ', 1056+317 CP CALL OF DUTY' },
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
handler.help = ['game8']
handler.command = /^(game8)$/i
export default handler
