export default class GamePage {
    //负责接受controller的控制
    constructor(callbacks) {
        this.callbacks = callbacks
    }

    init() {
        console.log('game page init')
        const height = canvas.height, width = canvas.width
        console.log(canvas)
        //1、场景
        const scene = new THREE.Scene()
        console.log('ffffff:', scene)
        this.scene = scene
        const geometry = new THREE.BoxGeometry(100, 100, 100)
        const material = new THREE.MeshLambertMaterial({
            color: 0xff0000
        })
        const mesh = new THREE.Mesh(geometry, material)
        this.mesh = mesh
        scene.add(mesh)
        const light = new THREE.PointLight(0xffffff)
        light.position.set(400, 300, 200)
        scene.add(light)
        const helper = new THREE.AxesHelper(200)
        scene.add(helper)

        //2、摄像头
        const camera = new THREE.OrthographicCamera(
            -width / 2, width / 2,
            height / 2, -height / 2, 1, 1000)
        //摄像头必须设置位置！！
        camera.position.set(200, 300, 200)
        camera.lookAt(new THREE.Vector3(0, 0, 0))

        let g_currentAngle = 0, g_lastTime = Date.now()
        //动画旋转
        const animate = function () {
            const now = Date.now()
            const duration = now - g_lastTime
            g_lastTime = now
            g_currentAngle += duration / 1000 * Math.PI
        }
        const tick = function () {
            animate()
            mesh.rotation.set(0, g_currentAngle, 0)
            renderer.render(scene, camera)
            requestAnimationFrame(tick)
        }

        //3、渲染器
        const renderer = new THREE.WebGLRenderer({
            canvas
        })
        renderer.setSize(width, height)
        renderer.setClearColor(0x443333)
        tick()


        setTimeout(() => {
            this.callbacks.showGameOverPage()
            console.log('5s后显示gameover')
        }, 5000)

    }

    //动画才能实现显示隐藏，静态不能隐藏！！！
    show() {
        this.mesh.visible = true
    }

    hide() {
        this.mesh.visible = false
    }

    restart() {
        console.log('game page restart')
    }
}

