let handler = async (m, { conn }) => {
            //-----PRICE
let ff1 = 'Rp 896'
let ff2 = 'Rp 6.000'
let ff3 = 'Rp 18.000'
let ff4 = 'Rp 35.000'
let ff5 = 'Rp 66.000'
let info = `
✨PRICELIST CHIP DOMINO ✨
1M    🪙${ff1}
60M   🪙${ff2}	 
200M  🪙${ff3}
400M  🪙${ff4} 
1B    🪙${ff5}
 
*>VIA ID*
*>PROSES 1 - 5 MENIT* 
*>TANYAKAN STOCK SEBELUM ORDER*
  `
const sections = [
     {
          title: `${htjava} List Store ✦-------`,
          rows: [
               	{title: "1M Koin", rowId: '.order *Top Up:* 1M Koin • DOMINO QIU QIU', description: 'PRICE: ' + ff1 + ', 1M Koin DOMINO QIU QIU' },
                {title: "60M Koin", rowId: '.order *Top Up:* 60M Koin • DOMINO QIU QIU', description: 'PRICE: ' + ff2 + ', 60M Koin DOMINO QIU QIU' },
                {title: "200M Koin", rowId: '.order *Top Up:* 200M Koin • DOMINO QIU QIU', description: 'PRICE: ' + ff3 + ', 200M Koin DOMINO QIU QIU' },
                {title: "400M Koin", rowId: '.order *Top Up:* 400M Koin • DOMINO QIU QIU', description: 'PRICE: ' + ff4 + ', 400M Koin DOMINO QIU QIU' },
                {title: "1B Koin", rowId: '.order *Top Up:* 1B Koin • DOMINO QIU QIU', description: 'PRICE: ' + ff5 + ', 1B Koin DOMINO QIU QIU' }, 
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
handler.help = ['game10']
handler.command = /^(game10)$/i
export default handler
