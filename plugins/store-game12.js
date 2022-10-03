let handler = async (m, { conn }) => {
       //-----PRICE
let ff1 = 'Rp 14.000'
let ff2 = 'Rp 43.000'
let ff3 = 'Rp 70.000'
let ff4 = 'Rp 135.000'
let ff5 = 'Rp 270.000'
let ff6 = 'Rp 406.000'
let info = `
✨PRICELIST CANDY SAUSAGE MAN ✨
*60*   🍬${ff1}
*180*   🍬${ff2}
*300+16* 🍬${ff3}
*680+38*  🍬${ff4}
*1280+88*  🍬${ff5}
*1980+138*  🍬${ff6}
  
 *>VIA ID*
*>PROSES 1 - 5 MENIT* 
*>TANYAKAN STOCK SEBELUM ORDER* `
 
const sections = [
   {
          title: `${htjava} List Store ✦-------`,
         rows: [
          {title: "60 Candy", rowId: '.order *Top Up:* 60 Candy • CANDY SAUSAGE MAN', description: 'PRICE: ' + ff1 + ', 60 Candy CANDY SAUSAGE MAN' },
	{title: "180 Candy", rowId: '.order *Top Up:* 180 Candy • CANDY SAUSAGE MAN', description: 'PRICE: ' + ff2 + ', 180 Candy CANDY SAUSAGE MAN' },
{title: "300+16 Candy", rowId: '.order *Top Up:* 300+16 Candy • CANDY SAUSAGE MAN', description: 'PRICE: ' + ff3 + ', 300+16 Candy CANDY SAUSAGE MAN' },
{title: "680+38 Candy", rowId: '.order *Top Up:* 680+38 Candy • CANDY SAUSAGE MAN', description: 'PRICE: ' + ff4 + ', 680+38 Candy CANDY SAUSAGE MAN' },
	{title: "1280+88 Candy", rowId: '.order *Top Up:* 1280+88 Candy • CANDY SAUSAGE MAN', description: 'PRICE: ' + ff5 + ', 1280+88 Candy CANDY SAUSAGE MAN' },
{title: "1980+138 Candy", rowId: '.order *Top Up:* 1980+138 Candy • CANDY SAUSAGE MAN', description: 'PRICE: ' + ff6 + ', 1980+138 Candy CANDY SAUSAGE MAN' },
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
handler.help = ['game12']
handler.command = /^(game12)$/i
export default handler
