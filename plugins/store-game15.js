let handler = async (m, { conn }) => {
          //-----PRICE
let ff1 = 'Rp 16.000'
let ff2 = 'Rp 19.000'
let ff3 = 'Rp 21.000'
let ff4 = 'Rp 33.000'
let info = `
✨PRICELIST KOUTA AXIS 7 hari ✨
*📱2,5GB  7 Hari* ${ff1}
*📱3GB.   7 Hari* ${ff2}
*📱4,5GB  7 Hari* ${ff3}
*📱10GB   7 Hari* ${ff4}
   *🎮KABUL STORE* `
 const sections = [
    {
     title: `${htjava} List Store ✦-------`,
     rows: [
  {title: "2,5GB Kouta", rowId: '.order *Top Up:* 1,5GB Kouta • KOUTA AXIS 7 hari', description: 'PRICE: ' + ff1 + ', 1GB Kouta KOUTA AXIS 7 hari' },
  {title: "3GB Kouta", rowId: '.order *Top Up:* 3GB Kouta • KOUTA AXIS 7 hari', description: 'PRICE: ' + ff2 + ', 3GB Kouta KOUTA AXIS 7 hari' },
  {title: "4,5GB, Kouta", rowId: '.order *Top Up:* 4,5GB Kouta • KOUTA AXIS 7 hari', description: 'PRICE: ' + ff3 + ', 4,5GB Kouta KOUTA AXIS 7 hari' },
  {title: "10GB Kouta", rowId: '.order *Top Up:* 10GB Kouta • KOUTA AXIS 7 hari', description: 'PRICE: ' + ff4 + ', 10GB Kouta KOUTA AXIS 7 hari' },
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
handler.help = ['game15']
handler.command = /^(game15)$/i
export default handler
