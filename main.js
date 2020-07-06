const {Client, MessageEmbed} = require('discord.js');
const client = new Client();
const {TOKEN, PREFIX, BOTCHAN} = require('./config');

const sonObj = require('./cartes.json');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('message', msg => {

   
    let currentChan = msg.channel;
    let cmd = msg.content.split(' ')[0];
    let arg = msg.content.split(' ')[1];
    
    //console.log('Cmd = ' + cmd + ' et Arg = ' + arg);

    if (currentChan.id.toString() === BOTCHAN) {

        if(cmd === PREFIX + 'test'){
            currentChan.send('grr')
            .then(message => console.log(`Sent message: ${message.content}`))
            .catch(console.error);
        }

        if(cmd === PREFIX + 'grrr'){

            let d = Math.random();
            console.log('d = ' + d);
            let rarete = d < 0.5 ? 'Commun' : d < 0.8 ? 'Peu Commun' : d < 0.94 ? 'Rare' : d < 0.99 ? 'Tres Rare' : 'Legendaire';
            console.log('Rareté = ' + rarete);

            let randomCard = Math.floor(Math.random() * sonObj[rarete].length);
            console.log('Taile de truc : ' + sonObj[rarete].length + ' chiffre random : ' + randomCard);
           

            let finalName = sonObj[rarete][randomCard].name;
            let finalUrl = sonObj[rarete][randomCard].url;
            let finalClan = sonObj[rarete][randomCard].clan;
            let color = finalClan === 'Asteros' ? '9933ff' : finalClan === 'Ceos' ? '0033cc' : finalClan === 'Ares' ? 'ffcc00' : finalClan === 'Hemera' ? '00cc66' : finalClan === 'Ether' ? 'ff0000' : '000000';
            console.log('TEST = '+ finalName + ' ' + finalUrl + ' ' + finalClan + ' ' + color);
            
            let embed = new MessageEmbed()
                .setTitle(finalName)
                .setImage(finalUrl)
                .setDescription(finalClan)
                .setColor(color);

                currentChan.send(embed);
        }
            
        
        
    }
});

client.login(TOKEN);