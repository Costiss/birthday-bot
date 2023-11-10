import { REST, RESTGetAPIGuildResult, RESTGetAPIUserResult, RESTPostAPIChannelMessageJSONBody, Routes } from 'discord.js';
import { getEnvOrThrow } from '../utils/env.utils';

export type DiscordGuild = RESTGetAPIGuildResult;
export type DiscordUser = RESTGetAPIUserResult;

const discordRestClient = new REST().setToken(getEnvOrThrow('DISCORD__BOT_TOKEN'));

async function fetchGuild(guildId: string): Promise<DiscordGuild> {
    return (await discordRestClient.get(Routes.guild(guildId))) as RESTGetAPIGuildResult;
}

async function sendMessageOnChannel(channelId: string, content: RESTPostAPIChannelMessageJSONBody) {
    await discordRestClient.post(Routes.channelMessages(channelId), {
        body: content
    });
}

async function fetchUser(userId: string): Promise<DiscordUser> {
    return (await discordRestClient.get(Routes.user(userId))) as RESTGetAPIUserResult;
}

export default {
    fetchUser,
    fetchGuild,
    sendMessageOnChannel
};
