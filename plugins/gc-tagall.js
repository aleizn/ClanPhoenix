let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*๐๐ฅ๐๐ฆ๐๐๐จ ๐๐๐ง๐๐ซ๐๐ฅ:* ${pesan}`
let teks = `*โบ๐๐๐๐๐๐๐๐ - ๐๐๐๐๐๐๐โบ*\n\nโ ${oi}\n\nโ *๐ด๐๐ธ๐๐๐ด๐๐ฐ๐:*\n`
for (let mem of participants) {
teks += `โฃโฅ @${mem.id.split('@')[0]}\n`}
teks += `โ@แดสแดษดแดสแดแดษดษชxาสแดแดาษชสแด
โ@แดสแดษดแดสแดแดษดษชxาแดแด_าา
โ@แดสแดแดษดษชx_แดsแดแดสแดs_sแดแด`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocaciรณn)$/i
handler.admin = true
handler.group = true
export default handler
