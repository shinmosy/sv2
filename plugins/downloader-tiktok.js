import axios from 'axios'
let handler = async (m, { conn, args, usedPrefix, command }) => {
    if (!args[0]) throw `contoh:\n ${usedPrefix}${command} https://vt.tiktok.com/ZSRb5AKWt`
    let res = (await axios.get(API('males', '/tiktok', { url: args[0] } ))).data;
    if (res.status != 200) throw res.message;
    if (!res) throw res.message;
    conn.sendButtonVid(m.chat, res.video, `*Tittle:* ${res.title}\n${res.author ? `*Creator:* ${res.author}` : '\n' }`.trim(), 'Cara simpan digalery:\n1. Download dulu videonya\n2. Buka terus klik titik 3 pojok kanan atas\n3. lalu klik simpan!\n\n*𝑩𝒐𝒕𝑺𝒉𝒊𝒏 𝒗4 By MOS*', 'MENU', usedPrefix + 'menu', m)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok?)$/i

export default handler
