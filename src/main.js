import * as THREE from '../libs/three'

/**
 * 面向对象的编程
 * */
class Main {
    constructor() {
    }

    init() {
        const height = canvas.height, width = canvas.width
        console.log(canvas)
        //1、场景
        const scene = new THREE.Scene()
        const geometry = new THREE.BoxGeometry(100, 100, 100)
        const material = new THREE.MeshLambertMaterial({
            color: 0xff0000
        })
        const mesh = new THREE.Mesh(geometry, material)
        scene.add(mesh)
        const light = new THREE.PointLight(0xffffff)
        light.position.set(400, 300, 200)
        scene.add(light)
        const helper = new THREE.AxisHelper(200)
        scene.add(helper)

        //2、摄像头
        const camera = new THREE.OrthographicCamera(-width / 2, width / 2,
            height / 2, -height / 2, 1, 1000)
        //摄像头必须设置位置！！
        camera.position.set(200, 300, 200)
        camera.lookAt(new THREE.Vector3(0, 0, 0))

        //3、渲染器
        const renderer = new THREE.WebGLRenderer({
            canvas
        })
        renderer.setSize(width, height)
        renderer.setClearColor(0x443333)
        renderer.render(scene, camera)
    }
}

export default new Main()
