let handler = async (m, { conn }) => {
       //-----PRICE
let ff1 = 'Rp 20.000'
let ff2 = 'Rp 32.000'
let ff3 = 'Rp 52.000'
let info = `
✨PRICELIST KOUTA AXIS 15 HARI✨
┏━━❏
┃AXIS 15 HARI
┗━━━━━━━━━━━━❏
*📱3,5GB 15 Hari:* ${ff1}
*📱7GB  15 Hari:*  ${ff2}
*📱20GB 15 Hari:* ${ff3}

*👑KABUL STORE || READY👑* `
const sections = [{
title: `${htjava} List Store ✦-------`,
rows: [{
title: "3,5GB KOUTA", 
rowId: '.order *Top Up:* 3,5GB KOUTA • KOUTA AXIS 15 HARI', 
description: 'PRICE: ' + ff1 + ', 3,5GB KOUTA KOUTA AXIS 15 HARI' 
}, {
title: "7GB KOUTA", 
rowId: '.order *Top Up:* 7GB KOUTA • KOUTA AXIS 15 HARI', description: 'PRICE: ' + ff2 + ', 7GB KOUTA KOUTA AXIS 15 HARI' 
}, {
title: "20GB KOUTA",
rowId: '.order *Top Up:* 20GB KOUTA • KOUTA AXIS 15 HARI', 
description: 'PRICE: ' + ff3 + ', 20GB KOUTA KOUTA AXIS 15 HARI' },
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
handler.help = ['game14']
handler.command = /^(game14)$/i
export default handler
