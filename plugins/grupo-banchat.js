let handler = async (m) => {

global.db.data.chats[m.chat].isBanned = true
conn.reply(m.chat, `🍬 *Este chat fue baneado con éxito*`, m, rcanal)

}
handler.help = ['banchat']
handler.tags = ['grupo']
handler.command = ['banchat']

handler.botuser = true
handler.user = true 
handler.group = true

export default handler