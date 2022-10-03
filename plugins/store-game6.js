let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 11.000'
let ff2 = 'Rp 20.000'
let ff3 = 'Rp 49.000'
let ff4 = 'Rp 97.000'
let info = `
✨PRICELIST BIG ZENY RAGNAROK✨
 40k  🍬${ff1}
 80k  🍬${ff2}
 200k 🍬${ff3}
 400k 🍬${ff4}

> VIA ID
> PROSES 1 - 5 MENIT
Note : Tanyakan stok sebelum order

    🎮KABUL STORE
`
const sections = [
   {
	title: `${htjava} List Store ✦-------`,
	rows: [
	      {title: "Ragnarok Zeny 40k", rowId: '.order *Top Up:* Ragnarok Zeny 40k • BIG ZENY RAGNAROK', description: 'PRICE: ' + ff1 + ', Ragnarok Zeny 40k BIG ZENY RAGNAROK' },
        {title: "Ragnarok Zeny 80k", rowId: '.order *Top Up:* Ragnarok Zeny 80k • BIG ZENY RAGNAROK', description: 'PRICE: ' + ff2 + ', Ragnarok Zeny 80k BIG ZENY RAGNAROK' },
        {title: "Ragnarok Zeny 200k", rowId: '.order *Top Up:* Ragnarok Zeny 200k • BIG ZENY RAGNAROK', description: 'PRICE: ' + ff3 + ', Ragnarok Zeny 200k BIG ZENY RAGNAROK' },
        {title: "Ragnarok Zeny 400k", rowId: '.order *Top Up:* Ragnarok Zeny 400k • BIG ZENY RAGNAROK', description: 'PRICE: ' + ff4 + ', Ragnarok Zeny 400k BIG ZENY RAGNAROK' },
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
handler.help = ['game6']
handler.command = /^(game6)$/i
export default handler
