import {scene} from '../scene/index'
import Cuboid from "../block/cuboid";
import Cylinder from "../block/cylinder";
import ground from '../objects/ground'
import bottle from '../objects/bottle'


export default class GamePage {
    //负责接受controller的控制
    constructor(callbacks) {
        this.callbacks = callbacks
    }

    init() {
        //很清晰，没有具体业务
        console.log('game page init')
        this.scene = scene
        this.ground= ground
        this.bottle = bottle
        this.scene.init()
        this.ground.init()
        this.bottle.init()
        this.addInitBlock()
        this.addGround()
        this.addBottle()
        this.render()
    }

    addInitBlock() {
        const cuboidBlock = new Cuboid(-15, 0, 0)
        const cylinderBlock = new Cylinder(23, 0, 0)
        this.scene.instance.add(cuboidBlock.instance)
        this.scene.instance.add(cylinderBlock.instance)
    }
    addGround(){
        this.scene.instance.add(this.ground.instance)
    }
    addBottle(){
        this.scene.instance.add(this.bottle.obj)
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

