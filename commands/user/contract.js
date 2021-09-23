const { MessageEmbed } = require('discord.js');
const request = require('request');

module.exports = {
    config: {
        name: `contract`,
        aliases: [`contract`, `contract`],
    },
    run: async (bot, message, args) => {
        const contract = args.join(" ");
        if (!contract) {
            return message.channel.send("Please Supply a Contract.");
        }

            const options = {
            method: 'GET',
            url: `https://api.opensea.io/api/v1/asset_contract/${contract}`
            };

            request(options, function (error, response, body) {
            if (error) throw new Error(error);

            let json = JSON.parse(body);
            console.log(json); 
            var name = json.name;
            var image = json.image_url;
            var description = json.description;
            var address = json.address;
            var externalURL = json.external_link;
            
        let embed = new MessageEmbed()
            .setColor(`RED`)
            .setTitle(name)
            .setURL(externalURL)
            .setAuthor(`0x00000001 Development`, bot.user.displayAvatarURL())
            .setDescription(description)
            .addFields(
                { name: `Address`, value: address }
            )
            .setImage(image)
            .setTimestamp()
            .setFooter(`0x00000001`, bot.user.displayAvatarURL())

        message.channel.send(embed);
    });
    }
}