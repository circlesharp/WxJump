//使用面向对象的继承和多态特性，但封装特性没有，因为没有private
import gameController from './controller'

class Game {
    /**
     * 完善mvc框架
     * 简单实现UI和业务拆分
     * */
    constructor() {
        this.gameController = gameController;
    }

    init() {
        this.gameController.initPages()
    }
}

export default new Game()



