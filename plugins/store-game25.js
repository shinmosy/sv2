let handler = async (m, { conn }) => {
          //-----PRICE
let ff1 = 'format'
let ff2 = 'format'
let ff3 = 'format'
let info = `
*┏━━❏FORMAT PEMBELIAN  KOUTA*
*┃FORMAT SEMUA KOUTA*
*┗━━━━━━━━━━━━❏*
*Masukan nomer yang mau di isi Kouta*
*NOMER:*
*KARTU :*
*PEMBELIAN:*
*HARGA:*
*PAYMENT:*

*jika salah ngasih nomer  bukan tanggung jawab admin dan tidak ada pengembalian saldo*

*> ISI FORMAT* 
*> SELESAIKAN PEMBAYARAN&* *KIRIM BUKTI TRANSFER*
*> PESANAN DI PROSES*

*👑KABUL STORE || READY👑* `
const sections = [
       {
   	title: `${htjava} list payment ✦-------`,
     rows: [    
     {title: "format kouta", rowId: '.order *Top Up:* format kouta • kouta', description: 'PRICE: ' + ff1 + ', format semua kouta' },
     {title: "format kouta", rowId: '.order *Top Up:* format kouta • kouta', description: 'PRICE: ' + ff2 + ', format ssmua kouta' },
     {title: "format kouta", rowId: '.order *Top Up:* format kouta • kouta', description: 'PRICE: ' + ff3 + ', format semua kouta' },
     {title: "format kouta", rowId: '.order *Top Up:* format kouta • kouta', description: 'PRICE: ' + ff3 + ', format semua kouta' },
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
handler.help = ['game25']
handler.command = /^(game25)$/i
export default handler
