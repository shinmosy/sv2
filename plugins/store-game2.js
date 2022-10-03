let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 6.000'
let ff2 = 'Rp 11.000'
let ff3 = 'Rp 20.000'
let ff4 = 'Rp 50.000'
let ff5 = 'Rp 99.000'
let info = `
✨PRICELIST DOMINO QIU QIU✨
286M Koin 🪙 ${ff1}
600M Koin 🪙 ${ff2}
1,3B Koin 🪙 ${ff3}
3,77B Koin 🪙 ${ff4}
7,8B Koin  🪙${ff5}

*>VIA ID*
*> PROSES 1 - 5 MENIT*
*>Note : Tanyakan stok sebelum order*
    
     🎮KABUL STORE
`
const sections = [
   {
	title: `${htjava} List Store ✦-------`,
	rows: [
	      {title: "286M Koin", rowId: '.order *Top Up:* 286M Koin • DOMINO QIU QIU', description: 'PRICE: ' + ff1 + ', 286M Koin DOMINO QIU QIU' },
        {title: "600M Koin", rowId: '.order *Top Up:* 600M Koin • DOMINO QIU QIU', description: 'PRICE: ' + ff2 + ', 600M Koin DOMINO QIU QIU' },
        {title: "1,3B Koin", rowId: '.order *Top Up:* 1,3B Koin • DOMINO QIU QIU', description: 'PRICE: ' + ff3 + ', 1,3B Koin DOMINO QIU QIU' },
        {title: "3,77B Koin", rowId: '.order *Top Up:* 3,77B Koin • DOMINO QIU QIU', description: 'PRICE: ' + ff4 + ', 3,77B Koin DOMINO QIU QIU' },
        {title: "7,8B Koin", rowId: '.order *Top Up:* 7,8B Koin • DOMINO QIU QIU', description: 'PRICE: ' + ff5 + ', 7,8B Koin DOMINO QIU QIU' },
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
handler.help = ['game2']
handler.command = /^(game2)$/i
export default handler
