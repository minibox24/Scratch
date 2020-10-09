const ArgumentType = require('../../extension-support/argument-type');
const BlockType = require('../../extension-support/block-type');
const Cast = require('../../util/cast');
const log = require('../../util/log');
const formatMessage = require('format-message');

class ScratchPlusBlocks {
    constructor (runtime) {
        this.runtime = runtime;

        this.variables = {};
    }

    getInfo () {
        return {
            id: 'scratchPlus',
            name: 'Scratch +',

            color1: '#FFD500',
            color2: '#F0D000',

            blocks: [
                {
                    opcode: 'spriteName',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'scratchPlus.spriteName',
                        default: 'Sprite name',
                    })
                },
                {
                    opcode: 'isTurboModeOn',
                    blockType: BlockType.BOOLEAN,

                    text: formatMessage({
                        id: 'scratchPlus.isTurboModeOn',
                        default: 'TurboMode On?',
                    })
                },
                {
                    opcode: 'setTurboMode',
                    blockType: BlockType.COMMAND,

                    text: formatMessage({
                        id: 'scratchPlus.setTurboMode',
                        default: 'Set TurboMode [ONOFF]',
                    }),

                    arguments: {
                        ONOFF: {
                            type: ArgumentType.STRING,
                            defaultValue: 'on',
                            menu: 'onOff'
                        }
                    }
                },
                {
                    opcode: 'eval',
                    blockType: BlockType.COMMAND,

                    text: formatMessage({
                        id: 'scratchPlus.eval',
                        default: 'Evaluate [SCRIPT]',
                    }),

                    arguments: {
                        SCRIPT: {
                            type: ArgumentType.STRING,
                            defaultValue: "alert('hello, world!')"
                        }
                    }
                },
                {
                    opcode: 'evalReporter',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'scratchPlus.eval',
                        default: 'Evaluate [SCRIPT]',
                    }),

