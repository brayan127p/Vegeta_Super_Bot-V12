creditos a Vegeta 

let handler = async (m) => {
  // Texto que deseas enviar
  const message = `*✨ *L U M I N A R Y S - H O S T* 

*¿Buscas un hosting de alta calidad a precios imbatibles?*  
Descubre *Luminary's Hosting*, tu solución ideal con servidores dedicados y precios accesibles. Ofrecemos un Uptime garantizado 24/7, asegurando que tus proyectos funcionen de manera óptima en todo momento.

🌌 *Información del Host*

🔮 *Dashboard:*  
• (https://dash.luminarys.shop)

🧑‍🚀 *Panel de Control:*  
• (https://panel.luminarys.shop)

🌠 *Únete a nuestro Canal:*  
• (https://whatsapp.com/channel/0029Vb7CL7dGk1FtzTLjNt3S)

🚀 *Contacto (Soporte):*  
• (https://wa.me/525653326435)

> *¡Únete a nuestra comunidad y disfruta de un servicio excepcional! No dejes pasar la oportunidad de llevar tus proyectos al siguiente nivel con Luminarys. ¡Estamos aquí para ayudarte! :D**`;

  // Envía el mensaje de texto al chat
  conn.sendMessage(m.chat, { text: message, mentions: [m.sender] }, { quoted: m });
};

handler.help = ['luminary'];
handler.tags = ['información'];
handler.command = ['luminary'];

export default handler;