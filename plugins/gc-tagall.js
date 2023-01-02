let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}
let pesan = args.join` `
let oi = `*𝐋𝐥𝐚𝐦𝐚𝐝𝐨 𝐆𝐞𝐧𝐞𝐫𝐚𝐥:* ${pesan}`
let teks = `*⺀𝐄𝐓𝐈𝐐𝐔𝐄𝐓𝐀 - 𝐏𝐇𝐎𝐄𝐍𝐈𝐗⺀*\n\n❏ ${oi}\n\n❏ *𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰𝚂:*\n`
for (let mem of participants) {
teks += `┣➥ @${mem.id.split('@')[0]}\n`}
teks += `└└@ᴄʟᴀɴᴘʜᴏᴇɴɪxғʀᴇᴇғɪʀᴇ
└@ᴄʟᴀɴᴘʜᴏᴇɴɪxғᴇᴍ_ғғ
└@ᴘʜᴏᴇɴɪx_ᴇsᴘᴏʀᴛs_sᴜᴅ`
conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <mesaje>','invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
export default handler
