
let handler = async (m, { conn }) => {
  const dashLink = 'https://dash.luminarys.shop'; //

  // Envía el enlace como respuesta
  conn.reply(m.chat, `Aquí tienes el enlace del Dash del host luminar'ys: ${dashLink}`, m);
};

handler.command = ['dash', 'enviardash'];

export default handler;