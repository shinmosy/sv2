let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 2.000'
let ff2 = 'Rp 4.000'
let ff3 = 'Rp 5.000'
let ff4 = 'Rp 6.000'
let ff5 = 'Rp 7.000'
let ff6 = 'Rp 12.000'
let ff7 = 'Rp 18.000'
let ff8 = 'Rp 22.000'
let ff9 = 'Rp 27.000'
let ff10 = 'Rp 32.000'
let ff11 = 'Rp 42.000'
let ff12 = 'Rp 52.000'
let ff13 = 'Rp 77.000'
let ff14 = 'Rp 102.000'
let ff15 = 'Rp 152.000'
let ff16 = 'Rp 202.000'
 let info = `
*✨PRICELIST PULSA TRI✨*
*📱1.000:*  ${ff1}
*📱2.000:*  ${ff2}
*📱3.000:*  ${ff3}
*📱4.000:*  ${ff4}
*📱5.000:*  ${ff5}
*📱10.000:* ${ff6}
*📱15.000:* ${ff7}
*📱20.000:* ${ff8}
*📱25.000:* ${ff9}
*📱30.000:* ${ff10}
*📱40.000:* ${ff11}
*📱50.000:* ${ff12}
*📱75.000:* ${ff13}
*📱100.000:* ${ff14}
*📱150.000:* ${ff15}
*📱200.000:* ${ff16}

*👑KABUL STORE || READY👑*
`
const sections = [
   {
	title: `${htjava} List Store ✦-------`,
	rows: [
	    {title: "📱1.000 pulsa", rowId: '.order *Top Up:* 1.000 pulsa • PULSA TRI', description: 'PRICE: ' + ff1 + ', PULSA TRI' },
        {title: "📱2.000 pulsa", rowId: '.order *Top Up:* 2.000 pulsa • PULSA TRI', description: 'PRICE: ' + ff2 + ', PULSA TRI' },
        {title: "📱3.000 pulsa", rowId: '.order *Top Up:* 3.000 pulsa • PULSA TRI', description: 'PRICE: ' + ff3 + ', PULSA TRI' },
        {title: "📱 4.000 pulsa", rowId: '.order *Top Up:* 4.000 pulsa • PULSA TRI', description: 'PRICE: ' + ff4 + ', PULSA TRI' },
        {title: "📱 5.000 pulsa", rowId: '.order *Top Up:* 5.000 pulsa • PULSA TRI', description: 'PRICE: ' + ff5 + ', PULSA TRI' },
        {title: "📱 10.000 pulsa ", rowId: '.order *Top Up:* 10.000 pulsa • PULSA TRI', description: 'PRICE: ' + ff6 + ', PULSA TRI' },
        {title: "📱 15.000  pulsa", rowId: '.order *Top Up:* 15.000 pulsa • PULSA TRI', description: 'PRICE: ' + ff7 + ', PULSA TRI' },
        {title: "📱 20.000 pulsa", rowId: '.order *Top Up:* 20.000 pulsa • PULSA TRI', description: 'PRICE: ' + ff8 + ', PULSA TRI' },
        {title: "📱 25.000 pulsa", rowId: '.order *Top Up:* 25.000 pulsa • PULSA TRI', description: 'PRICE: ' + ff9 + ', PULSA TRI' },
        {title: "📱 30.000 pulsa", rowId: '.order *Top Up:* 30.000 pulsa  • PULSA TRI', description: 'PRICE: ' + ff10 + ', PULSA TRI ' },
        {title: "📱 40.000 pulsa", rowId: '.order *Top Up:* 40.000 pulsa • PULSA TRI', description: 'PRICE: ' + ff11 + ', PULSA TRI' },
        {title: "📱 50.000 pulsa", rowId: '.order *Top Up:* 50.000 pulsa • PULSA TRI', description: 'PRICE: ' + ff12 + ', PULSA TRI' },
        {title: "📱75.00 pulsa", rowId: '.order *Top Up:* 75.000 pulsa • PULSA TRI', description: 'PRICE: ' + ff13 + ', PULSA TRI' },
        {title: "📱100.000 pulsa", rowId: '.order *Top Up:* 100.000 pulsa • PULSA TRI', description: 'PRICE: ' + ff14 + ', PULSA TRI' },
        {title: "📱150.000 pulsa", rowId: '.order *Top Up:* 150.000 pulsa • PULSA TRI', description: 'PRICE: ' + ff15 + ', PULSA TRI' },
        {title: "📱 200.000 pulsa", rowId: '.order *Top Up:* 200.000 pulsa • PULSA TRI', description: 'PRICE: ' + ff16 + ', PULSA TRI' },
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
handler.help = ['game21']
handler.command = /^(game21)$/i
export default handler
