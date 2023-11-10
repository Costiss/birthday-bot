import birthdaysRepository from '../repository/birthdays.repository';
import discordService from './discord.service';

async function alertTodayBirthdays() {
    const birthdays = await birthdaysRepository.findTodayBirthdays();
    for (const birthday of birthdays) {
        const { system_channel_id } = await discordService.fetchGuild(birthday.serverId);
        if (!system_channel_id) {
            console.warn(`System channel not found for server ${birthday.serverId}`);
            continue;
        }

        const { username } = await discordService.fetchUser(birthday.userId);
        await discordService.sendMessageOnChannel(system_channel_id, {
            content: `Today is ${username}'s birthday!`
        });
    }
}

export default {
    alertTodayBirthdays
};
