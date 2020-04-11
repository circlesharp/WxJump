export default class GameOverPage {
    constructor(callbacks) {
        this.callbacks = callbacks
    }

    init(options) {
        console.log('game over page init')
        this.initGameOverCanvas(options)
    }

    initGameOverCanvas(options) {

        const aspect = window.innerHeight / window.innerWidth
        this.scene = options.scene
        this.canvas = document.createElement('canvas')
        this.canvas.width = window.innerWidth
        this.canvas.height = window.innerHeight
        this.texture = new THREE.Texture(this.canvas)
        this.material = new THREE.MeshBasicMaterial({
            map: this.texture,
            transparent: true,
            side: THREE.DoubleSide
        })
        this.geometry = new THREE.PlaneGeometry(window.innerWidth, window.innerHeight)
        this.obj = new THREE.Mesh(this.geometry, this.material)
        this.context = this.canvas.getContext('2d')
        this.context.fillStyle = '#333'
        this.context.fillRect((window.innerWidth - 200) / 2, (window.innerHeight - 100) / 2, 200, 100)
        this.texture.needsUpdate = true

        this.scene.add(this.obj)
        //没有添加成功！！！！
        console.log()

    }

    show() {
        this.obj.visible = true
        console.log('game over page show')
    }

    hide() {
        this.obj.visible =false;
        console.log('game over page hide')
    }
}
