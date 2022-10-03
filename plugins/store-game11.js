let handler = async (m, { conn }) => {
        //-----PRICE
let ff1 = 'Rp 10.000'
let ff2 = 'Rp 22.000'
let ff3 = 'Rp 49.000'
let ff4 = 'Rp 97.000'
let ff5 = 'Rp 192.000'
let info = `
✨PRICELIST BIG CAT COIN RAGNAROK✨
4 🪙${ff1}  
9 🪙${ff2}
20🪙${ff3}
40🪙${ff4}
80🪙${ff5}

*>VIA ID*
*>PROSES 1 - 5 MENIT*
*>TANYAKAN STOCK SEBELUM ORDER* 
      *🎮KABUL STORE* `
const sections = [
   {
        title: `${htjava} List Store ✦-------`,
        rows: [
	{title: "4 CAT COIN", rowId: '.order *Top Up:* 4 CAT COIN • BIG CAT COIN RAGNAROK', description: 'PRICE: ' + ff1 + ', 4 CAT COIN BIG CAT COIN RAGNAROK' },
	{title: "9 CAT COIN", rowId: '.order *Top Up:* 9 CAT COIN • BIG CAT COIN RAGNAROK', description: 'PRICE: ' + ff2 + ', 9 CAT COIN BIG CAT COIN RAGNAROK' },
        {title: "20 CAT COIN", rowId: '.order *Top Up:* 20 CAT COIN • BIG CAT COIN RAGNAROK', description: 'PRICE: ' + ff3 + ', 20 CAT COIN BIG CAT COIN RAGNAROK' },
        {title: "40 CAT COIN", rowId: '.order *Top Up:* 40 CAT COIN • BIG CAT COIN RAGNAROK', description: 'PRICE: ' + ff4 + ', 40 CAT COIN BIG CAT COIN RAGNAROK' },
        {title: "80 CAT COIN", rowId: '.order *Top Up:* 80 CAT COIN • BIG CAT COIN RAGNAROK', description: 'PRICE: ' + ff5 + ', 80 CAT COIN BIG CAT COIN RAGNAROK' }, 
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
handler.help = ['game11']
handler.command = /^(game11)$/i
export default handler
