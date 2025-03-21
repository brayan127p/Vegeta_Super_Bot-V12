let handler = async (m, { conn }) => {
if (!(m.chat in global.db.data.chats)) return conn.reply(m.chat, '🍭l🍬 *¡Este chat no está registrado!*', m, fake)
let chat = global.db.data.chats[m.chat]
if (!chat.isBanned) return conn.reply(m.chat, '🍭 *¡𝚅𝚎𝚐𝚎𝚝𝚊-𝙱𝚘𝚝-𝙼𝙱 no está baneada en este chat!*', m, fake)
chat.isBanned = false
await conn.reply(m.chat, '🍬 *¡𝚅𝚎𝚐𝚎𝚝𝚊-𝙱𝚘𝚝-𝙼𝙱 ya fué desbaneada en este chat!*', m, fake)
}
handler.help = ['unbanchat'];
handler.tags = ['grupo'];
handler.command = ['unbanchat','desbanearchat','desbanchat']
handler.admin = true 
handler.botadmin = true
handler.group = true

export default handler