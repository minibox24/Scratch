const ArgumentType = require('../../extension-support/argument-type')
const BlockType = require('../../extension-support/block-type')
const io = require('socket.io-client')

class Test {
    constructor (runtime) {
        this.runtime = runtime;
        this.serverUrl = 'ws://home.minibox.pw:3000'
        this.gameName = 'myGame v1.0'
        this.tempServers = []

        this.socket = io.connect(this.serverUrl)

        this.socket.on('receiveData', data => {
            if (data.event === 'getServers') this.tempServers = data.data
            console.log(data)
        })

        
        // this.socket.on('updateData', (data) => {console.warn(data)})
    }

    getInfo () {
        return {
            id: 'test',
            name: 'Test',
            blocks: [
                {
                    opcode: 'gameNameSetting',
                    blockType: BlockType.COMMAND,
                    text: '게임 이름 설정 [name]',
                    arguments: {
                        name: {
                            type: ArgumentType.STRING,
                            defaultValue: "myGame v1.0"
                        }
                    }
                },
                {
                    opcode: 'createServer',
                    blockType: BlockType.COMMAND,
                    text: '서버 만들기 [name] [max]',
                    arguments: {
                        name: {
                            type: ArgumentType.STRING,
                            defaultValue: "myServer"
                        },
                        max: {
                            type: ArgumentType.NUMBER,
                            defaultValue: "0"
                        },
                    }
                },
                {
                    opcode: 'getServers',
                    blockType: BlockType.REPORTER,
                    text: '서버 목록'
                },
                {
                    opcode: 'updataHat',
                    blockType: BlockType.HAT,
                    text: '업데이트'
                },
            ],
            menus: {
                // setting: ['게임 이름', '서버 주소']
            }
        }
    }

    gameNameSetting(args) {
        this.gameName = args.name
    }
    
    createServer(args) {
        socket.emit(
            'createServer',
            {
                gameId: this.gameName,
                serverId: args.name,
                max: args.max
            }
        )
    }

    getServers() {
        socket.emit(
            'getServers',
            {
                gameId: this.gameName
            }
        )
        return this.tempServers
    }

    updataHat() {
        
    }
    

}

module.exports = Test;