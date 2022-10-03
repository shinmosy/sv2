let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 3.000'
let ff2 = 'Rp 4.000'
let ff3 = 'Rp 5.000'
let ff4 = 'Rp 6.000'
let ff5 = 'Rp 7.000'
let ff6 = 'Rp 8.000'
let ff7 = 'Rp 12.000'
let ff8 = 'Rp 18.000'
let ff9 = 'Rp 22.000'
let ff10 ='Rp 27.000'
let ff11 ='Rp 32.000'
let ff12 ='Rp 37.000'
let ff13 ='Rp 42.000'
let ff14 ='Rp 47.000'
let ff15 ='Rp 52.000'
let ff16 ='Rp 57.000'
let ff17 ='Rp 62.000'
let ff18 ='Rp 67.000'
let ff19 ='Rp 72.000'
let ff20 ='Rp 77.000'
let ff21= 'Rp 82.000'
let ff22 ='Rp 87.000'
let ff23 ='Rp 92.000'
let ff24 ='Rp 97.000'
let ff25 ='Rp 102.000'
let ff26 ='Rp 152.000'
let ff27 ='Rp 202.000'
let ff28 ='Rp 502.000'
let info = `
*✨PRICELIST PULSA TELKOMSEL✨*
*📱1.000:* ${ff1}
*📱2.000:* ${ff2}
*📱3.000:* ${ff3}
*📱4.000:* ${ff4}
*📱5.000:* ${ff5}
*📱6.000:* ${ff6}
*📱10.000:* ${ff7}
*📱15.000:* ${ff8}
*📱20.000:* ${ff9}
*📱25.000:* ${ff10}
*📱30.000:* ${ff11}
*📱35.000:* ${ff12}
*📱40.000:* ${ff13}
*📱45.000:* ${ff14}
*📱50.000:* ${ff15}
*📱55.000:* ${ff16}
*📱60.000:* ${ff17}
*📱65.000:* ${ff18}
*📱70.000:* ${ff19}
*📱75.000:* ${ff20}
*📱80.000:* ${ff21}
*📱85.000:* ${ff22}
*📱90.000:* ${ff23}
*📱95.000:* ${ff24}
*📱100.000:* ${ff25}
*📱150.000:* ${ff26}
*📱200.000:* ${ff27}
*📱500.000:* ${ff28}

*👑KABUL STORE || READY👑*
`
const sections = [
   {
	title: `${htjava} List Store ✦-------`,
	rows: [
	      {title: "📱1.000 pulsa", rowId: '.order *Top Up:* 1.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff1 + ', PULSA TELKOMSEL' },
              {title: "📱2.000 pulsa", rowId: '.order *Top Up:* 2.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff2 + ', PULSA TELKOMSEL' },
              {title: "📱3.000 pulsa", rowId: '.order *Top Up:* 3.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff3 + ', PULSA TELKOMSEL' },
              {title: "📱 4.000 pulsa", rowId: '.order *Top Up:* 4.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff4 + ', PULSA TELKOMSEL' },
              {title: "📱 5.000 pulsa", rowId: '.order *Top Up:* 5.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff5 + ', PULSA TELKOMSEL' },
              {title: "📱 6.000 pulsa ", rowId: '.order *Top Up:* 6.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff6 + ', PULSA TELKOMSEL' },
              {title: "📱 10.000 pulsa ", rowId: '.order *Top Up:* 10.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff7 + ', PULSA TELKOMSEL' },
              {title: "📱 15.000  pulsa", rowId: '.order *Top Up:* 15.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff8 + ', PULSA TELKOMSEL' },
              {title: "📱 20.000 pulsa", rowId: '.order *Top Up:* 20.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff9 + ', PULSA TELKOMSEL' },
              {title: "📱 25.000 pulsa", rowId: '.order *Top Up:* 25.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff10 + ', TELKOMSEL' },
              {title: "📱 30.000 pulsa", rowId: '.order *Top Up:* 30.000 pulsa  • PULSA TELKOMSEL', description: 'PRICE: ' + ff11 + ', PULSA TELKOMSEL ' },
              {title: "📱 35.000 pulsa", rowId: '.order *Top Up:* 35.000 pulsa  • PULSA TELKOMSEL', description: 'PRICE: ' + ff12 + ', PULSA TELKOMSEL ' },
              {title: "📱 40.000 pulsa", rowId: '.order *Top Up:* 40.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff13 + ', PULSA TELKOMSEL' },
              {title: "📱 45.000 pulsa", rowId: '.order *Top Up:* 45.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff14 + ', PULSA TELKOMSEL' },
              {title: "📱 50.000 pulsa", rowId: '.order *Top Up:* 50.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff15 + ', PULSA TELKOMSEL' },
              {title: "📱 55.000 pulsa", rowId: '.order *Top Up:* 55.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff16 + ', PULSA TELKOMSEL' },
              {title: "📱60.00 pulsa", rowId: '.order *Top Up:* 60.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff17 + ', PULSA TELKOMSEL' },
              {title: "📱65.00 pulsa", rowId: '.order *Top Up:* 65.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff18 + ', PULSA TELKOMSEL' },
              {title: "📱70.00 pulsa", rowId: '.order *Top Up:* 70.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff19 + ', PULSA TELKOMSEL' },
              {title: "📱75.000 pulsa", rowId: '.order *Top Up:* 75.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff20 + ', PULSA TELKOMSEL' },
              {title: "📱80.000 pulsa", rowId: '.order *Top Up:* 80.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff21 + ', PULSA TELKOMSEL' },
              {title: "📱85.000 pulsa", rowId: '.order *Top Up:* 85.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff22 + ', PULSA TELKOMSEL' },
              {title: "📱90.000 pulsa", rowId: '.order *Top Up:* 90.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff23 + ', PULSA TELKOMSEL' },
              {title: "📱95.00 pulsa", rowId: '.order *Top Up:* 95.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff24 + ', PULSA TELKOMSEL' },
              {title: "📱100.000 pulsa", rowId: '.order *Top Up:* 100.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff25 + ', PULSA TELKOMSEL' },
              {title: "📱150.000 pulsa", rowId: '.order *Top Up:* 150.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff26 + ', PULSA TELKOMSEL' },
              {title: "📱 200.000 pulsa", rowId: '.order *Top Up:* 200.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff27 + ', PULSA TELKOMSEL' },
              {title: "📱500.00 pulsa", rowId: '.order *Top Up:* 500.000 pulsa • PULSA TELKOMSEL', description: 'PRICE: ' + ff28 + ', PULSA TELKOMSEL' },
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
handler.help = ['game22']
handler.command = /^(game22)$/i
export default handler
