let handler = async (m, { conn }) => {
       //-----PRICE
let ff1 = 'Rp 14.000'
let ff2 = 'Rp 25.000'
let ff3 = 'Rp 31.000'
let ff4 = 'Rp 46.000'
let ff5 = 'Rp 60.000'
let ff6 = 'Rp 65.000'
let ff7 = 'Rp 70.000'
let ff8 = 'Rp 82.000'
let info = `
✨PRICELIST KOUTA AXIS WEST CANNEL✨
*📱1,5GB 30 Hari:* ${ff1}
*📱3GB  30 Hari:* ${ff2}
*📱5GB 30 Hari:*  ${ff3}
*📱8GB 30 Hari:*  ${ff4}
*📱12GB 30 Hari:* ${ff5}
*📱13GB 30 Hari:* ${ff6}
*📱16GB 30 Hari:* ${ff7}
*📱24GB 30 Hari:* ${ff8}

*🎮👑KABUL STORE || READY👑* 
`
const sections = [
   {
          title: `${htjava} List Store ✦-------`,
         rows: [
        {title: "1,5GB KOUTA", rowId: '.order *Top Up:* 1,5GB KOUTA • KOUTA AXIS WEST CANNEL', description: 'PRICE: ' + ff1 + ', KOUTA  AXIS WEST CANNEL' },
	{title: "3GB KOUTA", rowId: '.order *Top Up:* 3GB KOUTA • KOUTA AXIS WEST CANNEL', description: 'PRICE: ' + ff2 + ', KOUTA AXIS WEST CANNEL' },
        {title: "5GB KOUTA", rowId: '.order *Top Up:* 5GB KOUTA • KOUTA AXIS WEST CANNEL', description: 'PRICE: ' + ff3 + ', KOUTA AXIS WEST CANNEL' },
        {title: "8GB KOUTA", rowId: '.order *Top Up:* 8GB KOUTA • KOUTA AXIS WEST CANNEL', description: 'PRICE: ' + ff4 + ',  KOUTA AXIS WEST CANNEL' },
	{title: "12GB KOUTA", rowId: '.order *Top Up:* 12GB KOUTA • KOUTA AXIS WEST CANNEL', description: 'PRICE: ' + ff5 + ',  KOUTA AXIS WEST CANNEL' },
        {title: "13GB KOUTA", rowId: '.order *Top Up:* 13GB KOUTA • KOUTA AXIS WEST CANNEL ', description: 'PRICE: ' + ff6 + ',  KOUTA AXIS WEST CANNEL' },
        {title: "16GB KOUTA", rowId: '.order *Top Up:* 16GB KOUTA • KOUTA AXIS WEST CANNEL', description: 'PRICE: ' + ff7 + ',  KOUTA AXIS WEST CANNEL' },
	{title: "24GB KOUTA", rowId: '.order *Top Up:* 24GB KOUTA • KOUTA AXIS WEST CANNEL', description: 'PRICE: ' + ff8 + ',  KOUTA AXIS WEST CANNEL' },
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
handler.help = ['game17']
handler.command = /^(game17)$/i
export default handler
