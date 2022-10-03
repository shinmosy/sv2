let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 3.000'
let ff2 = 'Rp 5.000'
let ff3 = 'Rp 8.000'
let ff4 = 'Rp 10.000'
let ff5 = 'Rp 15.000'
let ff6 = 'Rp 19.000'
let ff7 = 'Rp 23.000'
let ff8 = 'Rp 30.000'
let ff9 = 'Rp 38.000'
let ff10 = 'Rp 41.000'
let ff11 = 'Rp 46.000'
let ff12 = 'Rp 55.000'
let ff13 = 'Rp 64.000'
let ff14 = 'Rp 70.000'
let ff15 = 'Rp 91.000'
let ff16 = 'Rp 135.000'
let ff17 = 'Rp 140.000'
let ff18 = 'Rp 182.000'
let ff19 = 'Rp 244.000'
let ff20 = 'Rp 272.000'
let ff21 = 'Rp 327.000'
let ff22 = 'Rp 486.000'
let ff23 = 'Rp 87.000'
let ff24 = 'Rp 205.000'
let info = `
✨PRICELIST MOBILE PUBG✨
15   💎Diamond   ${ff1}
25   💎Diamond   ${ff2}
35   💎Diamond   ${ff3}
50   💎Diamond   ${ff4}
70   💎Diamond   ${ff5}
100  💎Diamond   ${ff6}
125  💎Diamond   ${ff7}
150  💎Diamond   ${ff8}
200  💎Diamond   ${ff9}
210  💎Diamond   ${ff10}
250  💎Diamond   ${ff11}
300  💎Diamond   ${ff12}
350  💎Diamond   ${ff13}
375  💎Diamond   ${ff14}
500  💎Diamond   ${ff15}
700  💎Diamond   ${ff16}
750  💎Diamond   ${ff17}
1000 💎Diamond   ${ff18}
1250 💎Diamond   ${ff19}
1500 💎Diamond   ${ff20}
1750 💎Diamond   ${ff21}
2500 💎Diamond   ${ff22}
Royal pass unknown cash ${ff23}
Elite pass plus kupon peti klasik ${ff24}

> VIA ID
> PROSES 1 - 5 MENIT
> Note : Tanyakan stok sebelum order
     *🎮KABUL STORE*
`
const sections = [
   {
	title: `${htjava} List Store ✦-------`,
	rows: [
	      {title: "💎 15 DM", rowId: '.order *Top Up:* 15 DM • MOBILE PUBG', description: 'PRICE: ' + ff1 + ', Diamond MOBILE PUBG' },
        {title: "💎 25 DM", rowId: '.order *Top Up:* 25 DM • MOBILE PUBG', description: 'PRICE: ' + ff2 + ', Diamond MOBILE PUBG' },
        {title: "💎 35 DM", rowId: '.order *Top Up:* 35 DM • MOBILE PUBG', description: 'PRICE: ' + ff3 + ', Diamond MOBILE PUBG' },
        {title: "💎 50 DM", rowId: '.order *Top Up:* 50 DM • MOBILE PUBG', description: 'PRICE: ' + ff4 + ', Diamond MOBILE PUBG' },
        {title: "💎 70 DM", rowId: '.order *Top Up:* 70 DM • MOBILE PUBG', description: 'PRICE: ' + ff5 + ', Diamond MOBILE PUBG' },
        {title: "💎 100 DM", rowId: '.order *Top Up:* 100 DM • MOBILE PUBG', description: 'PRICE: ' + ff6 + ', Diamond MOBILE PUBG' },
        {title: "💎 125 DM", rowId: '.order *Top Up:* 125 DM • MOBILE PUBG', description: 'PRICE: ' + ff7 + ', Diamond MOBILE PUBG' },
        {title: "💎 150 DM", rowId: '.order *Top Up:* 150 DM • MOBILE PUBG', description: 'PRICE: ' + ff8 + ', Diamond MOBILE PUBG' },
        {title: "💎 200 DM", rowId: '.order *Top Up:* 200 DM • MOBILE PUBG', description: 'PRICE: ' + ff9 + ', Diamond MOBILE PUBG' },
        {title: "💎 210 DM", rowId: '.order *Top Up:* 210 DM • MOBILE PUBG', description: 'PRICE: ' + ff10 + ', Diamond MOBILE PUBG' },
        {title: "💎 250 DM", rowId: '.order *Top Up:* 250 DM • MOBILE PUBG', description: 'PRICE: ' + ff11 + ', Diamond MOBILE PUBG' },
        {title: "💎 300 DM", rowId: '.order *Top Up:* 300 DM • MOBILE PUBG', description: 'PRICE: ' + ff12 + ', Diamond MOBILE PUBG' },
        {title: "💎 350 DM", rowId: '.order *Top Up:* 350 DM • MOBILE PUBG', description: 'PRICE: ' + ff13 + ', Diamond MOBILE PUBG' },
        {title: "💎 375 DM", rowId: '.order *Top Up:* 375 DM • MOBILE PUBG', description: 'PRICE: ' + ff14 + ', Diamond MOBILE PUBG' },
        {title: "💎 500 DM", rowId: '.order *Top Up:* 500 DM • MOBILE PUBG', description: 'PRICE: ' + ff15 + ', Diamond MOBILE PUBG' },
        {title: "💎 700 DM", rowId: '.order *Top Up:* 700 DM • MOBILE PUBG', description: 'PRICE: ' + ff16 + ', Diamond MOBILE PUBG' },
        {title: "💎 750 DM", rowId: '.order *Top Up:* 750 DM • MOBILE PUBG', description: 'PRICE: ' + ff17 + ', Diamond MOBILE PUBG' },
        {title: "💎 1000 DM", rowId: '.order *Top Up:* 1000 DM • MOBILE PUBG', description: 'PRICE: ' + ff18 + ', Diamond MOBILE PUBG' },
        {title: "💎 1250 DM", rowId: '.order *Top Up:* 1250 DM • MOBILE PUBG', description: 'PRICE: ' + ff19 + ', Diamond MOBILE PUBG' },
        {title: "💎 1500 DM", rowId: '.order *Top Up:* 1500 DM • MOBILE PUBG', description: 'PRICE: ' + ff20 + ', Diamond MOBILE PUBG' },
        {title: "💎 1750 DM", rowId: '.order *Top Up:* 1750 DM • MOBILE PUBG', description: 'PRICE: ' + ff21 + ', Diamond MOBILE PUBG' },
        {title: "💎 2500 DM", rowId: '.order *Top Up:* 2500 DM • MOBILE PUBG', description: 'PRICE: ' + ff22 + ', Diamond MOBILE PUBG' },
        {title: "Royal pass unknown cash", rowId: '.order *Top Up:* Royal pass unknown cash • MOBILE PUBG', description: 'PRICE: ' + ff23 + ', Royal pass unknown cash MOBILE PUBG' },
        {title: "Elite pass plus kupon peti klasik", rowId: '.order *Top Up:* Elite pass plus kupon peti klasik • MOBILE PUBG', description: 'PRICE: ' + ff24 + ', Elite pass plus kupon peti klasik MOBILE PUBG' },
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
handler.help = ['game9']
handler.command = /^(game9)$/i
export default handler
