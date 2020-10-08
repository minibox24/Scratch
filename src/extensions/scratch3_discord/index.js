const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');
const formatMessage = require('format-message');

class DiscordBlocks {
    constructor (runtime) {
        this.runtime = runtime;

        const djsScript = document.createElement('script')
        djsScript.src = 'https://cdn.jsdelivr.net/gh/discordjs/discord.js@webpack/discord.11.6.4.min.js'
        
        document.head.appendChild(djsScript)

        this.eventBools = {};
        this.lastBools = {};
    }

    getInfo () {
        return {
            id: 'discord',
            name: 'Discord',

            color1: '#7289DA',
            color2: '#99AAB5',

            menuIconURI: 'https://discord.com/assets/f8389ca1a741a115313bede9ac02e2c0.svg',
            blockIconURI: 'https://discord.com/assets/1c8a54f25d101bdc607cec7228247a9a.svg',

            blocks: [
                {
                    opcode: 'event',
                    blockType: BlockType.HAT,

                    text: formatMessage({
                        id: 'discord.event',
                        default: 'On [EVENT]',
                    }),

                    arguments: {
                        EVENT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'message',
                            menu: 'events'
                        }
                    }
                },
                {
                    opcode: 'executeBot',
                    blockType: BlockType.COMMAND,

                    text: formatMessage({
                        id: 'discord.executeBot',
                        default: 'Execute bot: [TOKEN]',
                    }),
                    arguments: {
                        TOKEN: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                {
                    opcode: 'endBot',
                    blockType: BlockType.COMMAND,

                    text: formatMessage({
                        id: 'discord.endBot',
                        default: 'End bot',
                    }),
                },
                {
                    opcode: 'sendMessage',
                    blockType: BlockType.COMMAND,

                    text: formatMessage({
                        id: 'discord.sendMessage',
                        default: 'Send message [CONTENT] to channel: [CHANNEL]',
                    }),

                    arguments: {
                        CONTENT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Hello, world!'
                        },
                        CHANNEL: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                {
                    opcode: 'reply',
                    blockType: BlockType.COMMAND,

                    text: formatMessage({
                        id: 'discord.reply',
                        default: 'Reply [CONTENT]',
                    }),

                    arguments: {
                        CONTENT: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Hello, world!'
                        }
                    }
                },
                {
                    opcode: 'setStatus',
                    blockType: BlockType.COMMAND,

                    text: formatMessage({
                        id: 'discord.setStatus',
                        default: 'Set Bot Status: [STATUS]',
                    }),

                    arguments: {
                        STATUS: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Online',
                            menu: 'botStatus'
                        }
                    }
                },
                {
                    opcode: 'messageReporter',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'discord.messageReporter',
                        default: 'Message',
                    }),
                },
                {
                    opcode: 'memberReporter',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'discord.memberReporter',
                        default: 'User',
                    }),
                },
                {
                    opcode: 'channelReporter',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'discord.channelReporter',
                        default: 'Channel',
                    }),
                },
                {
                    opcode: 'serverReporter',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'discord.serverReporter',
                        default: 'Server',
                    }),
                },
                {
                    opcode: 'messageProperty',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'discord.messageProperty',
                        default: '[PROPERTY] of message: [MESSAGE]',
                    }),

                    arguments: {
                        PROPERTY: {
                            type: ArgumentType.STRING,
                            defaultValue: 'content',
                            menu: 'messageProperty'
                        },
                        MESSAGE: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                {
                    opcode: 'userProperty',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'discord.userProperty',
                        default: '[PROPERTY] of user: [USER]',
                    }),

                    arguments: {
                        PROPERTY: {
                            type: ArgumentType.STRING,
                            defaultValue: 'username',
                            menu: 'userProperty'
                        },
                        USER: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                {
                    opcode: 'channelProperty',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'discord.channelProperty',
                        default: '[PROPERTY] of channel: [CHANNEL]',
                    }),

                    arguments: {
                        PROPERTY: {
                            type: ArgumentType.STRING,
                            defaultValue: 'name',
                            menu: 'channelProperty'
                        },
                        CHANNEL: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                {
                    opcode: 'serverProperty',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'discord.serverProperty',
                        default: '[PROPERTY] of server: [SERVER]',
                    }),

                    arguments: {
                        PROPERTY: {
                            type: ArgumentType.STRING,
                            defaultValue: 'name',
                            menu: 'serverProperty'
                        },
                        SERVER: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                {
                    opcode: 'findChannelById',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'discord.findChannelById',
                        default: 'Find channel by id: [ID]',
                    }),

                    arguments: {
                        ID: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                {
                    opcode: 'findGuildById',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'discord.findGuildById',
                        default: 'Find server by id: [ID]',
                    }),

                    arguments: {
                        ID: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                {
                    opcode: 'findUserById',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'discord.findUserById',
                        default: 'Find user by id: [ID]',
                    }),

                    arguments: {
                        ID: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        }
                    }
                },
                {
                    opcode: 'defaultEmb',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'discord.defaultEmb',
                        default: 'New embed',
                    })
                },
                {
                    opcode: 'setEmbedProperty',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'discord.setEmbedProperty',
                        default: 'set [PROPERTY] of [EMBED] as [VALUE]',
                    }),

                    arguments: {
                        PROPERTY: {
                            type: ArgumentType.STRING,
                            defaultValue: 'description',
                            menu: 'embProperty'
                        },
                        EMBED: {
                            type: ArgumentType.STRING,
                            defaultValue: ' '
                        },
                        VALUE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'Hello, world!'
                        }
                    }
                },
            ],
            menus: {
                events: {
                    acceptReporters: false,
                    items: [{text: 'ready', value: 'ready'}, {text: 'disconnect', value: 'disconnect'}, {text: 'message', value: 'message'}, {text: 'messageDelete', value: 'messageDelete'}, {text: 'messageUpdate', value: 'messageUpdate'}, {text: 'guildMemberAdd', value: 'guildMemberAdd'}, {text: 'guildMemberRemove', value: 'guildMemberRemove'}]
                },
                messageProperty: {
                    acceptReporters: true,
                    items: [{text: 'id', value: 'id'}, {text: 'content', value: 'content'}, {text: 'channel', value: 'channel'}, {text: 'server', value: 'server'}, {text: 'author', value: 'author'}, {text: 'pinned', value: 'pinned'}, {text: 'timestamp', value: 'createdTimestamp'}]
                },
                userProperty: {
                    acceptReporters: true,
                    items: [{text: 'id', value: 'id'}, {text: 'username', value: 'username'}, {text: 'discriminator', value: 'discriminator'}, {text: 'avatar', value: 'avatar'}, {text: 'bot', value: 'bot'}, {text: 'server', value: 'guild'},]
                },
                channelProperty: {
                    acceptReporters: true,
                    items: [{text: 'id', value: 'id'}, {text: 'name', value: 'name'}, {text: 'position', value: 'position'}, {text: 'nsfw', value: 'nsfw'}, {text: 'server', value: 'guild'}]
                },
                serverProperty: {
                    acceptReporters: true,
                    items: [{text: 'id', value: 'id'}, {text: 'name', value: 'name'}, {text: 'icon', value: 'icon'}, {text: 'region', value: 'region'}, {text: 'memberCount', value: 'memberCount'}, {text: 'ownerID', value: 'ownerID'}, {text: 'systemChannelID', value: 'systemChannelID'}]
                },
                embProperty: {
                    acceptReporters: true,
                    items: [{text: 'color', value: 'color'}, {text: 'title', value: 'title'}, {text: 'author', value: 'author'}, {text: 'description', value: 'description'}, {text: 'thumbnail', value: 'thumbnail'}, {text: 'fields', value: 'fields'}, {text: 'image', value: 'image'}, {text: 'footer', value: 'footer'}]
                },
                botStatus: {
                    acceptReporters: true,
                    items: [{text: 'Online', value: 'online'}, {text: 'Idle', value: 'idle'}, {text: 'Do Not Disturb', value: 'dnd'}, {text: 'Invisible', value: 'invisible'}]
                }
            }
        };
    }

    executeBot(args) {
        const token = Cast.toString(args.TOKEN);
        
        if(this.client != null)
            this.client.destroy();
        this.client = new Discord.Client();
        
        this.client.on('ready', () => {
            this.eventBools['ready'] = true;
        });
        this.client.on('disconnect', () => {
            this.eventBools['disconnect'] = true;
        });

        this.client.on('message', message => {
            this.eventBools['message'] = true;
            this.recentMessage = message;
            this.recentMember = message.author;
        });
        this.client.on('messageDelete', message => {
            this.eventBools['messageDelete'] = true;
            this.recentMessage = message;
            this.recentMember = message.author;
        });
        this.client.on('messageUpdate', (oldMessage, message) => {
            this.eventBools['messageUpdate'] = true;
            this.recentMessage = message;
            this.recentMember = message.author;
        });

        this.client.on('guildMemberAdd', member => {
            this.eventBools['guildMemberAdd'] = true;
            this.recentMember = member;
        });
        this.client.on('guildMemberRemove', member => {
            this.eventBools['guildMemberRemove'] = true;
            this.recentMember = member;
        });

        this.client.login(token);
    }

    endBot() {
        this.client.destroy();
    }

    event(args) {
        const event = args.EVENT;

        const rtn = this.eventBools[event] && !this.lastBools[event];
        this.eventBools[event] = false;
        this.lastBools[event] = rtn;
        return rtn;
    }

    messageReporter() {
        //log.log(Object.keys(this.recentMessage))
        
        if(this.recentMessage != null)
            return this.recentMessage;
        else
            return '';
    }

    memberReporter() {
        //log.log(Object.keys(this.recentMember))

        if(this.recentMember != null)
            return this.recentMember;
        else
            return '';
    }

    channelReporter() {
        //log.log(Object.keys(this.recentMessage))
        
        if(this.recentMessage != null)
            return this.recentMessage.channel;
        else
            return '';
    }

    serverReporter() {
        //log.log(Object.keys(this.recentMember))

        if(this.recentMember != null)
            if(this.recentMember.guild != null)
                return this.recentMember.guild;
            else
                return this.recentMessage.guild;
        else
            return '';
    }

    messageProperty(args) {
        if(args.PROPERTY == 'server')
            return args.MESSAGE['channel']['guild']

        //log.log(Object.keys(args.MESSAGE[args.PROPERTY]))
        return args.MESSAGE[args.PROPERTY];
    }

    userProperty(args) {
        if(args.USER[args.PROPERTY] == undefined)
            return ' ';

        //log.log(Object.keys(args.USER[args.PROPERTY]))
        return args.USER[args.PROPERTY];
    }

    channelProperty(args) {
        if(args.CHANNEL[args.PROPERTY] == undefined)
            return ' ';

        //log.log(Object.keys(args.CHANNEL[args.PROPERTY]))
        return args.CHANNEL[args.PROPERTY];
    }

    serverProperty(args) {
        if(args.SERVER[args.PROPERTY] == undefined)
            return ' ';

        //log.log(Object.keys(args.SERVER[args.PROPERTY]))
        return args.SERVER[args.PROPERTY];
    }

    findChannelById(args) {
        return this.client.channels.get(args.ID);
    }

    findGuildById(args) {
        return this.client.guilds.get(args.ID);
    }

    findUserById(args) {
        return this.client.users.get(args.ID);
    }

    sendMessage(args) {
        args.CHANNEL.send(args.CONTENT);
    }

    reply(args) {
        this.recentMessage.channel.send(args.CONTENT);
    }

    defaultEmb() {
        return new Discord.RichEmbed();
    }

    setEmbedProperty(args) {
        var emb = args.EMBED;

        if(args.PROPERTY == 'fields') {
            const splits = args.VALUE.split(',')
            emb.addField(splits[0], splits.slice(1).join(','));
        }
        else if(args.PROPERTY == 'author') {
            emb.setAuthor(args.VALUE);
        }
        else if(args.PROPERTY == 'color') {
            emb.setColor(args.VALUE);
        }
        else if(args.PROPERTY == 'footer') {
            emb.setFooter(args.VALUE);
        }
        else if(args.PROPERTY == 'title') {
            emb.setTitle(args.VALUE);
        }
        else if(args.PROPERTY == 'description') {
            emb.setDescription(args.VALUE);
        }
        else if(args.PROPERTY == 'thumbnail') {
            emb.setThumbnail(args.VALUE);
        }
        else if(args.PROPERTY == 'image') {
            emb.setImage(args.VALUE);
        }
        
        log.log(emb)
        return emb;
    }

    setStatus(args) {
        this.client.user.setStatus(args.STATUS);
    }
}

module.exports = DiscordBlocks;
