const Discord = require('discord.js');

const client = new Discord.Client();

const PREFIX = "F-";

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
    console.log('[FuzeyBOT] Im\' alive!');
    client.user.setStatus('Online');
    client.user.setPresence({ game: { name: 'F-INFO || F-HELP', type: 0 } });;
});

client.on("message", message => {
    if(!message.content.startsWith(PREFIX)) return;

    let command = message.content.split()[0];
    command = command.slice(PREFIX.length);

    let args = message.content.split().slice(1);

    if (command === "PING") {
        message.channel.send(`<@${message.author.id}>, **Pong!**`);
    }

    if (command === "INVITE" || command === "INVITELINK" || command === "invite") {
        let embedInvite = new Discord.RichEmbed()
        .addField("Получить список команд", "F-HELP")
        .addField("Постоянная ссылка на наш сервер", "https://shadowfuze.com/discord/")
        .setColor(0x9544d1)
        .setFooter("Информация о сервере и боте. Бот создан специально для Discord сервера discord/FuzeyFuze.")
        .setThumbnail(url='https://shadowfuze.com/pic.png')
        message.channel.send({ embed: embedInvite });
    }

    if (command === "ROLES") {
        message.channel.send(":scroll: **Список игровых ролей (это нужно поставить вместо `GAME` для получения/удаления роли):** \n `[1]` | **OVERWATCH** \n `[2]` | **CS** \n `[3]` | **PUBG** \n `[4]` | **MINECRAFT** \n `[5]` | **GTA** \n `[6]` | **BATTLEFIELD** \n `[7]` | **HEARTHSTONE** \n `[8]` | **DOTA** \n `[9]` | **PAYDAY** \n `[10]` **LOL** \n \nЧтобы получить игровую роль - `F-AROLE GAME`. \n \nЧтобы удалить игровую роль - `F-RROLE GAME`.")
    }

    if (command === "AROLE") {
        message.channel.send(":warning: **Вы не ввели роль для ее получения, полчуить список ролей - `F-ROLES`**");
    }

    if (command === "RROLE") {
        message.channel.send(":warning: **Вы не ввели роль для ее удаления.**");
    }

    if (command === "INFO") {
        let embed = new Discord.RichEmbed()
        .addField("Получить список команд", "F-HELP")
        .addField("Постоянная ссылка на наш сервер", "https://shadowfuze.com/discord/")
        .addField("Основное правило использования бота", "НЕ СПАМИТЬ КОМАНДАМИ")
        .addField("Создатель бота", "ShadowFuze#0001")
        .setColor(0x9544d1)
        .setFooter("Информация о сервере и боте. Бот создан специально для Discord сервера discord/FuzeyFuze.")
        .setThumbnail(url='https://shadowfuze.com/pic.png')
        message.channel.send({ embed: embed });
    }

    if (command === "HELP") {
        let embedHelp = new Discord.RichEmbed()
        .addField("F-INFO", "Информация о боте")
        .addField("F-INVITE", "Отправить в чат постоянную пригласительную ссылку")
        .addField("F-ROLES", "Список игровых ролей")
        .addField("F-RROLE GAME", "Удалить Вашу игровую роль, поставьте вместо GAME игру из списка игровых ролей")
        .addField("F-AROLE GAME", "Получить игровую роль, поставьте вместо GAME игру из списка игровых ролей")
        .setColor(0x9544d1)
        .setFooter("Информация о сервере и боте. Бот создан специально для Discord сервера discord/FuzeyFuze.")
        .setThumbnail(url='https://shadowfuze.com/pic.png')
        message.channel.send({ embed: embedHelp });
    }
    
    if (command === "cool") {
        let adminRole = message.guild.roles.find("name", "KIRILL");
        if(message.member.roles.has(adminRole.id)) {
        message.channel.send("Я");
        message.channel.send("Самый");
        message.channel.send("Стильный");
        message.channel.send("Бот!") 
        } else {
        message.channel.send("Капееец, у тебя вообще-то нету прав на это .-.");
        }
    }
    //
    // РУЧНАЯ ВЫДАЧА РОЛЕЙ
    //
    //
    //CS
    //
    if (command === "AROLE CS") {
            let CSER = message.guild.roles.find("name", "CS");
            var user = message.member;
            if(message.member.roles.has(CSER.id)) {
                message.channel.send(`:warning: **<@${message.author.id}>, у Вас уже есть эта игровая роль!**`);
            } else {
                user.addRole(CSER);
                message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы получили свою игровую роль!**`);
            }
        }

    //OVERWATCH

    if (command === "AROLE OVERWATCH") {
        let Overwatcher = message.guild.roles.find("name", "OVERWATCH");
        var user = message.member;
        if(message.member.roles.has(Overwatcher.id)) {
            message.channel.send(`:warning: **<@${message.author.id}>, у Вас уже есть эта игровая роль!**`);
        } else {
            user.addRole(Overwatcher);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы получили свою игровую роль!**`);
        }
    }

    //PUBG

    if (command === "AROLE PUBG") {
        let PUBGer = message.guild.roles.find("name", "PUBG");
        var user = message.member;
        if(message.member.roles.has(PUBGer.id)) {
            message.channel.send(`:warning: **<@${message.author.id}>, у Вас уже есть эта игровая роль!**`);
        } else {
            user.addRole(PUBGer);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы получили свою игровую роль!**`);
        }
    }

    //Minecraft

    if (command === "AROLE MINECRAFT") {
        let Minecrafter = message.guild.roles.find("name", "MINECRAFT");
        var user = message.member;
        if(message.member.roles.has(Minecrafter.id)) {
            message.channel.send(`:warning: **<@${message.author.id}>, у Вас уже есть эта игровая роль!**`);
        } else {
            user.addRole(Minecrafter);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы получили свою игровую роль!**`);;
        }
    }

   //GTA

    if (command === "AROLE GTA") {
        let GTAer = message.guild.roles.find("name", "GTA");
        var user = message.member;
        if(message.member.roles.has(GTAer.id)) {
            message.channel.send(`:warning: **<@${message.author.id}>, у Вас уже есть эта игровая роль!**`);
        } else {
            user.addRole(GTAer);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы получили свою игровую роль!**`);
        }
    }

    //BF

    if (command === "AROLE BATTLEFIELD") {
        let Battlefielder = message.guild.roles.find("name", "BATTLEFIELD");
        var user = message.member;
        if(message.member.roles.has(Battlefielder.id)) {
            message.channel.send(`:warning: **<@${message.author.id}>, у Вас уже есть эта игровая роль!**`);;
        } else {
            user.addRole(Battlefielder);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы получили свою игровую роль!**`);
        }
    }

    //HEARTHSRONE

    if (command === "AROLE HEARTHSTONE") {
        let Hearthstoneer = message.guild.roles.find("name", "HEARTHSTONE");
        var user = message.member;
        if(message.member.roles.has(Hearthstoneer.id)) {
            message.channel.send(`:warning: **<@${message.author.id}>, у Вас уже есть эта игровая роль!**`);
        } else {
            user.addRole(Hearthstoneer);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы получили свою игровую роль!**`);
        }
    }

    //DOTA

    if (command === "AROLE DOTA") {
        let Dotaer = message.guild.roles.find("name", "DOTA");
        var user = message.member;
        if(message.member.roles.has(Dotaer.id)) {
            message.channel.send(`:warning: **<@${message.author.id}>, у Вас уже есть эта игровая роль!**`);
        } else {
            user.addRole(Dotaer);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы получили свою игровую роль!**`);
        }
    }

    //PAYDAY

    if (command === "AROLE PAYDAY") {
        let PayDayer = message.guild.roles.find("name", "PAYDAY");
        var user = message.member;
        if(message.member.roles.has(PayDayer.id)) {
            message.channel.send(`:warning: **<@${message.author.id}>, у Вас уже есть эта игровая роль!**`);
        } else {
            user.addRole(PayDayer);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы получили свою игровую роль!**`);
        }
    }

    //LoL

    if (command === "AROLE LOL") {
        let LOLer = message.guild.roles.find("name", "LOL");
        var user = message.member;
        if(message.member.roles.has(LOLer.id)) {
            message.channel.send(`:warning: **<@${message.author.id}>, у Вас уже есть эта игровая роль!**`);
        } else {
            user.addRole(LOLer);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы получили свою игровую роль!**`);
        }
    }

    //
    // УДАЛЕНИЕ ИГРОВЫХ РОЛЕЙ
    //
    
    //CS

    if (command === "RROLE CS") {
        let remCSER = message.guild.roles.find("name", "CS");
        var user = message.member;
        if(message.member.roles.has(remCSER.id)) {
            user.removeRole(remCSER);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы удалили свою игровую роль!**`);
        } else {
            message.channel.send(`:warning: **<@${message.author.id}>, у вас нету такой роли!**`);
        }
    }

   //OVERWATCH

   if (command === "RROLE OVERWATCH") {
       let remOVERWATCH = message.guild.roles.find("name", "OVERWATCH");
       var user = message.member;
        if(message.member.roles.has(remOVERWATCH.id)) {
            user.removeRole(remOVERWATCH);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы удалили свою игровую роль!**`);
        } else {
            message.channel.send(`:warning: **<@${message.author.id}>, у вас нету такой роли!**`);
        }
    }

    //PUBG

    if (command === "RROLE PUBG") {
        let remPUBGer = message.guild.roles.find("name", "PUBG");
        var user = message.member;
        if(message.member.roles.has(remPUBGer.id)) {
            user.removeRole(remPUBGer);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы удалили свою игровую роль!**`);
        } else {
            message.channel.send(`:warning: **<@${message.author.id}>, у вас нету такой роли!**`);
        }
    }

    //MINECRAFT

    if (command === "RROLE MINECRAFT") {
        let removingRoleMC = message.guild.roles.find("name", "MINECRAFT");
        var user = message.member;
        if(message.member.roles.has(removingRoleMC.id)) {
            user.removeRole(removingRoleMC);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы удалили свою игровую роль!**`);
        } else {
            message.channel.send(`:warning: **<@${message.author.id}>, у вас нету такой роли!**`);
        }
    }

    //GTA

    if (command === "RROLE GTA") {
        let remGTA = message.guild.roles.find("name", "GTA");
        var user = message.member;
        if(message.member.roles.has(remGTA.id)) {
            user.removeRole(remGTA);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы удалили свою игровую роль!**`);
        } else {
            message.channel.send(`:warning: **<@${message.author.id}>, у вас нету такой роли!**`);
        }
    }

    //BF

    if (command === "RROLE BATTLEFIELD") {
        let remBF = message.guild.roles.find("name", "BATTLEFIELD");
        var user = message.member;
        if(message.member.roles.has(remBF.id)) {
            user.removeRole(remBF);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы удалили свою игровую роль!**`);
        } else {
            message.channel.send(`:warning: **<@${message.author.id}>, у вас нету такой роли!**`);
        }
    }

    //HEARTHSTONE

    if (command === "RROLE HEARTHSTONE") {
        let remHS = message.guild.roles.find("name", "HEARTHSTONE");
        var user = message.member;
        if(message.member.roles.has(remHS.id)) {
            user.removeRole(remHS);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы удалили свою игровую роль!**`);
        } else {
            message.channel.send(`:warning: **<@${message.author.id}>, у вас нету такой роли!**`);
        }
    }

    //DOTA

    if (command === "RROLE DOTA") {
        let remDota = message.guild.roles.find("name", "DOTA");
        var user = message.member;
        if(message.member.roles.has(remDota.id)) {
            user.removeRole(remDota);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы удалили свою игровую роль!**`);
        } else {
            message.channel.send(`:warning: **<@${message.author.id}>, у вас нету такой роли!**`);
        }
    }

    //PAYDAY

    if (command === "RROLE PAYDAY") {
        let remPD = message.guild.roles.find("name", "PAYDAY");
        var user = message.member;
        if(message.member.roles.has(remPD.id)) {
            user.removeRole(remPD);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы удалили свою игровую роль!**`);
        } else {
            message.channel.send(`:warning: **<@${message.author.id}>, у вас нету такой роли!**`);
        }
    }

    //LOL

    if (command === "RROLE LOL") {
        let remLOL = message.guild.roles.find("name", "LOL");
        var user = message.member;
        if(message.member.roles.has(remLOL.id)) {
            user.removeRole(remLOL);
            message.channel.send(`:white_check_mark: **<@${message.author.id}>, Вы удалили свою игровую роль!**`);
        } else {
            message.channel.send(`:warning: **<@${message.author.id}>, у вас нету такой роли!**`);
        }
    }
});