                    arguments: {
                        SCRIPT: {
                            type: ArgumentType.STRING,
                            defaultValue: "1 + 1"
                        }
                    }
                },
                {
                    opcode: 'setVar',
                    blockType: BlockType.COMMAND,

                    text: formatMessage({
                        id: 'scratchPlus.setVar',
                        default: 'Set [VAR] to [VALUE]',
                    }),

                    arguments: {
                        VAR: {
                            type: ArgumentType.STRING,
                            defaultValue: "MyVar"
                        },
                        VALUE: {
                            type: ArgumentType.STRING,
                            defaultValue: "10"
                        }
                    }
                },
                {
                    opcode: 'getVar',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'scratchPlus.getVar',
                        default: 'get [VAR]',
                    }),

                    arguments: {
                        VAR: {
                            type: ArgumentType.STRING,
                            defaultValue: "MyVar"
                        }
                    }
                },
                {
                    opcode: 'varExist',
                    blockType: BlockType.BOOLEAN,

                    text: formatMessage({
                        id: 'scratchPlus.varExist',
                        default: 'var [VAR] exist?',
                    }),

                    arguments: {
                        VAR: {
                            type: ArgumentType.STRING,
                            defaultValue: "MyVar"
                        }
                    }
                },
                {
                    opcode: 'newList',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'scratchPlus.newList',
                        default: 'New List',
                    })
                },
                {
                    opcode: 'newDic',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'scratchPlus.newDic',
                        default: 'New Dictionary',
                    })
                },
                {
                    opcode: 'addList',
                    blockType: BlockType.COMMAND,

                    text: formatMessage({
                        id: 'scratchPlus.addList',
                        default: 'Add [VALUE] to [LIST]',
                    }),

                    arguments: {
                        VALUE: {
                            type: ArgumentType.STRING,
                            defaultValue: "thing"
                        },
                        LIST: {
                            type: ArgumentType.STRING,
                            defaultValue: "myList"
                        }
                    }
                },
                {
                    opcode: 'setList',
                    blockType: BlockType.COMMAND,

                    text: formatMessage({
                        id: 'scratchPlus.setList',
                        default: 'Set [INDEX] of [LIST] as [VALUE]',
                    }),

                    arguments: {
                        INDEX: {
                            type: ArgumentType.STRING,
                            defaultValue: "0"
                        },
                        LIST: {
                            type: ArgumentType.STRING,
                            defaultValue: "myList"
                        },
                        VALUE: {
                            type: ArgumentType.STRING,
                            defaultValue: "thing"
                        }
                    }
                },
                {
                    opcode: 'listIndex',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'scratchPlus.listIndex',
                        default: 'Item [INDEX] of [LIST]',
                    }),

                    arguments: {
                        INDEX: {
                            type: ArgumentType.STRING,
                            defaultValue: '0'
                        },
                        LIST: {
                            type: ArgumentType.STRING,
                            defaultValue: 'myList'
                        }
                    }
                },
                {
                    opcode: 'indexOf',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'scratchPlus.indexOf',
                        default: 'Index of [VALUE] in [LIST]',
                    }),

                    arguments: {
                        VALUE: {
                            type: ArgumentType.STRING,
                            defaultValue: 'thing'
                        },
                        LIST: {
                            type: ArgumentType.STRING,
                            defaultValue: 'myList'
                        }
                    }
                },
                {
                    opcode: 'listCount',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'scratchPlus.listCount',
                        default: 'Count of [LIST]',
                    }),

                    arguments: {
                        LIST: {
                            type: ArgumentType.STRING,
                            defaultValue: 'myList'
                        }
                    }
                },
                {
                    opcode: 'comment',
                    blockType: BlockType.COMMAND,

                    text: formatMessage({
                        id: 'scratchPlus.comment',
                        default: '[TYPE] [COMMENT]',
                    }),

                    arguments: {
                        TYPE: {
                            type: ArgumentType.STRING,
                            defaultValue: "//",
                            menu: 'commentType'
                        },
                        COMMENT: {
                            type: ArgumentType.STRING,
                            defaultValue: "This is a comment"
                        }
                    }
                },
                {
                    opcode: 'makeStage',
                    blockType: BlockType.COMMAND,

                    text: formatMessage({
                        id: 'scratchPlus.makeStage',
                        default: 'This is a STAGE',
                    })
                },
                {
                    opcode: 'makeNotStage',
                    blockType: BlockType.COMMAND,

                    text: formatMessage({
                        id: 'scratchPlus.makeNotStage',
                        default: 'This is not a STAGE',
                    })
                },
                {
                    opcode: 'saveVar',
                    blockType: BlockType.COMMAND,

                    text: formatMessage({
                        id: 'scratchPlus.saveVar',
                        default: 'Save [NAME] as [VALUE]',
                    }),

                    arguments: {
                        NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'myLocalVar'
                        },
                        VALUE: {
                            type: ArgumentType.STRING,
                            defaultValue: '10'
                        }
                    }
                },
                {
                    opcode: 'loadVar',
                    blockType: BlockType.REPORTER,

                    text: formatMessage({
                        id: 'scratchPlus.loadVar',
                        default: 'Load [NAME]',
                    }),

                    arguments: {
                        NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'myLocalVar'
                        }
                    }
                },
                {
                    opcode: 'deleteVar',
                    blockType: BlockType.COMMAND,

                    text: formatMessage({
                        id: 'scratchPlus.deleteVar',
                        default: 'Delete [NAME]',
                    }),

                    arguments: {
                        NAME: {
                            type: ArgumentType.STRING,
                            defaultValue: 'myLocalVar'
                        }
                    }
                },
            ],
            menus: {
                onOff: {
                    acceptReporters: true,
                    items: ['on', 'off']
                },
                commentType: {
                    acceptReporters: false,
                    items: ['//', '#', '<!--']
                }
            }
        };
    }

    spriteName (args, util) {
        const target = util.target;
        
        return target.sprite.name;
    }

    isTurboModeOn(args, util) {
        const target = util.target;

        return target.runtime.turboMode;
    }
    
    setTurboMode(args, util) {
        const target = util.target;

        target.runtime.turboMode = args.ONOFF == 'on' ? true : false;
    }
    
    eval(args) {
        eval(args.SCRIPT);
    }
    
    evalReporter(args) {
        try {
            return eval(args.SCRIPT);
        }
        catch(ERRrOR) {
            return "ERROR!";
        }
    }
    
    setVar(args) {
        this.variables[args.VAR] = args.VALUE;
    }
    
    getVar(args) {
        if(this.variables[args.VAR] == undefined)
            return 0;

        return this.variables[args.VAR];
    }

    varExist(args) {
        return this.variables[args.VAR] != undefined;
    }

    comment(args) {

    }

    makeStage(args, util) {
        util.target.isStage = true;
    }

    makeNotStage(args, util) {
        util.target.isStage = false;
        log.log(util.target);
    }

    newList() {
        return [];
    }

    newDic() {
        return {};
    }

    listIndex(args) {
        return this.variables[args.LIST][args.INDEX]
    }

    addList(args) {
        this.variables[args.LIST].push(args.VALUE);
    }

    setList(args) {
        this.variables[args.LIST][args.INDEX] = args.VALUE;
    }

    listCount(args) {
        return this.variables[args.LIST].length
    }

    indexOf(args) {
        return this.variables[args.LIST].indexOf(args.VALUE)
    }

    saveVar(args) {
        localStorage[args.NAME] = args.VALUE;
    }

    loadVar(args) {
        return localStorage[args.NAME];
    }

    deleteVar(args) {
        localStorage.removeItem(args.NAME);
    }
}

module.exports = ScratchPlusBlocks;