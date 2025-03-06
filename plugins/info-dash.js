
let handler = async (m, { conn }) => {
  const dashLink = 'https://dash.luminarys.shop'; //

  // Envía el enlace como respuesta
  conn.reply(m.chat, `Aquí tienes el enlace a tu dashboard: ${dashLink}`, m);
};

handler.command = ['dash', 'enviardash'];

export default handler;