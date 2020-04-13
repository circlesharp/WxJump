class Light {
    constructor() {
        this.instances = {}
    }

    init() {
        //环境光
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
        //平行光
        const shadowLight = new THREE.DirectionalLight(0xffffff, 0.3)
        shadowLight.castShadow = true
        shadowLight.shadow.camera.near = 0.5
        shadowLight.shadow.camera.far = 500
        shadowLight.shadow.camera.left = -100
        shadowLight.shadow.camera.right = 100
        shadowLight.shadow.camera.top = 100
        shadowLight.shadow.camera.bottom = -100

        shadowLight.shadow.mapSize.width = 1024
        shadowLight.shadow.mapSize.height = 1024

        this.shadowLight = shadowLight
        this.shadowLight.position.set(10, 30, 10)
        this.shadowLight.lookAt(new THREE.Vector3(0.1, 0.1, 0.1))
        this.instances.ambientLight = ambientLight
        this.instances.shadowLight = shadowLight

    }
}

export default new Light()