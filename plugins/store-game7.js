let handler = async (m, { conn }) => {
	//-----PRICE
let ff1 = 'Rp 1.995'
let ff2 = 'Rp 3.782'
let ff3 = 'Rp 6.540'
let ff4 = 'Rp 8.897'
let ff5 = 'Rp 10.900'
let ff6 = 'Rp 12.986'
let ff7 = 'Rp 19.586'
let ff8 = 'Rp 27.354'
let ff9 = 'Rp 37.999'
let ff10 = 'Rp 52.985'
let ff11 = 'Rp 56.986'
let ff12 = 'Rp 67.603'
let ff13 = 'Rp 76.662'
let ff14 = 'Rp 94.951'
let ff15 = 'Rp 114.990'
let ff16 = 'Rp 137.569'
let ff17 = 'Rp 151.860'
let ff18 = 'Rp 189.991'
let ff19 = 'Rp 211.996'
let ff20 = 'Rp 233.694'
let ff21 = 'Rp 275.987'
let ff22 = 'Rp 305.989'
let ff23 = 'Rp 456.990'
let ff24 = 'Rp 132.825'
let ff25 = 'Rp 132.989'
let ff26 = 'Rp 301.482'
let info = `
✨PRICELIST MOBILE LEGEND✨
5  Diamond   💎${ff1}
12 Diamond   💎${ff2}
19 Diamond   💎${ff3}
28 Diamond   💎${ff4}
36 Diamond   💎${ff5}
44 Diamond   💎${ff6}
86 Diamond   💎${ff7}
112 Diamond  💎${ff8}
172 Diamond  💎${ff9}
185 Diamond  💎${ff10}
257 Diamond  💎${ff11}
284 Diamond  💎${ff12}
344 Diamond  💎${ff13}
429 Diamond  💎${ff14}
514 Diamond  💎${ff15}
600 Diamond  💎${ff16}
706 Diamond  💎${ff17}
878 Diamond  💎${ff18}
963 Diamond  💎${ff19}
1010 Diamond 💎${ff20}
1220 Diamond 💎${ff21}
1412 Diamond 💎${ff22}
2195 Diamond 💎${ff23}
Twilight pass  ${ff24}
Starlight      ${ff25}
Starlight P    ${ff26}

> VIA ID +SERVER
> PROSES 1 - 5 MENIT
>Note : Tanyakan stok sebelum order
       
  *🎮KABUL STORE*
`
const sections = [
   {
	title: `${htjava} List Store ✦-------`,
	rows: [
	      {title: "💎 5 DM", rowId: '.order *Top Up:* 5 DM • MOBILE LEGEND', description: 'PRICE: ' + ff1 + ', Diamond MOBILE LEGEND' },
        {title: "💎 12 DM", rowId: '.order *Top Up:* 12 DM • MOBILE LEGEND', description: 'PRICE: ' + ff2 + ', Diamond MOBILE LEGEND' },
        {title: "💎 19 DM", rowId: '.order *Top Up:* 19 DM • MOBILE LEGEND', description: 'PRICE: ' + ff3 + ', Diamond MOBILE LEGEND' },
        {title: "💎 28 DM", rowId: '.order *Top Up:* 28 DM • MOBILE LEGEND', description: 'PRICE: ' + ff4 + ', Diamond MOBILE LEGEND' },
        {title: "💎 36 DM", rowId: '.order *Top Up:* 36 DM • MOBILE LEGEND', description: 'PRICE: ' + ff5 + ', Diamond MOBILE LEGEND' },
        {title: "💎 44 DM", rowId: '.order *Top Up:* 44 DM • MOBILE LEGEND', description: 'PRICE: ' + ff6 + ', Diamond MOBILE LEGEND' },
        {title: "💎 86 DM", rowId: '.order *Top Up:* 86 DM • MOBILE LEGEND', description: 'PRICE: ' + ff7 + ', Diamond MOBILE LEGEND' },
        {title: "💎 112 DM", rowId: '.order *Top Up:* 112 DM • MOBILE LEGEND', description: 'PRICE: ' + ff8 + ', Diamond MOBILE LEGEND' },
        {title: "💎 172 DM", rowId: '.order *Top Up:* 172 DM • MOBILE LEGEND', description: 'PRICE: ' + ff9 + ', Diamond MOBILE LEGEND' },
        {title: "💎 185 DM", rowId: '.order *Top Up:* 185 DM • MOBILE LEGEND', description: 'PRICE: ' + ff10 + ', Diamond MOBILE LEGEND' },
        {title: "💎 257 DM", rowId: '.order *Top Up:* 257 DM • MOBILE LEGEND', description: 'PRICE: ' + ff11 + ', Diamond MOBILE LEGEND' },
        {title: "💎 284 DM", rowId: '.order *Top Up:* 284 DM • MOBILE LEGEND', description: 'PRICE: ' + ff12 + ', Diamond MOBILE LEGEND' },
        {title: "💎 344 DM", rowId: '.order *Top Up:* 344 DM • MOBILE LEGEND', description: 'PRICE: ' + ff13 + ', Diamond MOBILE LEGEND' },
        {title: "💎 429 DM", rowId: '.order *Top Up:* 429 DM • MOBILE LEGEND', description: 'PRICE: ' + ff14 + ', Diamond MOBILE LEGEND' },
        {title: "💎 514 DM", rowId: '.order *Top Up:* 514 DM • MOBILE LEGEND', description: 'PRICE: ' + ff15 + ', Diamond MOBILE LEGEND' },
        {title: "💎 600 DM", rowId: '.order *Top Up:* 600 DM • MOBILE LEGEND', description: 'PRICE: ' + ff16 + ', Diamond MOBILE LEGEND' },
        {title: "💎 706 DM", rowId: '.order *Top Up:* 706 DM • MOBILE LEGEND', description: 'PRICE: ' + ff17 + ', Diamond MOBILE LEGEND' },
        {title: "💎 878 DM", rowId: '.order *Top Up:* 878 DM • MOBILE LEGEND', description: 'PRICE: ' + ff18 + ', Diamond MOBILE LEGEND' },
        {title: "💎 963 DM", rowId: '.order *Top Up:* 963 DM • MOBILE LEGEND', description: 'PRICE: ' + ff19 + ', Diamond MOBILE LEGEND' },
        {title: "💎 1010 DM", rowId: '.order *Top Up:* 1010 DM • MOBILE LEGEND', description: 'PRICE: ' + ff20 + ', Diamond MOBILE LEGEND' },
        {title: "💎 1220 DM", rowId: '.order *Top Up:* 1220 DM • MOBILE LEGEND', description: 'PRICE: ' + ff21 + ', Diamond MOBILE LEGEND' },
        {title: "💎 1412 DM", rowId: '.order *Top Up:* 1412 DM • MOBILE LEGEND', description: 'PRICE: ' + ff22 + ', Diamond MOBILE LEGEND' },
        {title: "💎 2195 DM", rowId: '.order *Top Up:* 2195 DM • MOBILE LEGEND', description: 'PRICE: ' + ff19 + ', Diamond MOBILE LEGEND' },
        {title: "💎 Twilight pass", rowId: '.order *Top Up:* Twilight pass • MOBILE LEGEND', description: 'PRICE: ' + ff20 + ', Twilight pass MOBILE LEGEND' },
        {title: "💎 Starlight", rowId: '.order *Top Up:* Starlight • MOBILE LEGEND', description: 'PRICE: ' + ff21 + ', Starlight MOBILE LEGEND' },
        {title: "💎 Starlight P", rowId: '.order *Top Up:* Starlight P • MOBILE LEGEND', description: 'PRICE: ' + ff22 + ', Starlight P MOBILE LEGEND' },
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
handler.help = ['game7']
handler.command = /^(game7)$/i
export default handler
