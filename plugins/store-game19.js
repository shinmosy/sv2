let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 7.000'
let ff2 = 'Rp 12.000'
let ff3 = 'Rp 14.000'
let ff4 = 'Rp 18.000'
let ff5 = 'Rp 22.000'
let ff6 = 'Rp 27.000'
let ff7 = 'Rp 32.000'
let ff8 = 'Rp 42.000'
let ff9 = 'Rp 52.000'
let ff10 = 'Rp 62.000'
let ff11 = 'Rp 72.000'
let ff12 = 'Rp 82.000'
let ff13 = 'Rp 92.000'
let ff14 = 'Rp 102.000'
let ff15 = 'Rp 152.000'
let ff16 = 'Rp 202.000'
let ff17 = 'Rp 582.000'
 let info = `
*✨PRICELIST PULSA INDOSAT✨*
*📱Pulsa   5.000:* ${ff1}
*📱Pulsa  10.000:* ${ff2}
*📱Pulsa  12.000:* ${ff3}
*📱Pulsa  15.000:* ${ff4}
*📱Pulsa  20.000:* ${ff5}
*📱Pulsa  25.000:* ${ff6}
*📱Pulsa  30.000:* ${ff7}
*📱Pulsa  40.000:* ${ff8}
*📱Pulsa  50.000:* ${ff9}
*📱Pulsa  60.000:* ${ff10}
*📱Pulsa  70.000;* ${ff11}
*📱Pulsa  80.000:" ${ff12}
*📱Pulsa  90.000:* ${ff13}
*📱Pulsa 100.000:* ${ff14}
*📱Pulsa 150.000:* ${ff15}
*📱Pulsa 200.000:* ${ff16}
*📱Pulsa 500.000:* ${ff17}

*👑KABUL STORE || READY👑*
`
const sections = [
   {
	title: `${htjava} List Store ✦-------`,
	rows: [
	    {title: "📱5.000 pulsa", rowId: '.order *Top Up:* 5.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff1 + ', PULSA INDOSAT' },
        {title: "📱10.000 pulsa", rowId: '.order *Top Up:* 10.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff2 + ', PULSA INDOSAT' },
        {title: "📱12.000 pulsa", rowId: '.order *Top Up:* 12.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff3 + ', PULSA INDOSAT' },
        {title: "📱 15.000 pulsa", rowId: '.order *Top Up:* 15.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff4 + ', PULSA INDOSAT' },
        {title: "📱 20.000 pulsa", rowId: '.order *Top Up:* 20.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff5 + ', PULSA INDOSAT' },
        {title: "📱 25.000 pulsa ", rowId: '.order *Top Up:* 25.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff6 + ', PULSA INDOSAT' },
        {title: "📱 30.000  pulsa", rowId: '.order *Top Up:* 30.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff7 + ', PULSA INDOSAT' },
        {title: "📱 40.000 pulsa", rowId: '.order *Top Up:* 40.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff8 + ', PULSA INDOSAT' },
        {title: "📱 50.000 pulsa", rowId: '.order *Top Up:* 50.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff9 + ', PULSA INDOSAT' },
        {title: "📱 60.000 pulsa", rowId: '.order *Top Up:* 60.000 pulsa  • PULSA INDOSAT', description: 'PRICE: ' + ff10 + ',PULSA INDOSAT ' },
        {title: "📱 70.000 pulsa", rowId: '.order *Top Up:* 70.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff11 + ', PULSA INDOSAT' },
        {title: "📱 80.000 pulsa", rowId: '.order *Top Up:* 80.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff12 + ', PULSA INDOSAT' },
        {title: "📱90.00 pulsa", rowId: '.order *Top Up:* 90.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff13 + ', PULSA INDOSAT' },
        {title: "📱100.000 pulsa", rowId: '.order *Top Up:* 100.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff14 + ', PULSA INDOSAT' },
        {title: "📱150.000 pulsa", rowId: '.order *Top Up:* 150.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff15 + ', PULSA INDOSAT' },
        {title: "📱 200.000 pulsa", rowId: '.order *Top Up:* 200.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff16 + ', PULSA INDOSAT' },
        {title: "📱 500.000 pulsa", rowId: '.order *Top Up:* 500.000 pulsa • PULSA INDOSAT', description: 'PRICE: ' + ff17 + ', PULSA INDOSAT' },
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
handler.help = ['game19']
handler.command = /^(game19)$/i
export default handler
