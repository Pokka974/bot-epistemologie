const {Client, Collection} = require('discord.js');
const client = new Client();
const {TOKEN, PREFIX} = require('./config');


client.PREFIX = PREFIX;

client.commands = new Collection();
client.commands.set('test', require('./commands/test.js'));
client.commands.set('grrr', require('./commands/grrr.js'));

client.on('ready', () => require('./events/ready.js')(client));
client.on('message', (msg) => require('./events/message.js')(client, msg));

client.login(TOKEN);
client.on('error', console.error);
client.on('warn' , console.warn);