const Discord = require('discord.js');
const config = require('./config/config.json')
require('colors')
const client = new Discord.Client({
    restTimeOffset: 0,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION', 'GUILD_MEMBER', 'USER'],

    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MEMBERS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
        Discord.Intents.FLAGS.GUILD_VOICE_STATES,
        Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        Discord.Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
    ],
})

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();

client.on("guildMemberAdd", async member => {
    
     embed = new Discord.MessageEmbed()
    .setColor("#6A1B9A ")
    .setTitle("🔞🖤│Free • Nudes")
    .setDescription(member.user.username + "se acaba de unir al servidor")
      .addFields(
      { name: "╭`🚨`╮・reglas", value: "`respeta las reglas para evitar sanciones`", inline: false },
      { name: "┇`🔞`┇soy-mayor", value: "`reacciona para obtener el rol`", inline: false}
      )
    .addField("┇`🌈`┇roles, ", "`elegi tus roles`", false)
    .addFields(
      { name: "`🔞`・habilitar-nsfw", value: "`reacciona para obtener el rol`", inline: false}
    )
    .addField("Si tienes algún problema, puedes contactar a los del staff. ", "୨ ┈・┈・✧・┈・┈ ୧", false)
    .setThumbnail(member.user.avatarURL())
    .setFooter("⌇★・Gracias por haberte unido al servidor . ﹒੭")
    .setImage("https://media.discordapp.net/attachments/949905763030138880/949907610046464030/bannerstory_6.gif")
    member.client.channels.cache.get("968994804526632980").send({embeds:[embed]})

})

function requerirhandlers(){
    ["command", "events", "distube",  "reaccion_roles"].forEach(handler => {
        try {
            require(`./handlers/${handler}`)(client, Discord)
        } catch (e) {
            console.warn(e)
        }
    })

}

requerirhandlers();
client.login(config.token)