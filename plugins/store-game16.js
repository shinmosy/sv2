let handler = async (m, { conn }) => {
       //-----PRICE
let ff1 = 'Rp 6.000'
let ff2 = 'Rp 10.000'
let ff3 = 'Rp 14.000'
let ff4 = 'Rp 19.000'
let ff5 = 'Rp 23.000'
let ff6 = 'Rp 30.000'
let ff7 = 'Rp 43.000'
let ff8 = 'Rp 57.000'
let ff9 = 'Rp 65.000'
let ff10 = 'Rp 69.000'
let ff11 = 'Rp 79.000'
let info = `
✨PRICELIST KOUTA AXIS BRONET 30 HARI✨
*📱500MB 30 hari:* ${ff1}
*📱1GB   30 Hari:* ${ff2}
*📱1,5GB 30 Hari:* ${ff3}
*📱2GB   30 Hari:* ${ff4}
*📱3GB   30 Hari:* ${ff5}
*📱5GB   30 Hari:* ${ff6}
*📱8GB   30 Hari:* ${ff7}
*📱12GB  30 Hari:* ${ff8}
*📱15GB  30 Hari:* ${ff9}
*📱19,5GB 30 Hari:* ${ff10}
*📱24GB  30 Hari:* ${ff11}

*👑KABUL STORE || READY👑* `
const sections = [
   {
          title: `${htjava} List Store ✦-------`,
         rows: [
        {title: "500MB KOUTA", rowId: '.order *Top Up:* 500MB KOUTA • KOUTA AXIS BRONET 30 HARI', description: 'PRICE: ' + ff1 + ',  KOUTA AXIS BRONET 30 HARI' },
	{title: "1GB KOUTA", rowId: '.order *Top Up:* 1GB KOUTA • KOUTA AXIS BRONET 30 HARI',description: 'PRICE: ' + ff2 + ', KOUTA AXIS BRONET 30 HARI' },
        {title: "1,5GB KOUTA", rowId: '.order *Top Up:* 1,5GB KOUTA • KOUTA AXIS BRONET 30 HARI', description: 'PRICE: ' + ff3 + ',KOUTA AXIS BRONET 30 HARI' },
        {title: "2GB KOUTA", rowId: '.order *Top Up:* 2GB KOUTA • KOUTA AXIS BRONET 30 HARI', description: 'PRICE: ' + ff4 + ', KOUTA AXIS BRONET 30 HARI' },
	{title: "3GB KOUTA", rowId: '.order *Top Up:* 3GB KOUTA • KOUTA AXIS BRONET 30 HARI', description: 'PRICE: ' + ff5 + ', KOUTA AXIS BRONET 30 HARI' },
        {title: "5GB KOUTA", rowId: '.order *Top Up:* 5GB KOUTA • KOUTA AXIS BRONET 30 HARI', description: 'PRICE: ' + ff6 + ', KOUTA AXIS BRONET 30 HARI' },
        {title: "8GB KOUTA", rowId: '.order *Top Up:* 8GB KOUTA • KOUTA AXIS BRONET 30 HARI', description: 'PRICE: ' + ff7 + ', KOUTA AXIS BRONET 30 HARI' },
	{title: "12GB KOUTA", rowId: '.order *Top Up:* 12GB KOUTA • KOUTA AXIS BRONET 30 HARI', description: 'PRICE: ' + ff8 + ', KOUTA AXIS BRONET 30 HARI' },
        {title: "15GB KOUTA", rowId: '.order *Top Up:* 15GB KOUTA • KOUTA AXIS BRONET 30 HARI', description: 'PRICE: ' + ff9 + ', KOUTA AXIS BRONET 30 HARI' },
        {title: "19,5GB KOUTA", rowId: '.order *Top Up:* 19,5GB KOUTA • KOUTA AXIS BRONET 30 HARI', description: 'PRICE: ' + ff10 + ', KOUTA AXIS BRONET 30 HARI' },
	{title: "24GB KOUTA", rowId: '.order *Top Up:* 24GB KOUTA • KOUTA AXIS BRONET 30 HARI', description: 'PRICE: ' + ff11 + ', KOUTA AXIS BRONET 30 HARI' },
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
handler.help = ['game16']
handler.command = /^(game16)$/i
export default handler
