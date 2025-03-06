
import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn }) => {
  try {
    // Texto que deseas poner en el sticker
    const text = 'hola';
    
    // Crea el sticker con el texto
    let stiker = await sticker(false, null, global.packname, global.author, text);
    
    // Envía el sticker al chat
    conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, true);
  } catch (e) {
    console.error(e);
    conn.reply(m.chat, '⚡ Ocurrió un error al crear el sticker.', m);
  }
};

handler.help = ['luminary'];
handler.tags = ['sticker'];
handler.command = ['luminary'];