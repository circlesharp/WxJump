export default class GamePage {
    //负责接受controller的控制
    constructor(callbacks) {
        this.callbacks = callbacks
    }

    init() {
        console.log('game page init')
    }

    restart() {
        console.log('game page restart')
    }
}