/**
 * 游戏主函数
 * */
import * as THREE from '../libs/three'

window.THREE = THREE
import game from './game/game'

/**
 * 面向对象的编程
 * */
class Main {
    constructor() {
    }

    static init() {
        game.init()
    }
}

export default Main