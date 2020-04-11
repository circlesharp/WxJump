import {scene} from '../scene/index'
import Cuboid from "../block/cuboid";
import Cylinder from "../block/cylinder";

export default class GamePage {
    //负责接受controller的控制
    constructor(callbacks) {
        this.callbacks = callbacks
    }

    init() {
        console.log('game page init')
        this.scene = scene
        this.scene.init()
        this.addInitBlock()
        this.render()
    }

    addInitBlock() {
        const cuboidBlock = new Cuboid(-15, 0, 0)
        const cylinderBlock = new Cylinder(23, 0, 0)
        this.scene.instance.add(cuboidBlock.instance)
        this.scene.instance.add(cylinderBlock.instance)
    }

    render() {
        this.scene.render()
        requestAnimationFrame(this.render.bind(this))
    }


    //动画才能实现显示隐藏，静态不能隐藏！！！
    show() {
        //this.mesh.visible = true
    }

    hide() {
        //  this.mesh.visible = false
    }

    restart() {
        console.log('game page restart')
    }
}

