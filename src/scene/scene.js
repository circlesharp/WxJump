import camera from './camera'
import light from './light'
import background from '../objects/background'
class Scene {
    constructor() {
        this.instance = null
    }

    init() {
        this.instance = new THREE.Scene();
        this.renderer = new THREE.WebGLRenderer({
            canvas,
            antilias: true,//抗锯齿
            preserveDrawingBuffer: true
        })
        this.camera = camera
        this.light = light
        this.background = background
        this.camera.init()
        this.light.init()
        this.background.init()
        this.background.instance.position.z = -84
        //将背景加在摄像头camera上，而不是场景scene
        this.camera.instance.add(this.background.instance)
        this.axesHelper = new THREE.AxesHelper(100)

        this.instance.add(this.camera.instance)
        this.instance.add(this.axesHelper)
        for(let lightType in this.light.instances){
            this.instance.add(this.light.instances[lightType])
        }
    }

    render() {
        this.renderer.render(this.instance, this.camera.instance)
    }
}

export default new Scene()

