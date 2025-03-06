creditos a Vegeta 

let handler = async (m) => {
  // Texto que deseas enviar
  const message = `*🪻Accede a Luminarys host mejorado a través de los siguientes links🪻*\n🪻Dash : dash.luminarys.shop\n🪻Panel : panel.luminarys.shop`;

  // Envía el mensaje de texto al chat
  conn.sendMessage(m.chat, { text: message, mentions: [m.sender] }, { quoted: m });
};

handler.help = ['luminary'];
handler.tags = ['información'];
handler.command = ['luminary'];

export default handler;