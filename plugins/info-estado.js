//Créditos Vegeta

import ws from 'ws';

let handler = async (m, { conn, usedPrefix, isRowner }) => {
    let _muptime;
    let totalreg = Object.keys(global.db.data.users).length;
    let totalchats = Object.keys(global.db.data.chats).length;
    let pp = "https://i.ibb.co/Jww0n5FY/file.jpg";

    if (process.send) {
        process.send('uptime');
        _muptime = await new Promise(resolve => {
            process.once('message', resolve);
            setTimeout(resolve, 1000);
        }) * 1000;
    }

    let muptime = clockString(_muptime);
    let users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
    const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats);
    const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'));
    const totalUsers = users.length;

    const used = process.memoryUsage();
    
    let Vegeta = `\\Información - ${botname}\\n`;
    Vegeta += `👑꙰᠁❥ *◜Creador◞* ⇢ †|Brayan★\n`;
    Vegeta += `⚜️꙰᠁❥ *◜Prefijo◞* ⇢ [ ${usedPrefix} ]\n`;
    Vegeta += `📚꙰᠁❥ *◜Versión◞* ⇢ ${vs}\n`;
    Vegeta += `🔐꙰᠁❥ *◜Chats Privados◞* ⇢ ${chats.length - groupsIn.length}\n`;
    Vegeta += `💬꙰᠁❥ *◜Total De Chats◞* ⇢ ${chats.length}\n`;
    Vegeta += `👥꙰᠁❥ *◜Usuarios◞* ⇢ ${totalreg}\n`;
    Vegeta += `📌꙰᠁❥ *◜Grupos◞* ⇢ ${groupsIn.length}\n`;
    Vegeta += `⏱️꙰᠁❥ *◜Actividad◞* ⇢ ${muptime}\n`;
    
    // Calculando velocidad
    const speed = process.memoryUsage().heapUsed / 1024 / 1024; // Ejemplo de uso de memoria
    Vegeta += `🚀꙰᠁❥ *◜Velocidad◞* ⇢ ${(speed).toFixed(2)} MB\n`;

    Vegeta += `🍬꙰᠁❥ *◜Sub-Bots Activos◞* ⇢ ${totalUsers || '0'}`;

    await conn.sendFile(m.chat, pp, 'Vegeta.jpg', Vegeta, fkontak, null, rcanal);
};

handler.help = ['estado'];
handler.tags = ['info'];
handler.command = ['estado', 'status', 'estate', 'state', 'stado', 'stats'];
handler.register = true;

export default handler;

function clockString(ms) {
    let h = Math.floor(ms / 3600000);
    let m = Math.floor(ms / 60000) % 60;
    let s = Math.floor(ms / 1000) % 60;
    
    console.log({ ms, h, m, s });
    
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':');
}