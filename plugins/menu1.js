/*
██████╗  █████╗ ██████╗ ██╗  ██╗         ██████╗ ██╗   ██╗███████╗███████╗███╗   ██╗      ██╗   ██╗ ██╗
██╔══██╗██╔══██╗██╔══██╗██║ ██╔╝        ██╔═══██╗██║   ██║██╔════╝██╔════╝████╗  ██║      ██║   ██║███║
██║  ██║███████║██████╔╝█████╔╝         ██║   ██║██║   ██║█████╗  █████╗  ██╔██╗ ██║█████╗██║   ██║╚██║
██║  ██║██╔══██║██╔══██╗██╔═██╗         ██║▄▄ ██║██║   ██║██╔══╝  ██╔══╝  ██║╚██╗██║╚════╝╚██╗ ██╔╝ ██║
██████╔╝██║  ██║██║  ██║██║  ██╗███████╗╚██████╔╝╚██████╔╝███████╗███████╗██║ ╚████║       ╚████╔╝  ██║
╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝ ╚══▀▀═╝  ╚═════╝ ╚══════╝╚══════╝╚═╝  ╚═══╝        ╚═══╝   ╚═╝                                                                                                       
creare by manisha sasmitha 
whatsapp number:94721551183
*/


const config = require('../config')
const {cmd , commands} = require('../command')
const os = require("os")
const {runtime} = require('../lib/functions')

cmd({
    pattern: "menu1",
    desc: "To get the menu.",
    react: "📜",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let menu = {
main: '',
download: '',
group: '',
owner: '',
convert: '',
tools: '',
search: '',
ai: '',
fun: '',
voice: '',
other: ''
};

for (let i = 0; i < commands.length; i++) {
if (commands[i].pattern && !commands[i].dontAddCommandList) {
menu[commands[i].category] += `.${commands[i].pattern}\n`;
}
}

let madeMenu = ` *👋 Hello ${pushname}*

✨𝑫𝑨𝑹𝑲_𝑸𝑼𝑬𝑬𝑵-𝑽𝟏 𝑴𝑬𝑵𝑼✨ 
╭─「 ᴄᴏᴍᴍᴀɴᴅꜱ ᴘᴀɴᴇʟ」
│◈ ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}
│◈ ᴏᴡɴᴇʀ ɴᴀᴍᴇ :manisha
│◈ ᴘʟᴀᴛꜰᴏʀᴍ : ${os.hostname()}
│◈ ᴠᴇʀꜱɪᴏɴ : 1
╰──────────●●►
╭──────────●●►
📥 *𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝 𝐌𝐞𝐧𝐮*
  ───────
${menu.download}
╰───────────●●►
╭──────────●●►
👾 *𝐀𝐢 𝐌𝐞𝐧𝐮*
  ───────
${menu.ai}
╰───────────●●►
╭──────────●●►
🔧 *𝐌𝐚𝐢𝐧 𝐌𝐞𝐧𝐮*
  ───────
${menu.main}
╰───────────●●►
╭──────────●●►
🎉 *𝐅𝐮𝐧 𝐌𝐞𝐧𝐮*
  ───────
${menu.fun}
╰───────────●●►
╭──────────●●►
🔄 *𝐂𝐨𝐧𝐯𝐞𝐫𝐭 𝐌𝐞𝐧𝐮*
  ───────
${menu.convert}
╰───────────●●►
╭──────────●●►
🔍 *𝐒𝐞𝐚𝐫𝐜𝐡 𝐌𝐞𝐧𝐮*
  ───────
${menu.search}
╰───────────●●►
╭──────────●●►
👥 *𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮*
  ───────
${menu.group}
╰───────────●●►
╭──────────●●►
🔒 *𝐎𝐰𝐧𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
${menu.owner}
╰───────────●●►
╭──────────●●►
⚙️ *𝐎𝐭𝐡𝐞𝐫 𝐌𝐞𝐧𝐮*
  ───────
${menu.other}
╰───────────●●►
╭──────────●●►
🛠️ *𝐓𝐨𝐨𝐥𝐬 𝐌𝐞𝐧𝐮*
  ───────
${menu.tools}
╰───────────●●►
*🧚‍♂️ᴅᴀʀᴋ_Qᴜᴇᴇɴ-ᴠ1 ᴄʀᴇᴀᴛᴇ ʙʏ ᴍᴀɴɪꜱʜᴀ🧚‍♂️*
`

return await conn.sendMessage(from,{image: {url: `https://files.catbox.moe/v1k9r3.jpg`},caption:madeMenu},{quoted: mek})
}catch(e){
console.log(e)
reply(`Error`)
}
})
