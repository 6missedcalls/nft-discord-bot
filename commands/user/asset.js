const { MessageEmbed } = require('discord.js');
const request = require('request');

module.exports = {
    config: {
        name: `asset`,
        aliases: [`asset`, `asset`],
    },
    run: async (bot, message, args) => {
        const asset = args.join(" ");
        if (!asset) {
            return message.channel.send("Please Supply a asset.");
        }

        const options = {
            method: 'GET',
            url: `https://api.opensea.io/api/v1/asset/${asset}`
          };
          
          request(options, function (error, response, body) {
            if (error) throw new Error(error);

            let json = JSON.parse(body);
            console.log(json); 
            var totalSales = json.num_sales;
            var image = json.image_url;
            var name = json.name;
            var description = json.description;
            var externalURL = json.external_link;

        let embed = new MessageEmbed()
            .setColor(`RED`)
            .setTitle(name)
            .setURL(externalURL)
            .setAuthor(`0x00000001 Development`, bot.user.displayAvatarURL())
            .setDescription(description)
            .addFields(
                { name: `Number of Sales`, value: totalSales }
            )
            .setImage(image)
            .setTimestamp()
            .setFooter(`0x00000001`, bot.user.displayAvatarURL())

        message.channel.send(embed);
    });
    }
}