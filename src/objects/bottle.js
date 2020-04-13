import bottleConf from '../../confs/bottle-conf'
import blockConf from '../../confs/block-conf'

class Bottle {
    constructor() {
    }

    init() {
        //作为一个整体操作
        this.obj = new THREE.Object3D()
        this.obj.name = 'bottle'
        this.obj.position.set(bottleConf.initPosition.x,
            bottleConf.initPosition.y + blockConf.height / 2,
            bottleConf.initPosition.z)
        this.bottle = new THREE.Object3D()
        let headRadius = bottleConf.headRadius
        const basicMaterial = new THREE.MeshPhongMaterial({color: 0xff00ff})
        this.head = new THREE.Mesh(new THREE.OctahedronGeometry(headRadius),
            basicMaterial)

        this.body = new THREE.Object3D()
        //局部，没必要暴露
        const bottom = new THREE.Mesh(new THREE.CylinderGeometry(0.63 * headRadius,
            0.9 * headRadius,
            1.91 * headRadius, 20),
            basicMaterial)
        bottom.castShadow = true
        this.body.add(bottom)

        const middle = new THREE.Mesh(new THREE.CylinderGeometry(headRadius / 1.4,
            headRadius / 1.44 * 0.88,
            headRadius * 1.2, 20),
            basicMaterial)
        middle.castShadow = true
        middle.position.y = 1.3827 * headRadius
        this.body.add(middle)

        const topGeometry = new THREE.SphereGeometry(headRadius / 1.4, 20, 20)
        topGeometry.scale(1, 0.54, 1)
        const top = new THREE.Mesh(topGeometry, basicMaterial)
        top.castShadow = true
        top.position.y = 1.8 * headRadius
        this.body.add(top)

        this.head.position.y = 3.57 * headRadius
        this.head.castShadow = true
        this.bottle.add(this.head)
        this.bottle.add(this.body)
        this.bottle.position.y = 2.3 //质心微调
        this.obj.add(this.bottle)
    }
}

export default new Bottle()
