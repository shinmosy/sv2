let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 6.000'
let ff2 = 'Rp 11.000'
let ff3 = 'Rp 20.000'
let ff4 = 'Rp 50.000'
let ff5 = 'Rp 99.000'
let info = `
✨PRICELIST POKER TEXAS✨
22M Koin  🪙${ff1}
45M Koin  🪙${ff2}
100M Koin 🪙${ff3}
300M Koin 🪙${ff4}
700M Koin 🪙${ff5}

> VIA ID
> PROSES 1 - 5 MENIT
Note : Tanyakan stok sebelum order

     🎮KABUL STORE
`
const sections = [
   {
	title: `${htjava} List Store ✦-------`,
	rows: [
	      {title: "22M Koin", rowId: '.order *Top Up:* 22M Koin • POKER TEXAS', description: 'PRICE: ' + ff1 + ', 22M Koin POKER TEXAS' },
        {title: "45M Koin", rowId: '.order *Top Up:* 45M Koin • POKER TEXAS', description: 'PRICE: ' + ff2 + ', 45M Koin POKER TEXAS' },
        {title: "100M Koin", rowId: '.order *Top Up:* 100M Koin • POKER TEXAS', description: 'PRICE: ' + ff3 + ', 100M Koin POKER TEXAS' },
        {title: "300M Koin", rowId: '.order *Top Up:* 300M Koin • POKER TEXAS', description: 'PRICE: ' + ff4 + ', 300M Koin POKER TEXAS' },
        {title: "700M Koin", rowId: '.order *Top Up:* 700M Koin • POKER TEXAS', description: 'PRICE: ' + ff5 + ', 700M Koin POKER TEXAS' },
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
handler.help = ['game4']
handler.command = /^(game4)$/i
export default handler
