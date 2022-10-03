let handler = async (m, { conn }) => {
          //-----PRICE
let ff1 = 'DANA'
let ff2 = 'OVO'
let ff3 = 'QRIS'
let info = `
         ✨PAYMENT✨
*💦DANA : 085212649276*  ${ff1}
*💦OVO  : 081386943282*  ${ff2}
*💦QRIS : (TANYA ADMIN)* ${ff3}

    *👑KABUL STORE || READY👑* `
const sections = [
       {
   	title: `${htjava} list payment ✦-------`,
     rows: [    
     {title: "payment dana", rowId: '.order *Top Up:* payment dana • DANA', description: 'PRICE: ' + ff1 + ', payment dana' },
     {title: "payment ovo", rowId: '.order *Top Up:* payment ovo •  OVO', description: 'PRICE: ' + ff2 + ', payment ovo' },
     {title: "payment qris", rowId: '.order *Top Up:* payment qris • QRIS', description: 'PRICE: ' + ff3 + ', paymet qris' },
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
handler.help = ['game23']
handler.command = /^(game23)$/i
export default handler
