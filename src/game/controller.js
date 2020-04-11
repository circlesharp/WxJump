/**
 * 1、业务不能操作view和model，只能操作controller
 * 2、view和model的改变触发另一个的改变，都是通过controller
 * */
import gameView from './view'
import gameModel from './model'

class GameController {
    constructor() {
        this.gameView = gameView
        this.gameModel = gameModel
    }

    //箭头函数可以直接使用this调用
    showGameOverPage = () => {
        this.gameView.showGameOverPage()
    }

    restartGame = () => {
        this.gameView.restartGame()
    }

    //初始化页面
    initPages() {
        //类似vue兄弟组件间通信，在react中直接传递callbacks
        //其实vue/react底层都是传递callbacks
        const gamePageCallbacks = {
            showGameOverPage: this.showGameOverPage
        }
        const gameOverPageCallbacks = {
            gameRestart: this.restartGame
        }
        this.gameView.initGameOverPage(gameOverPageCallbacks)
        this.gameView.initGamePage(gamePageCallbacks)
    }
}

export default new GameController()

