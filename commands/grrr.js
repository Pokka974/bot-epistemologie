
const sonObj = require('../cartes.json');
const {MessageEmbed} = require('discord.js');

module.exports = (client, message) => {
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
    const embed = new MessageEmbed()
        .setTitle(finalName)
        .setImage(finalUrl)
        .setDescription(finalClan)
        .setColor(color)
        .setTimestamp()
        .setFooter(message.author.tag, message.author.avatarURL());

    message.channel.send(embed);
}
