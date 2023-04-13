const { SlashCommandBuilder } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
        .setName("playlist")
        .setDescription("Ouça a melhor playlist de Lofi para estudos"),

    async execute(interaction) {
        await interaction.reply("https://open.spotify.com/playlist/37i9dQZF1DX4nNmLlb3JR2?si=ab9f844aebb34683")
    }
}